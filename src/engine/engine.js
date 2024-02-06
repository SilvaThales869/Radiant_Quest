let xp = 523 // variable to store the hero experience
let goblinCount = 0 // variable to store how many times the user selected to kill goblins
let runCount = 0 // variable to store how many times the user selected to run
let lvl = "Iron" // variable to store the hero level
let q1 = "0" // variable to store the user choise
let end = 0 // variable to determine the ending
let story = 0
 
const state = {
    buttons :{
        a : document.querySelector(".A"),
        b : document.querySelector(".B"),
        next : document.querySelector(".next"),
    },
    game :{
        txt : document.querySelector("#txt"),
        img : document.querySelector(".lore-img"),
    },
    location :{
        goblinCamp :0,
        koboldCamp :0,
        city :0,
        demonCamo :0,
        demonCastle :0,
        demonKing :0,
        gods :0,
    }
}

function advance(){
    if(end==1){}
    else if(end==2){}
    else if(end==3){
        end = 3
        state.game.img.classList.remove("kobold")
        state.game.img.classList.remove("bandit")
        state.game.img.classList.remove("demons")
        state.game.img.classList.remove("demonZoro")
        state.game.img.classList.remove("demonKing")
        state.game.img.classList.add("goblinslayer")
        state.buttons.a.classList.add("hide")
    
        state.buttons.b.classList.add("hide")
    
        state.buttons.next.classList.add("hide")
        state.buttons.next.innerHTML = "Next"
        state.buttons.next.onclick = advance
        alert("Game Over - Ending 3",end)
    }
    else if(end==4){}
    else if(end==5){
        state.game.img.classList.remove("kobold")
        state.game.img.classList.remove("bandit")
        state.game.img.classList.remove("demons")
        state.game.img.classList.remove("demonZoro")
        state.game.img.classList.remove("demonKing")
        state.game.img.classList.add("paz")
        state.game.txt.innerHTML = "You defeated the Gods forging an aliance with the demon kind and now you two fight together for a world with equal chanses for all the sentient races"
        state.buttons.a.classList.add("hide")
        
        state.buttons.b.classList.add("hide")
        
        state.buttons.next.classList.add("hide")

    }
    else{
        if(xp<=1000){//goblin camp
            state.game.img.classList.remove("intro")
            state.game.img.classList.add("goblin")
    

            state.game.txt.innerHTML = "Starting your adventure you encounter a group of goblins. WDYD?"


            state.buttons.a.classList.remove("hide")
            state.buttons.a.innerHTML ="Fight"


            state.buttons.b.classList.remove("hide")
            state.buttons.b.innerHTML ="Run"


            state.buttons.next.classList.add("hide")
        }
        else if(xp>=1001&xp<=2000){//kobold camp
            lvl = "Bronze"
            if(story==0){
                state.game.img.classList.remove("goblinFight")
                state.game.img.classList.add("lvlUp")
        

                state.game.txt.innerHTML = "After this battle you have "+xp+" XP and has become a "+lvl+" level hero" 
                
                
                story++   
        }
            else if(story==1){
                state.game.img.classList.remove("lvlUp")
                state.game.img.classList.add("kobold")
            

                state.game.txt.innerHTML = "After a well deserverd rest you continue yor jurney<br>Down the south road you encounter a kobold camp with some hight ranks among then. What do you do?"
        

                state.buttons.a.classList.remove("hide")
                state.buttons.a.innerHTML ="Fight"
                state.buttons.a.onclick = fight
        

                state.buttons.b.classList.remove("hide")
                state.buttons.b.innerHTML ="Run"
        

                state.buttons.next.innerHTML = "Find another goblin"
                state.buttons.next.onclick = fightGoblin
                
                
                story = 0
            }

        }

        else if(xp>=2001&xp<=5000){ //city
            lvl = "Silver"
            if(story==0){
                state.game.img.classList.remove("koboldFight")
                state.game.img.classList.add("lvlUp")
    

                state.game.txt.innerHTML = "After this battle you have "+xp+" XP and has become a "+lvl+" level hero" 
            
            
                story++   
            }
            else if(story == 1){
                state.game.img.classList.remove("lvlUp")
                state.game.img.classList.add("tavern")
    

                state.game.txt.innerHTML = "Following the road you reach a bigger city and have a good rest<br>The next day in the tavern you hear some rumors about a group of bandits atacking this town" 
            
            
                story++  
            }
            else if(story == 2){
                state.game.img.classList.remove("tavern")
                state.game.img.classList.add("bandit")
            
                state.game.txt.innerHTML = "Affter some investigation you discover their hidout. What do you do?"
        
                state.buttons.a.classList.remove("hide")
                state.buttons.a.innerHTML ="Fight"
        
                state.buttons.b.classList.remove("hide")
                state.buttons.b.innerHTML ="Run"
        
                state.buttons.next.innerHTML = "Find another goblin"
                state.buttons.next.onclick = fightGoblin

                story = 0
            }
        
        }

        else if(xp>=5001&xp<=7000){//demon camp
            lvl = "Gold"
            if(story==0){
                state.game.img.classList.remove("banditFight")
                state.game.img.classList.add("lvlUp")
    

                state.game.txt.innerHTML = "After this battle you have "+xp+" XP and has become a "+lvl+" level hero" 
            
            
                story++   
            }

            else if(story == 1){
                state.game.img.classList.remove("lvlUp")
                state.game.img.classList.add("demons")
            
                state.game.txt.innerHTML = "After partying with the city you continue your journey to the demon king castle<br>Blocking your way are some demon guards lead by a demon general. What do you do?"
        
                state.buttons.a.classList.remove("hide")
                state.buttons.a.innerHTML ="Fight"
        
                state.buttons.b.classList.remove("hide")
                state.buttons.b.innerHTML ="Run"
        
                state.buttons.next.innerHTML = "Find another goblin"
                state.buttons.next.onclick = fightGoblin

                story = 0
            }
        }
        else if(xp>=7001&xp<=8000){//demon castle
            lvl = "Platinum"
            if(story==0){
                state.game.img.classList.remove("demonsFight")
                state.game.img.classList.add("lvlUp")
    

                state.game.txt.innerHTML = "After this battle you have "+xp+" XP and has become a "+lvl+" level hero" 
            
            
                story++   
            }
        
            else if(story == 1){
                state.game.img.classList.remove("lvlUp")
                state.game.img.classList.add("demonZoro")
            
                state.game.txt.innerHTML = "Following it defeat the demon general guides you to the demon king palace<br>Now you are face to face with thew demon king right arm man. What do you do?"
        
                state.buttons.a.classList.remove("hide")
                state.buttons.a.innerHTML ="Fight"
        
                state.buttons.b.classList.remove("hide")
                state.buttons.b.innerHTML ="Run"
        
                state.buttons.next.innerHTML = "Find another goblin"
                state.buttons.next.onclick = fightGoblin  
                story = 0
            }
        }
        else if(xp>=8001&xp<=9000){//demon king
            lvl = "Ascendant"
            if(story==0){
                state.game.img.classList.remove("demonZoroFight")
                state.game.img.classList.add("lvlUp")
    

                state.game.txt.innerHTML = "After this battle you have "+xp+" XP and has become a "+lvl+" level hero" 
            
            
                story++   
            }
        
            else if(story == 1){
                state.game.img.classList.remove("lvlUp")
                state.game.img.classList.add("demonKing")
            
                state.game.txt.innerHTML = "Advancing to the throne room you finaly encounter the Demon King. What do you do?"
        
                state.buttons.a.classList.remove("hide")
                state.buttons.a.innerHTML ="Fight"
        
                state.buttons.b.classList.remove("hide")
                state.buttons.b.innerHTML ="Run"
        
                state.buttons.next.innerHTML = "Find another goblin"
                state.buttons.next.onclick = fightGoblin  
                story = 0
            }
        }
        else if(xp>=9001&xp<=10000){//final battle
            lvl = "Imortal"
            if(story<=0){
                state.game.img.classList.remove("demonKingFight")
                state.game.img.classList.add("lvlUp")
    

                state.game.txt.innerHTML = "After this battle you have "+xp+" XP and has become a "+lvl+" level hero" 
            
            
                story++   
            }
        
            else if(story == 1){
                state.game.img.classList.remove("lvlUp")
                state.game.img.classList.add("demonKingDead")
            
                state.game.txt.innerHTML = "Moments before you land the last hit you hear the Demon King asking forgviness to your Goddess, telling her he wasnt capable of stoping the human threat<br>What do you do with this new information"
        
                state.buttons.a.classList.remove("hide")
                state.buttons.a.innerHTML ="Talk to the demon king"
        
                state.buttons.b.classList.remove("hide")
                state.buttons.b.innerHTML ="Finish Him"
        
                state.buttons.next.innerHTML = "Find another goblin"
                state.buttons.next.onclick = fightGoblin  
                story =0
            }
        }
        else if(xp>10000){//gods
            lvl = "Radiant"
            state.game.img.classList.remove("godFight")
                state.game.img.classList.add("lvlUp")
    

                state.game.txt.innerHTML = "After this battle you have "+xp+" XP and has become a "+lvl+" level hero" 

                end = 5
        }
    }   
}



