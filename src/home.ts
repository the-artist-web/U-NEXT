/*----------------------------------------------------------*\
  #GET FETCH API
\*----------------------------------------------------------*/

/**
 * get data 2020
 */
const fetchData2020 = async function() {
    try {
        const response: Response = await fetch("./json/movies-2020s.json");
        const data: (string | number) = await response.json();
        return data;
    } catch (error) {
        console.error("Error Fetch Data", error);
        return error;
    };
};

/**
 * get data 2010
 */
const fetchData2010 = async function() {
    try {
        const response: Response = await fetch("./json/movies-2010s.json");
        const data: (string | number) = await response.json();
        return data;
    } catch (error) {
        console.error("Error Fetch Data", error);
        return error;
    };
};

/**
 * get data 2000
 */
const fetchData2000 = async function() {
    try {
        const response: Response = await fetch("./json/movies-2000s.json");
        const data: (string | number) = await response.json();
        return data;
    } catch (error) {
        console.error("Error Fetch Data", error);
        return error;
    };
};

/**
 * get data 1990
 */
const fetchData1990 = async function() {
    try {
        const response: Response = await fetch("./json/movies-1990s.json");
        const data: (string | number) = await response.json();
        return data;
    } catch (error) {
        console.error("Error Fetch Data", error);
        return error;
    };
};

/**
 * get data 1980
 */
const fetchData1980 = async function() {
    try {
        const response: Response = await fetch("./json/movies-1980s.json");
        const data: (string | number) = await response.json();
        return data;
    } catch (error) {
        console.error("Error Fetch Data", error);
        return error;
    };
};

/**
 * get data 1970
 */
const fetchData1970 = async function() {
    try {
        const response: Response = await fetch("./json/movies-1970s.json");
        const data: (string | number) = await response.json();
        return data;
    } catch (error) {
        console.error("Error Fetch Data", error);
        return error;
    };
};

/**
 * get data 1960
 */
const fetchData1960 = async function() {
    try {
        const response: Response = await fetch("./json/movies-1960s.json");
        const data: (string | number) = await response.json();
        return data;
    } catch (error) {
        console.error("Error Fetch Data", error);
        return error;
    };
};

/**
 * get data 1950
 */
const fetchData1950 = async function() {
    try {
        const response: Response = await fetch("./json/movies-1950s.json");
        const data: (string | number) = await response.json();
        return data;
    } catch (error) {
        console.error("Error Fetch Data", error);
        return error;
    };
};

/**
 * get data 1940
 */
const fetchData1940 = async function() {
    try {
        const response: Response = await fetch("./json/movies-1940s.json");
        const data: (string | number) = await response.json();
        return data;
    } catch (error) {
        console.error("Error Fetch Data", error);
        return error;
    };
};

/**
 * get data 1930
 */
const fetchData1930 = async function() {
    try {
        const response: Response = await fetch("./json/movies-1930s.json");
        const data: (string | number) = await response.json();
        return data;
    } catch (error) {
        console.error("Error Fetch Data", error);
        return error;
    };
};

/**
 * get data 1920
 */
const fetchData1920 = async function() {
    try {
        const response: Response = await fetch("./json/movies-1920s.json");
        const data: (string | number) = await response.json();
        return data;
    } catch (error) {
        console.error("Error Fetch Data", error);
        return error;
    };
};

/**
 * get data 1910
 */
const fetchData1910 = async function() {
    try {
        const response: Response = await fetch("./json/movies-1910s.json");
        const data: (string | number) = await response.json();
        return data;
    } catch (error) {
        console.error("Error Fetch Data", error);
        return error;
    };
};

/**
 * get data 1900
 */
const fetchData1900 = async function() {
    try {
        const response: Response = await fetch("./json/movies-1900s.json");
        const data: (string | number) = await response.json();
        return data;
    } catch (error) {
        console.error("Error Fetch Data", error);
        return error;
    };
};

