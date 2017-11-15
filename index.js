class BoardMember{
  constructor(name, homestate, training){
    this.name = name;
    this.homestate = homestate;
    this.training = training;
  }

  veto(){
    return "No, I must disagree"
  }

  approve(){
    return "You can do that!"
  }

  doCharity(){
    return 'I like to help people'
  }

  releasePressStatement(){
    return 'You will see great things from Scuber'
  }

  sayHi(){
    return `Hi, my name is ${this.name}. I am from ${this.homestate}, and I was trained in ${this.training}`
  }
}