function fightGoblin(){
    if(goblinCount>=5){
        end = 3
        state.game.img.classList.remove("kobold")
        state.game.img.classList.remove("bandit")
        state.game.img.classList.remove("demons")
        state.game.img.classList.remove("demonZoro")
        state.game.img.classList.remove("demonKing")
        state.game.img.classList.add("goblinslayer")
        state.game.txt.innerHTML = "After fighting this many goblins and watch all the destruction they cause, you realize the Demon king isn't the only threat to the world and even after his defeat the smaller pronblens aren't going to resolve thenselves<br>So you devote your life to exterminate all the goblins in the world while someone else take the Demon King, and so bringing true peace to the world"
        state.buttons.a.classList.add("hide")
    
        state.buttons.b.classList.add("hide")
    
        state.buttons.next.classList.add("hide")
        state.buttons.next.innerHTML = "Next"
        state.buttons.next.onclick = advance
        alert("Game Over - Ending 3",end)
    } 
    else{   
        if(xp<=1000){
            state.game.img.classList.remove("goblin")
            state.game.img.classList.add("goblinFight")
        
            state.game.txt.innerHTML = "You enter the camp and destroy the goblins"

            state.buttons.a.classList.add("hide")

            state.buttons.b.classList.add("hide")

            state.buttons.next.classList.remove("hide")
            state.buttons.next.innerHTML = "Next"
            state.buttons.next.onclick = advance
        
            xp = xp+500
            goblinCount++
            console.log(xp)
        }
        else if(xp>=1001&xp<=2000){//kobold
            state.game.img.classList.remove("kobold")
            state.game.img.classList.add("goblinFight")
        
            state.game.txt.innerHTML = "You look around a little and find another goblin camp, you destroy then"

            state.buttons.a.classList.add("hide")

            state.buttons.b.classList.add("hide")

            state.buttons.next.classList.remove("hide")
            state.buttons.next.innerHTML = "Next"
            state.buttons.next.onclick = advance

            xp = xp+200
            goblinCount++
        }
        else if(xp>=2001&xp<=5000){//bandit
            state.game.img.classList.remove("bandit")
            state.game.img.classList.add("goblinFight")
        
            state.game.txt.innerHTML = "You look around the city and encounter a goblin camp, you destroy then avoiding future trouble"

            state.buttons.a.classList.add("hide")

            state.buttons.b.classList.add("hide")

            state.buttons.next.classList.remove("hide")
            state.buttons.next.innerHTML = "Next"
            state.buttons.next.onclick = advance
            xp = xp+300
            goblinCount++
        }
        else if(xp>=5001&xp<=7000){
            state.game.img.classList.remove("demons")
            state.game.img.classList.add("goblinFight")
        
            state.game.txt.innerHTML = "You look around a little and find another goblin camp, you destroy it. It's almost therapeutical for you now"

            state.buttons.a.classList.add("hide")

            state.buttons.b.classList.add("hide")

            state.buttons.next.classList.remove("hide")
            state.buttons.next.innerHTML = "Next"
            state.buttons.next.onclick = advance
            xp = xp+200
            goblinCount++
        }
        else if(xp>=7001&xp<=8000){
            state.game.img.classList.remove("demonZoro")
            state.game.img.classList.add("goblinFight")
        
            state.game.txt.innerHTML = "You look around a little and find another goblin camp, you destroy it. It's almost therapeutical for you now"

            state.buttons.a.classList.add("hide")

            state.buttons.b.classList.add("hide")

            state.buttons.next.classList.remove("hide")
            state.buttons.next.innerHTML = "Next"
            state.buttons.next.onclick = advance
            xp = xp+100
            goblinCount++
        }
        else if(xp>=8001&xp<=9000){
            state.game.img.classList.remove("demonKing")
            state.game.img.classList.add("goblinFight")
        
            state.game.txt.innerHTML = "You look around a little and find another goblin camp, you destroy it. It's almost therapeutical for you now"

            state.buttons.a.classList.add("hide")

            state.buttons.b.classList.add("hide")

            state.buttons.next.classList.remove("hide")
            state.buttons.next.innerHTML = "Next"
            state.buttons.next.onclick = advance
            xp = xp+50
            goblinCount++
        }
    }
}   

