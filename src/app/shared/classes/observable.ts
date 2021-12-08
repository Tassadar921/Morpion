export class Observable {

  public tab =[];

  constructor(){}

  on=(eventName, callback)=> {

    for (let i = 0; i < this.tab.length; ++i) {
      if (this.tab[i].name == eventName)
      {
        return;
      }
    }
    this.tab.push({name: eventName, fonction: callback});
  };


  off=(eventName, callback)=> {
    for (let i = 0; i < this.tab.length; ++i)
    {
      if (this.tab[i].name == eventName && this.tab[i].fonction == callback)
      {
        this.tab.splice(i, 1);
      }
    }
  };

  trigger=(eventName, ...args)=>{
    for(let i = 0; i < this.tab.length; ++i)
    {
      if (this.tab[i].name == eventName)
      {
        this.tab[i].fonction.apply(null, args);
      }
    }
  }
}
