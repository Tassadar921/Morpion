export class Player {
  public id;
  public name;
  public pic = new Image(100,100);

  constructor(id, name, picURL){
    this.id=id;
    this.name=name;
    this.pic.src=picURL;
  }
}
