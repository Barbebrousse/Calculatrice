// Selecteur

const touches = document.querySelectorAll('button');
const ecran = document.querySelector('.ecran');

//evenlistener

touches.forEach(touche => {
    touche.addEventListener('click', calcul);
});

function calcul() {
    let buttonText = this.innerText;


    if(buttonText==='C') {
        ecran.innerText = '';
        return;
    }
   
    if(buttonText === 'Sup'){
       ecran.textContent = ecran.textContent.substr(0, ecran.textContent.length-1);
       return;
    }

    if(buttonText === '='){
       ecran.innerText = eval(ecran.innerText);
       isclear = true;
       return;
    }

    else{
       ecran.textContent += buttonText;
       return;
    }
}
