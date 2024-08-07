let inputs = document.querySelectorAll('.input');
let score = document.querySelector('.number');
let evaluate = document.querySelector('.evaluate');
let feedback = document.querySelector('.feedback');
let comparison =document.querySelector('.comparison');

let totalInputs = inputs.length;
let sum = 0;

evaluate.addEventListener('click', ()=>{
  inputs.forEach((input) => {
    sum += parseFloat(input.value) || 0;
});
let average = sum / totalInputs;
score.innerHTML = average;
if (average <= 25 ) {
  feedback.innerHTML = 'Not Good';
  comparison.innerHTML = 'You have to Work more to achive the pass mark. Work Hard!'
}
else if (average > 25 && average <= 50) {
   feedback.innerHTML = 'Average';
   comparison.innerHTML = 'Put more Effort to the subjects you got low scores!'
   
}
else if (average > 50 && average <= 75){
  feedback.innerHTML = 'Good';
  comparison.innerHTML = 'Put little more effort to achive the perfect score!'
}
else{
  feedback.innerHTML = 'Great';
  comparison.innerHTML = 'Goog effort! keep it up score more in future!'
}
});


