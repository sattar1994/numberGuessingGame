// const name = 'SattarMafakheri ';

// console.log(name.lastIndexOf('t'));

// console.log(name.indexOf('s'));

// console.log(name.toUpperCase());

// console.log(name.toLowerCase());

// console.log(name.includes('a'));

// console.log(name.startsWith('S'));

// console.log(name.endsWith('i'));

// console.log(name.substring(5, 9));

// console.log(name.charAt('9'));

// console.log('sat' + 5);

// console.log(5 + 'sat');

// console.log('6' + 7);

// console.log(parseInt('6') + 8);

// console.log(parseInt('9') + 7);
// let outPut = '';

// for(let i = 1; i < 10; i++){
//     for(let j = 1; j < 10; j++){
//         outPut = outPut+ (j*i) + '  '
//     };
//     outPut += '\n';
// }
// console.log(outPut);

// const array = [5, 6, 7, 8, 9, 10];
// for(let i = 0; i < array.length; i++){
//      array[i] *= 2
// }
// array.forEach((item,index,array) => {
//     console.log(item*=3)
    
// })
// for(let value of array){
//     console.log(value);
// }


// function handel(a,b,c,d){
//     const total = a+b+c+d;
//     const result = total / arguments.length;
//     return result
// }

// console.log(handel(1,2,4,5));

// function handel(){
//     let result=0;
//     let total = 0;
//     for (let value of arguments) {
//         total= total+ value
//     }
//     result = total * arguments.length
//     return result
// }
// console.log(handel(2, 4, 6, 8));
// console.log(handel(5, 8, 9, 7));

// function handel(num, cont = 3){
//     let result = 1;
//    for(let i = 0; i < cont; i++){
//     result *= num
//    }
//     return result
// }
// console.log(handel(9, 2));

// function handel(mafa){
//     if(typeof mafa === 'function'){
//         mafa()
//     }else{
//         console.log('error');
//     }
// };


// handel(satar)


// function satar(){
//     console.log('callback');
// }

// const arary = [5, 2, 7, 16, 27, 37, 9];
// console.log(arary.sort(function callback(a, b){
//     return b - a
//   }));

// console.log(arary.filter((item) => {
//     return item * 5 > 40
// }));


// Constractor Faunction

// function Car(color, speed, door, bool){
//     this.colorCar = color;
//     this.speedCar = speed;
//     this.doorCar = door;
//     this.boolean = bool

// }

// const car1 = new Car('red', 400, 4, true);
// const car2 = new Car('blue', 200, 2, false);
// console.log(car1);
// console.log(car2);


// Refactor Function

// function car(color, speed){
//     return{
//         color: color,
//         speed: speed
//     }
// }
// const car1 = car('red', 400);
// const car2 = car('blue', 600);
// console.log(car1);
// console.log(car2);

// console.log(Math.floor(Math.random() * 7) + 1);
// const time = new Date();
// const option = {
//     year: 'numeric',
//     month: 'long',
//     weekday: 'long',
//     day: 'numeric',
// }
// console.log(time.toLocaleDateString('FA-IR', option));

// function createElement(tag, text){
//     const element = document.createElement(tag);
//     const body = document.querySelector('body');
//     element.textContent=text;
//     body.appendChild(element)
   
//     return element

// }
// console.log(createElement('p', 'SattarMafakheri'));
// console.log(createElement('h1', 'RoyaKarimi'));
// createElement('a', 'link')



// function CreateElement(tag, text){
//      this.element = document.createElement(tag);
//      this.element.textContent= text;
//      const body = document.querySelector('body');
//      body.appendChild(this.element);
//      return this.element
// }

// new CreateElement('h1', 'Sattar');
// // 
// function createElement(text, te,){
//     let newElement = `<h1 class="text-[2rem] text-red-600 bg-blue-200">${text}</h1>
//     <p>${te}</p>`;
//     let body = document.querySelector('body');
//     body.innerHTML += newElement
//     return newElement
// }
// createElement('SattarFromNorway', 'RoyaKarimi')
// createElement('Norway', 'Sweden')

// const inp = document.getElementById('input');
// inp.addEventListener('keyup', (e) => {
//     console.log(e.code);

// })

// const stage1 = document.getElementById('stage1');
// const stage2 = document.getElementById('stage2');
// const maximumInput = document.getElementById('maximum');
// const startBtn = document.getElementById('start');
// const guessNumber = document.getElementById('guess-number');
// const guessBtn = document.getElementById('guess-btn');
// let status = document.getElementById('status');
// const winer = document.getElementById('win')
// let targetNumber, total, chances;
// startBtn.addEventListener('click', () => {
//    let maximumNumber = Number(maximumInput.value)
//    if(maximumNumber > 10){
//      targetNumber = Math.floor(Math.random() * (maximumNumber +1))
//      total = Math.floor(Math.log2(maximumNumber)) +1
//      chances = document.getElementById('chances');
//     chances.textContent = total 
//     stage1.classList.toggle('hidden')
//     stage2.classList.toggle('hidden')
//    }else{
//     let p = document.querySelector('#p');
//     p.textContent = 'عدد وارد شده بزرگتر از 10 باید باشد'
//    }
//    maximumInput.value = ''
// });
// guessBtn.addEventListener('click', () => {
//     let targetUser = Number(guessNumber.value);
//     if(targetUser === targetNumber){
//         stage2.innerHTML += `<h1 class="text-green-600 text-[1.4rem] bg-white  text-center">تبریک شما برنده شدید</h1>`;
        
//         return;
//     }else if(targetUser > targetNumber){
//         const status = document.getElementById('status');
//         status.innerHTML += `<span class="text-red-600 mx-4 text-[1.3rem]">${targetUser}به سمت پایین بیا</span>`
//         chances.textContent -= 1
//       if( chances.textContent <= 0 ){
//         const status = document.getElementById('status');
//         status.innerHTML = `<h1 class="text-[1.4rem] bg-white text-red-700 text-center my-3">شما بازی رو باختید</h1>`
//         guessBtn.style.display='none'
//       }
//     }else{
//         const status = document.getElementById('status');
//         status.innerHTML+= `<span class="text-white mx-4 text-[1.3rem]">${targetUser}به سمت بالا برو</span>`
   
//         chances.textContent -= 1
//         if( chances.textContent <= 0 ){
//           const status = document.getElementById('status');
//           status.innerHTML = `<h1 class="text-[1.4rem] bg-white text-red-700 text-center my-3">شما بازی رو باختید</h1>`
//           guessBtn.style.display='none'
//         }
//     }


//     guessNumber.value = ''
// })