function fight(){
    if(xp<=1000){
        fightGoblin()
    }
    else if(xp>=1001&xp<=2000){//kobold
        state.game.img.classList.remove("kobold")
        state.game.img.classList.add("koboldFight")
        
        state.game.txt.innerHTML = "You infiltrate at night and start eliminating the higher ups to creat some chaos and then finishng the camp"
    
        state.buttons.a.classList.add("hide")
    
        state.buttons.b.classList.add("hide")
    
        state.buttons.next.classList.remove("hide")
        state.buttons.next.innerHTML = "Next"
        state.buttons.next.onclick = advance
        
        xp = xp+1231
    }
    else if(xp>=2001&xp<=5000){//bandit
        state.game.img.classList.remove("bandit")
        state.game.img.classList.add("banditFight")
        
        state.game.txt.innerHTML = "You stalk the bandits taking ou one by one until you are face to face with the boss finally punting an end to their organization"
    
        state.buttons.a.classList.add("hide")
    
        state.buttons.b.classList.add("hide")
    
        state.buttons.next.classList.remove("hide")
        state.buttons.next.innerHTML = "Next"
        state.buttons.next.onclick = advance
        
        xp = xp+3154
    }
    else if(xp>=5001&xp<=7000){//demon camp
        state.game.img.classList.remove("demons")
        state.game.img.classList.add("demonsFight")
        
        state.game.txt.innerHTML = "You ask for a duel with the general and after you defeat it the other guards run away"
    
        state.buttons.a.classList.add("hide")
    
        state.buttons.b.classList.add("hide")
    
        state.buttons.next.classList.remove("hide")
        state.buttons.next.innerHTML = "Next"
        state.buttons.next.onclick = advance
        
        xp = xp+2231
    }
    else if(xp>=7001&xp<=8000){//demon castle
        state.game.img.classList.remove("demonZoro")
        state.game.img.classList.add("demonZoroFight")
        
        state.game.txt.innerHTML = "You defeat your foe by outsmarting then"
    
        state.buttons.a.classList.add("hide")
    
        state.buttons.b.classList.add("hide")
    
        state.buttons.next.classList.remove("hide")
        state.buttons.next.innerHTML = "Next"
        state.buttons.next.onclick = advance
        
        xp = xp+1000
    }
    else if(xp>=8001&xp<=9000){//demon king
        state.game.img.classList.remove("demonKing")
        state.game.img.classList.add("demonKingFight")
        
        state.game.txt.innerHTML = "It was the hardest battle of your life, but you managed to land a lucky strike ande defeat the Demon King"
    
        state.buttons.a.classList.add("hide")
    
        state.buttons.b.classList.add("hide")
    
        state.buttons.next.classList.remove("hide")
        state.buttons.next.innerHTML = "Next"
        state.buttons.next.onclick = advance
        
        xp = xp+1000
    }
    else if(xp>=9001&xp<=10000){//gods
        state.game.img.classList.remove("demonKingDead")
        state.game.img.classList.add("godFight")
        
        state.game.txt.innerHTML = "You join forces with the Demon King and confront the Gods manipulating the leaving realm just to create some entertaining for their eternal excistence<br>When the battle exploded you make a combined atack with the demon kig, his forces and the forces of humanity fanally putting an end to the manipulation of the gods"
    
        state.buttons.a.classList.add("hide")
    
        state.buttons.b.classList.add("hide")
    
        state.buttons.next.classList.remove("hide")
        state.buttons.next.innerHTML = "Next"
        state.buttons.next.onclick = advance
        
        xp = xp+10000
    }
}

