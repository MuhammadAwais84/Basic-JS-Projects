let btn=document.querySelectorAll('.question button');
let answers=document.querySelectorAll('.answer');
document.addEventListener("DOMContentLoaded", function() {
    // Initially hide all answers
    for (let answer of answers) {
        answer.classList.add('hide');
    }
});

for (btn of btn) {
    btn.addEventListener("click",function () {
        let answer = this.parentElement.nextElementSibling;
        if (answer.classList.contains('hide')) {
            answer.classList.remove('hide');
            answer.classList.add('active');
            this.textContent = 'x';
        } else {
            answer.classList.remove('active');
            answer.classList.add('hide');
            this.textContent = '+';
        }
        
    })
}