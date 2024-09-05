/*----------------------------------------------------------*\
  #GET FETCH API
\*----------------------------------------------------------*/

/**
 * get genre
 */
const fetchDataGenre = async function() {
    try {
        const response: Response = await fetch("./src/assets/genre/genres.json");
        const data: (string | number) = await response.json();
        return data;
    } catch (error) {
        console.error("Error Fetch Data", error);
        return error;
    };
};

/**
 * get year
 */
const fetchDataYear = async function() {
    try {
        const response: Response = await fetch("./src/assets/genre/genre-years.json");
        const data: (string | number) = await response.json();
        return data;
    } catch (error) {
        console.error("Error Fetch Data", error);
        return error;
    };
};

/*----------------------------------------------------------*\
  #OVERFLOW
\*----------------------------------------------------------*/

const overflow = document.querySelector("[data-overflow]") as HTMLDivElement;

/*----------------------------------------------------------*\
  #SCROLL HEADER
\*----------------------------------------------------------*/

const header = document.querySelector("[data-header]") as HTMLElement;

window.addEventListener("scroll", () => {
    if (scrollY >= 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    };
});

/*----------------------------------------------------------*\
  #ASIDE
\*----------------------------------------------------------*/

/**
 * OPEN ASIDE
 */
const open_aside = document.querySelector("[data-open-aside]") as HTMLButtonElement;
const close_aside = document.querySelector("[data-close-aside]") as HTMLButtonElement;
const aside = document.querySelector("[data-aside]") as HTMLElement;

function openAside() { 
    aside.classList.add("active");     
    overflow.classList.add("active"); 
};
open_aside.addEventListener("click", openAside);

function closeAside() { 
    aside.classList.remove("active");     
    overflow.classList.remove("active"); 
};
close_aside.addEventListener("click", closeAside);

function closeAsdeOverflow() { 
    aside.classList.remove("active");     
    overflow.classList.remove("active"); 
};
overflow.addEventListener("click", closeAsdeOverflow);

/**
 * dinamic aside
 */
const open_back_drop = document.querySelectorAll("[data-open-back-drop]") as NodeListOf<HTMLButtonElement>;
const arrow_icon = document.querySelectorAll("[data-arrow-icon]") as NodeListOf<HTMLButtonElement>;
const back_drop_list = document.querySelectorAll("[data-back-drop-list]") as NodeListOf<HTMLDivElement>;

for (let i: number = 0; i < open_back_drop.length; i++) {
    open_back_drop[i].addEventListener("click", () => {
        arrow_icon[i].classList.toggle("active");
        back_drop_list[i].classList.toggle("active");
    });
};

/**
 * push data in aside
 */

// genre
const genre_list = document.querySelector("[data-genre-list]") as HTMLDivElement;

// skeleton
const loadCircleGenre = document.createElement("div");
loadCircleGenre.classList.add("load-circle");

const circleGenre = document.createElement("span");
circleGenre.classList.add("circle");

loadCircleGenre.appendChild(circleGenre);
genre_list.appendChild(loadCircleGenre);

// function push
async function getGenre() {
    const data: any = await fetchDataGenre();

    genre_list.innerHTML = "";

    data.forEach((genre: any) => {
        const backDropLink = document.createElement("a");
        backDropLink.href = `./search-movise.html?genre=${genre}`;
        backDropLink.classList.add("back-drop-link", "label-medium");
        backDropLink.textContent = genre;

        genre_list.appendChild(backDropLink);
    });
}; getGenre();

// year
const year_list = document.querySelector("[data-year-list]") as HTMLDivElement;

// skeleton
const loadCircleYear = document.createElement("div");
loadCircleYear.classList.add("load-circle");

const circleYear = document.createElement("span");
circleYear.classList.add("circle");

loadCircleYear.appendChild(circleYear);
year_list.appendChild(loadCircleYear);

// function push
async function getYear() {
    const data: any = await fetchDataYear();

    year_list.innerHTML = "";

    data.forEach((year: any) => {
        const backDropLink = document.createElement("a");
        backDropLink.href = `./search-movise.html?year=${year}`;
        backDropLink.classList.add("back-drop-link", "label-medium");
        backDropLink.textContent = year;

        year_list.appendChild(backDropLink);
    });
}; getYear();