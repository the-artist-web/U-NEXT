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
 * get data 2020
 */
var fetchData2020 = function () {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("./json/movies-2020s.json")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error Fetch Data", error_1);
                    return [2 /*return*/, error_1];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    });
};
/**
 * get data 2010
 */
var fetchData2010 = function () {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("./json/movies-2010s.json")];
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
 * get data 2000
 */
var fetchData2000 = function () {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("./json/movies-2000s.json")];
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
/**
 * get data 1990
 */
var fetchData1990 = function () {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("./json/movies-1990s.json")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_4 = _a.sent();
                    console.error("Error Fetch Data", error_4);
                    return [2 /*return*/, error_4];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    });
};
/**
 * get data 1980
 */
var fetchData1980 = function () {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("./json/movies-1980s.json")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_5 = _a.sent();
                    console.error("Error Fetch Data", error_5);
                    return [2 /*return*/, error_5];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    });
};
/**
 * get data 1970
 */
var fetchData1970 = function () {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("./json/movies-1970s.json")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_6 = _a.sent();
                    console.error("Error Fetch Data", error_6);
                    return [2 /*return*/, error_6];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    });
};
/**
 * get data 1960
 */
var fetchData1960 = function () {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("./json/movies-1960s.json")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_7 = _a.sent();
                    console.error("Error Fetch Data", error_7);
                    return [2 /*return*/, error_7];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    });
};
/**
 * get data 1950
 */
var fetchData1950 = function () {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("./json/movies-1950s.json")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_8 = _a.sent();
                    console.error("Error Fetch Data", error_8);
                    return [2 /*return*/, error_8];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    });
};
/**
 * get data 1940
 */
var fetchData1940 = function () {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("./json/movies-1940s.json")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_9 = _a.sent();
                    console.error("Error Fetch Data", error_9);
                    return [2 /*return*/, error_9];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    });
};
/**
 * get data 1930
 */
var fetchData1930 = function () {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("./json/movies-1930s.json")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_10 = _a.sent();
                    console.error("Error Fetch Data", error_10);
                    return [2 /*return*/, error_10];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    });
};
/**
 * get data 1920
 */
var fetchData1920 = function () {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("./json/movies-1920s.json")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_11 = _a.sent();
                    console.error("Error Fetch Data", error_11);
                    return [2 /*return*/, error_11];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    });
};
/**
 * get data 1910
 */
var fetchData1910 = function () {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("./json/movies-1910s.json")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_12 = _a.sent();
                    console.error("Error Fetch Data", error_12);
                    return [2 /*return*/, error_12];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    });
};
/**
 * get data 1900
 */
var fetchData1900 = function () {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("./json/movies-1900s.json")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_13 = _a.sent();
                    console.error("Error Fetch Data", error_13);
                    return [2 /*return*/, error_13];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    });
};
/**
 * genre list
 */
var fetchDataGenreHome = function () {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_14;
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
                    error_14 = _a.sent();
                    console.error("Error Fetch Data", error_14);
                    return [2 /*return*/, error_14];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    });
};
/*----------------------------------------------------------*\
  #GET SHUFFLE ARRAY
\*----------------------------------------------------------*/
function shuffleArray(array) {
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
  #GET GENRE LIST
\*----------------------------------------------------------*/
var genre_list_home = document.querySelectorAll("[data-grid-list]");
for (var i = 0; i < genre_list_home.length; i++) {
    // skeleton
    genre_list_home[i].innerHTML += "<div class=\"genre-link-skeleton\">";
}
;
function getGenreListHome() {
    return __awaiter(this, void 0, void 0, function () {
        var data, _loop_1, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchDataGenreHome()];
                case 1:
                    data = _a.sent();
                    _loop_1 = function (i) {
                        genre_list_home[i].innerHTML = "";
                        data.forEach(function (genre) {
                            var genreItem = document.createElement("li");
                            genreItem.classList.add("genre-item");
                            var genreLink = document.createElement("a");
                            genreLink.href = "./search-movise.html?genre=".concat(genre);
                            genreLink.classList.add("genre-link", "label-medium");
                            genreLink.textContent = genre;
                            genreItem.appendChild(genreLink);
                            genre_list_home[i].appendChild(genreItem);
                        });
                    };
                    for (i = 0; i < genre_list_home.length; i++) {
                        _loop_1(i);
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
;
getGenreListHome();
/*----------------------------------------------------------*\
  #GET CARD LIST
\*----------------------------------------------------------*/
/**
 * get 2020
 */
var data2020 = document.querySelector("[data-2020]");
// skeleton
data2020.innerHTML += "<div class=\"card-movise-skeleton\"></div>".repeat(24);
function get2020() {
    return __awaiter(this, void 0, void 0, function () {
        var data, indexData, shuffleData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchData2020()];
                case 1:
                    data = _a.sent();
                    indexData = data.slice(0, 24);
                    shuffleData = shuffleArray(indexData);
                    data2020.innerHTML = "";
                    shuffleData.forEach(function (ele) {
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
                        data2020.appendChild(cardMovise);
                    });
                    data2020.innerHTML += "\n    <a href=\"all-movise.html\" class=\"card-load-more label-large\">\n        load more <i class=\"fa-solid fa-share-from-square\"></i>\n    </a>\n    ";
                    return [2 /*return*/];
            }
        });
    });
}
;
get2020();
/**
 * get 2010
 */
