const flashcards = document.querySelector('.flashcards');
const createBox = document.querySelector('.create-box');
const question = document.getElementById('question');
const answer = document.getElementById('answer');
const fillInput = document.querySelector('.fill-input');


const divMaker = (text) => {
    let div = document.createElement('div');
    let h2_question = document.createElement('h2');
    let h2_answer = document.createElement('h2');
    div.className = 'flashcard';
    h2_question.className = 'question';
    h2_answer.className = 'answer';
    console.log(text)
    h2_question.innerHTML = text.my_question;
    h2_answer.innerHTML = text.my_answer;
    div.appendChild(h2_question);
    div.appendChild(h2_answer);
    if (h2_question.textContent === "" || h2_answer.textContent === "") {
        div.style.display = 'none';
        showFill();
    } else {
        flashcards.appendChild(div);
    }
    div.addEventListener('click', () => {
        if (h2_answer.style.display === 'none') {
            h2_answer.style.display = 'block'
        } else {
            h2_answer.style.display = 'none'
        }
    })
    div.addEventListener('click', () => {

    })
}
const addFlashcard = () => {
    let flashcardInfo = {
        my_question: question.value,
        my_answer: answer.value
    }
    console.log("answer " + flashcardInfo.my_answer)
    console.log("question " + flashcardInfo.my_question)
    divMaker(flashcardInfo);
    answer.value = "";
    question.value = "";
}

const showCreateCart = () => {
    createBox.style.display = "block";
}

const hideFlashCard = () => {
    createBox.style.display = "none";
}

const delCards = () => {
    flashcards.innerHTML = "";
}

const showFill = () => {
    fillInput.style.display = 'block'
    setTimeout(function () {
        fillInput.style.display = 'none';
    }, 3000)
}