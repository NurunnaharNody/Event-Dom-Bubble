function makeRed(){
    document.body.style.backgroundColor='red';
}

// button for blue setings by function name 
const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;
function  makeBlue(){
    document.body.style.backgroundColor='blue';
}


// handle event using anonymouse function 

const greenButton = document.getElementById('make-green-button');
             greenButton.onclick = function makeGreen(){          
                //  or you can use function(){
                     document.body.style.backgroundColor='green';
                    }


 // hendle event by using event listener 

const goldenRod = document.getElementById('make-goldenrod-button');
        goldenRod.addEventListener('click',getGoldenRod);
    function getGoldenRod(){
             document.body.style.backgroundColor = 'goldenrod';
     }


// hendle event by using event listener with anonymous function
const hotPink = document.getElementById('make-hotpink-button');
     hotPink.addEventListener('click',function getHotPink(){
          document.body.style.backgroundColor = 'hotpink';
  });


// handle all elements together ........direct shortcut
  document.getElementById('make-lightblue-button').addEventListener('click', function (){
    document.body.style.backgroundColor = 'lightblue';
});



// handleing elements with innertext

function handleFunction(){
    const p = document.getElementById('clicking-method');
    p.innerText='set by using function';
}

document.getElementById('handle-event').addEventListener('click',function(){
         const p=document.getElementById('clicking-method');
         p.innerText='set direct shortcut method';
});