/**
 * genre list
 */
const fetchDataGenreHome = async function() {
    try {
        const response: Response = await fetch("./src/assets/genre/genres.json");
        const data: (string | number) = await response.json();
        return data;
    } catch (error) {
        console.error("Error Fetch Data", error);
        return error;
    };
};

/*----------------------------------------------------------*\
  #GET SHUFFLE ARRAY
\*----------------------------------------------------------*/

function shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    };
    return array;
};

/*----------------------------------------------------------*\
  #GET GENRE LIST
\*----------------------------------------------------------*/

const genre_list_home = document.querySelectorAll("[data-grid-list]") as NodeListOf<HTMLDivElement>;

for (let i: number = 0; i < genre_list_home.length; i++) {
    // skeleton
    genre_list_home[i].innerHTML += `<div class="genre-link-skeleton">`;
};

async function getGenreListHome() {
    const data: any = await fetchDataGenreHome();

    for (let i: number = 0; i < genre_list_home.length; i++) {
        genre_list_home[i].innerHTML = "";

        data.forEach((genre: any) => {
            const genreItem = document.createElement("li");
            genreItem.classList.add("genre-item");

            const genreLink = document.createElement("a");
            genreLink.href = `./search-movise.html?genre=${genre}`;
            genreLink.classList.add("genre-link", "label-medium");
            genreLink.textContent = genre;

            genreItem.appendChild(genreLink);
            genre_list_home[i].appendChild(genreItem);
        });
    };
}; getGenreListHome();

/*----------------------------------------------------------*\
  #GET CARD LIST
\*----------------------------------------------------------*/

/**
 * get 2020
 */
const data2020 = document.querySelector("[data-2020]") as HTMLDivElement;

// skeleton
data2020.innerHTML += `<div class="card-movise-skeleton"></div>`.repeat(24);

async function get2020() {
    const data: any = await fetchData2020();
    const indexData: any = data.slice(0, 24);
    const shuffleData: any = shuffleArray(indexData);

    data2020.innerHTML = "";

    shuffleData.forEach((ele: any) => {
        // for loop genre
        let HTMLGenre: string = "";
        ele.genres.forEach((ele: any) => { HTMLGenre += `${ele}, `; });

        let HTMLCast: string = "";
        ele.cast.forEach((ele: any) => { HTMLCast += `${ele}, `; });

        // create element
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

        data2020.appendChild(cardMovise);
    });

    data2020.innerHTML += `
    <a href="all-movise.html" class="card-load-more label-large">
        load more <i class="fa-solid fa-share-from-square"></i>
    </a>
    `;
}; get2020();

/**
 * get 2010
 */
const data2010 = document.querySelector("[data-2010]") as HTMLDivElement;

// skeleton
data2010.innerHTML += `<div class="card-movise-skeleton"></div>`.repeat(24);

async function get2010() {
    const data: any = await fetchData2010();
    const indexData: any = data.slice(0, 24);
    const shuffleData: any = shuffleArray(indexData);

    data2010.innerHTML = "";

    shuffleData.forEach((ele: any) => {
        // for loop genre
        let HTMLGenre: string = "";
        ele.genres.forEach((ele: any) => { HTMLGenre += `${ele}, `; });
        
        let HTMLCast: string = "";
        ele.cast.forEach((ele: any) => { HTMLCast += `${ele}, `; });

        // create element
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

        data2010.appendChild(cardMovise);
    });

    data2010.innerHTML += `
    <a href="all-movise.html" class="card-load-more label-large">
        load more <i class="fa-solid fa-share-from-square"></i>
    </a>
    `;
}; get2010();

/**
 * get 2000
 */
const data2000 = document.querySelector("[data-2000]") as HTMLDivElement;

// skeleton
data2000.innerHTML += `<div class="card-movise-skeleton"></div>`.repeat(24);

