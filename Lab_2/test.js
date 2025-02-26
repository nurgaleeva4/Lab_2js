// Функции. Задание 1
function subtract1(a, b) {
    console.log("Задание 1.1: Разность = " + (a - b));
}
function subtract2(a, b) {
    return a - b;
}//
subtract1(10, 5);
console.log("Задание 1.2: Разность = " + subtract2(10, 5));

// Задание 2
function checkAge(age) {
    let message = age < 18 ? "Привет, малыш!" : "Здравствуйте, юноша!";
    console.log("Задание 2: " + message);
}
checkAge(15);
checkAge(20);

// Задание 3
function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}
console.log("Задание 3: Наибольшее число = " + maxOfThree(3, 7, 5));

// Задание 4
let variable = "Глобальная переменная";
function f() {
    let variable = "Локальная переменная";
    console.log(variable);
}
f();
console.log(variable);

// Задание 5
function calculateU(x, y, z) {
    const maxXY = Math.max(x, y);
    const maxXY_Z = Math.max(x + y, z);
    const maxHalf_XZ = Math.max(0.5, x + z);

    const u = (maxXY + maxXY_Z) / Math.pow(maxHalf_XZ, 2);
    return u;
}

console.log("Задание 5: Значение u = " + calculateU(3,5,2));

// Задание 6
function perimeter(...coords) {
    let n = coords.length / 2, perim = 0;
    for (let i = 0; i < n; i++) {
        let dx = coords[(2 * i + 2) % (2 * n)] - coords[2 * i];
        let dy = coords[(2 * i + 3) % (2 * n)] - coords[2 * i + 1];
        perim += Math.sqrt(dx * dx + dy * dy);
    }
    return perim;
}
console.log("Задание 6: Периметр = " + perimeter(0, 0, 0, 3, 4, 0));

// Задание 7
function sequence(n, sum = 1) {
    if (n === 1) return 1;
    return Math.sin(sum + sequence(n - 1, sum + 1));
}
console.log("Задание 7: Член последовательности = " + sequence(5));

// Массивы. Задание 1
let arr = ["one", "two", "three"];
console.log("Задание 1 (массивы): " + arr[2]);
console.log("Количество элементов: " + arr.length);
arr.splice(1, 1);
console.log("Массив после удаления:\n" + arr.join("\n"));

// Задание 2
let countries = ["Россия", "США", "Китай"];
let population = [144, 331, 1400];
for (let i = 0; i < countries.length; i++) {
    console.log(`Задание 2 (массивы): ${countries[i]} - ${population[i]} млн`);
}

// Задание 3
let months = ["January", "February", "March", "April", "May", "June"];
let len = months.pop();
console.log("Задание 3 (массивы): Удаленный элемент = " + len);
console.log("Оставшиеся элементы: " + months);

// Задание 4
let a = [1, 2, 3, 4, 5, 6, 7];
let t = a.slice(0, 3);
console.log("Задание 4 (массивы): Первые 3 элемента = " + t);

// Задание 5
let d = a.splice(1, 3);
console.log("Задание 5 (массивы): Массив после удаления = " + a);

// Задание 6
let nums = [1, 2, 3, 4, 5];
console.log("Задание 6 (массивы): Развернутый массив = " + nums.reverse());

// Задание 7
let mixed = ['c', 5, 2, 'b', 3, 1, 4, 'a'];
console.log("Задание 7 (массивы): Отсортированный массив = " + mixed.sort());

// Задание 8
console.log("Задание 8 (массивы): " + nums.join("+"));

// Задание 9
function median(arr1, arr2) {
    let merged = arr1.concat(arr2).sort((a, b) => a - b);
    let mid = Math.floor(merged.length / 2);
    return merged.length % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid];
}
console.log("Задание 9 (массивы): Медиана = " + median([1, 2, 5, 4, 6], [8, 2, 5, 9, 5]));

// Задание 10
let randArr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
let minIndex = randArr.indexOf(Math.min(...randArr));
let maxIndex = randArr.indexOf(Math.max(...randArr));
[randArr[minIndex], randArr[maxIndex]] = [randArr[maxIndex], randArr[minIndex]];
console.log("Задание 10 (массивы): Массив после замены min и max = " + randArr);

// Задание 11
function checkSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) return "Нарушение на позиции " + i;
    }
    return arr.reverse();
}
console.log("Задание 11 (массивы): " + checkSorted([5, 4, 3, 2, 1]));

// Задание 12
let modArr = [2, -3, 4, -5, 6];
modArr = modArr.map((v, i) => (v > 0 && i % 2 !== 0 ? v * 3 : v < 0 && i % 2 === 0 ? v / 5 : v));
console.log("Задание 12 (массивы): " + modArr);

// Задание 13
let matrix = Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => Math.floor(Math.random() * 20 - 10)));
console.log("Задание 13 (массивы): Числа в интервале [-5;7]: " + matrix.flat().filter(v => v >= -5 && v <= 7));

// Задание 14
function matrixSumProduct(matrix) {
    let rowSums = matrix.map(row => Math.max(...row)).reduce((a, b) => a + b, 0);
    let colProducts = matrix[0].map((_, j) => Math.min(...matrix.map(row => row[j]))).reduce((a, b) => a * b, 1);
    return { rowSums, colProducts };
}
console.log("Задание 14 (массивы): ", matrixSumProduct(matrix));

// Задание 15
let books = {
    "Пушкин": ["Евгений Онегин", "Капитанская дочка"],
    "Есенин": ["Стихи", "Москва кабацкая"],
    "Толстой": ["Война и мир", "Анна Каренина"]
};
for (let author in books) {
    console.log(`Задание 15 (массивы): ${author} - ${books[author].join(", ")}`);
}