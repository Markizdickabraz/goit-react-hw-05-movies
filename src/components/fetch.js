// import axios from "axios";

// const KEY = `faab19b092cac6c59a97dec233a38f4d`;
// const BASEURL = `https://api.themoviedb.org/3/trending/movie/day?`;
// const STORAGE_KEY = 'genresId';



//     async function fetchMovieRating() {
//     try {
//         const response = await axios.get(`${BASEURL}api_key=${KEY}`)
//         const result = await response.results;
//         return result;
//     } catch (error) {
//       console.log(error);
//     }
      
//   }
   

//  async function fetchGenresId() {
//    const BASEURLGENRES = `https://api.themoviedb.org/3/genre/movie/list?`;
//     try {
//       const resultGenresId = await axios.get(`${BASEURLGENRES}${KEY}`);
//       return resultGenresId.data.genres;
//     } catch (error) {
//       console.log(error);
//     }
//   }
   
//  async function saveInLocalStorageGenresId() {
//   try {
//     const genreData = await fetchGenresId();
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(genreData));
//   } catch (error) {
//     console.log(error);
//   }
// }

// export default function renderStartPage(result) {
//   const IMGURL = `https://image.tmdb.org/t/p/w500/`;
//   const notFound = `https://i.scdn.co/image/ab67616d0000b273d9495d198c584e0e64f3ad9d`;
//   const getGenresJson = localStorage.getItem(STORAGE_KEY);
//   const parseGenresJson = JSON.parse(getGenresJson);
//   const markup = result.map(({ id, poster_path, title, genre_ids, release_date }) => {
//       let genreArr = [];
//       for (const genre of parseGenresJson) {
//         if (genre_ids.includes(genre.id)) {
//           genreArr.push(genre.name);
//         }
//       }
//       return `
//             <li class="films__card" data-id="${id}" id="film_card">
// <img class="films__img" src="${IMGURL}${poster_path}" alt="${title}" loading="lazy" onerror="this.onerror=null; this.src='${notFound}';";"
// />
//   <div class="films__desc">
//     <h3 class="films__title">${title}</h3>
//     <p class="films__genre">
//     ${genreArr.slice(0, 2).join(', ')}
//       <span>|</span>
//       ${release_date.slice(0, 4)}
//     </p>
//   </div>
// </li>
//             `;
//     })
//       .join('');
    
//     return markup;
// }