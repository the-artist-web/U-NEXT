/*----------------------------------------------------------*\
  #GET FETCH DATA
\*----------------------------------------------------------*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var filesJsonAllDisplayMovise = [
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
var fetchDataAllJsonDisplayMovise = function () {
    return __awaiter(this, void 0, void 0, function () {
        var allMovise, _i, filesJsonAllDisplayMovise_1, filesJson, response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    allMovise = [];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    _i = 0, filesJsonAllDisplayMovise_1 = filesJsonAllDisplayMovise;
                    _a.label = 2;
                case 2:
                    if (!(_i < filesJsonAllDisplayMovise_1.length)) return [3 /*break*/, 6];
                    filesJson = filesJsonAllDisplayMovise_1[_i];
                    return [4 /*yield*/, fetch(filesJson)];
                case 3:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 4:
                    data = _a.sent();
                    allMovise.push.apply(allMovise, data);
                    _a.label = 5;
                case 5:
                    _i++;
                    return [3 /*break*/, 2];
                case 6:
                    ;
                    return [2 /*return*/, allMovise];
                case 7:
                    error_1 = _a.sent();
                    console.error("Error Fetch Data", error_1);
                    return [2 /*return*/, error_1];
                case 8:
                    ;
                    return [2 /*return*/];
            }
        });
    });
};
/*----------------------------------------------------------*\
  #GET URL PARAMS
\*----------------------------------------------------------*/
var urlParam = new URLSearchParams(location.search);
/*----------------------------------------------------------*\
  #SHUFFLE ARRAY
\*----------------------------------------------------------*/
function shuffleArrayDisplayMovise(array) {
    var _a;
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
    }
    ;
    return array;
}
;
/*----------------------------------------------------------*\
  #SAVED MOVISE
\*----------------------------------------------------------*/
/**
 * save
 */
