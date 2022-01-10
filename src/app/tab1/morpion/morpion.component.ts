import {AfterViewInit, Component, OnInit} from '@angular/core';
import {GlobalVarsService} from '../../shared/services/global-vars.service';
import {Player} from '../../shared/classes/player';
import {TextService} from '../../shared/services/text.service';
import {SoundEffectsService} from '../../shared/services/sound-effects.service';

@Component({
  selector: 'app-morpion',
  templateUrl: './morpion.component.html',
  styleUrls: ['./morpion.component.scss'],
})
export class MorpionComponent implements OnInit, AfterViewInit{

  public currentPlayer=1; //toggle entre 1 et 2
  public p1; //player1
  public p2; //player2
  public win=[]; //ce qu'il y a dedans on s'en fout un peu mais on détecte la win avec ça
  public output; //output des messages de la machine
  public loop=[]; //confettis
  public turn=0; //compteur de tours
  public valentinDefaite=0;
  public valentinWin=0;
  public matrix= //plateau de jeu
    [
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ];
  public sonChargement = new Audio('../../assets/sounds/annonceur/entrée/entrée.wav');

  constructor(
    private glob: GlobalVarsService,
    private text: TextService,
    private sounds: SoundEffectsService,
  ) {
    this.p1=new Player('1',this.glob.getNick1(), this.glob.getPic1());
    this.p2=new Player('2',this.glob.getNick2(), this.glob.getPic2());
  }

  ngOnInit() {
    if(this.glob.getPic1()!=='../../../assets/pics/sprites_choix/point_interrogation.png' && this.glob.getPic2()!=='../../../assets/pics/sprites_choix/point_interrogation.png'){
      this.sonChargement.play();
    }
    this.firstPlayer();
    for(let i=149;i>0;i--){ //c'est moche mais j'ai pas d'autre solution pour les confettis
      this.loop[149-i]=i;
    }
  }

  ngAfterViewInit() { //après le chargement complet du HTML pour effet glow
    if(this.glob.getPic1()!=='../../../assets/pics/sprites_choix/point_interrogation.png' && this.glob.getPic2()!=='../../../assets/pics/sprites_choix/point_interrogation.png') {
      this.firstPlayerSprite();
    }
  }

  firstPlayer=()=>{ //aléatoire entre les 2 joueurs sauf si l'un a choisi Valentin, auquel cas il commencera jamais
    if(this.glob.getPic1()!=='../../../assets/pics/sprites_choix/Valentin.png' && this.glob.getPic2()!=='../../../assets/pics/sprites_choix/Valentin.png' && this.glob.getPic1()!=='../../../assets/pics/sprites_choix/Paul.png' && this.glob.getPic2()!=='../../../assets/pics/sprites_choix/Paul.png') {
      this.currentPlayer = Math.floor(Math.random() * 2) + 1;
    }else{
      if(this.glob.getPic1()==='../../../assets/pics/sprites_choix/Valentin.png'){ //on triche allègrement ici (Vianney et Nathan ont pas vu cette partie du code donc j'en profite)
        this.currentPlayer = 2;
      }else{
        if(this.glob.getPic2()==='../../../assets/pics/sprites_choix/Valentin.png') { //pour résumer en gros, si Valentin est sélectionné alors il commencera jamais
          this.currentPlayer = 1;
        }else{
          if(this.glob.getPic1()==='../../../assets/pics/sprites_choix/Paul.png'){ //si Paul l'est alors il commencera toujours
            this.currentPlayer = 1;
          }else{
            if(this.glob.getPic2()==='../../../assets/pics/sprites_choix/Paul.png'){ //sinon on fait un aléatoire
              this.currentPlayer = 2;
            }
          }
        }
      }
    }

    if(document.getElementsByClassName('glow')){
      const tmp = document.getElementsByClassName('glow');
      for(let i=0;i<tmp.length;i++){
        tmp[i].removeAttribute('class');
      }
    }

    if(this.currentPlayer===1){
      this.output=this.text.getRandomBegin(this.glob.getNick1(), this.glob.getNick2());
    }else{
      this.output=this.text.getRandomBegin(this.glob.getNick2(), this.glob.getNick1());
    }
  };

