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
const filesJsonAllDisplayMovise = [
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
const fetchDataAllJsonDisplayMovise = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const allMovise = [];
        try {
            for (const filesJson of filesJsonAllDisplayMovise) {
                const response = yield fetch(filesJson);
                const data = yield response.json();
                allMovise.push(...data);
            }
            ;
            return allMovise;
        }
        catch (error) {
            console.error("Error Fetch Data", error);
            return error;
        }
        ;
    });
};
const urlParam = new URLSearchParams(location.search);
function shuffleArrayDisplayMovise(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    ;
    return array;
}
;
function savepost(postTitle) {
    try {
        let likedPosts = JSON.parse(localStorage.getItem("likedPost") || "[]");
        if (!likedPosts.includes(postTitle)) {
            likedPosts.push(postTitle);
            localStorage.setItem("likedPost", JSON.stringify(likedPosts));
        }
        ;
        return postTitle;
    }
    catch (error) {
        console.error("Error Save Post", error);
        return error;
    }
    ;
}
;
function unsavedpost(postTitle) {
    try {
        let likedPosts = JSON.parse(localStorage.getItem("likedPost") || "[]");
        likedPosts = likedPosts.filter((title) => title !== postTitle);
        localStorage.setItem("likedPost", JSON.stringify(likedPosts));
        return postTitle;
    }
    catch (error) {
        console.error("Error Save Post", error);
        return error;
    }
    ;
}
;
const body_movise = document.querySelector("[data-body-movise]");
const loadCircleDisplayMovise = document.createElement("div");
loadCircleDisplayMovise.classList.add("load-circle");
const circleDisplayMovise = document.createElement("span");
circleDisplayMovise.classList.add("circle");
loadCircleDisplayMovise.appendChild(circleDisplayMovise);
body_movise.appendChild(loadCircleDisplayMovise);
function getBodyMovise() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchDataAllJsonDisplayMovise();
        const langParam = urlParam.get("movie");
        const lang = langParam ? decodeURIComponent(langParam).toLowerCase() : "";
        const filter = data.filter((ele) => {
            return ele.href && typeof ele.href === 'string' && ele.href.toLowerCase().includes(lang);
        });
        body_movise.innerHTML = "";
        filter.forEach((ele) => {
            let HTMLGenre = "";
            ele.genres.forEach((genre) => { HTMLGenre += `<a href="./search-movise.html?genre=${genre}" class="tag-genre label-small">${genre}</a>`; });
            let HTMLCast = "";
            ele.cast.forEach((cast) => {
                HTMLCast += `
            <a href="./search-movise.html?cast=${cast}" class="cast-box label-medium">
                ${cast}
                <i class="fa-solid fa-angle-right"></i>
            </a>
            `;
            });
            const container = document.createElement("div");
            container.classList.add("container");
            const img = document.createElement("img");
            img.src = ele.thumbnail;
            img.alt = ele.title;
            img.loading = "lazy";
            img.onerror = () => { img.src = './src/assets/image/image-inerorr.png'; };
            img.classList.add("img-body-movise", "img-cover");
            const bodyMoviseContent = document.createElement("div");
            bodyMoviseContent.classList.add("body-movise-content");
            const titleContent = document.createElement("h1");
            titleContent.classList.add("title-content", "display-large");
            titleContent.textContent = ele.title;
            const tagsGenreList = document.createElement("div");
            tagsGenreList.classList.add("tags-genre-list");
            tagsGenreList.innerHTML = HTMLGenre;
            const yearList = document.createElement("div");
            yearList.classList.add("year-list");
            const starList = document.createElement("div");
            starList.classList.add("star-list");
            starList.innerHTML = `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half"></i>
        `;
            const textYear = document.createElement("p");
            textYear.classList.add("text-year", "label-small");
            textYear.innerHTML = `<i class="fa-regular fa-calendar-days"></i> ${ele.year}`;
            const description = document.createElement("p");
            description.classList.add("description", "label-small");
            description.textContent = ele.extract;
            const castList = document.createElement("div");
            castList.classList.add("cast-list");
            castList.innerHTML = HTMLCast;
            const save = document.createElement("button");
            save.classList.add("btn-primary", "save", "label-medium");
            save.innerHTML = `<i class="fa-solid fa-bookmark"></i> save`;
            save.setAttribute("data-save", "");
            save.setAttribute("data-save", ele.title);
            const unsaved = document.createElement("button");
            unsaved.classList.add("btn-secondary", "unsaved", "label-medium");
            unsaved.innerHTML = `<i class="fa-regular fa-bookmark"></i> unsaved`;
            unsaved.setAttribute("data-unsaved", "");
            unsaved.setAttribute("data-unsaved", ele.title);
            if (localStorage.getItem(`save: ${ele.title}`) === "true") {
                save.classList.add("active");
                unsaved.classList.add("active");
            }
            ;
            save.addEventListener("click", () => {
                save.classList.add("active");
                unsaved.classList.add("active");
                localStorage.setItem(`save: ${ele.title}`, "true");
                savepost(ele.title);
            });
            unsaved.addEventListener("click", () => {
                save.classList.remove("active");
                unsaved.classList.remove("active");
                localStorage.setItem(`save: ${ele.title}`, "false");
                unsavedpost(ele.title);
            });
            container.appendChild(img);
            container.appendChild(bodyMoviseContent);
            bodyMoviseContent.appendChild(titleContent);
            bodyMoviseContent.appendChild(tagsGenreList);
            yearList.appendChild(starList);
            yearList.appendChild(textYear);
            bodyMoviseContent.appendChild(yearList);
            bodyMoviseContent.appendChild(description);
            bodyMoviseContent.appendChild(castList);
            bodyMoviseContent.appendChild(save);
            bodyMoviseContent.appendChild(unsaved);
            body_movise.appendChild(container);
        });
        const buttons = document.querySelectorAll('[data-save], [data-unsaved]');
        buttons.forEach((button) => {
            const postId = button.getAttribute('data-save') || button.getAttribute('data-unsaved');
            const btnSave = document.querySelector(`[data-save='${postId}']`);
            const btnUnsave = document.querySelector(`[data-unsaved='${postId}']`);
            if (btnSave && btnUnsave && localStorage.getItem(`saved-${postId}`) === 'true') {
                btnSave.classList.add('active');
                btnUnsave.classList.add('active');
            }
            ;
        });
    });
}
;
getBodyMovise();
const recommended_list = document.querySelector("[data-recommended-list]");
recommended_list.innerHTML += `<div class="card-movise-skeleton"></div>`.repeat(24);
function getRecommendedList() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchDataAllJsonDisplayMovise();
        const indexData = data.slice(0, 70);
        const shuffleData = shuffleArrayDisplayMovise(indexData);
        const langParam = urlParam.get("genre");
        const genres = langParam ? langParam.split(",").map(genre => genre.trim().toLowerCase()) : [];
        const filter = shuffleData.filter((ele) => {
            return ele.genres.some((genre) => genres.includes(genre.toLowerCase()));
        });
        recommended_list.innerHTML = "";
        filter.forEach((ele) => {
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
            recommended_list.appendChild(cardMovise);
        });
        recommended_list.innerHTML += `
    <a href="all-movise.html" class="card-load-more label-large" data-card-load-more>
        load more <i class="fa-solid fa-share-from-square"></i>
    </a>
    `;
    });
}
;
getRecommendedList();
//# sourceMappingURL=display-movise.js.map