async function get2000() {
    const data: any = await fetchData2000();
    const indexData: any = data.slice(0, 24);
    const shuffleData: any = shuffleArray(indexData);

    data2000.innerHTML = "";

    shuffleData.forEach((ele: any) => {
        // for loop genre
        let HTMLGenre: string = "";
        ele.genres.forEach((ele: any) => { HTMLGenre += `${ele}, `; });
        
        let HTMLCast: string = "";
        ele.cast.forEach((ele: any) => { HTMLCast += `${ele}, `; });

        // create element
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

        data2000.appendChild(cardMovise);
    });

    data2000.innerHTML += `
    <a href="all-movise.html" class="card-load-more label-large">
        load more <i class="fa-solid fa-share-from-square"></i>
    </a>
    `;
}; get2000();

/**
 * get 1990
 */
const data1990 = document.querySelector("[data-1990]") as HTMLDivElement;

// skeleton
data1990.innerHTML += `<div class="card-movise-skeleton"></div>`.repeat(24);

async function get1990() {
    const data: any = await fetchData1990();
    const indexData: any = data.slice(0, 24);
    const shuffleData: any = shuffleArray(indexData);

    data1990.innerHTML = "";

    shuffleData.forEach((ele: any) => {
        // for loop genre
        let HTMLGenre: string = "";
        ele.genres.forEach((ele: any) => { HTMLGenre += `${ele}, `; });
        
        let HTMLCast: string = "";
        ele.cast.forEach((ele: any) => { HTMLCast += `${ele}, `; });

        // create element
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

        data1990.appendChild(cardMovise);
    });

    data1990.innerHTML += `
    <a href="all-movise.html" class="card-load-more label-large">
        load more <i class="fa-solid fa-share-from-square"></i>
    </a>
    `;
}; get1990();

/**
 * get 1980
 */
const data1980 = document.querySelector("[data-1980]") as HTMLDivElement;

// skeleton
data1980.innerHTML += `<div class="card-movise-skeleton"></div>`.repeat(24);

async function get1980() {
    const data: any = await fetchData1980();
    const indexData: any = data.slice(48, 72);
    const shuffleData: any = shuffleArray(indexData);

    data1980.innerHTML = "";

    shuffleData.forEach((ele: any) => {
        // for loop genre
        let HTMLGenre: string = "";
        ele.genres.forEach((ele: any) => { HTMLGenre += `${ele}, `; });
        
        let HTMLCast: string = "";
        ele.cast.forEach((ele: any) => { HTMLCast += `${ele}, `; });

        // create element
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

        data1980.appendChild(cardMovise);
    });

    data1980.innerHTML += `
    <a href="all-movise.html" class="card-load-more label-large">
        load more <i class="fa-solid fa-share-from-square"></i>
    </a>
    `;
}; get1980();

/**
 * get 1970
 */
const data1970 = document.querySelector("[data-1970]") as HTMLDivElement;

// skeleton
data1970.innerHTML += `<div class="card-movise-skeleton"></div>`.repeat(24);

async function get1970() {
    const data: any = await fetchData1970();
    const indexData: any = data.slice(48, 72);
    const shuffleData: any = shuffleArray(indexData);

    data1970.innerHTML = "";

    shuffleData.forEach((ele: any) => {
        // for loop genre
        let HTMLGenre: string = "";
        ele.genres.forEach((ele: any) => { HTMLGenre += `${ele}, `; });
        
        let HTMLCast: string = "";
        ele.cast.forEach((ele: any) => { HTMLCast += `${ele}, `; });

        // create element
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

        data1970.appendChild(cardMovise);
    });

    data1970.innerHTML += `
    <a href="all-movise.html" class="card-load-more label-large">
        load more <i class="fa-solid fa-share-from-square"></i>
    </a>
    `;
}; get1970();

/**
 * get 1960
 */
const data1960 = document.querySelector("[data-1960]") as HTMLDivElement;

