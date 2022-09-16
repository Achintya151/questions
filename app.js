//using selectors inside the element
// traversing the dom

const btns = document.querySelectorAll('.question-btn');
const questions = document.querySelectorAll('.question');
btns.forEach(btn => {
    btn.addEventListener('click', e => {
        const question = e.currentTarget.parentElement.parentElement;

        questions.forEach(item => {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });

        question.classList.toggle("show-text");
    });
})