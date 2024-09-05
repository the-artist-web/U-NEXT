/*----------------------------------------------------------*\
  #GET FETCH API
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
/**
 * get all files
 */
var allFilesJsonSearchMovise = [
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
var fetchDataSearchMovise = function () {
    return __awaiter(this, void 0, void 0, function () {
        var filesJsonList, _i, allFilesJsonSearchMovise_1, allFilesJosn, response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filesJsonList = [];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    _i = 0, allFilesJsonSearchMovise_1 = allFilesJsonSearchMovise;
                    _a.label = 2;
                case 2:
                    if (!(_i < allFilesJsonSearchMovise_1.length)) return [3 /*break*/, 6];
                    allFilesJosn = allFilesJsonSearchMovise_1[_i];
                    return [4 /*yield*/, fetch(allFilesJosn)];
                case 3:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 4:
                    data = _a.sent();
                    filesJsonList.push.apply(filesJsonList, data);
                    _a.label = 5;
                case 5:
                    _i++;
                    return [3 /*break*/, 2];
                case 6:
                    ;
                    return [2 /*return*/, filesJsonList];
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
/**
 * get genre
 */
var fetchDataGenreSearchMovise = function () {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("./src/assets/genre/genres.json")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_2 = _a.sent();
                    console.error("Error Fetch Data", error_2);
                    return [2 /*return*/, error_2];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    });
};
/**
 * get year
 */
var fetchDataYearSearchMovise = function () {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("./src/assets/genre/genre-years.json")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_3 = _a.sent();
                    console.error("Error Fetch Data", error_3);
                    return [2 /*return*/, error_3];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    });
};
/*----------------------------------------------------------*\
  #GET URL PARAMS
\*----------------------------------------------------------*/
var urlParamSearchMovise = new URLSearchParams(location.search);
/*----------------------------------------------------------*\
  #GET FILTER
\*----------------------------------------------------------*/
var genre_search_list = document.querySelector("[data-genre-search-movise-list]");
var years_search_list = document.querySelector("[data-years-search-movise-list]");
var search_keyword = document.querySelector("[data-search-keyword]");
var btn_filter = document.querySelector("[data-btn-filter]");
var btn_genre = document.querySelector("[data-btn-genre]");
var btn_years = document.querySelector("[data-btn-year]");
var checkbox = document.querySelector('input[name="genre"]:checked');
function getGenreAndYears() {
    return __awaiter(this, void 0, void 0, function () {
        var dataGenres, dataYears;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchDataGenreSearchMovise()];
                case 1:
                    dataGenres = _a.sent();
                    return [4 /*yield*/, fetchDataYearSearchMovise()];
                case 2:
                    dataYears = _a.sent();
                    if (genre_search_list) {
                        dataGenres.forEach(function (ele) {
                            var label = document.createElement('label');
                            label.classList.add("back-drop-link", "label-small");
                            label.setAttribute('for', ele);
                            label.innerHTML = "".concat(ele, " <input type='checkbox' id='").concat(ele, "' name='genre' value='").concat(ele, "'>");
                            genre_search_list.appendChild(label);
                        });
                    }
                    if (years_search_list) {
                        dataYears.forEach(function (ele) {
                            var label = document.createElement('label');
                            label.classList.add("back-drop-link", "label-small");
                            label.setAttribute('for', ele);
                            label.innerHTML = "".concat(ele, " <input type='checkbox' id='").concat(ele, "' name='year' value='").concat(ele, "'>");
                            years_search_list.appendChild(label);
                        });
                    }
                    return [2 /*return*/];
            }
        });
    });
}
;
getGenreAndYears();
btn_filter.addEventListener("click", function () {
    // Get the entered keyword
    var keyword = search_keyword.value.toLowerCase().trim();
    // Get selected Genres and Years
    var checkedGenres = document.querySelectorAll('input[name="genre"]:checked');
    var checkedYears = document.querySelectorAll('input[name="year"]:checked');
    // Convert selected list of categories to array
    var selectedGenres = Array.from(checkedGenres).map(function (checkbox) { return checkbox.value; });
    var selectedYears = Array.from(checkedYears).map(function (checkbox) { return checkbox.value; });
    if (keyword || selectedGenres.length || selectedYears.length) {
        var genreParam = selectedGenres.join(', ');
        var yearParam = selectedYears.join(', ');
        var searchParam = keyword;
        location.href = "?search=".concat(searchParam, "&genre=").concat(genreParam, "&year=").concat(yearParam);
    }
    ;
});
search_keyword.addEventListener("keydown", function (e) { if (e.key === "Enter")
    btn_filter.click(); });