// skeleton
data1960.innerHTML += `<div class="card-movise-skeleton"></div>`.repeat(24);

async function get1960() {
    const data: any = await fetchData1960();
    const indexData: any = data.slice(48, 72);
    const shuffleData: any = shuffleArray(indexData);

    data1960.innerHTML = "";

    shuffleData.forEach((ele: any) => {
        // for loop genre
        let HTMLGenre: string = "";
        ele.genres.forEach((ele: any) => { HTMLGenre += `${ele}, `; });
        
        let HTMLCast: string = "";
        ele.cast.forEach((ele: any) => { HTMLCast += `${ele}, `; });

        // create element
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

        data1960.appendChild(cardMovise);
    });

    data1960.innerHTML += `
    <a href="all-movise.html" class="card-load-more label-large">
        load more <i class="fa-solid fa-share-from-square"></i>
    </a>
    `;
}; get1960();

/**
 * get 1950
 */
const data1950 = document.querySelector("[data-1950]") as HTMLDivElement;

// skeleton
data1950.innerHTML += `<div class="card-movise-skeleton"></div>`.repeat(24);

async function get1950() {
    const data: any = await fetchData1950();
    const indexData: any = data.slice(48, 72);
    const shuffleData: any = shuffleArray(indexData);

    data1950.innerHTML = "";

    shuffleData.forEach((ele: any) => {
        // for loop genre
        let HTMLGenre: string = "";
        ele.genres.forEach((ele: any) => { HTMLGenre += `${ele}, `; });
        
        let HTMLCast: string = "";
        ele.cast.forEach((ele: any) => { HTMLCast += `${ele}, `; });

        // create element
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

        data1950.appendChild(cardMovise);
    });

    data1950.innerHTML += `
    <a href="all-movise.html" class="card-load-more label-large">
        load more <i class="fa-solid fa-share-from-square"></i>
    </a>
    `;
}; get1950();

/**
 * get 1940
 */
const data1940 = document.querySelector("[data-1940]") as HTMLDivElement;

// skeleton
data1940.innerHTML += `<div class="card-movise-skeleton"></div>`.repeat(24);

async function get1940() {
    const data: any = await fetchData1940();
    const indexData: any = data.slice(48, 72);
    const shuffleData: any = shuffleArray(indexData);

    data1940.innerHTML = "";

    shuffleData.forEach((ele: any) => {
        // for loop genre
        let HTMLGenre: string = "";
        ele.genres.forEach((ele: any) => { HTMLGenre += `${ele}, `; });
        
        let HTMLCast: string = "";
        ele.cast.forEach((ele: any) => { HTMLCast += `${ele}, `; });

        // create element
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

        data1940.appendChild(cardMovise);
    });

    data1940.innerHTML += `
    <a href="all-movise.html" class="card-load-more label-large">
        load more <i class="fa-solid fa-share-from-square"></i>
    </a>
    `;
}; get1940();

/**
 * get 1930
 */
const data1930 = document.querySelector("[data-1930]") as HTMLDivElement;

// skeleton
data1930.innerHTML += `<div class="card-movise-skeleton"></div>`.repeat(24);

async function get1930() {
    const data: any = await fetchData1930();
    const indexData: any = data.slice(48, 72);
    const shuffleData: any = shuffleArray(indexData);

    data1930.innerHTML = "";

    shuffleData.forEach((ele: any) => {
        // for loop genre
        let HTMLGenre: string = "";
        ele.genres.forEach((ele: any) => { HTMLGenre += `${ele}, `; });
        
        let HTMLCast: string = "";
        ele.cast.forEach((ele: any) => { HTMLCast += `${ele}, `; });

        // create element
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

        data1930.appendChild(cardMovise);
    });

    data1930.innerHTML += `
    <a href="all-movise.html" class="card-load-more label-large">
        load more <i class="fa-solid fa-share-from-square"></i>
    </a>
    `;
}; get1930();