function run(){
    if(runCount<4){
        if(xp <= 1000){//goblin
            state.game.txt.innerHTML = "After you fled the last fight, you encountered another group of goblins. What do you do?"
            runCount++
        } 
        
        if(xp>=1001&xp<=2000){//kobold
            if(story == 0){
                state.game.img.classList.remove("kobold")
                state.game.img.classList.add("joy")

                state.game.txt.innerHTML = "You leave the battlefield to enjoy your life a little more"
                state.buttons.a.classList.add("hide")
    
                state.buttons.b.classList.add("hide")
    
                state.buttons.next.classList.remove("hide")
                state.buttons.next.innerHTML = "Next"
                state.buttons.next.onclick = run
                story++

            }
            else{
                state.game.img.classList.remove("joy")
                state.game.img.classList.add("kobold")

                state.game.txt.innerHTML = "After you enjoy a little more your life you come back to the kobold camp. What do you do?"
                state.buttons.a.classList.remove("hide")
    
                state.buttons.b.classList.remove("hide")
    
                state.buttons.next.innerHTML = "Fight another goblin"
                state.buttons.next.onclick = fightGoblin
                
                runCount++
                story = 0
            }    
        } 

        if(xp>=2001&xp<=5000){//bandit
            if(story == 0){
                state.game.img.classList.remove("banditFight")
                state.game.img.classList.add("joy")

                state.game.txt.innerHTML = "You leave the battlefield to enjoy your life a little more"
                state.buttons.a.classList.add("hide")
    
                state.buttons.b.classList.add("hide")
    
                state.buttons.next.classList.remove("hide")
                state.buttons.next.innerHTML = "Next"
                state.buttons.next.onclick = run
                story++

            }
            else{
                state.game.img.classList.remove("joy")
                state.game.img.classList.add("banditFight")

                state.game.txt.innerHTML = "After you enjoy a little more your life you come back to the bandit hidout. What do you do?"
                state.buttons.a.classList.remove("hide")
    
                state.buttons.b.classList.remove("hide")
    
                state.buttons.next.classList.remove("hide")
                state.buttons.next.innerHTML = "Fight another goblin"
                state.buttons.next.onclick = fightGoblin
                
                runCount++
                story = 0
            }    
            
        } 

        if(xp>=5001&xp<=7000){//demon camp
            if(story == 0){
                state.game.img.classList.remove("demonsFight")
                state.game.img.classList.add("joy")

                state.game.txt.innerHTML = "You leave the battlefield to enjoy your life a little more"
                state.buttons.a.classList.add("hide")
    
                state.buttons.b.classList.add("hide")
    
                state.buttons.next.classList.remove("hide")
                state.buttons.next.innerHTML = "Next"
                state.buttons.next.onclick = run
                story++

            }
            else{
                state.game.img.classList.remove("joy")
                state.game.img.classList.add("demonsFight")

                state.game.txt.innerHTML = "After you enjoy a little more your life you come back to the guards locatiom. What do you do?"
                state.buttons.a.classList.remove("hide")
    
                state.buttons.b.classList.remove("hide")
    
                state.buttons.next.classList.remove("hide")
                state.buttons.next.innerHTML = "Fight another goblin"
                state.buttons.next.onclick = fightGoblin
                
                runCount++
                story = 0
            }    
            
            
        } 

        if(xp>=7001&xp<=8000){//demon castle
            if(story == 0){
                state.game.img.classList.remove("demonZoroFight")
                state.game.img.classList.add("joyZoro")

                state.game.txt.innerHTML = "You pull a deck of cards and play with the general"
                state.buttons.a.classList.add("hide")
    
                state.buttons.b.classList.add("hide")
    
                state.buttons.next.classList.remove("hide")
                state.buttons.next.innerHTML = "Next"
                state.buttons.next.onclick = run
                story++

            }
            else{
                state.game.img.classList.remove("joyZoro")
                state.game.img.classList.add("demonZoroFight")

                state.game.txt.innerHTML = "After you enjoy a little more your life you come back to the throne room. What do you do?"
                state.buttons.a.classList.remove("hide")
    
                state.buttons.b.classList.remove("hide")
    
                state.buttons.next.classList.remove("hide")
                state.buttons.next.innerHTML = "Fight another goblin"
                state.buttons.next.onclick = fightGoblin
                
                runCount++
                story = 0
            }    
            
        } 

        if(xp>=8001&xp<=9000){//demon king
            if(story == 0){
                state.game.img.classList.remove("demonKingFight")
                state.game.img.classList.add("joyDk")

                state.game.txt.innerHTML = "You ask for a coup of tea before the fight and, as a great host, the demon king gets for you"
                state.buttons.a.classList.add("hide")
    
                state.buttons.b.classList.add("hide")
    
                state.buttons.next.classList.remove("hide")
                state.buttons.next.innerHTML = "Next"
                state.buttons.next.onclick = run
                story++

            }
            else{
                state.game.img.classList.remove("joyDk")
                state.game.img.classList.add("demonKingFight")

                state.game.txt.innerHTML = "After you enjoy a little more your life you come back to the throne room. What do you do?"
                state.buttons.a.classList.remove("hide")
    
                state.buttons.b.classList.remove("hide")
    
                state.buttons.next.classList.remove("hide")
                state.buttons.next.innerHTML = "Fight another goblin"
                state.buttons.next.onclick = fightGoblin
                
                runCount++
                story = 0
            }    
            
        } 

        if(xp>=9001&xp<=10000){//gods
            end = 4
            if(story==0){
                state.game.img.classList.remove("kobold")
                state.game.img.classList.remove("bandit")
                state.game.img.classList.remove("demons")
                state.game.img.classList.remove("demonZoro")
                state.game.img.classList.remove("demonKing")
                state.game.img.classList.add("hero1")
                state.game.txt.innerHTML = "You came back home as the hero who defeated the Demon King and lived the best of lives"
                state.buttons.a.classList.add("hide")
                
                state.buttons.b.classList.add("hide")
                
                state.buttons.next.classList.remove("hide")
                state.buttons.next.innerHTML = "Next"
                state.buttons.next.onclick = run
                story++
            } 
            else{
                state.game.img.classList.remove("hero1")
                state.game.img.classList.add("hero2")
                state.game.txt.innerHTML = "The time passes until you and the rest of humanity hear the call from the gods once angain warning the Demon King has rised and is once more threatening your spieces"
                state.buttons.a.classList.add("hide")
                
                state.buttons.b.classList.add("hide")
                
                state.buttons.next.classList.add("hide")
                story = 0
            }   
        } 
        
    } 
    else{
        end = 2
        state.game.img.classList.remove("kobold")
        state.game.img.classList.remove("bandit")
        state.game.img.classList.remove("demons")
        state.game.img.classList.remove("demonZoro")
        state.game.img.classList.remove("demonKing")
        state.game.img.classList.add("home")
        state.game.txt.innerHTML = "You can't take it anymore, beeing a hero was never your dream, all these fight just scares you so much.<br>You go back home to your peacefull life hoping someone more capable completes the quest"
        state.buttons.a.classList.add("hide")
    
        state.buttons.b.classList.add("hide")
    
        state.buttons.next.classList.add("hide")
        state.buttons.next.innerHTML = "Next"
        state.buttons.next.onclick = advance

    }  
}
//alert("This is a 'chose your own adventure game\nClick on the buttons to make your choises\nHave fun") //tutorial
state.buttons.next.onclick = advance
state.buttons.a.onclick = fight
state.buttons.b.onclick = run


 