var data2010 = document.querySelector("[data-2010]");
// skeleton
data2010.innerHTML += "<div class=\"card-movise-skeleton\"></div>".repeat(24);
function get2010() {
    return __awaiter(this, void 0, void 0, function () {
        var data, indexData, shuffleData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchData2010()];
                case 1:
                    data = _a.sent();
                    indexData = data.slice(0, 24);
                    shuffleData = shuffleArray(indexData);
                    data2010.innerHTML = "";
                    shuffleData.forEach(function (ele) {
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
                        data2010.appendChild(cardMovise);
                    });
                    data2010.innerHTML += "\n    <a href=\"all-movise.html\" class=\"card-load-more label-large\">\n        load more <i class=\"fa-solid fa-share-from-square\"></i>\n    </a>\n    ";
                    return [2 /*return*/];
            }
        });
    });
}
;
get2010();
/**
 * get 2000
 */
var data2000 = document.querySelector("[data-2000]");
// skeleton
data2000.innerHTML += "<div class=\"card-movise-skeleton\"></div>".repeat(24);
function get2000() {
    return __awaiter(this, void 0, void 0, function () {
        var data, indexData, shuffleData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchData2000()];
                case 1:
                    data = _a.sent();
                    indexData = data.slice(0, 24);
                    shuffleData = shuffleArray(indexData);
                    data2000.innerHTML = "";
                    shuffleData.forEach(function (ele) {
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
                        data2000.appendChild(cardMovise);
                    });
                    data2000.innerHTML += "\n    <a href=\"all-movise.html\" class=\"card-load-more label-large\">\n        load more <i class=\"fa-solid fa-share-from-square\"></i>\n    </a>\n    ";
                    return [2 /*return*/];
            }
        });
    });
}
;
get2000();
/**
 * get 1990
 */
var data1990 = document.querySelector("[data-1990]");
// skeleton
data1990.innerHTML += "<div class=\"card-movise-skeleton\"></div>".repeat(24);
function get1990() {
    return __awaiter(this, void 0, void 0, function () {
        var data, indexData, shuffleData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchData1990()];
                case 1:
                    data = _a.sent();
                    indexData = data.slice(0, 24);
                    shuffleData = shuffleArray(indexData);
                    data1990.innerHTML = "";
                    shuffleData.forEach(function (ele) {
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
                        data1990.appendChild(cardMovise);
                    });
                    data1990.innerHTML += "\n    <a href=\"all-movise.html\" class=\"card-load-more label-large\">\n        load more <i class=\"fa-solid fa-share-from-square\"></i>\n    </a>\n    ";
                    return [2 /*return*/];
            }
        });
    });
}
;
get1990();
/**
 * get 1980
 */
var data1980 = document.querySelector("[data-1980]");
// skeleton
data1980.innerHTML += "<div class=\"card-movise-skeleton\"></div>".repeat(24);
function get1980() {
    return __awaiter(this, void 0, void 0, function () {
        var data, indexData, shuffleData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchData1980()];
                case 1:
                    data = _a.sent();
                    indexData = data.slice(48, 72);
                    shuffleData = shuffleArray(indexData);
                    data1980.innerHTML = "";
                    shuffleData.forEach(function (ele) {
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
                        data1980.appendChild(cardMovise);
                    });
                    data1980.innerHTML += "\n    <a href=\"all-movise.html\" class=\"card-load-more label-large\">\n        load more <i class=\"fa-solid fa-share-from-square\"></i>\n    </a>\n    ";
                    return [2 /*return*/];
            }
        });
    });
}
;
get1980();
/**
 * get 1970
 */
