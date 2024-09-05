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
var allFilesJsonAllMovise = [
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
var fetchDataAllMovise = function () {
    return __awaiter(this, void 0, void 0, function () {
        var filesJsonList, _i, allFilesJsonAllMovise_1, allFilesJosn, response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filesJsonList = [];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    _i = 0, allFilesJsonAllMovise_1 = allFilesJsonAllMovise;
                    _a.label = 2;
                case 2:
                    if (!(_i < allFilesJsonAllMovise_1.length)) return [3 /*break*/, 6];
                    allFilesJosn = allFilesJsonAllMovise_1[_i];
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
var urlParams = new URLSearchParams(location.search);
/*----------------------------------------------------------*\
  #SHUFFLE ARRAY
\*----------------------------------------------------------*/
function shuffleArrayAllMovise(array) {
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
  #GET ALL MOVISE
\*----------------------------------------------------------*/
/**
 * load page 1
 */
window.addEventListener("load", function () {
    if (!location.search.includes("page=")) {
        location.href = "?page=1";
    }
    ;
});
/**
 * an offer all movise
 */
var all_movise_list = document.querySelector("[data-all-movise-list]");
var input_page = document.querySelector("[data-input-page]");
var number_page = document.querySelector("[data-number-page]");
var itemsPerPage = 60;
// skeleton
all_movise_list.innerHTML += "<div class=\"card-movise-all-skeleton\"></div>".repeat(60);
function getAllMovise() {
    return __awaiter(this, void 0, void 0, function () {
        var data, shuffleData, currentPage, totalItems, startIndex, endIndex, pageItems, totalPage, getPage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchDataAllMovise()];
                case 1:
                    data = _a.sent();
                    shuffleData = shuffleArrayAllMovise(data);
                    currentPage = parseInt(urlParams.get("page") || "1", 10);
                    totalItems = shuffleData.length;
                    startIndex = (currentPage - 1) * itemsPerPage;
                    endIndex = startIndex + itemsPerPage;
                    pageItems = shuffleData.slice(startIndex, endIndex);
                    all_movise_list.innerHTML = "";
                    pageItems.forEach(function (ele) {
                        // for loop
                        var HTMLGenre = "";
                        ele.genres.forEach(function (ele) { HTMLGenre += "".concat(ele, ", "); });
                        var HTMLCast = "";
                        ele.cast.forEach(function (ele) { HTMLCast += "".concat(ele, ", "); });
                        // get element
                        var cardMoviseAll = document.createElement("a");
                        cardMoviseAll.href = "./display-movise.html?movie=".concat(ele.href, "&genre=").concat(HTMLGenre.slice(0, -3));
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
                        starList.innerHTML = "\n    <i class=\"fa-solid fa-star\"></i>\n    <i class=\"fa-solid fa-star\"></i>\n    <i class=\"fa-solid fa-star\"></i>\n    <i class=\"fa-solid fa-star\"></i>\n    <i class=\"fa-solid fa-star-half-stroke\"></i>";
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
                        figure.appendChild(img);
                        figure.appendChild(titleContent);
                        yearList.appendChild(starList);
                        yearList.appendChild(yearText);
                        allBody.appendChild(yearList);
                        allBody.appendChild(description);
                        allBody.appendChild(genre);
                        allBody.appendChild(cast);
                        cardMoviseAll.appendChild(allBody);
                        all_movise_list.appendChild(cardMoviseAll);
                    });
                    totalPage = Math.ceil(totalItems / itemsPerPage);
                    getPage = urlParams.get("page");
                    number_page.innerHTML = totalPage;
                    input_page.value = getPage;
                    input_page.addEventListener("keydown", function (e) { if (e.key === "Enter")
                        location.href = "?page=".concat(input_page.value.toLowerCase().trim()); });
                    if (all_movise_list.innerHTML === "") {
                        all_movise_list.innerHTML = "<p class=\"massage-error label-small\"><i class=\"fa-solid fa-triangle-exclamation\"></i> This page is not available</p>";
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
;
getAllMovise();
