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
const allFilesJsonSavedMovise = [
    "./json/movies-2020s.json",
    "./json/movies-2010s.json",
    "./json/movies-2000s.json",
    "./json/movies-1990s.json",
    "./json/movies-1980s.json",
    "./json/movies-1970s.json",
    "./json/movies-1960s.json",
    "./json/movies-1950s.json",
    "./json/movies-1940s.json",
    "./json/movies-1930s.json",
    "./json/movies-1920s.json",
    "./json/movies-1910s.json",
    "./json/movies-1900s.json"
];
const fetchDataSavedMovise = function () {
    return __awaiter(this, void 0, void 0, function* () {
        let filesJsonList = [];
        try {
            for (const allFilesJosn of allFilesJsonSavedMovise) {
                const response = yield fetch(allFilesJosn);
                const data = yield response.json();
                filesJsonList.push(...data);
            }
            ;
            return filesJsonList;
        }
        catch (error) {
            console.error("Error Fetch Data", error);
            return error;
        }
        ;
    });
};
const urlParamsSavedMovise = new URLSearchParams(location.search);
const saved_movise_list = document.querySelector("[data-saved-movise-list]");
window.onload = function () {
    let likedPosts = JSON.parse(localStorage.getItem("likedPost") || "[]");
    localStorage.setItem("likedPost", JSON.stringify(likedPosts));
};
saved_movise_list.innerHTML += `<div class="card-movise-all-skeleton"></div>`.repeat(60);
function getSavedMovise() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchDataSavedMovise();
        saved_movise_list.innerHTML = "";
        let cardSave = JSON.parse(localStorage.likedPost);
        data.forEach((ele) => {
            let HTMLGenre = "";
            ele.genres.forEach((ele) => { HTMLGenre += `${ele}, `; });
            let HTMLCast = "";
            ele.cast.forEach((ele) => { HTMLCast += `${ele}, `; });
            if (cardSave.length === 0) {
                saved_movise_list.innerHTML = `<p class="massage-error label-small"><i class="fa-solid fa-shield-heart"></i> This page is not available</p>`;
            }
            else {
                if (cardSave.includes(ele.title)) {
                    const cardMoviseAll = document.createElement("a");
                    cardMoviseAll.href = `./display-movise.html?movie=${ele.href}&genre=${HTMLGenre.slice(0, -3)}`;
                    cardMoviseAll.classList.add("card-movise-all");
                    const figure = document.createElement("figure");
                    const img = document.createElement("img");
                    img.src = ele.thumbnail;
                    img.alt = ele.title;
                    img.loading = "lazy";
                    img.onerror = () => { img.src = './src/assets/image/image-inerorr.png'; };
                    img.classList.add("img-card", "img-cover");
                    const titleContent = document.createElement("h1");
                    titleContent.classList.add("title-content", "label-large");
                    titleContent.textContent = ele.title;
                    const allBody = document.createElement("div");
                    allBody.classList.add("all-body");
                    const yearList = document.createElement("div");
                    yearList.classList.add("year-list");
                    const starList = document.createElement("div");
                    starList.classList.add("star-list");
                    starList.innerHTML = `
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>`;
                    const yearText = document.createElement("p");
                    yearText.classList.add("year-text", "label-small");
                    yearText.innerHTML = `<i class="fa-regular fa-calendar-days"></i> ${ele.year}`;
                    const description = document.createElement("p");
                    description.classList.add("description", "label-small");
                    description.textContent = ele.extract;
                    const genre = document.createElement("p");
                    genre.style.display = "none";
                    genre.textContent = HTMLGenre.slice(0, -3);
                    const cast = document.createElement("p");
                    cast.style.display = "none";
                    cast.textContent = HTMLCast.slice(0, -3);
                    cardMoviseAll.appendChild(figure);
                    figure.appendChild(img);
                    figure.appendChild(titleContent);
                    yearList.appendChild(starList);
                    yearList.appendChild(yearText);
                    allBody.appendChild(yearList);
                    allBody.appendChild(description);
                    allBody.appendChild(genre);
                    allBody.appendChild(cast);
                    cardMoviseAll.appendChild(allBody);
                    saved_movise_list.appendChild(cardMoviseAll);
                }
                ;
            }
            ;
        });
    });
}
;
getSavedMovise();
//# sourceMappingURL=saved-movise.js.map