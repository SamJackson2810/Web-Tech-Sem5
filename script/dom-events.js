// DOM Manipulation Example: Change Text on Click
document.addEventListener("DOMContentLoaded", function() {
    const changeTextButton = document.getElementById("changeTextButton");
    changeTextButton.addEventListener("click", function() {
        document.getElementById("demo").innerHTML = "Karunya";
    });

    // Question 1: Find Shortest and Longest Word
    document.getElementById("findWordsButton").addEventListener("click", function() {
        const inputText = document.getElementById("inputText").value;
        const result = findShortestLongestWord(inputText);
        document.getElementById("shortest").textContent = result.shortest;
        document.getElementById("longest").textContent = result.longest;
    });

    // Question 2: Calculate BMI
    document.getElementById("calculateBMIButton").addEventListener("click", function() {
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value);
        const bmi = calculateBMI(weight, height);
        document.getElementById("bmi").textContent = bmi.toFixed(2);
    });

    // Question 3: Check if a Word is Present
    document.getElementById("checkWordButton").addEventListener("click", function() {
        const sentence = document.getElementById("sentence").value;
        const wordToCheck = document.getElementById("wordToCheck").value;
        const isPresent = isWordPresent(sentence, wordToCheck);
        document.getElementById("wordPresence").textContent = isPresent ? "Yes" : "No";
    });

    // Question 4: Convert Currency
    document.getElementById("convertCurrencyButton").addEventListener("click", function() {
        const amount = parseFloat(document.getElementById("amount").value);
        const fromRate = parseFloat(document.getElementById("fromRate").value);
        const toRate = parseFloat(document.getElementById("toRate").value);
        const convertedAmount = convertCurrency(amount, fromRate, toRate);
        document.getElementById("convertedAmount").textContent = convertedAmount.toFixed(2);
    });

    // Question 5: Reverse a Number
    document.getElementById("reverseNumberButton").addEventListener("click", function() {
        const number = parseInt(document.getElementById("number").value);
        const reversedNumber = reverseNumber(number);
        document.getElementById("reversedNumber").textContent = reversedNumber;
    });
});

// Question 1: Find Shortest and Longest Word
function findShortestLongestWord(str) {
    const words = str.split(' ');
    let shortest = words[0];
    let longest = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortest.length) {
            shortest = words[i];
        }
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return { shortest, longest };
}

// Question 2: Calculate BMI
function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    return bmi;
}

// Question 3: Check if a Word is Present
function isWordPresent(str, word) {
    return str.includes(word);
}

// Question 4: Convert Currency
function convertCurrency(amount, fromRate, toRate) {
    const convertedAmount = (amount / fromRate) * toRate;
    return convertedAmount;
}

// Question 5: Reverse a Number
function reverseNumber(num) {
    const reversed = parseInt(num.toString().split('').reverse().join(''));
    return reversed;
}
