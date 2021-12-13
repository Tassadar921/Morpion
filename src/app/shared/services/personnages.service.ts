import { Injectable } from '@angular/core';
import { Perso } from '../classes/perso';

@Injectable({
  providedIn: 'root'
})
export class PersonnagesService {

  public amphinobi=new Perso('Amphinobi','../../assets/pics/sprites_choix/Amphinobi.png');
  public bayonetta=new Perso('Bayonetta','../../assets/pics/sprites_choix/Bayonetta.png');
  public bowser=new Perso('Bowser','../../assets/pics/sprites_choix/Bowser.png');
  public bowserjr=new Perso('Bowser Jr','../../assets/pics/sprites_choix/BowserJr..png');
  public captainfalcon=new Perso('Captain Falcon','../../assets/pics/sprites_choix/CaptainFalcon.png');
  public chrom=new Perso('Chrom','../../assets/pics/sprites_choix/Chrom.png');
  public cloud=new Perso('Cloud','../../assets/pics/sprites_choix/Cloud.png');
  public corrin=new Perso('Corrin','../../assets/pics/sprites_choix/Corrin.png');
  public dadidou=new Perso('Dadidou','../../assets/pics/sprites_choix/Dadidou.png');
  public daisy=new Perso('Daisy','../../assets/pics/sprites_choix/Daisy.png');
  public daraen=new Perso('Daraen','../../assets/pics/sprites_choix/Daraen.png');
  public darkpit=new Perso('Dark Pit','../../assets/pics/sprites_choix/DarkPit.png');
  public darksamus=new Perso('Dark Samus','../../assets/pics/sprites_choix/DarkSamus.png');
  public diddykong=new Perso('Diddy Kong','../../assets/pics/sprites_choix/DiddyKong.png');
  public donkeykong=new Perso('Donkey Kong','../../assets/pics/sprites_choix/DonkeyKong.png');
  public drmario=new Perso('Dr. Mario','../../assets/pics/sprites_choix/Dr.Mario.png');
  public duckhunt=new Perso('Duo Duck Hunt','../../assets/pics/sprites_choix/DuckHunt.png');
  public falco=new Perso('Falco','../../assets/pics/sprites_choix/Falco.png');
  public felinferno=new Perso('Felinferno','../../assets/pics/sprites_choix/Felinferno.png');
  public fox=new Perso('Fox','../../assets/pics/sprites_choix/Fox.png');
  public gamewatch=new Perso('Mr. Game & Watch','../../assets/pics/sprites_choix/GameWatch.png');
  public ganondorf=new Perso('Ganondorf','../../assets/pics/sprites_choix/Ganondorf.png');
  public harmonie=new Perso('Harmonie','../../assets/pics/sprites_choix/Harmonie.png');
  public iceclimbers=new Perso('Ice Climbers','../../assets/pics/sprites_choix/IceClimbers.png');
  public ike=new Perso('Ike','../../assets/pics/sprites_choix/Ike.png');
  public inkling=new Perso('Inkling','../../assets/pics/sprites_choix/Inkling.png');
  public ken=new Perso('Ken', '../../assets/pics/sprites_choix/Ken.png');
  public kirby=new Perso('Kirby', '../../assets/pics/sprites_choix/Kirby.png');
  public krool=new Perso('Krool', '../../assets/pics/sprites_choix/KRool.png');
  public link=new Perso('Link', '../../assets/pics/sprites_choix/Link.png');
  public linkcartoon=new Perso('Link Cartoon', '../../assets/pics/sprites_choix/LinkCartoon.png');
  public linkchild=new Perso('Link Child', '../../assets/pics/sprites_choix/LinkEnfant.png');
  public littlemac=new Perso('Little Mac', '../../assets/pics/sprites_choix/LittleMac.png');
  public lucario=new Perso('Lucario', '../../assets/pics/sprites_choix/Lucario.png');
  public lucas=new Perso('Lucas', '../../assets/pics/sprites_choix/Lucas.png');
  public lucina=new Perso('Lucina', '../../assets/pics/sprites_choix/Lucina.png');
  public luigi=new Perso('Luigi', '../../assets/pics/sprites_choix/Luigi.png');
  public marie=new Perso('Marie', '../../assets/pics/sprites_choix/Marie.png');
  public mario=new Perso('Mario', '../../assets/pics/sprites_choix/Mario.png');
  public marth=new Perso('Marth', '../../assets/pics/sprites_choix/Marth.png');
  public megaman=new Perso('Megaman', '../../assets/pics/sprites_choix/MegaMan.png');
  public metaknight=new Perso('Meta Knight', '../../assets/pics/sprites_choix/MetaKnight.png');
  public mewtwo=new Perso('Mewtwo', '../../assets/pics/sprites_choix/Mewtwo.png');
  public miifighters=new Perso('Mii Fighters', '../../assets/pics/sprites_choix/MiiFighters.png');
  public ness=new Perso('Ness', '../../assets/pics/sprites_choix/Ness.png');
  public olimar=new Perso('Olimar', '../../assets/pics/sprites_choix/Olimar.png');
  public pacman=new Perso('Pacman', '../../assets/pics/sprites_choix/PacMan.png');
  public palutena=new Perso('Palutena', '../../assets/pics/sprites_choix/Palutena.png');
  public peach=new Perso('Peach', '../../assets/pics/sprites_choix/Peach.png');
  public pichu=new Perso('Pichu', '../../assets/pics/sprites_choix/Pichu.png');
  public pikachu=new Perso('Pikachu', '../../assets/pics/sprites_choix/Pikachu.png');
  public pit=new Perso('Pit', '../../assets/pics/sprites_choix/Pit.png');
  public pokemontrainer=new Perso('Pokemon Trainer', '../../assets/pics/sprites_choix/PokemonTrainer.png');
  public richter=new Perso('Richter', '../../assets/pics/sprites_choix/Richter.png');
  public ridley=new Perso('Ridley', '../../assets/pics/sprites_choix/Ridley.png');
  public rob=new Perso('Rob', '../../assets/pics/sprites_choix/ROB.png');
  public rondoudou=new Perso('Rondoudou', '../../assets/pics/sprites_choix/Rondoudou.png');
  public roy=new Perso('Roy', '../../assets/pics/sprites_choix/Roy.png');
  public ryu=new Perso('Ryu', '../../assets/pics/sprites_choix/Ryu.png');
  public samus=new Perso('Samus', '../../assets/pics/sprites_choix/Samus.png');
  public sheik=new Perso('Sheik', '../../assets/pics/sprites_choix/Sheik.png');
  public shulk=new Perso('Shulk', '../../assets/pics/sprites_choix/Shulk.png');
  public simon=new Perso('Simon', '../../assets/pics/sprites_choix/Simon.png');
  public snake=new Perso('Snake', '../../assets/pics/sprites_choix/Snake.png');
  public sonic=new Perso('Sonic', '../../assets/pics/sprites_choix/Sonic.png');
  public villager=new Perso('Villager', '../../assets/pics/sprites_choix/Villageois.png');
  public wario=new Perso('Wario', '../../assets/pics/sprites_choix/Wario.png');
  public wiifit=new Perso('Wii Fit Trainer', '../../assets/pics/sprites_choix/WiiFit.png');
  public wolf=new Perso('Wolf', '../../assets/pics/sprites_choix/Wolf.png');
  public yoshi=new Perso('Yoshi', '../../assets/pics/sprites_choix/Yoshi.png');
  public zelda=new Perso('Zelda', '../../assets/pics/sprites_choix/Zelda.png');
  public zerosuitsamus=new Perso('Samus Sans Armure', '../../assets/pics/sprites_choix/ZeroSuitSamus.png');


