// function calculator(a, b, action) {
//     let result;
//     if (action == '+') {
//         result = a + b
//     } else if (action == '-') {
//         result = a - b;
//     } else if (action = '*') {
//         result = a * b;
//     }
//     return result;
// }
// let x = calculator(10, 20);
// console.log(x)

// function add(a, b) {
//     return a + b;
// }

// function minus(a, b) {
//     return a - b;

// }

// function multiply(a, b) {
//     return a * b
// }

// function calculator(a, b, action) {
//     let result;

//     if (action == '+') {
//         result = add(a, b);
//     } else if (action == '-') {
//         result = minus(a, b);
//     } else if (action = '*') {
//         result = multiply(a, b);
//     }
//     return result;
// }
// action = prompt('enter action'),

//     console.log(calculator(10, 20, action))
// let x = calculator(10, 20);
// console.log(x)
// function calculator(a, b) {
//     let result = a + b;
//     return result;
// }
// let x = calculator(10, 20);
// console.log(x)




// ______________________________________________________________________________________________________________________________________

// - створити функцію яка виводить масив
let arr = ['nissan', 'volkswagen', 'peugeot', 'toyota']

// function showArray(array) {
//     console.log(array)
// }
// showArray(arr);



// function showArray(array) {
//     for (const arrElement of array)
//         console.log(arrElement)
// }
// showArray(arr);



// // - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

// // function pushRandomNumber(number){

// // function getRandomArbitrary(min, max) {
// //     let randomNumber = []
// //     for (let i = 0; i < 12; i++) {
// //         randomNumber.push(Math.floor(Math.random() * (max - min + 1)) + min)
// //     }
// //     console.log(randomNumber)
// // }

// // getRandomArbitrary(5, 10)

// // }
// // ______________________________________________________________________________________________________
// // - створити функцію яка приймає три числа та виводить та повертає найменьше.

// function showMinNumber(a, b, c) {
//     let result;
//     result = Math.min(a, b, c)
//     return result

// }
// console.log(showMinNumber(4, 8, 10))
//     // __________________________________________________________________________________________________________
//     // - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function showMaxNumber(a, b, c) {
//     let result;
//     result = Math.max(a, b, c)
//     return result

// }
// console.log(showMaxNumber(4, 8, 10))
//     // ___________________________________________________________________________________________________
//     // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function showNumber(x, y, z, n, m) {
//     let result;
//     let show;
//     show = Math.max(x, y, z, n, m);
//     console.log(show)
//     result = Math.min(x, y, z, n, m);
//     return result;

// }

// showNumber(5, 7, 1, 0, 8)
//     // ____________________________________________________________________________________________________________
//     // - створити функцію яка виводить масив
// function showArray(arr) {
//     console.log(arr)

// }
// let user = ['Viktor', 25, 'man']
// showArray(user)
//     // ____________________________________________________________________________________________________________
//     // - створити функцію яка повертає найбільше число з масиву
//     // function numberArray(arr) {
//     //     let result;
//     //     result = Math.max(...arr)
//     //     return result
//     // }
//     // let arrNumber = [90, 44, 22, 11, 78]
//     // console.log(numberArray(arrNumber))
//     // ________________________________________________________________________________________________________________
//     // - створити функцію яка повертає найменьше число з масиву

// function numMinArray(arr) {
//     let result;
//     result = Math.min(...arr)
//     return result
// }
// let arrNumber = [90, 44, 22, 11, 78]
// console.log(numMinArray(arrNumber))
//     // ____________________________________________________________________________________________________________
//     // - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

// function sumArr(arrNum) {
//     let result = []
//     for (let i = 0; i < arrNum.length; i++) {
//         result = +result + arrNum[i]
//     }

//     return result
// }
// console.log(sumArr(arrNumber))

// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function avarageNum(arr) {
//     let result = [];
//     let avarResult;
//     for (let i = 0; i < arr.length; i++) {
//         result = +result + arr[i]
//     }
//     avarResult = result / arr.length
//     return avarResult
// }
// console.log(avarageNum(arrNumber))
//     // __________________________________________________________________________________________________________
//     // - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// function quantity(arr) {
//     let result = (arr.length)
//     return result
// }
// let arrayObject = [{
//     name: 'anastasia',
//     age: 54,
//     car: true,
// }, {
//     color: 'green',
//     model: 'pasat',
//     age: 6
// }]
// console.log(quantity(arrayObject))
//     // __________________________________________________________________________________________________________
//     // - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// function newArray(arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         for (const key in arr[i]) {
//             result.push(key)
//         }
//     }
//     // console.log(result.length)
//     return (result.length)
// }
// console.log(newArray(arrayObject))
//     // __________________________________________________________________________________________________________
//     // - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// let numArr = [4, 7, 8, 9]
// let numArr2 = [6, 9, 3, 2]


