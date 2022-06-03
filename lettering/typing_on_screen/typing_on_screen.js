var i = 0;
const text = document.querySelector('.text')
message = "Bem-vindo(a) ao Site."

function typing(){
    if (i < message.length){
        document.querySelector('.text').innerHTML += message.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}

typing()