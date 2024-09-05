"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fetchDataGenre = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("./src/assets/genre/genres.json");
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error("Error Fetch Data", error);
            return error;
        }
        ;
    });
};
const fetchDataYear = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("./src/assets/genre/genre-years.json");
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error("Error Fetch Data", error);
            return error;
        }
        ;
    });
};
const overflow = document.querySelector("[data-overflow]");
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", () => {
    if (scrollY >= 100) {
        header.classList.add("active");
    }
    else {
        header.classList.remove("active");
    }
    ;
});
const open_aside = document.querySelector("[data-open-aside]");
const close_aside = document.querySelector("[data-close-aside]");
const aside = document.querySelector("[data-aside]");
function openAside() {
    aside.classList.add("active");
    overflow.classList.add("active");
}
;
open_aside.addEventListener("click", openAside);
function closeAside() {
    aside.classList.remove("active");
    overflow.classList.remove("active");
}
;
close_aside.addEventListener("click", closeAside);
function closeAsdeOverflow() {
    aside.classList.remove("active");
    overflow.classList.remove("active");
}
;
overflow.addEventListener("click", closeAsdeOverflow);
const open_back_drop = document.querySelectorAll("[data-open-back-drop]");
const arrow_icon = document.querySelectorAll("[data-arrow-icon]");
const back_drop_list = document.querySelectorAll("[data-back-drop-list]");
for (let i = 0; i < open_back_drop.length; i++) {
    open_back_drop[i].addEventListener("click", () => {
        arrow_icon[i].classList.toggle("active");
        back_drop_list[i].classList.toggle("active");
    });
}
;
const genre_list = document.querySelector("[data-genre-list]");
const loadCircleGenre = document.createElement("div");
loadCircleGenre.classList.add("load-circle");
const circleGenre = document.createElement("span");
circleGenre.classList.add("circle");
loadCircleGenre.appendChild(circleGenre);
genre_list.appendChild(loadCircleGenre);
function getGenre() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchDataGenre();
        genre_list.innerHTML = "";
        data.forEach((genre) => {
            const backDropLink = document.createElement("a");
            backDropLink.href = `./search-movise.html?genre=${genre}`;
            backDropLink.classList.add("back-drop-link", "label-medium");
            backDropLink.textContent = genre;
            genre_list.appendChild(backDropLink);
        });
    });
}
;
getGenre();
const year_list = document.querySelector("[data-year-list]");
const loadCircleYear = document.createElement("div");
loadCircleYear.classList.add("load-circle");
const circleYear = document.createElement("span");
circleYear.classList.add("circle");
loadCircleYear.appendChild(circleYear);
year_list.appendChild(loadCircleYear);
function getYear() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchDataYear();
        year_list.innerHTML = "";
        data.forEach((year) => {
            const backDropLink = document.createElement("a");
            backDropLink.href = `./search-movise.html?year=${year}`;
            backDropLink.classList.add("back-drop-link", "label-medium");
            backDropLink.textContent = year;
            year_list.appendChild(backDropLink);
        });
    });
}
;
getYear();
//# sourceMappingURL=components.js.map