// function arrSum(arr1, arr2) {

//     let result;
//     let newArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let y = 0; y < arr2.length; y++) {
//             if ([i] = [y]) {
//                 console.log(i)
//                 result = (arr1[i] + arr2[y])
//                 newArr.push(result)
//             } else {}
//         }
//     }
//     return newArr

// }
// console.log(arrSum(numArr, numArr2))
// ____________________________________________________________________________________________________________
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// ??????????????????????????????????????????????????????????????????????/
let numArr = [4, 7, 8, 9]
let numArr2 = [6, 9, 3, 2]

function changePlace(arr, i) {

    if (i < arr.length - 1) {
        let a = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = a

    }
    return arr
}

//     
// console.log(array)
// }
let x = changePlace(numArr2, 2)
console.log(x)

// ______________________________________________________________________________________________
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// два пустих масива, ітеруємо два масива
// zякщо індкекс рівний 0 то ми його в інший масив


let arrNum = [1, 0, 6, 0, 3]

function array(arr) {
    let emptyArr = []
    let arrayTwo = []
    for (const iter of arr) {
        if (iter === 0) {
            emptyArr.push(0)
        } else if (
            iter !== 0) {
            arrayTwo.push(iter)
        }
    }
    return arrayTwo.concat(emptyArr)

}
console.log(array(arrNum))

// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// _______________________________________________________________________________
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

function newDiv() {
    let div = document.createElement('div')
    div.innerText = 'hello owu'
    document.body.appendChild(div)
}
newDiv()

// ____________________________________________________________________________________________________
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function divTxt(txt) {
    let div = document.createElement('div')
    div.innerText = txt
    document.body.appendChild(div)
}
divTxt('hello')
    // ____________________________________________________________________________________________________
    // - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
let car = [{
        id: 654,
        model: 'Highlander',
        producer: 'Toyota',
        tankVolume: 3.5,
        horsePower: 249,
        img: 'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/vdat/submodels/toyota_highlander_toyota-highlander_2021-1603381004381.jpg?fill=18:11&resize=480:*'
    },
    {
        id: 364,
        model: 'CX-5',
        producer: 'Mazda',
        tankVolume: 2.0,
        horsePower: 165,
        img: 'https://www.autocentre.ua/wp-content/uploads/2021/02/2020-mazda-cx-5-01.jpg'
    },

    {
        id: 904,
        model: 'X-5',
        producer: 'BMW',
        tankVolume: 3.0,
        horsePower: 225,
        img: 'https://lh3.googleusercontent.com/proxy/PpYcQ1QXbOa_xEvKx2xNkXYhwzybW-F6VH0Z0nJh8tEMkrTAQoxjycUlgJApteWZnd5cqj2W1z8kBWEK7-YsOz-P8wI'
    },
    {
        id: 674,
        model: 'GLE-Class ',
        producer: 'Mercedes-Benz',
        tankVolume: 2.9,
        horsePower: 330,
        img: 'https://i.infocar.ua/i/12/6032/700x350.jpg'
    },
    {
        id: 812,
        model: 'LX-570',
        producer: 'Lexus',
        tankVolume: 5.7,
        horsePower: 367,
        img: 'https://images.ua.prom.st/1025029087_w640_h640_obves-lexus-lx.jpg'
    },
    {
        id: 762,
        model: 'Compass Trailhawk',
        producer: 'jeep',
        tankVolume: 2.4,
        horsePower: 220,
        img: 'https://www.carscope.ru/imglib/22/23/71/600x400.jpeg'
    },
    {
        id: 482,
        model: ' Q8 ',
        producer: 'Audi',
        tankVolume: 3.0,
        horsePower: 286,
        img: 'https://nahodim.com.ua/uploads/cars/new/audi/q8/oI8QHCwwFh75FFystP2Q_So9/slider_audi_q8.jpg'
    },
    {
        id: 762,
        model: 'XC40',
        producer: 'Volvo',
        tankVolume: 2.0,
        horsePower: 150,
        img: 'https://nahodim.com.ua/uploads/cars/new/volvo/xc40/5a47acb394d5da76158a8f1c/slider_volvo_xc40_xc_40.jpg'
    },
    {
        id: 213,
        model: 'QX50',
        producer: 'Infiniti ',
        tankVolume: 2.0,
        horsePower: 249,
        img: 'https://www.motortrend.com/uploads/sites/5/2019/11/2020-Infiniti-QX50-Edition-30-3.jpg?fit=around%7C875:492.1875'
    },
    {
        id: 143,
        model: 'Kuga',
        producer: 'Ford',
        tankVolume: 2.0,
        horsePower: 190,
        img: 'https://cdn.riastatic.com/photosnewr/auto/newauto_photos/ford-kuga__925234-620x415x70.jpg'
    },
    {
        id: 432,
        model: 'ASX ',
        producer: 'Mitsubish',
        tankVolume: 1.6,
        horsePower: 117,
        img: 'https://skolkomasla.ru/wp-content/uploads/2019/05/mainimage-835.jpg'
    },
    {
        id: 226,
        model: '3008',
        producer: 'Peugeot',
        tankVolume: 2.0,
        horsePower: 180,
        img: 'https://autoreview.ru/images/Article/1595/Article_159563_860_575.jpg'
    },
    {
        id: 994,
        model: 'CR-V',
        producer: 'Honda',
        tankVolume: 2.4,
        horsePower: 220,
        img: 'https://lh3.googleusercontent.com/proxy/vlLkhmIiQYy4JoBFbZvA6D8gLF0l3xOz5oQ55VfPyP_saOwv9VZyMhA9PrmXhX1-75h1cBUzyTKoFfJaSnxDjIKrqljcoeLNy5C9OSnK84IOrR1N0FjuEJlE6yTkKSkF5E0qlXrrq-kYSJ3473uEWm5R65RlpJqOcYXOXfspZaTx_jrP-ZI89wkamdkT1wI_jkkyYeY_2q1Ot2rI7goeLDU_lkzrE4J3HMN1kMC5S7X1D5kJCBMJgD7FZWuYmszLbg'
    },
    {
        id: 220,
        model: 'Sportage',
        producer: 'Kia',
        tankVolume: 1.6,
        horsePower: 132,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuId9WntiPjfVRex3M88-sLpe7sW-x5FHoxw&usqp=CAU'
    },
    {
        id: 564,
        model: ' Qashqai',
        producer: 'Nissan',
        tankVolume: 1.2,
        horsePower: 115,
        img: 'https://tobolinfo.kz/wp-content/uploads/2019/09/slider_nissan_qashqai.jpg'
    },
]

