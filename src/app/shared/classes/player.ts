export class Player {
  public name;
  public pic = new Image(100,100);

  constructor(name, picURL){
    this.name=name;
    this.pic.src=picURL;
  }
}