  public data=
    [
      this.amphinobi,
      this.bayonetta,
      this.bowser,
      this.bowserjr,
      this.captainfalcon,
      this.chrom,
      this.cloud,
      this.corrin,
      this.dadidou,
      this.daisy,
      this.daraen,
      this.darkpit,
      this.darksamus,
      this.diddykong,
      this.donkeykong,
      this.drmario,
      this.duckhunt,
      this.falco,
      this.felinferno,
      this.fox,
      this.gamewatch,
      this.ganondorf,
      this.harmonie,
      this.iceclimbers,
      this.ike,
      this.inkling,
      this.ken,
      this.kirby,
      this.krool,
      this.link,
      this.linkcartoon,
      this.linkchild,
      this.littlemac,
      this.lucario,
      this.lucas,
      this.lucina,
      this.luigi,
      this.marie,
      this.mario,
      this.marth,
      this.megaman,
      this.metaknight,
      this.mewtwo,
      this.miifighters,
      this.ness,
      this.olimar,
      this.pacman,
      this.palutena,
      this.peach,
      this.pichu,
      this.pikachu,
      this.pit,
      this.pokemontrainer,
      this.richter,
      this.ridley,
      this.rob,
      this.rondoudou,
      this.roy,
      this.ryu,
      this.samus,
      this.sheik,
      this.shulk,
      this.simon,
      this.snake,
      this.sonic,
      this.villager,
      this.wario,
      this.wiifit,
      this.wolf,
      this.yoshi,
      this.zelda,
      this.zerosuitsamus
    ];

  constructor() {}

  getData=()=>{
    return this.data;
  };
}
