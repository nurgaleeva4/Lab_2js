//задание 1
console.log("Задание 1")
let num = 10
let str = "a"
let arr = [1, 2, 3]
let bool = true
let obj = null
console.log(num, typeof num)
console.log(str, typeof str)
console.log(arr, typeof arr)
console.log(bool, typeof bool)
console.log(obj, typeof obj)

//задание 2
console.log("Задание 2")
let num_1 = 10
let num_2 = 20
console.log("num_1 == num_2: ", num_1 == num_2)
console.log("num_1 < num_2: ", num_1 < num_2)
console.log("num_1 <= num_2: ", num_1 <= num_2)
console.log("num_1 > num_2: ", num_1 > num_2)

//задание 3
console.log("Задание 3")
let bool_1 = false
let obj_1 = null
let und = undefined
console.log(bool_1, obj_1, und)

//задание 4
console.log("Задание 4")
console.log("1" + 2 + 3)
console.log(1 + 2 + "3")
console.log("1" - 2)
console.log("1" +- 2)
console.log("1" + "1" - "1" )
console.log("foo" +- "bar")
console.log(0 == "0")
console.log(0.5 + 0.1 == 0.6)
console.log(0.1 + 0.2 == 0.3)
console.log(true + true + true == 3)
console.log(true == 1 )
console.log(true === 1 )
console.log(1 < 2 < 3)
console.log(3 > 2 > 1)
console.log(9007199254740991 + 1 == 9007199254740991 + 2 )
console.log(Math.sqrt(-1) == Math.sqrt(-1))

//задание 5
console.log("Задание 5")
let str_1 = "Кто "
let str_2 = "ты "
let str_3 = "такой?"
let concatenation = str_1 + str_2 + str_3
console.log(concatenation)

//задание 6
console.log("Задание 6")
let str_4 ="20"
let num_3 = 5
console.log(str_4 + num_3);
console.log(str_4 - num_3);
console.log(str_4 * "2");
console.log(str_4 / 2);

//задание 7
console.log("Задание 7")
let num_4 = "12"
let num_5 = "7.15"
let num_6 = num_4 % num_5
let num_7 = Math.round(num_6)
console.log(num_7)

//задание 8
console.log("Задание 8")
let x = 10
let num_8 = x * x - 7 * x + 10
let num_9 = x * x - 8 * x + 12
if (num_9 !== 0) {
    let result = num_8 / num_9
    console.log("Результат:", result)
} else {
    console.log("Ошибка: деление на ноль!")
}

//задание 9
console.log("Задание 9")
let email = "example.com"
if (email.includes("@")) {
    console.log("Адрес электронной почты корректен");
} else {
    console.log("Ошибка: адрес электронной почты должен содержать символ '@'");
}

//потоки задание 1
console.log("потоки задание 1")
let age = 25
if (age >= 18 && age <= 30) {
    console.log("Для молодежи");
} else if (age >= 1 && age <= 17) {
    console.log("Для детей");
} else {
    console.log("Для всех возрастов");
}

//задание 2
console.log("Задание 2")
let a = 10
let b = 5
let max = (a > b) ? a : b
console.log(max)

//задание 3
console.log("Задание 3")
let Count = 5
switch (Count) {
    case 1:
        console.log("На ветке сидит 1 ворона");
        break;
    case 4:
        console.log("На ветке сидит 4 вороны");
        break;
    case 10:
        console.log("На ветке сидит 10 ворон");
        break;
    default:
        console.log("На ветке сидит " + Count + " ворон");
}

//задание 4
console.log("Задание 4")
let i = 1
while (i <= 50) {
    console.log(i)
    i += 2
}
console.log("Задание 4.1")
for (let i = 1; i <= 50; i += 2) {
    console.log(i)
}

//задание 5
console.log("Задание 5")
let sum = 0
for (let i = 1; i <= 15; i++) {
    if (i !== 5 && i !== 7) {
        sum += i
    }
}
console.log(sum)

//задание 6
console.log("Задание 6")
let x_1 = 4
let y = 3
let result = 1

let count = 0
while (count < y) {
    result = result * x_1
    count++
}
console.log(result)