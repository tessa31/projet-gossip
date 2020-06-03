$("#heart-trigger").click(function () {
  $("li").toggleClass("visible");
});


/* ECRITURE TITRE*/

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ["Gossip Girl "];

let activeLetter = 0;
let activeWord = 0;

const addLetterSpeed = 200;
const removeLetterSpeed = 50;
const firstWordDelay = 1500;
const nextWordDelay = 2000;
const cursorAnimationTime =400;

let isFirstWord = true;
let lastWord = false;

const removeLetter = () => {
    if (lastWord) return;
    spnText.textContent = spnText.textContent.substring(0, spnText.textContent.length - 1);
    activeLetter--;
    if (activeLetter <= 0) {
        return setTimeout(() => {
            activeWord++;
            if (activeWord === txt.length - 1) {
                lastWord = true;
            };
            addLetter();
        }, nextWordDelay);
    }
    setTimeout(removeLetterSpeed);
}

const addLetter = () => {
    if (isFirstWord) {
        return setTimeout(() => {
            isFirstWord = false;
            addLetter();
        }, firstWordDelay);
    }

    spnText.textContent += txt[activeWord][activeLetter];

    activeLetter++;

    if (activeLetter === txt[activeWord].length) {
        if (lastWord) {
            console.log('Ostatnie zdanie zostało wypisane - koniec programu!');
            return;
        };
        return setTimeout(() => {
            removeLetter();
        }, nextWordDelay);
    }

    setTimeout(addLetter, addLetterSpeed);
}

addLetter();

const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, cursorAnimationTime);
