let main = document.querySelector('.main');
let text = document.querySelector('.text');

innerText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, assumenda.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis..`;

let counter = 0;
let finish = false;



main.addEventListener('click', startTyping);

function startTyping(){
    if(finish == true){
        console.log('one');
        text.innerHTML = '';
        counter = 0;
        finish = false;
        startTyping();
    }else if(counter < innerText.length && counter > 0){
        console.log('two');
        text.innerHTML = '';
        counter = 0;
        startTyping();
    }
    else{
        console.log('three')
        let run = setInterval(() => {

            var myWindow = window.open("", "MsgWindow", "width=400,height=300");
            myWindow.document.write(`${innerText[counter]}`);

            // text.innerHTML += innerText[counter];
            counter ++
        if(counter == innerText.length){
            window.clearInterval(run);
            finish = true;
            myWindow.close();
        }
        }, 100)
    }
}