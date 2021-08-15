class Form{
constructor(){
this.input = createInput("");
this.button = createButton("Ready!");
this.greetings = createElement("h1");
this.hint = createElement("h3")
this.title = createElement("h1")
}
hide(){
this.greetings.hide();
this.button.hide();
this.input.hide();
this.hint.hide();
this.title.hide();
}
display(){
this.title.html("Racing Game");
this.title.position(displayWidth/2 - 50, 0);
this.input.position(displayWidth/2 - 40, displayHeight/2 - 80);
this.hint.position(displayWidth/2 - 20, displayHeight/2)
this.button.position(displayWidth/2 + 30, displayHeight/2);
this.button.mousePressed(() => {
this.hint.hide();
this.input.hide();
this.button.hide();
player.name = this.input.value();
playerCount += 1;
player.update();
player.updateCount(playerCount);
this.greetings.html("Hello, " + player.name + "!");
this.greetings.position(displayWidth/2 - 70, displayHeight/4);
});
}
}