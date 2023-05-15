
const page1 = document.getElementById('page-1');
const page2 = document.getElementById('page-2');
const startBtn = document.getElementById('start-btn');
const enterInput = document.getElementById('input-enter-number');
const guessingInput = document.getElementById('guessing-number-input');
const btnGuessing = document.getElementById('guessing-btn');
const guessingNumber = document.getElementById('guessing-number');
const remainingNumber = document.getElementById('number-rimining');
let maximumNumber, targetNumber, inputVal;
startBtn.addEventListener('click', () => {
    maximumNumber = Number(enterInput.value);
    if(maximumNumber > 10){
        targetNumber = Math.floor(Math.random() * (maximumNumber) +1);
        inputVal = Math.floor(Math.log2(maximumNumber)) + 1;
        remainingNumber.innerText = inputVal
        page1.classList.toggle('non');
        page2.classList.toggle('non');
        
    }else{
        swal.fire('لطفا یک عدد بزرگتر از 10 وارد کنید')
    }
    enterInput.value = '' 
});
btnGuessing.addEventListener('click', () => {
    let inputNumberUser = Number(guessingInput.value);
    if(inputNumberUser === targetNumber){
        swal.fire("شما پیروز بازی شدید هورااااااااااااا");
        page1.classList.toggle('non');
        page2.classList.toggle('non');
    }else if(inputNumberUser > targetNumber){
        guessingNumber.innerHTML += `<span class="text-red-400"> ,${inputNumberUser} عدد کوچکتری وارد کنید</span>`
        remainingNumber.innerText --
        if(remainingNumber.textContent <= 0){
            swal.fire('فرصتهای شما به پایان رسید');
            page1.classList.toggle('non');
            page2.classList.toggle('non');
            guessingNumber.innerHTML = ''
        }
       
    }else{
        guessingNumber.innerHTML += `<span class="text-green-300"> ,${inputNumberUser} عدد بزرگتری وارد کنید</span>`
        remainingNumber.innerText --
        if(remainingNumber.textContent <= 0){
            swal.fire('فرصتهای شما به پایان رسید');
            page1.classList.toggle('non');
            page2.classList.toggle('non');
            guessingNumber.innerHTML = ''
        }
       
    }
    guessingInput.value = ''
})
