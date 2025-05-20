let zahlraten = Math.round(Math.random() * 100);
let versucheanzahl=0;


function zahlenraten()
{
   
    versucheanzahl= versucheanzahl + 1 ;
    versucheanzeigen.innerHTML= 'versuche: ' + versucheanzahl
    
    if(zahlraten==eingegeben.value) {
        headliner.innerHTML='du hast gewonen';
    }

    if(zahlraten>eingegeben.value) {
        headliner.innerHTML='dein zahl ist größer';
    }

    if(zahlraten<eingegeben.value) {
        headliner.innerHTML='dein zahl ist kleiner';
    }

}