function savepost(postTitle) {
    try {
        var likedPosts = JSON.parse(localStorage.getItem("likedPost") || "[]");
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
/**
 * unsaved
 */
function unsavedpost(postTitle) {
    try {
        var likedPosts = JSON.parse(localStorage.getItem("likedPost") || "[]");
        likedPosts = likedPosts.filter(function (title) { return title !== postTitle; });
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
/*----------------------------------------------------------*\
  #GET BODY MOVISE
\*----------------------------------------------------------*/
var body_movise = document.querySelector("[data-body-movise]");
// skeleton
var loadCircleDisplayMovise = document.createElement("div");
loadCircleDisplayMovise.classList.add("load-circle");
var circleDisplayMovise = document.createElement("span");
circleDisplayMovise.classList.add("circle");
loadCircleDisplayMovise.appendChild(circleDisplayMovise);
body_movise.appendChild(loadCircleDisplayMovise);
function getBodyMovise() {
    return __awaiter(this, void 0, void 0, function () {
        var data, langParam, lang, filter, buttons;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchDataAllJsonDisplayMovise()];
                case 1:
                    data = _a.sent();
                    langParam = urlParam.get("movie");
                    lang = langParam ? decodeURIComponent(langParam).toLowerCase() : "";
                    filter = data.filter(function (ele) {
                        return ele.href && typeof ele.href === 'string' && ele.href.toLowerCase().includes(lang);
                    });
                    body_movise.innerHTML = "";
                    filter.forEach(function (ele) {
                        // for loop
                        var HTMLGenre = "";
                        ele.genres.forEach(function (genre) { HTMLGenre += "<a href=\"./search-movise.html?genre=".concat(genre, "\" class=\"tag-genre label-small\">").concat(genre, "</a>"); });
                        var HTMLCast = "";
                        ele.cast.forEach(function (cast) {
                            HTMLCast += "\n            <a href=\"./search-movise.html?cast=".concat(cast, "\" class=\"cast-box label-medium\">\n                ").concat(cast, "\n                <i class=\"fa-solid fa-angle-right\"></i>\n            </a>\n            ");
                        });
                        // get element
                        var container = document.createElement("div");
                        container.classList.add("container");
                        var img = document.createElement("img");
                        img.src = ele.thumbnail;
                        img.alt = ele.title;
                        img.loading = "lazy";
                        img.onerror = function () { img.src = './src/assets/image/image-inerorr.png'; };
                        img.classList.add("img-body-movise", "img-cover");
                        var bodyMoviseContent = document.createElement("div");
                        bodyMoviseContent.classList.add("body-movise-content");
                        var titleContent = document.createElement("h1");
                        titleContent.classList.add("title-content", "display-large");
                        titleContent.textContent = ele.title;
                        var tagsGenreList = document.createElement("div");
                        tagsGenreList.classList.add("tags-genre-list");
                        tagsGenreList.innerHTML = HTMLGenre;
                        var yearList = document.createElement("div");
                        yearList.classList.add("year-list");
                        var starList = document.createElement("div");
                        starList.classList.add("star-list");
                        starList.innerHTML = "\n        <i class=\"fa-solid fa-star\"></i>\n        <i class=\"fa-solid fa-star\"></i>\n        <i class=\"fa-solid fa-star\"></i>\n        <i class=\"fa-solid fa-star\"></i>\n        <i class=\"fa-solid fa-star-half\"></i>\n        ";
                        var textYear = document.createElement("p");
                        textYear.classList.add("text-year", "label-small");
                        textYear.innerHTML = "<i class=\"fa-regular fa-calendar-days\"></i> ".concat(ele.year);
                        var description = document.createElement("p");
                        description.classList.add("description", "label-small");
                        description.textContent = ele.extract;
                        var castList = document.createElement("div");
                        castList.classList.add("cast-list");
                        castList.innerHTML = HTMLCast;
                        var save = document.createElement("button");
                        save.classList.add("btn-primary", "save", "label-medium");
                        save.innerHTML = "<i class=\"fa-solid fa-bookmark\"></i> save";
                        save.setAttribute("data-save", "");
                        save.setAttribute("data-save", ele.title);
                        var unsaved = document.createElement("button");
                        unsaved.classList.add("btn-secondary", "unsaved", "label-medium");
                        unsaved.innerHTML = "<i class=\"fa-regular fa-bookmark\"></i> unsaved";
                        unsaved.setAttribute("data-unsaved", "");
                        unsaved.setAttribute("data-unsaved", ele.title);
                        if (localStorage.getItem("save: ".concat(ele.title)) === "true") {
                            save.classList.add("active");
                            unsaved.classList.add("active");
                        }
                        ;
                        save.addEventListener("click", function () {
                            save.classList.add("active");
                            unsaved.classList.add("active");
                            localStorage.setItem("save: ".concat(ele.title), "true");
                            savepost(ele.title);
                        });
                        unsaved.addEventListener("click", function () {
                            save.classList.remove("active");
                            unsaved.classList.remove("active");
                            localStorage.setItem("save: ".concat(ele.title), "false");
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
                    buttons = document.querySelectorAll('[data-save], [data-unsaved]');
                    buttons.forEach(function (button) {
                        var postId = button.getAttribute('data-save') || button.getAttribute('data-unsaved');
                        var btnSave = document.querySelector("[data-save='".concat(postId, "']"));
                        var btnUnsave = document.querySelector("[data-unsaved='".concat(postId, "']"));
                        if (btnSave && btnUnsave && localStorage.getItem("saved-".concat(postId)) === 'true') {
                            btnSave.classList.add('active');
                            btnUnsave.classList.add('active');
                        }
                        ;
                    });
                    return [2 /*return*/];
            }
        });
    });
}
;
getBodyMovise();
/*----------------------------------------------------------*\
  #GET RECOMMENDED LIST
\*----------------------------------------------------------*/
var recommended_list = document.querySelector("[data-recommended-list]");
// skeleton
recommended_list.innerHTML += "<div class=\"card-movise-skeleton\"></div>".repeat(24);
function getRecommendedList() {
    return __awaiter(this, void 0, void 0, function () {
        var data, indexData, shuffleData, langParam, genres, filter;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchDataAllJsonDisplayMovise()];
                case 1:
                    data = _a.sent();
                    indexData = data.slice(0, 70);
                    shuffleData = shuffleArrayDisplayMovise(indexData);
                    langParam = urlParam.get("genre");
                    genres = langParam ? langParam.split(",").map(function (genre) { return genre.trim().toLowerCase(); }) : [];
                    filter = shuffleData.filter(function (ele) {
                        return ele.genres.some(function (genre) { return genres.includes(genre.toLowerCase()); });
                    });
                    recommended_list.innerHTML = "";
                    filter.forEach(function (ele) {
                        // for loop genre
                        var HTMLGenre = "";
                        ele.genres.forEach(function (ele) { HTMLGenre += "".concat(ele, ", "); });
                        var HTMLCast = "";
                        ele.cast.forEach(function (ele) { HTMLCast += "".concat(ele, ", "); });
                        // create element
                        var cardMovise = document.createElement("a");
                        cardMovise.href = "display-movise.html?movie=".concat(ele.href, "&genre=").concat(HTMLGenre.slice(0, -3));
                        cardMovise.classList.add("card-movise");
                        var img = document.createElement("img");
                        img.onerror = function () { img.src = './src/assets/image/image-inerorr.png'; };
                        img.src = ele.thumbnail;
                        img.alt = ele.title;
                        img.loading = "lazy";
                        img.classList.add("img-card", "img-cover");
                        var cardBody = document.createElement("div");
                        cardBody.classList.add("card-body");
                        var titleContent = document.createElement("h2");
                        titleContent.classList.add("title-content", "label-large");
                        titleContent.textContent = ele.title;
                        var cardYear = document.createElement("div");
                        cardYear.classList.add("card-year");
                        var yearText = document.createElement("p");
                        yearText.classList.add("year-text", "label-small");
                        yearText.innerHTML = "<i class=\"fa-regular fa-calendar-days\"></i> ".concat(ele.year);
                        var starList = document.createElement("div");
                        starList.classList.add("star-list");
                        starList.innerHTML = "\n        <i class=\"fa-solid fa-star\"></i>\n        <i class=\"fa-solid fa-star\"></i>\n        <i class=\"fa-solid fa-star\"></i>\n        <i class=\"fa-solid fa-star\"></i>\n        <i class=\"fa-solid fa-star-half-stroke\"></i>\n        ";
                        var description = document.createElement("p");
                        description.classList.add("description", "label-small");
                        description.textContent = ele.extract;
                        var genre = document.createElement("p");
                        genre.style.display = "none";
                        genre.textContent = HTMLGenre.slice(0, -3);
                        var cast = document.createElement("p");
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
                    recommended_list.innerHTML += "\n    <a href=\"all-movise.html\" class=\"card-load-more label-large\" data-card-load-more>\n        load more <i class=\"fa-solid fa-share-from-square\"></i>\n    </a>\n    ";
                    return [2 /*return*/];
            }
        });
    });
}
;
getRecommendedList();
