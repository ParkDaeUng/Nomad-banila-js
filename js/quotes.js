const quotes = [
    {
        quote : "quotes 01",
        author : "day01",
    },
    {
        quote : "quotes 02",
        author : "day02",
    },
    {
        quote : "quotes 03",
        author : "day03",
    },
    {
        quote : "quotes 04",
        author : "day04",
    },
    {
        quote : "quotes 05",
        author : "day05",
    },
    {
        quote : "quotes 06",
        author : "day06",
    },
    {
        quote : "quotes 07",
        author : "day07",
    },
    {
        quote : "quotes 08",
        author : "day08",
    },
    {
        quote : "quotes 09",
        author : "day09",
    },
    {
        quote : "quotes 10",
        author : "day10",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//Math.round(1.4);  소수점 반올림
//Math.ceil(1.1);   소수점 올림
//Math.floor(1.7);  소수점 버림
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;