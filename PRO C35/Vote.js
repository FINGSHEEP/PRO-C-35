class Vote {
    consrtuctor() {

    }


 
    display() {
        var title = createElement('h2')
        title.html("Your Vote Counts");
        title.position(130,0);

        var input = createInput("Name");
        var question1 = createInput("Will you stay at home?");
        
        var button = createButton('Start answering');
        var button1 = createButton('Yes');
        var button2 = createButton('No');

        var mousePressed = LOLO;

        input.position(130,160);
        question1.position(400,400);
        button.position(250,200);
        button1.position(750,200);
        button2.position(780,200);

        button1.hide();
        button2.hide();
        question1.hide();





        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            var greeting = createElement('h3');
            greeting.html("Thanks for voting" + name);
            greeting.position(130,160);
        });


        }
    } 

    if(mousePressed(button)) {
        question1.visible = true;
        button1.visible = true;
        button2.visible = true;     
    } else {
        question1.visible = false;
        button1.visible = false;
        button2.visible = false;
    }