// get url params value
var searchUrl = urlParamSearchMovise.get("search");
var genresUrl = urlParamSearchMovise.get("genre");
var yearsUrl = urlParamSearchMovise.get("year");
var castUrl = urlParamSearchMovise.get("cast");
if (searchUrl) {
    search_keyword.value = searchUrl;
}
else {
    search_keyword.value = "";
}
;
if (genresUrl) {
    btn_genre.innerHTML = "<span>".concat(genresUrl, "</span> <i class=\"fa-solid fa-chevron-down\"></i>");
}
else {
    btn_genre.innerHTML = "<span>genres</span> <i class=\"fa-solid fa-chevron-down\"></i>";
}
;
if (yearsUrl) {
    btn_years.innerHTML = "<span>".concat(yearsUrl, "</span> <i class=\"fa-solid fa-chevron-down\"></i>");
}
else {
    btn_years.innerHTML = "<span>years</span> <i class=\"fa-solid fa-chevron-down\"></i>";
}
;
/**
 * get element
 */
var searchMoviseList = document.querySelector("[data-search-movise-list]");
var loadMoreButton = document.querySelector("[data-btn-load-more]");
var itemsPerPageSearchMovise = 12;
var currentPageSearchMovise = 0;
var isLoading = false;
function getElement() {
    return __awaiter(this, void 0, void 0, function () {
        var data, langSearchUrl, langGenresUrl, langYearsUrl, langCastUrl, filteredItems;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (isLoading)
                        return [2 /*return*/];
                    isLoading = true;
                    return [4 /*yield*/, fetchDataSearchMovise()];
                case 1:
                    data = _a.sent();
                    langSearchUrl = searchUrl ? decodeURIComponent(searchUrl).trim().toLowerCase() : "";
                    langGenresUrl = genresUrl ? decodeURIComponent(genresUrl).split(',').map(function (genre) { return genre.trim().toLowerCase(); }) : [];
                    langYearsUrl = yearsUrl ? decodeURIComponent(yearsUrl).split(',').map(function (year) { return year.trim(); }) : [];
                    langCastUrl = castUrl ? decodeURIComponent(castUrl).trim().toLowerCase() : "";
                    filteredItems = data.filter(function (item) {
                        var filterSearch = langSearchUrl
                            ? item.title.toLowerCase().includes(langSearchUrl)
                            : true;
                        var filterGenre = langGenresUrl.length > 0
                            ? item.genres.some(function (genre) { return langGenresUrl.includes(genre.toLowerCase()); })
                            : true;
                        var filterYears = langYearsUrl.length > 0
                            ? langYearsUrl.includes(item.year.toString())
                            : true;
                        var filterCast = langCastUrl
                            ? item.cast.some(function (castMember) { return castMember.toLowerCase().includes(langCastUrl); })
                            : true;
                        return filterSearch && filterGenre && filterYears && filterCast;
                    });
                    filteredItems = filteredItems.slice(currentPageSearchMovise * itemsPerPageSearchMovise, (currentPageSearchMovise + 1) * itemsPerPageSearchMovise);
                    filteredItems.forEach(function (ele) {
                        var HTMLGenre = ele.genres.join(', ');
                        var HTMLCast = ele.cast.join(', ');
                        var cardMoviseAll = document.createElement("a");
                        cardMoviseAll.href = "./display-movise.html?movie=".concat(ele.href, "&genre=").concat(HTMLGenre);
                        cardMoviseAll.classList.add("card-movise-all");
                        var figure = document.createElement("figure");
                        var img = document.createElement("img");
                        img.src = ele.thumbnail;
                        img.alt = ele.title;
                        img.loading = "lazy";
                        img.onerror = function () { img.src = './src/assets/image/image-inerorr.png'; };
                        img.classList.add("img-card", "img-cover");
                        var titleContent = document.createElement("h1");
                        titleContent.classList.add("title-content", "label-large");
                        titleContent.textContent = ele.title;
                        var allBody = document.createElement("div");
                        allBody.classList.add("all-body");
                        var yearList = document.createElement("div");
                        yearList.classList.add("year-list");
                        var starList = document.createElement("div");
                        starList.classList.add("star-list");
                        starList.innerHTML = "\n        <i class=\"fa-solid fa-star\"></i>\n        <i class=\"fa-solid fa-star\"></i>\n        <i class=\"fa-solid fa-star\"></i>\n        <i class=\"fa-solid fa-star\"></i>\n        <i class=\"fa-solid fa-star-half-stroke\"></i>";
                        var yearText = document.createElement("p");
                        yearText.classList.add("year-text", "label-small");
                        yearText.innerHTML = "<i class=\"fa-regular fa-calendar-days\"></i> ".concat(ele.year);
                        var description = document.createElement("p");
                        description.classList.add("description", "label-small");
                        description.textContent = ele.extract;
                        var genre = document.createElement("p");
                        genre.style.display = "none";
                        genre.textContent = HTMLGenre;
                        var cast = document.createElement("p");
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
                        searchMoviseList.innerHTML = "\n            <p class=\"massage-error label-small\">\n                <i class=\"fa-solid fa-triangle-exclamation\"></i> unavailable\n            </p>";
                    }
                    ;
                    isLoading = false;
                    return [2 /*return*/];
            }
        });
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
