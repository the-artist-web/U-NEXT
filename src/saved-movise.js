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
var allFilesJsonSavedMovise = [
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
var fetchDataSavedMovise = function () {
    return __awaiter(this, void 0, void 0, function () {
        var filesJsonList, _i, allFilesJsonSavedMovise_1, allFilesJosn, response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filesJsonList = [];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    _i = 0, allFilesJsonSavedMovise_1 = allFilesJsonSavedMovise;
                    _a.label = 2;
                case 2:
                    if (!(_i < allFilesJsonSavedMovise_1.length)) return [3 /*break*/, 6];
                    allFilesJosn = allFilesJsonSavedMovise_1[_i];
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
/*----------------------------------------------------------*\
  #GET URL PARAM
\*----------------------------------------------------------*/
var urlParamsSavedMovise = new URLSearchParams(location.search);
/*----------------------------------------------------------*\
  #GET SAVED MOVISE
\*----------------------------------------------------------*/
var saved_movise_list = document.querySelector("[data-saved-movise-list]");
window.onload = function () {
    var likedPosts = JSON.parse(localStorage.getItem("likedPost") || "[]");
    localStorage.setItem("likedPost", JSON.stringify(likedPosts));
};
// skeleton
saved_movise_list.innerHTML += "<div class=\"card-movise-all-skeleton\"></div>".repeat(60);
function getSavedMovise() {
    return __awaiter(this, void 0, void 0, function () {
        var data, cardSave;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchDataSavedMovise()];
                case 1:
                    data = _a.sent();
                    saved_movise_list.innerHTML = "";
                    cardSave = JSON.parse(localStorage.likedPost);
                    data.forEach(function (ele) {
                        // for loop
                        var HTMLGenre = "";
                        ele.genres.forEach(function (ele) { HTMLGenre += "".concat(ele, ", "); });
                        var HTMLCast = "";
                        ele.cast.forEach(function (ele) { HTMLCast += "".concat(ele, ", "); });
                        if (cardSave.length === 0) {
                            saved_movise_list.innerHTML = "<p class=\"massage-error label-small\"><i class=\"fa-solid fa-shield-heart\"></i> This page is not available</p>";
                        }
                        else {
                            if (cardSave.includes(ele.title)) {
                                var cardMoviseAll = document.createElement("a");
                                cardMoviseAll.href = "./display-movise.html?movie=".concat(ele.href, "&genre=").concat(HTMLGenre.slice(0, -3));
                                cardMoviseAll.classList.add("card-movise-all");
                                var figure = document.createElement("figure");
                                var img_1 = document.createElement("img");
                                img_1.src = ele.thumbnail;
                                img_1.alt = ele.title;
                                img_1.loading = "lazy";
                                img_1.onerror = function () { img_1.src = './src/assets/image/image-inerorr.png'; };
                                img_1.classList.add("img-card", "img-cover");
                                var titleContent = document.createElement("h1");
                                titleContent.classList.add("title-content", "label-large");
                                titleContent.textContent = ele.title;
                                var allBody = document.createElement("div");
                                allBody.classList.add("all-body");
                                var yearList = document.createElement("div");
                                yearList.classList.add("year-list");
                                var starList = document.createElement("div");
                                starList.classList.add("star-list");
                                starList.innerHTML = "\n                <i class=\"fa-solid fa-star\"></i>\n                <i class=\"fa-solid fa-star\"></i>\n                <i class=\"fa-solid fa-star\"></i>\n                <i class=\"fa-solid fa-star\"></i>\n                <i class=\"fa-solid fa-star-half-stroke\"></i>";
                                var yearText = document.createElement("p");
                                yearText.classList.add("year-text", "label-small");
                                yearText.innerHTML = "<i class=\"fa-regular fa-calendar-days\"></i> ".concat(ele.year);
                                var description = document.createElement("p");
                                description.classList.add("description", "label-small");
                                description.textContent = ele.extract;
                                var genre = document.createElement("p");
                                genre.style.display = "none";
                                genre.textContent = HTMLGenre.slice(0, -3);
                                var cast = document.createElement("p");
                                cast.style.display = "none";
                                cast.textContent = HTMLCast.slice(0, -3);
                                cardMoviseAll.appendChild(figure);
                                figure.appendChild(img_1);
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
                    return [2 /*return*/];
            }
        });
    });
}
;
getSavedMovise();
