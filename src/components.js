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
 * get genre
 */
var fetchDataGenre = function () {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
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
 * get year
 */
var fetchDataYear = function () {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_2;
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
/*----------------------------------------------------------*\
  #OVERFLOW
\*----------------------------------------------------------*/
var overflow = document.querySelector("[data-overflow]");
/*----------------------------------------------------------*\
  #SCROLL HEADER
\*----------------------------------------------------------*/
var header = document.querySelector("[data-header]");
window.addEventListener("scroll", function () {
    if (scrollY >= 100) {
        header.classList.add("active");
    }
    else {
        header.classList.remove("active");
    }
    ;
});
/*----------------------------------------------------------*\
  #ASIDE
\*----------------------------------------------------------*/
/**
 * OPEN ASIDE
 */
var open_aside = document.querySelector("[data-open-aside]");
var close_aside = document.querySelector("[data-close-aside]");
var aside = document.querySelector("[data-aside]");
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
/**
 * dinamic aside
 */
var open_back_drop = document.querySelectorAll("[data-open-back-drop]");
var arrow_icon = document.querySelectorAll("[data-arrow-icon]");
var back_drop_list = document.querySelectorAll("[data-back-drop-list]");
var _loop_1 = function (i) {
    open_back_drop[i].addEventListener("click", function () {
        arrow_icon[i].classList.toggle("active");
        back_drop_list[i].classList.toggle("active");
    });
};
for (var i = 0; i < open_back_drop.length; i++) {
    _loop_1(i);
}
;
/**
 * push data in aside
 */
// genre
var genre_list = document.querySelector("[data-genre-list]");
// skeleton
var loadCircleGenre = document.createElement("div");
loadCircleGenre.classList.add("load-circle");
var circleGenre = document.createElement("span");
circleGenre.classList.add("circle");
loadCircleGenre.appendChild(circleGenre);
genre_list.appendChild(loadCircleGenre);
// function push
function getGenre() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchDataGenre()];
                case 1:
                    data = _a.sent();
                    genre_list.innerHTML = "";
                    data.forEach(function (genre) {
                        var backDropLink = document.createElement("a");
                        backDropLink.href = "./search-movise.html?genre=".concat(genre);
                        backDropLink.classList.add("back-drop-link", "label-medium");
                        backDropLink.textContent = genre;
                        genre_list.appendChild(backDropLink);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
;
getGenre();
// year
var year_list = document.querySelector("[data-year-list]");
// skeleton
var loadCircleYear = document.createElement("div");
loadCircleYear.classList.add("load-circle");
var circleYear = document.createElement("span");
circleYear.classList.add("circle");
loadCircleYear.appendChild(circleYear);
year_list.appendChild(loadCircleYear);
// function push
function getYear() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchDataYear()];
                case 1:
                    data = _a.sent();
                    year_list.innerHTML = "";
                    data.forEach(function (year) {
                        var backDropLink = document.createElement("a");
                        backDropLink.href = "./search-movise.html?year=".concat(year);
                        backDropLink.classList.add("back-drop-link", "label-medium");
                        backDropLink.textContent = year;
                        year_list.appendChild(backDropLink);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
;
getYear();
