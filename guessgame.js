
    var win=0;
    var loss=0;

for(var i=0;i<5;i++)
    {


      var num=parseInt(prompt('enter a number 0 to 5:'));


        var rand=Math.floor(Math.random()*6+1);

        if(num==rand)
        {
            console.log('you have win');
            win++;
        }
        else
        {
            console.log('you have loss');
            console.log('guessing number is: '+ rand);
            loss++;
            
        }

    }

document.write('<h2>number of win</h2>: '+ win );
document.write('<h2> number of loss</h2>:'+ loss + "</br>");



