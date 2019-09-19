var backdrop = document.querySelector('.backdrop');
// console.dir(backdrop);
var modal = document.querySelector('.modal');
// console.dir(backdrop);
var selectPlanButtons = document.querySelectorAll('.plan button');

for(var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        modal.style.display='block';
        backdrop.style.display='block';
    });
}