// function carFunc(arr, ident) {
//     let carArray = [arr];
//     let idElement = document.getElementById('ident')

//     for (let i = 0; i < carArray.length; i++) {
//         let div = document.createElement('div')

//         console.log(carArray[i].producer)
// div.innerText = (`${carArray[i].ident}-${carArray[i].model} ${carArray[i].producer}`)
// document.appendChild(div)
// }
// }
// carFunc(car, 'id')
// ??????????????????????????????????????????????????????????????????????????????????????????????????
function carFunc(arr, a) {
    let carArray = arr;
    let div = document.createElement('div')
    document.body.appendChild(div)
    for (let i = 0; i < carArray.length; i++) {
        // console.log(carArray[i].id)
        let ul = document.createElement('ul')
        let li = document.createElement('li')
        div.appendChild(ul)
        ul.appendChild(li)
        li.innerText = (`${carArray[i].id}-${carArray[i].model} ${carArray[i].producer}`)
            // document.body.appendChild('div')
    }
}
carFunc(car, 'id')

// __________________________________________________________________________________________________________
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             

let usersWithId = [{
    id: 1,
    name: 'vasya',
    age: 31,
    status: false
}, {
    id: 2,
    name: 'petya',
    age: 30,
    status: true
}, {
    id: 3,
    name: 'kolya',
    age: 29,
    status: true
}, {
    id: 4,
    name: 'olya',
    age: 28,
    status: false
}, ];
let citiesWithId = [{
    user_id: 3,
    country: 'USA',
    city: 'Portland'
}, {
    user_id: 1,
    country: 'Ukraine',
    city: 'Ternopil'
}, {
    user_id: 2,
    country: 'Poland',
    city: 'Krakow'
}, {
    user_id: 4,
    country: 'USA',
    city: 'Miami'
}, ];



function arrUserId(array1, array2) {
    let arrayWithId = []
    for (let i = 0; i < array1.length; i++) {
        for (let y = 0; y < array2.length; y++) {
            if (array1[i].id == array2[y].user_id)

                arrayWithId.push(array2[y])
                // console.log(usersWithId[i].id)
                // console.log(citiesWithId[y].user_id)
        }
        arrayWithId.push(array1[i])
    }
    console.log(arrayWithId)
}
arrUserId(usersWithId, citiesWithId)
    // __________________________________________________________________________________________________________

//     -беремо завдання з правилами з укроку№ 3:
//     Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [{
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

function iterArr(arr) {
    let wrap = document.createElement('wrap')
    document.body.appendChild(wrap)

    for (const arrElement of arr) {
        let divIn = document.createElement('div')
        wrap.appendChild(divIn)
        for (const key in arrElement) {
            let div = document.createElement('div')
            div.innerHTML = (arrElement[key])

            divIn.appendChild(div)

        }

    }
    return wrap
}
iterArr(rules)