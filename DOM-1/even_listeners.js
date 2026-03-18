//event listeners

//element.addEventListner('click', function)

const button2 = document.querySelector('.btn');

function alertBtn() {
    alert('i love javaScript');
}

button2.addEventListener("click", alertBtn);


//mouseover


// const newBackgroundColor = document.querySelector('.box-2');

// function changeBgColor () {
//     newBackgroundColor.style.backgroundColor = 'blue';


// }

// newBackgroundColor.addEventListener('mouseover', changeBgColor)


//reveal event

const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content');


function revealContent() {

    if(hiddenContent.classList.contains('reveal-btn')) {

        hiddenContent.classList.remove('reveal-btn')
    } else {
        hiddenContent.classList.add('reveal-btn')
    }
}

revealBtn.addEventListener('click', revealContent);