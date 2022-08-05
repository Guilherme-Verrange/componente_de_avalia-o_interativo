const submit_btn = document.querySelector('.submit-btn');
const card = document.querySelector(".card");
const card_2 = document.querySelector(".card-2");
const rate_btn = document.querySelectorAll('button');
let score = document.querySelectorAll('.rate-btn');

const show_score = document.querySelector('.show-score');


submit_btn.addEventListener('click', onSubmit);
rate_btn.forEach( btn =>{
    btn.addEventListener('click', click_btn_rate);
});

function onSubmit(){

    card.classList.add("hide");
    show_score.textContent = score_rate;
    card_2.classList.remove("hide");
}

function click_btn_rate(event){
    rate_btn.forEach(btn =>{
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    score_rate = event.target.textContent;
    console.log(score);

};

//console.log(rate_btn);