var data1970 = document.querySelector("[data-1970]");
// skeleton
data1970.innerHTML += "<div class=\"card-movise-skeleton\"></div>".repeat(24);
function get1970() {
    return __awaiter(this, void 0, void 0, function () {
        var data, indexData, shuffleData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchData1970()];
                case 1:
                    data = _a.sent();
                    indexData = data.slice(48, 72);
                    shuffleData = shuffleArray(indexData);
                    data1970.innerHTML = "";
                    shuffleData.forEach(function (ele) {
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
                        data1970.appendChild(cardMovise);
                    });
                    data1970.innerHTML += "\n    <a href=\"all-movise.html\" class=\"card-load-more label-large\">\n        load more <i class=\"fa-solid fa-share-from-square\"></i>\n    </a>\n    ";
                    return [2 /*return*/];
            }
        });
    });
}
;
get1970();
/**
 * get 1960
 */
var data1960 = document.querySelector("[data-1960]");
// skeleton
data1960.innerHTML += "<div class=\"card-movise-skeleton\"></div>".repeat(24);
function get1960() {
    return __awaiter(this, void 0, void 0, function () {
        var data, indexData, shuffleData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchData1960()];
                case 1:
                    data = _a.sent();
                    indexData = data.slice(48, 72);
                    shuffleData = shuffleArray(indexData);
                    data1960.innerHTML = "";
                    shuffleData.forEach(function (ele) {
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
                        data1960.appendChild(cardMovise);
                    });
                    data1960.innerHTML += "\n    <a href=\"all-movise.html\" class=\"card-load-more label-large\">\n        load more <i class=\"fa-solid fa-share-from-square\"></i>\n    </a>\n    ";
                    return [2 /*return*/];
            }
        });
    });
}
;
get1960();
/**
 * get 1950
 */
var data1950 = document.querySelector("[data-1950]");
// skeleton
data1950.innerHTML += "<div class=\"card-movise-skeleton\"></div>".repeat(24);
function get1950() {
    return __awaiter(this, void 0, void 0, function () {
        var data, indexData, shuffleData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchData1950()];
                case 1:
                    data = _a.sent();
                    indexData = data.slice(48, 72);
                    shuffleData = shuffleArray(indexData);
                    data1950.innerHTML = "";
                    shuffleData.forEach(function (ele) {
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
                        data1950.appendChild(cardMovise);
                    });
                    data1950.innerHTML += "\n    <a href=\"all-movise.html\" class=\"card-load-more label-large\">\n        load more <i class=\"fa-solid fa-share-from-square\"></i>\n    </a>\n    ";
                    return [2 /*return*/];
            }
        });
    });
}
;
get1950();
/**
 * get 1940
 */
var data1940 = document.querySelector("[data-1940]");
// skeleton
data1940.innerHTML += "<div class=\"card-movise-skeleton\"></div>".repeat(24);
function get1940() {
    return __awaiter(this, void 0, void 0, function () {
        var data, indexData, shuffleData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchData1940()];
                case 1:
                    data = _a.sent();
                    indexData = data.slice(48, 72);
                    shuffleData = shuffleArray(indexData);
                    data1940.innerHTML = "";
                    shuffleData.forEach(function (ele) {
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
                        data1940.appendChild(cardMovise);
                    });
                    data1940.innerHTML += "\n    <a href=\"all-movise.html\" class=\"card-load-more label-large\">\n        load more <i class=\"fa-solid fa-share-from-square\"></i>\n    </a>\n    ";
                    return [2 /*return*/];
            }
        });
    });
}
;
get1940();
/**
 * get 1930
 */
var data1930 = document.querySelector("[data-1930]");
// skeleton
data1930.innerHTML += "<div class=\"card-movise-skeleton\"></div>".repeat(24);
function get1930() {
    return __awaiter(this, void 0, void 0, function () {
        var data, indexData, shuffleData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchData1930()];
                case 1:
                    data = _a.sent();
                    indexData = data.slice(48, 72);
                    shuffleData = shuffleArray(indexData);
                    data1930.innerHTML = "";
                    shuffleData.forEach(function (ele) {
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
                        data1930.appendChild(cardMovise);
                    });
                    data1930.innerHTML += "\n    <a href=\"all-movise.html\" class=\"card-load-more label-large\">\n        load more <i class=\"fa-solid fa-share-from-square\"></i>\n    </a>\n    ";
                    return [2 /*return*/];
            }
        });
    });
}
;
get1930();
