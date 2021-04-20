class Form{
    constructor(){
        this.input = createInput("Name");
        this.Button = createButton("Play");
        this.Greeting = createElement("h2");
    }
    hide(){
        this.input.hide();
        this.Button.hide();
        this.Greeting.hide();
    }
    display(){
        var title=createElement("h2");
        title.html("Multi Car Race");
        title.position(450,100);
        this.input.position(400,200);
        this.Button.position(550,280);
        this.Button.mousePressed(()=>{
            this.input.hide();
            this.Button.hide();
            player.name = this.input.value();
            playerCount = playerCount+1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.Greeting.html("Hello"+player.name);
            this.Greeting.position(130,100);
        })

    }
};