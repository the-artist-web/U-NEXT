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
 * get all movise
 */
var allJsonSearchGenre = [
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
var fetchDataallMoviseSearchGenre = function () {
    return __awaiter(this, void 0, void 0, function () {
        var allMoviseSearchGenre, _i, allJsonSearchGenre_1, allMovise, response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    allMoviseSearchGenre = [];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    _i = 0, allJsonSearchGenre_1 = allJsonSearchGenre;
                    _a.label = 2;
                case 2:
                    if (!(_i < allJsonSearchGenre_1.length)) return [3 /*break*/, 6];
                    allMovise = allJsonSearchGenre_1[_i];
                    return [4 /*yield*/, fetch(allMovise)];
                case 3:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 4:
                    data = _a.sent();
                    allMoviseSearchGenre.push.apply(allMoviseSearchGenre, data);
                    _a.label = 5;
                case 5:
                    _i++;
                    return [3 /*break*/, 2];
                case 6:
                    ;
                    return [2 /*return*/, allMoviseSearchGenre];
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
var fetchDataGenreSearchGenre = function () {
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
var fetchDataYearSearchGenre = function () {
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
  #search
\*----------------------------------------------------------*/
var search = document.querySelector("[data-search]");
var backPage = document.querySelector("[data-back-page]");
search.addEventListener("keydown", function (e) { if (search.value.toLowerCase() && e.key === "Enter")
    location.href = "search-movise.html?search=".concat(search.value.toLowerCase()); });
backPage.addEventListener("click", function () { window.history.back(); });
/*----------------------------------------------------------*\
  #searchbar
\*----------------------------------------------------------*/
var searchbar = document.querySelector("[data-searchbar]");
function getSearchbar() {
    return __awaiter(this, void 0, void 0, function () {
        var data, MAX_RESULTS, filter;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchDataallMoviseSearchGenre()];
                case 1:
                    data = _a.sent();
                    if (search.value.toLowerCase() != "") {
                        searchbar.classList.add("active");
                    }
                    else {
                        searchbar.classList.remove("active");
                    }
                    ;
                    searchbar.innerHTML = "";
                    if (search.value.length < 2)
                        return [2 /*return*/];
                    MAX_RESULTS = 10;
                    filter = data.filter(function (ele) { return ele.title.toLowerCase().includes(search.value.toLowerCase()); }).slice(0, MAX_RESULTS);
                    filter.forEach(function (ele) {
                        var HTMLGener = "";
                        ele.genres.forEach(function (ele) { HTMLGener += "".concat(ele, ", "); });
                        var HTMLCast = "";
                        ele.cast.forEach(function (ele) { HTMLCast += "".concat(ele, ", "); });
                        // get element
                        var cardSearchbar = document.createElement("a");
                        cardSearchbar.href = "display-movise.html?movie=".concat(ele.href, "&genre=").concat(HTMLGener.slice(0, -3));
                        cardSearchbar.classList.add("card-searchbar");
                        var img = document.createElement("img");
                        img.src = ele.thumbnail;
                        img.alt = ele.title;
                        img.loading = "lazy";
                        img.classList.add("img-card", "img-cover");
                        img.onerror = function () { img.src = './src/assets/image/image-inerorr.png'; };
                        var cardBody = document.createElement("div");
                        cardBody.classList.add("card-body");
                        var titleContent = document.createElement("h1");
                        titleContent.classList.add("title-content", "label-medium");
                        titleContent.textContent = ele.title;
                        var yearText = document.createElement("p");
                        yearText.classList.add("year-text", "label-small");
                        yearText.innerHTML = "<i class=\"fa-regular fa-calendar-days\"></i> ".concat(ele.year);
                        var description = document.createElement("p");
                        description.classList.add("description", "label-small");
                        description.textContent = ele.extract;
                        var genre = document.createElement("p");
                        genre.style.display = "none";
                        genre.textContent = HTMLGener.slice(0, -3);
                        var cast = document.createElement("p");
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
                    return [2 /*return*/];
            }
        });
    });
}
;
search.addEventListener("keyup", getSearchbar);
/*----------------------------------------------------------*\
  #GET FETCH API
\*----------------------------------------------------------*/
/**
 * get genre
 */
var genres_list = document.querySelector("[data-genre]");
genres_list.innerHTML = "<div class=\"btn-genre-skeleton\"></div>".repeat(20);
function getGenres() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchDataGenreSearchGenre()];
                case 1:
                    data = _a.sent();
                    genres_list.innerHTML = "";
                    data.forEach(function (ele) {
                        var btnGenre = document.createElement("a");
                        btnGenre.href = "./search-movise.html?genre=".concat(ele);
                        btnGenre.classList.add("btn-genre", "label-medium");
                        btnGenre.textContent = ele;
                        genres_list.appendChild(btnGenre);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
;
getGenres();
/**
 * get years
 */
var years_list = document.querySelector("[data-year]");
years_list.innerHTML = "<div class=\"btn-genre-skeleton\"></div>".repeat(20);
function getYears() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchDataYearSearchGenre()];
                case 1:
                    data = _a.sent();
                    years_list.innerHTML = "";
                    data.forEach(function (ele) {
                        var btnGenre = document.createElement("a");
                        btnGenre.href = "./search-movise.html?year=".concat(ele);
                        btnGenre.classList.add("btn-genre", "label-medium");
                        btnGenre.textContent = ele;
                        years_list.appendChild(btnGenre);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
;
getYears();
