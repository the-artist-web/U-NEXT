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
const allJsonSearchGenre = [
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
    "./json/movies-1900s.json",
];
const fetchDataallMoviseSearchGenre = function () {
    return __awaiter(this, void 0, void 0, function* () {
        let allMoviseSearchGenre = [];
        try {
            for (const allMovise of allJsonSearchGenre) {
                const response = yield fetch(allMovise);
                const data = yield response.json();
                allMoviseSearchGenre.push(...data);
            }
            ;
            return allMoviseSearchGenre;
        }
        catch (error) {
            console.error("Error Fetch Data", error);
            return error;
        }
        ;
    });
};
const fetchDataGenreSearchGenre = function () {
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
const fetchDataYearSearchGenre = function () {
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
const search = document.querySelector("[data-search]");
const backPage = document.querySelector("[data-back-page]");
search.addEventListener("keydown", (e) => { if (search.value.toLowerCase() && e.key === "Enter")
    location.href = `search-movise.html?search=${search.value.toLowerCase()}`; });
backPage.addEventListener("click", () => { window.history.back(); });
const searchbar = document.querySelector("[data-searchbar]");
function getSearchbar() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchDataallMoviseSearchGenre();
        if (search.value.toLowerCase() != "") {
            searchbar.classList.add("active");
        }
        else {
            searchbar.classList.remove("active");
        }
        ;
        searchbar.innerHTML = "";
        if (search.value.length < 2)
            return;
        const MAX_RESULTS = 10;
        const filter = data.filter((ele) => ele.title.toLowerCase().includes(search.value.toLowerCase())).slice(0, MAX_RESULTS);
        filter.forEach((ele) => {
            let HTMLGener = "";
            ele.genres.forEach((ele) => { HTMLGener += `${ele}, `; });
            let HTMLCast = "";
            ele.cast.forEach((ele) => { HTMLCast += `${ele}, `; });
            const cardSearchbar = document.createElement("a");
            cardSearchbar.href = `display-movise.html?movie=${ele.href}&genre=${HTMLGener.slice(0, -3)}`;
            cardSearchbar.classList.add("card-searchbar");
            const img = document.createElement("img");
            img.src = ele.thumbnail;
            img.alt = ele.title;
            img.loading = "lazy";
            img.classList.add("img-card", "img-cover");
            img.onerror = () => { img.src = './src/assets/image/image-inerorr.png'; };
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            const titleContent = document.createElement("h1");
            titleContent.classList.add("title-content", "label-medium");
            titleContent.textContent = ele.title;
            const yearText = document.createElement("p");
            yearText.classList.add("year-text", "label-small");
            yearText.innerHTML = `<i class="fa-regular fa-calendar-days"></i> ${ele.year}`;
            const description = document.createElement("p");
            description.classList.add("description", "label-small");
            description.textContent = ele.extract;
            const genre = document.createElement("p");
            genre.style.display = "none";
            genre.textContent = HTMLGener.slice(0, -3);
            const cast = document.createElement("p");
            cast.style.display = "none";
            cast.textContent = HTMLCast.slice(0, -3);
            cardSearchbar.appendChild(img);
            cardBody.appendChild(titleContent);
            cardBody.appendChild(yearText);
            cardBody.appendChild(description);
            cardBody.appendChild(genre);
            cardBody.appendChild(cast);
            cardSearchbar.appendChild(cardBody);
            searchbar.appendChild(cardSearchbar);
        });
    });
}
;
search.addEventListener("keyup", getSearchbar);
const genres_list = document.querySelector("[data-genre]");
genres_list.innerHTML = `<div class="btn-genre-skeleton"></div>`.repeat(20);
function getGenres() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchDataGenreSearchGenre();
        genres_list.innerHTML = "";
        data.forEach((ele) => {
            const btnGenre = document.createElement("a");
            btnGenre.href = `./search-movise.html?genre=${ele}`;
            btnGenre.classList.add("btn-genre", "label-medium");
            btnGenre.textContent = ele;
            genres_list.appendChild(btnGenre);
        });
    });
}
;
getGenres();
const years_list = document.querySelector("[data-year]");
years_list.innerHTML = `<div class="btn-genre-skeleton"></div>`.repeat(20);
function getYears() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchDataYearSearchGenre();
        years_list.innerHTML = "";
        data.forEach((ele) => {
            const btnGenre = document.createElement("a");
            btnGenre.href = `./search-movise.html?year=${ele}`;
            btnGenre.classList.add("btn-genre", "label-medium");
            btnGenre.textContent = ele;
            years_list.appendChild(btnGenre);
        });
    });
}
;
getYears();
//# sourceMappingURL=search-genre.js.map