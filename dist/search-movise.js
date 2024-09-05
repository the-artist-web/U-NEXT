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
const allFilesJsonSearchMovise = [
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
const fetchDataSearchMovise = function () {
    return __awaiter(this, void 0, void 0, function* () {
        let filesJsonList = [];
        try {
            for (const allFilesJosn of allFilesJsonSearchMovise) {
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
const fetchDataGenreSearchMovise = function () {
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
const fetchDataYearSearchMovise = function () {
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
const urlParamSearchMovise = new URLSearchParams(location.search);
const genre_search_list = document.querySelector("[data-genre-search-movise-list]");
const years_search_list = document.querySelector("[data-years-search-movise-list]");
const search_keyword = document.querySelector("[data-search-keyword]");
const btn_filter = document.querySelector("[data-btn-filter]");
const btn_genre = document.querySelector("[data-btn-genre]");
const btn_years = document.querySelector("[data-btn-year]");
let checkbox = document.querySelector('input[name="genre"]:checked');
function getGenreAndYears() {
    return __awaiter(this, void 0, void 0, function* () {
        const dataGenres = yield fetchDataGenreSearchMovise();
        const dataYears = yield fetchDataYearSearchMovise();
        if (genre_search_list) {
            dataGenres.forEach((ele) => {
                const label = document.createElement('label');
                label.classList.add("back-drop-link", "label-small");
                label.setAttribute('for', ele);
                label.innerHTML = `${ele} <input type='checkbox' id='${ele}' name='genre' value='${ele}'>`;
                genre_search_list.appendChild(label);
            });
        }
        if (years_search_list) {
            dataYears.forEach((ele) => {
                const label = document.createElement('label');
                label.classList.add("back-drop-link", "label-small");
                label.setAttribute('for', ele);
                label.innerHTML = `${ele} <input type='checkbox' id='${ele}' name='year' value='${ele}'>`;
                years_search_list.appendChild(label);
            });
        }
    });
}
;
getGenreAndYears();
btn_filter.addEventListener("click", () => {
    const keyword = search_keyword.value.toLowerCase().trim();
    const checkedGenres = document.querySelectorAll('input[name="genre"]:checked');
    const checkedYears = document.querySelectorAll('input[name="year"]:checked');
    const selectedGenres = Array.from(checkedGenres).map(checkbox => checkbox.value);
    const selectedYears = Array.from(checkedYears).map(checkbox => checkbox.value);
    if (keyword || selectedGenres.length || selectedYears.length) {
        const genreParam = selectedGenres.join(', ');
        const yearParam = selectedYears.join(', ');
        const searchParam = keyword;
        location.href = `?search=${searchParam}&genre=${genreParam}&year=${yearParam}`;
    }
    ;
});
search_keyword.addEventListener("keydown", (e) => { if (e.key === "Enter")
    btn_filter.click(); });
const searchUrl = urlParamSearchMovise.get("search");
const genresUrl = urlParamSearchMovise.get("genre");
const yearsUrl = urlParamSearchMovise.get("year");
const castUrl = urlParamSearchMovise.get("cast");
if (searchUrl) {
    search_keyword.value = searchUrl;
}
else {
    search_keyword.value = "";
}
;
if (genresUrl) {
    btn_genre.innerHTML = `<span>${genresUrl}</span> <i class="fa-solid fa-chevron-down"></i>`;
}
else {
    btn_genre.innerHTML = `<span>genres</span> <i class="fa-solid fa-chevron-down"></i>`;
}
;
if (yearsUrl) {
    btn_years.innerHTML = `<span>${yearsUrl}</span> <i class="fa-solid fa-chevron-down"></i>`;
}
else {
    btn_years.innerHTML = `<span>years</span> <i class="fa-solid fa-chevron-down"></i>`;
}
;
const searchMoviseList = document.querySelector("[data-search-movise-list]");
const loadMoreButton = document.querySelector("[data-btn-load-more]");
let itemsPerPageSearchMovise = 12;
let currentPageSearchMovise = 0;
let isLoading = false;
function getElement() {
    return __awaiter(this, void 0, void 0, function* () {
        if (isLoading)
            return;
        isLoading = true;
        const data = yield fetchDataSearchMovise();
        const langSearchUrl = searchUrl ? decodeURIComponent(searchUrl).trim().toLowerCase() : "";
        const langGenresUrl = genresUrl ? decodeURIComponent(genresUrl).split(',').map((genre) => genre.trim().toLowerCase()) : [];
        const langYearsUrl = yearsUrl ? decodeURIComponent(yearsUrl).split(',').map((year) => year.trim()) : [];
        const langCastUrl = castUrl ? decodeURIComponent(castUrl).trim().toLowerCase() : "";
        let filteredItems = data.filter((item) => {
            const filterSearch = langSearchUrl
                ? item.title.toLowerCase().includes(langSearchUrl)
                : true;
            const filterGenre = langGenresUrl.length > 0
                ? item.genres.some((genre) => langGenresUrl.includes(genre.toLowerCase()))
                : true;
            const filterYears = langYearsUrl.length > 0
                ? langYearsUrl.includes(item.year.toString())
                : true;
            const filterCast = langCastUrl
                ? item.cast.some((castMember) => castMember.toLowerCase().includes(langCastUrl))
                : true;
            return filterSearch && filterGenre && filterYears && filterCast;
        });
        filteredItems = filteredItems.slice(currentPageSearchMovise * itemsPerPageSearchMovise, (currentPageSearchMovise + 1) * itemsPerPageSearchMovise);
        filteredItems.forEach((ele) => {
            let HTMLGenre = ele.genres.join(', ');
            let HTMLCast = ele.cast.join(', ');
            const cardMoviseAll = document.createElement("a");
            cardMoviseAll.href = `./display-movise.html?movie=${ele.href}&genre=${HTMLGenre}`;
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
            genre.textContent = HTMLGenre;
            const cast = document.createElement("p");
            cast.style.display = "none";
            cast.textContent = HTMLCast;
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
            searchMoviseList.appendChild(cardMoviseAll);
        });
        if ((searchUrl || genresUrl || yearsUrl || castUrl) && searchMoviseList.children.length === 0) {
            searchMoviseList.innerHTML = `
            <p class="massage-error label-small">
                <i class="fa-solid fa-triangle-exclamation"></i> unavailable
            </p>`;
        }
        ;
        isLoading = false;
    });
}
;
function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        currentPageSearchMovise++;
        getElement();
    }
    ;
}
;
window.addEventListener('scroll', handleScroll);
getElement();
//# sourceMappingURL=search-movise.js.map