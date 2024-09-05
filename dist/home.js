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
const fetchData2020 = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("./json/movies-2020s.json");
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
const fetchData2010 = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("./json/movies-2010s.json");
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
const fetchData2000 = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("./json/movies-2000s.json");
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
const fetchData1990 = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("./json/movies-1990s.json");
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
const fetchData1980 = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("./json/movies-1980s.json");
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
const fetchData1970 = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("./json/movies-1970s.json");
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
const fetchData1960 = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("./json/movies-1960s.json");
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
const fetchData1950 = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("./json/movies-1950s.json");
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
const fetchData1940 = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("./json/movies-1940s.json");
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
const fetchData1930 = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("./json/movies-1930s.json");
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
const fetchData1920 = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("./json/movies-1920s.json");
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
const fetchData1910 = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("./json/movies-1910s.json");
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
const fetchData1900 = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("./json/movies-1900s.json");
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
const fetchDataGenreHome = function () {
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
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    ;
    return array;
}
;
const genre_list_home = document.querySelectorAll("[data-grid-list]");
for (let i = 0; i < genre_list_home.length; i++) {
    genre_list_home[i].innerHTML += `<div class="genre-link-skeleton">`;
}
;
function getGenreListHome() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchDataGenreHome();
        for (let i = 0; i < genre_list_home.length; i++) {
            genre_list_home[i].innerHTML = "";
            data.forEach((genre) => {
                const genreItem = document.createElement("li");
                genreItem.classList.add("genre-item");
                const genreLink = document.createElement("a");
                genreLink.href = `./search-movise.html?genre=${genre}`;
                genreLink.classList.add("genre-link", "label-medium");
                genreLink.textContent = genre;
                genreItem.appendChild(genreLink);
                genre_list_home[i].appendChild(genreItem);
            });
        }
        ;
    });
}
;
getGenreListHome();
const data2020 = document.querySelector("[data-2020]");
data2020.innerHTML += `<div class="card-movise-skeleton"></div>`.repeat(24);
function get2020() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchData2020();
        const indexData = data.slice(0, 24);
        const shuffleData = shuffleArray(indexData);
        data2020.innerHTML = "";
        shuffleData.forEach((ele) => {
            let HTMLGenre = "";
            ele.genres.forEach((ele) => { HTMLGenre += `${ele}, `; });
            let HTMLCast = "";
            ele.cast.forEach((ele) => { HTMLCast += `${ele}, `; });
            const cardMovise = document.createElement("a");
            cardMovise.href = `display-movise.html?movie=${ele.href}&genre=${HTMLGenre.slice(0, -3)}`;
            cardMovise.classList.add("card-movise");
            const img = document.createElement("img");
            img.onerror = () => { img.src = './src/assets/image/image-inerorr.png'; };
            img.src = ele.thumbnail;
            img.alt = ele.title;
            img.loading = "lazy";
            img.classList.add("img-card", "img-cover");
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            const titleContent = document.createElement("h2");
            titleContent.classList.add("title-content", "label-large");
            titleContent.textContent = ele.title;
            const cardYear = document.createElement("div");
            cardYear.classList.add("card-year");
            const yearText = document.createElement("p");
            yearText.classList.add("year-text", "label-small");
            yearText.innerHTML = `<i class="fa-regular fa-calendar-days"></i> ${ele.year}`;
            const starList = document.createElement("div");
            starList.classList.add("star-list");
            starList.innerHTML = `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        `;
            const description = document.createElement("p");
            description.classList.add("description", "label-small");
            description.textContent = ele.extract;
            const genre = document.createElement("p");
            genre.style.display = "none";
            genre.textContent = HTMLGenre.slice(0, -3);
            const cast = document.createElement("p");
            cast.style.display = "none";
            cast.textContent = HTMLCast.slice(0, -3);
            cardMovise.appendChild(img);
            cardBody.appendChild(titleContent);
            cardBody.appendChild(cardYear);
            cardYear.appendChild(yearText);
            cardYear.appendChild(starList);
            cardBody.appendChild(cardYear);
            cardBody.appendChild(description);
            cardBody.appendChild(genre);
            cardBody.appendChild(cast);
            cardMovise.appendChild(cardBody);
            data2020.appendChild(cardMovise);
        });
        data2020.innerHTML += `
    <a href="all-movise.html" class="card-load-more label-large">
        load more <i class="fa-solid fa-share-from-square"></i>
    </a>
    `;
    });
}
;
get2020();
const data2010 = document.querySelector("[data-2010]");
data2010.innerHTML += `<div class="card-movise-skeleton"></div>`.repeat(24);
function get2010() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchData2010();
        const indexData = data.slice(0, 24);
        const shuffleData = shuffleArray(indexData);
        data2010.innerHTML = "";
        shuffleData.forEach((ele) => {
            let HTMLGenre = "";
            ele.genres.forEach((ele) => { HTMLGenre += `${ele}, `; });
            let HTMLCast = "";
            ele.cast.forEach((ele) => { HTMLCast += `${ele}, `; });
            const cardMovise = document.createElement("a");
            cardMovise.href = `display-movise.html?movie=${ele.href}&genre=${HTMLGenre.slice(0, -3)}`;
            cardMovise.classList.add("card-movise");
            const img = document.createElement("img");
            img.onerror = () => { img.src = './src/assets/image/image-inerorr.png'; };
            img.src = ele.thumbnail;
            img.alt = ele.title;
            img.loading = "lazy";
            img.classList.add("img-card", "img-cover");
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            const titleContent = document.createElement("h2");
            titleContent.classList.add("title-content", "label-large");
            titleContent.textContent = ele.title;
            const cardYear = document.createElement("div");
            cardYear.classList.add("card-year");
            const yearText = document.createElement("p");
            yearText.classList.add("year-text", "label-small");
            yearText.innerHTML = `<i class="fa-regular fa-calendar-days"></i> ${ele.year}`;
            const starList = document.createElement("div");
            starList.classList.add("star-list");
            starList.innerHTML = `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        `;
            const description = document.createElement("p");
            description.classList.add("description", "label-small");
            description.textContent = ele.extract;
            const genre = document.createElement("p");
            genre.style.display = "none";
            genre.textContent = HTMLGenre.slice(0, -3);
            const cast = document.createElement("p");
            cast.style.display = "none";
            cast.textContent = HTMLCast.slice(0, -3);
            cardMovise.appendChild(img);
            cardBody.appendChild(titleContent);
            cardBody.appendChild(cardYear);
            cardYear.appendChild(yearText);
            cardYear.appendChild(starList);
            cardBody.appendChild(cardYear);
            cardBody.appendChild(description);
            cardBody.appendChild(genre);
            cardBody.appendChild(cast);
            cardMovise.appendChild(cardBody);
            data2010.appendChild(cardMovise);
        });
        data2010.innerHTML += `
    <a href="all-movise.html" class="card-load-more label-large">
        load more <i class="fa-solid fa-share-from-square"></i>
    </a>
    `;
    });
}
;
get2010();
const data2000 = document.querySelector("[data-2000]");
data2000.innerHTML += `<div class="card-movise-skeleton"></div>`.repeat(24);
function get2000() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchData2000();
        const indexData = data.slice(0, 24);
        const shuffleData = shuffleArray(indexData);
        data2000.innerHTML = "";
        shuffleData.forEach((ele) => {
            let HTMLGenre = "";
            ele.genres.forEach((ele) => { HTMLGenre += `${ele}, `; });
            let HTMLCast = "";
            ele.cast.forEach((ele) => { HTMLCast += `${ele}, `; });
            const cardMovise = document.createElement("a");
            cardMovise.href = `display-movise.html?movie=${ele.href}&genre=${HTMLGenre.slice(0, -3)}`;
            cardMovise.classList.add("card-movise");
            const img = document.createElement("img");
            img.onerror = () => { img.src = './src/assets/image/image-inerorr.png'; };
            img.src = ele.thumbnail;
            img.alt = ele.title;
            img.loading = "lazy";
            img.classList.add("img-card", "img-cover");
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            const titleContent = document.createElement("h2");
            titleContent.classList.add("title-content", "label-large");
            titleContent.textContent = ele.title;
            const cardYear = document.createElement("div");
            cardYear.classList.add("card-year");
            const yearText = document.createElement("p");
            yearText.classList.add("year-text", "label-small");
            yearText.innerHTML = `<i class="fa-regular fa-calendar-days"></i> ${ele.year}`;
            const starList = document.createElement("div");
            starList.classList.add("star-list");
            starList.innerHTML = `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        `;
            const description = document.createElement("p");
            description.classList.add("description", "label-small");
            description.textContent = ele.extract;
            const genre = document.createElement("p");
            genre.style.display = "none";
            genre.textContent = HTMLGenre.slice(0, -3);
            const cast = document.createElement("p");
            cast.style.display = "none";
            cast.textContent = HTMLCast.slice(0, -3);
            cardMovise.appendChild(img);
            cardBody.appendChild(titleContent);
            cardBody.appendChild(cardYear);
            cardYear.appendChild(yearText);
            cardYear.appendChild(starList);
            cardBody.appendChild(cardYear);
            cardBody.appendChild(description);
            cardBody.appendChild(genre);
            cardBody.appendChild(cast);
            cardMovise.appendChild(cardBody);
            data2000.appendChild(cardMovise);
        });
        data2000.innerHTML += `
    <a href="all-movise.html" class="card-load-more label-large">
        load more <i class="fa-solid fa-share-from-square"></i>
    </a>
    `;
    });
}
;
get2000();
const data1990 = document.querySelector("[data-1990]");
data1990.innerHTML += `<div class="card-movise-skeleton"></div>`.repeat(24);
function get1990() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchData1990();
        const indexData = data.slice(0, 24);
        const shuffleData = shuffleArray(indexData);
        data1990.innerHTML = "";
        shuffleData.forEach((ele) => {
            let HTMLGenre = "";
            ele.genres.forEach((ele) => { HTMLGenre += `${ele}, `; });
            let HTMLCast = "";
            ele.cast.forEach((ele) => { HTMLCast += `${ele}, `; });
            const cardMovise = document.createElement("a");
            cardMovise.href = `display-movise.html?movie=${ele.href}&genre=${HTMLGenre.slice(0, -3)}`;
            cardMovise.classList.add("card-movise");
            const img = document.createElement("img");
            img.onerror = () => { img.src = './src/assets/image/image-inerorr.png'; };
            img.src = ele.thumbnail;
            img.alt = ele.title;
            img.loading = "lazy";
            img.classList.add("img-card", "img-cover");
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            const titleContent = document.createElement("h2");
            titleContent.classList.add("title-content", "label-large");
            titleContent.textContent = ele.title;
            const cardYear = document.createElement("div");
            cardYear.classList.add("card-year");
            const yearText = document.createElement("p");
            yearText.classList.add("year-text", "label-small");
            yearText.innerHTML = `<i class="fa-regular fa-calendar-days"></i> ${ele.year}`;
            const starList = document.createElement("div");
            starList.classList.add("star-list");
            starList.innerHTML = `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        `;
            const description = document.createElement("p");
            description.classList.add("description", "label-small");
            description.textContent = ele.extract;
            const genre = document.createElement("p");
            genre.style.display = "none";
            genre.textContent = HTMLGenre.slice(0, -3);
            const cast = document.createElement("p");
            cast.style.display = "none";
            cast.textContent = HTMLCast.slice(0, -3);
            cardMovise.appendChild(img);
            cardBody.appendChild(titleContent);
            cardBody.appendChild(cardYear);
            cardYear.appendChild(yearText);
            cardYear.appendChild(starList);
            cardBody.appendChild(cardYear);
            cardBody.appendChild(description);
            cardBody.appendChild(genre);
            cardBody.appendChild(cast);
            cardMovise.appendChild(cardBody);
            data1990.appendChild(cardMovise);
        });
        data1990.innerHTML += `
    <a href="all-movise.html" class="card-load-more label-large">
        load more <i class="fa-solid fa-share-from-square"></i>
    </a>
    `;
    });
}
;
get1990();
const data1980 = document.querySelector("[data-1980]");
data1980.innerHTML += `<div class="card-movise-skeleton"></div>`.repeat(24);
function get1980() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchData1980();
        const indexData = data.slice(48, 72);
        const shuffleData = shuffleArray(indexData);
        data1980.innerHTML = "";
        shuffleData.forEach((ele) => {
            let HTMLGenre = "";
            ele.genres.forEach((ele) => { HTMLGenre += `${ele}, `; });
            let HTMLCast = "";
            ele.cast.forEach((ele) => { HTMLCast += `${ele}, `; });
            const cardMovise = document.createElement("a");
            cardMovise.href = `display-movise.html?movie=${ele.href}&genre=${HTMLGenre.slice(0, -3)}`;
            cardMovise.classList.add("card-movise");
            const img = document.createElement("img");
            img.onerror = () => { img.src = './src/assets/image/image-inerorr.png'; };
            img.src = ele.thumbnail;
            img.alt = ele.title;
            img.loading = "lazy";
            img.classList.add("img-card", "img-cover");
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            const titleContent = document.createElement("h2");
            titleContent.classList.add("title-content", "label-large");
            titleContent.textContent = ele.title;
            const cardYear = document.createElement("div");
            cardYear.classList.add("card-year");
            const yearText = document.createElement("p");
            yearText.classList.add("year-text", "label-small");
            yearText.innerHTML = `<i class="fa-regular fa-calendar-days"></i> ${ele.year}`;
            const starList = document.createElement("div");
            starList.classList.add("star-list");
            starList.innerHTML = `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        `;
            const description = document.createElement("p");
            description.classList.add("description", "label-small");
            description.textContent = ele.extract;
            const genre = document.createElement("p");
            genre.style.display = "none";
            genre.textContent = HTMLGenre.slice(0, -3);
            const cast = document.createElement("p");
            cast.style.display = "none";
            cast.textContent = HTMLCast.slice(0, -3);
            cardMovise.appendChild(img);
            cardBody.appendChild(titleContent);
            cardBody.appendChild(cardYear);
            cardYear.appendChild(yearText);
            cardYear.appendChild(starList);
            cardBody.appendChild(cardYear);
            cardBody.appendChild(description);
            cardBody.appendChild(genre);
            cardBody.appendChild(cast);
            cardMovise.appendChild(cardBody);
            data1980.appendChild(cardMovise);
        });
        data1980.innerHTML += `
    <a href="all-movise.html" class="card-load-more label-large">
        load more <i class="fa-solid fa-share-from-square"></i>
    </a>
    `;
    });
}
;
get1980();
const data1970 = document.querySelector("[data-1970]");
data1970.innerHTML += `<div class="card-movise-skeleton"></div>`.repeat(24);
function get1970() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchData1970();
        const indexData = data.slice(48, 72);
        const shuffleData = shuffleArray(indexData);
        data1970.innerHTML = "";
        shuffleData.forEach((ele) => {
            let HTMLGenre = "";
            ele.genres.forEach((ele) => { HTMLGenre += `${ele}, `; });
            let HTMLCast = "";
            ele.cast.forEach((ele) => { HTMLCast += `${ele}, `; });
            const cardMovise = document.createElement("a");
            cardMovise.href = `display-movise.html?movie=${ele.href}&genre=${HTMLGenre.slice(0, -3)}`;
            cardMovise.classList.add("card-movise");
            const img = document.createElement("img");
            img.onerror = () => { img.src = './src/assets/image/image-inerorr.png'; };
            img.src = ele.thumbnail;
            img.alt = ele.title;
            img.loading = "lazy";
            img.classList.add("img-card", "img-cover");
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            const titleContent = document.createElement("h2");
            titleContent.classList.add("title-content", "label-large");
            titleContent.textContent = ele.title;
            const cardYear = document.createElement("div");
            cardYear.classList.add("card-year");
            const yearText = document.createElement("p");
            yearText.classList.add("year-text", "label-small");
            yearText.innerHTML = `<i class="fa-regular fa-calendar-days"></i> ${ele.year}`;
            const starList = document.createElement("div");
            starList.classList.add("star-list");
            starList.innerHTML = `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        `;
            const description = document.createElement("p");
            description.classList.add("description", "label-small");
            description.textContent = ele.extract;
            const genre = document.createElement("p");
            genre.style.display = "none";
            genre.textContent = HTMLGenre.slice(0, -3);
            const cast = document.createElement("p");
            cast.style.display = "none";
            cast.textContent = HTMLCast.slice(0, -3);
            cardMovise.appendChild(img);
            cardBody.appendChild(titleContent);
            cardBody.appendChild(cardYear);
            cardYear.appendChild(yearText);
            cardYear.appendChild(starList);
            cardBody.appendChild(cardYear);
            cardBody.appendChild(description);
            cardBody.appendChild(genre);
            cardBody.appendChild(cast);
            cardMovise.appendChild(cardBody);
            data1970.appendChild(cardMovise);
        });
        data1970.innerHTML += `
    <a href="all-movise.html" class="card-load-more label-large">
        load more <i class="fa-solid fa-share-from-square"></i>
    </a>
    `;
    });
}
;
get1970();
const data1960 = document.querySelector("[data-1960]");
data1960.innerHTML += `<div class="card-movise-skeleton"></div>`.repeat(24);
function get1960() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchData1960();
        const indexData = data.slice(48, 72);
        const shuffleData = shuffleArray(indexData);
        data1960.innerHTML = "";
        shuffleData.forEach((ele) => {
            let HTMLGenre = "";
            ele.genres.forEach((ele) => { HTMLGenre += `${ele}, `; });
            let HTMLCast = "";
            ele.cast.forEach((ele) => { HTMLCast += `${ele}, `; });
            const cardMovise = document.createElement("a");
            cardMovise.href = `display-movise.html?movie=${ele.href}&genre=${HTMLGenre.slice(0, -3)}`;
            cardMovise.classList.add("card-movise");
            const img = document.createElement("img");
            img.onerror = () => { img.src = './src/assets/image/image-inerorr.png'; };
            img.src = ele.thumbnail;
            img.alt = ele.title;
            img.loading = "lazy";
            img.classList.add("img-card", "img-cover");
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            const titleContent = document.createElement("h2");
            titleContent.classList.add("title-content", "label-large");
            titleContent.textContent = ele.title;
            const cardYear = document.createElement("div");
            cardYear.classList.add("card-year");
            const yearText = document.createElement("p");
            yearText.classList.add("year-text", "label-small");
            yearText.innerHTML = `<i class="fa-regular fa-calendar-days"></i> ${ele.year}`;
            const starList = document.createElement("div");
            starList.classList.add("star-list");
            starList.innerHTML = `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        `;
            const description = document.createElement("p");
            description.classList.add("description", "label-small");
            description.textContent = ele.extract;
            const genre = document.createElement("p");
            genre.style.display = "none";
            genre.textContent = HTMLGenre.slice(0, -3);
            const cast = document.createElement("p");
            cast.style.display = "none";
            cast.textContent = HTMLCast.slice(0, -3);
            cardMovise.appendChild(img);
            cardBody.appendChild(titleContent);
            cardBody.appendChild(cardYear);
            cardYear.appendChild(yearText);
            cardYear.appendChild(starList);
            cardBody.appendChild(cardYear);
            cardBody.appendChild(description);
            cardBody.appendChild(genre);
            cardBody.appendChild(cast);
            cardMovise.appendChild(cardBody);
            data1960.appendChild(cardMovise);
        });
        data1960.innerHTML += `
    <a href="all-movise.html" class="card-load-more label-large">
        load more <i class="fa-solid fa-share-from-square"></i>
    </a>
    `;
    });
}
;
get1960();
const data1950 = document.querySelector("[data-1950]");
data1950.innerHTML += `<div class="card-movise-skeleton"></div>`.repeat(24);
function get1950() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchData1950();
        const indexData = data.slice(48, 72);
        const shuffleData = shuffleArray(indexData);
        data1950.innerHTML = "";
        shuffleData.forEach((ele) => {
            let HTMLGenre = "";
            ele.genres.forEach((ele) => { HTMLGenre += `${ele}, `; });
            let HTMLCast = "";
            ele.cast.forEach((ele) => { HTMLCast += `${ele}, `; });
            const cardMovise = document.createElement("a");
            cardMovise.href = `display-movise.html?movie=${ele.href}&genre=${HTMLGenre.slice(0, -3)}`;
            cardMovise.classList.add("card-movise");
            const img = document.createElement("img");
            img.onerror = () => { img.src = './src/assets/image/image-inerorr.png'; };
            img.src = ele.thumbnail;
            img.alt = ele.title;
            img.loading = "lazy";
            img.classList.add("img-card", "img-cover");
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            const titleContent = document.createElement("h2");
            titleContent.classList.add("title-content", "label-large");
            titleContent.textContent = ele.title;
            const cardYear = document.createElement("div");
            cardYear.classList.add("card-year");
            const yearText = document.createElement("p");
            yearText.classList.add("year-text", "label-small");
            yearText.innerHTML = `<i class="fa-regular fa-calendar-days"></i> ${ele.year}`;
            const starList = document.createElement("div");
            starList.classList.add("star-list");
            starList.innerHTML = `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        `;
            const description = document.createElement("p");
            description.classList.add("description", "label-small");
            description.textContent = ele.extract;
            const genre = document.createElement("p");
            genre.style.display = "none";
            genre.textContent = HTMLGenre.slice(0, -3);
            const cast = document.createElement("p");
            cast.style.display = "none";
            cast.textContent = HTMLCast.slice(0, -3);
            cardMovise.appendChild(img);
            cardBody.appendChild(titleContent);
            cardBody.appendChild(cardYear);
            cardYear.appendChild(yearText);
            cardYear.appendChild(starList);
            cardBody.appendChild(cardYear);
            cardBody.appendChild(description);
            cardBody.appendChild(genre);
            cardBody.appendChild(cast);
            cardMovise.appendChild(cardBody);
            data1950.appendChild(cardMovise);
        });
        data1950.innerHTML += `
    <a href="all-movise.html" class="card-load-more label-large">
        load more <i class="fa-solid fa-share-from-square"></i>
    </a>
    `;
    });
}
;
get1950();
const data1940 = document.querySelector("[data-1940]");
data1940.innerHTML += `<div class="card-movise-skeleton"></div>`.repeat(24);
function get1940() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchData1940();
        const indexData = data.slice(48, 72);
        const shuffleData = shuffleArray(indexData);
        data1940.innerHTML = "";
        shuffleData.forEach((ele) => {
            let HTMLGenre = "";
            ele.genres.forEach((ele) => { HTMLGenre += `${ele}, `; });
            let HTMLCast = "";
            ele.cast.forEach((ele) => { HTMLCast += `${ele}, `; });
            const cardMovise = document.createElement("a");
            cardMovise.href = `display-movise.html?movie=${ele.href}&genre=${HTMLGenre.slice(0, -3)}`;
            cardMovise.classList.add("card-movise");
            const img = document.createElement("img");
            img.onerror = () => { img.src = './src/assets/image/image-inerorr.png'; };
            img.src = ele.thumbnail;
            img.alt = ele.title;
            img.loading = "lazy";
            img.classList.add("img-card", "img-cover");
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            const titleContent = document.createElement("h2");
            titleContent.classList.add("title-content", "label-large");
            titleContent.textContent = ele.title;
            const cardYear = document.createElement("div");
            cardYear.classList.add("card-year");
            const yearText = document.createElement("p");
            yearText.classList.add("year-text", "label-small");
            yearText.innerHTML = `<i class="fa-regular fa-calendar-days"></i> ${ele.year}`;
            const starList = document.createElement("div");
            starList.classList.add("star-list");
            starList.innerHTML = `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        `;
            const description = document.createElement("p");
            description.classList.add("description", "label-small");
            description.textContent = ele.extract;
            const genre = document.createElement("p");
            genre.style.display = "none";
            genre.textContent = HTMLGenre.slice(0, -3);
            const cast = document.createElement("p");
            cast.style.display = "none";
            cast.textContent = HTMLCast.slice(0, -3);
            cardMovise.appendChild(img);
            cardBody.appendChild(titleContent);
            cardBody.appendChild(cardYear);
            cardYear.appendChild(yearText);
            cardYear.appendChild(starList);
            cardBody.appendChild(cardYear);
            cardBody.appendChild(description);
            cardBody.appendChild(genre);
            cardBody.appendChild(cast);
            cardMovise.appendChild(cardBody);
            data1940.appendChild(cardMovise);
        });
        data1940.innerHTML += `
    <a href="all-movise.html" class="card-load-more label-large">
        load more <i class="fa-solid fa-share-from-square"></i>
    </a>
    `;
    });
}
;
get1940();
const data1930 = document.querySelector("[data-1930]");
data1930.innerHTML += `<div class="card-movise-skeleton"></div>`.repeat(24);
function get1930() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchData1930();
        const indexData = data.slice(48, 72);
        const shuffleData = shuffleArray(indexData);
        data1930.innerHTML = "";
        shuffleData.forEach((ele) => {
            let HTMLGenre = "";
            ele.genres.forEach((ele) => { HTMLGenre += `${ele}, `; });
            let HTMLCast = "";
            ele.cast.forEach((ele) => { HTMLCast += `${ele}, `; });
            const cardMovise = document.createElement("a");
            cardMovise.href = `display-movise.html?movie=${ele.href}&genre=${HTMLGenre.slice(0, -3)}`;
            cardMovise.classList.add("card-movise");
            const img = document.createElement("img");
            img.onerror = () => { img.src = './src/assets/image/image-inerorr.png'; };
            img.src = ele.thumbnail;
            img.alt = ele.title;
            img.loading = "lazy";
            img.classList.add("img-card", "img-cover");
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            const titleContent = document.createElement("h2");
            titleContent.classList.add("title-content", "label-large");
            titleContent.textContent = ele.title;
            const cardYear = document.createElement("div");
            cardYear.classList.add("card-year");
            const yearText = document.createElement("p");
            yearText.classList.add("year-text", "label-small");
            yearText.innerHTML = `<i class="fa-regular fa-calendar-days"></i> ${ele.year}`;
            const starList = document.createElement("div");
            starList.classList.add("star-list");
            starList.innerHTML = `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        `;
            const description = document.createElement("p");
            description.classList.add("description", "label-small");
            description.textContent = ele.extract;
            const genre = document.createElement("p");
            genre.style.display = "none";
            genre.textContent = HTMLGenre.slice(0, -3);
            const cast = document.createElement("p");
            cast.style.display = "none";
            cast.textContent = HTMLCast.slice(0, -3);
            cardMovise.appendChild(img);
            cardBody.appendChild(titleContent);
            cardBody.appendChild(cardYear);
            cardYear.appendChild(yearText);
            cardYear.appendChild(starList);
            cardBody.appendChild(cardYear);
            cardBody.appendChild(description);
            cardBody.appendChild(genre);
            cardBody.appendChild(cast);
            cardMovise.appendChild(cardBody);
            data1930.appendChild(cardMovise);
        });
        data1930.innerHTML += `
    <a href="all-movise.html" class="card-load-more label-large">
        load more <i class="fa-solid fa-share-from-square"></i>
    </a>
    `;
    });
}
;
get1930();
//# sourceMappingURL=home.js.map