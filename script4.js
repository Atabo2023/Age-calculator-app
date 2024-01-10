"use strict";

const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");
const img = document.querySelector(".img");

const dayOtp = document.getElementById("dd");
const monthOtp = document.getElementById("mm");
const yearOtp = document.getElementById("yy");

const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);
// form.addEventListener("submit", handleSubmit);

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const inputs = document.querySelectorAll("input");
}

function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (dayInp.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }

    if (monthInp.value > month) {
      month = month + 12;
      year = year - 1;
    }
  }

  const d = day - dayInp.value;
  const m = month - monthInp.value;
  const y = year - yearInp.value;

  dayOtp.innerHTML = d;
  monthOtp.innerHTML = m;
  yearOtp.innerHTML = y;
}
