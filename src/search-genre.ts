/*----------------------------------------------------------*\
  #GET FETCH API
\*----------------------------------------------------------*/

/**
 * get all movise
 */
const allJsonSearchGenre: string[] = [
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

const fetchDataallMoviseSearchGenre = async function() {
    let allMoviseSearchGenre: string[] = [];
    try {
        for (const allMovise of allJsonSearchGenre) {
            const response: Response = await fetch(allMovise);
            const data: any = await response.json();
            allMoviseSearchGenre.push(...data);
        };
        return allMoviseSearchGenre;
    } catch (error) {
        console.error("Error Fetch Data", error);
        return error;
    };
};

/**
 * get genre
 */
const fetchDataGenreSearchGenre = async function() {
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
const fetchDataYearSearchGenre = async function() {
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
  #search
\*----------------------------------------------------------*/

const search = document.querySelector("[data-search]") as HTMLInputElement;
const backPage = document.querySelector("[data-back-page]") as HTMLInputElement;

search.addEventListener("keydown", (e: any) => { if (search.value.toLowerCase() && e.key === "Enter") location.href = `search-movise.html?search=${search.value.toLowerCase()}`; });

backPage.addEventListener("click", () => { window.history.back(); });

/*----------------------------------------------------------*\
  #searchbar
\*----------------------------------------------------------*/

const searchbar = document.querySelector("[data-searchbar]") as HTMLInputElement;

async function getSearchbar() {
    const data: any = await fetchDataallMoviseSearchGenre();

    if (search.value.toLowerCase() != "") {
        searchbar.classList.add("active");
    } else {
        searchbar.classList.remove("active");
    };

    searchbar.innerHTML = "";
    if (search.value.length < 2) return;

    const MAX_RESULTS = 10;
    const filter: any[] = data.filter((ele: any) => ele.title.toLowerCase().includes(search.value.toLowerCase())).slice(0, MAX_RESULTS);
    

    filter.forEach((ele: any) => {
        let HTMLGener: string = "";
        ele.genres.forEach((ele: any) => { HTMLGener += `${ele}, `; });

        let HTMLCast: string = "";
        ele.cast.forEach((ele: any) => { HTMLCast += `${ele}, `; });

        // get element
        const cardSearchbar = document.createElement("a");
        cardSearchbar.href = `display-movise.html?movie=${ele.href}&genre=${HTMLGener.slice(0, -3)}`;
        cardSearchbar.classList.add("card-searchbar");

        const img = document.createElement("img");
        img.src = ele.thumbnail;
        img.alt = ele.title;
        img.loading = "lazy";
        img.classList.add("img-card", "img-cover");
        img.onerror = () => { img.src = './src/assets/image/image-inerorr.png'; };

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const titleContent = document.createElement("h1");
        titleContent.classList.add("title-content", "label-medium");
        titleContent.textContent = ele.title;

        const yearText = document.createElement("p");
        yearText.classList.add("year-text", "label-small");
        yearText.innerHTML = `<i class="fa-regular fa-calendar-days"></i> ${ele.year}`;

        const description = document.createElement("p");
        description.classList.add("description", "label-small");
        description.textContent = ele.extract;

        const genre = document.createElement("p");
        genre.style.display = "none";
        genre.textContent = HTMLGener.slice(0, -3);

        const cast = document.createElement("p");
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
}; search.addEventListener("keyup", getSearchbar);

/*----------------------------------------------------------*\
  #GET FETCH API
\*----------------------------------------------------------*/

/**
 * get genre
 */
const genres_list = document.querySelector("[data-genre]") as HTMLDivElement;

genres_list.innerHTML = `<div class="btn-genre-skeleton"></div>`.repeat(20);

async function getGenres() {
    const data: any = await fetchDataGenreSearchGenre();

    genres_list.innerHTML = "";

    data.forEach((ele: any) => {
        const btnGenre = document.createElement("a");
        btnGenre.href = `./search-movise.html?genre=${ele}`;
        btnGenre.classList.add("btn-genre", "label-medium");
        btnGenre.textContent = ele;

        genres_list.appendChild(btnGenre);
    });
}; getGenres();

/**
 * get years
 */
const years_list = document.querySelector("[data-year]") as HTMLDivElement;

years_list.innerHTML = `<div class="btn-genre-skeleton"></div>`.repeat(20);

async function getYears() {
    const data: any = await fetchDataYearSearchGenre();

    years_list.innerHTML = "";

    data.forEach((ele: any) => {
        const btnGenre = document.createElement("a");
        btnGenre.href = `./search-movise.html?year=${ele}`;
        btnGenre.classList.add("btn-genre", "label-medium");
        btnGenre.textContent = ele;

        years_list.appendChild(btnGenre);
    });
}; getYears();