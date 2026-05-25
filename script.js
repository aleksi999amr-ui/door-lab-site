
function scrollToForm(){
document.getElementById('form').scrollIntoView({
behavior:'smooth'
});
}

function checkStatus(){

const id = document.getElementById('repairId').value;
const result = document.getElementById('statusResult');

if(id.trim() === ''){
result.innerText = 'Введите номер заявки';
return;
}

result.innerText =
'Заявка #' + id + ' находится в сервисном центре';
}

function reveal() {
  const elements = document.querySelectorAll(".reveal");

  elements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < window.innerHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();

window.history.scrollRestoration = "manual";

window.onload = function () {
  window.scrollTo(0, 0);
};