  firstPlayerSprite=()=>{ //glow le 1er joueur
    if (this.currentPlayer === 1) {
      document.getElementById('pic1').setAttribute('class', 'glow');
    } else {
      document.getElementById('pic2').setAttribute('class', 'glow');
    }
  };

  click=(line, col)=>{ //on actualise la matrice en fonction de qui a cliqué où ssi win est vide
    if(this.win.length===0) {
      if (this.matrix[line][col] === 0) {
        this.matrix[line][col] = this.currentPlayer;
        this.endTurn();
      }
    }
  };

  switchGlow=()=>{
    if(this.currentPlayer===1){
      this.currentPlayer+=1;
      document.getElementById('pic2').setAttribute('class','glow');
      document.getElementById('pic1').removeAttribute('class');
    } else{
      this.currentPlayer-=1;
      document.getElementById('pic1').setAttribute('class','glow');
      document.getElementById('pic2').removeAttribute('class');
    }
  };

  endTurn=()=>{ //fonction principale de fin de tour, on fait plein de trucs
    this.win=this.checking();
    if(this.win.length!==0){this.switchGlow();}
    this.switchGlow();
    this.turn+=1;
    if(this.turn===9){ //en cas de draw
      this.output=this.text.getRandomDraw();
      this.sounds.getDraw().play();
      this.switchGlow();
    }
  };

  checking=()=>{ //si quelqu'un a win on remplit tmp avec l'endroit de la win + output de win
    const tmp=[];
    for(let i=0;i<3;i++) {
      if (this.matrix[i][0] !== 0 && this.matrix[i][1] !== 0 && this.matrix[i][2] !== 0 && this.matrix[i][0] === this.matrix[i][1] && this.matrix[i][0] === this.matrix[i][2]) {
        tmp[0] = 'ligne';
        tmp[1] = i;
        this.glob.setWin(this.matrix[i][0]);
      } else {
        if (this.matrix[0][i] !== 0 && this.matrix[1][i] !== 0 && this.matrix[2][i] !== 0 && this.matrix[0][i] === this.matrix[1][i] && this.matrix[0][i] === this.matrix[2][i]) {
          tmp[0] = 'colonne';
          tmp[1] = i;
          this.glob.setWin(this.matrix[0][i]);
        }
      }
    }
    if (this.matrix[0][0] !== 0 && this.matrix[1][1] !== 0 && this.matrix[2][2] !== 0 && this.matrix[0][0] === this.matrix[1][1] && this.matrix[0][0] === this.matrix[2][2]) {
      tmp[0] = 'diagonale';
      tmp[1] = 'hautGauche';
      this.glob.setWin(this.matrix[0][0]);
    } else {
      if (this.matrix[0][2] !== 0 && this.matrix[1][1] !== 0 && this.matrix[2][0] !== 0 && this.matrix[0][2] === this.matrix[1][1] && this.matrix[0][2] === this.matrix[2][0]) {
        tmp[0] = 'diagonale';
        tmp[1] = 'hautDroite';
        this.glob.setWin(this.matrix[0][2]);
      }
    }
    if(this.glob.getWin()!==0){
      this.sounds.getWin().play();
      if(this.glob.getWin()===1){
        this.output=this.text.getRandomEnd(this.glob.getNick1(), this.glob.getNick2());
        this.glob.incrementScore1();
      }
      else{
        this.output=this.text.getRandomEnd(this.glob.getNick2(), this.glob.getNick1());
        this.glob.incrementScore2();
      }
    }
    return tmp;
  };

  reset=()=>{
    this.win=[];
    this.firstPlayer();
    this.firstPlayerSprite();
    this.matrix=
      [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ];
    this.glob.setWin(0);
    this.turn=0;
    this.valentinDefaite=0;
    this.valentinWin=0;
  };
}
