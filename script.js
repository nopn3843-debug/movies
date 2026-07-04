const movies = [
{
title:"Inception",
year:"2010",
rating:"⭐ 8.8",
image:"https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
},
{
title:"Interstellar",
year:"2014",
rating:"⭐ 8.7",
image:"https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
},
{
title:"The Dark Knight",
year:"2008",
rating:"⭐ 9.0",
image:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
},
{
title:"Breaking Bad",
year:"2008",
rating:"⭐ 9.5",
image:"https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg"
},
{
title:"Stranger Things",
year:"2016",
rating:"⭐ 8.7",
image:"https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg"
},
{
title:"Wednesday",
year:"2022",
rating:"⭐ 8.2",
image:"https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg"
}
];

const container = document.getElementById("movies");
const search = document.getElementById("search");

function showMovies(list){
container.innerHTML="";

list.forEach(movie=>{
container.innerHTML += `
<div class="card">
<img src="${movie.image}" alt="${movie.title}">
<div class="info">
<h3>${movie.title}</h3>
<p>📅 ${movie.year}</p>
<p class="rate">${movie.rating}</p>
</div>
</div>
`;
});
}

showMovies(movies);

search.addEventListener("input",()=>{
const text = search.value.toLowerCase();

const result = movies.filter(movie =>
movie.title.toLowerCase().includes(text)
);

showMovies(result);
});
