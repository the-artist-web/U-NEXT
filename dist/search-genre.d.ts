declare const allJsonSearchGenre: string[];
declare const fetchDataallMoviseSearchGenre: () => Promise<unknown>;
declare const fetchDataGenreSearchGenre: () => Promise<unknown>;
declare const fetchDataYearSearchGenre: () => Promise<unknown>;
declare const search: HTMLInputElement;
declare const backPage: HTMLInputElement;
declare const searchbar: HTMLInputElement;
declare function getSearchbar(): Promise<void>;
declare const genres_list: HTMLDivElement;
declare function getGenres(): Promise<void>;
declare const years_list: HTMLDivElement;
declare function getYears(): Promise<void>;
