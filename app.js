
var myMovies = [
    {
        title: "Forest Gump",
        published: 1994,
        image: "./img/forest-gump.jpg",
        genres: ["Drama"],
        directors: "",
        writers: "",
        actors: ["Tom Hanks"]
    },

    {
        title: "Pretty Woman",
        published: 1990,
        image: "./img/pretty-woman.jpg",
        genres: ["Drama"],
        directors: "",
        writers: "",
        actors: ["Julia Roberts", "Richard Gere"]
    },

    {
        title: "Indiana Jones and the dial of destiny",
        published: 2023,
        image: "./img/indiana-jones.jpg",
        genres: ["Drama", "Adventure"],
        directors: "",
        writers: "",
        actors: ["Harrison Ford"]
    },

    {
        title: "Aliens",
        published: 1986,
        image: "./img/Aliens_poster.jpg",
        genres: ["Drama", "Science-fiction"],
        directors: "",
        writers: "",
        actors: ["Sigourney Weaver", "Bill Paxton"]
    },

    {
        title: "Escape from New York",
        published: 1981,
        image: "./img/escape-from-new-york-matt-ferguson-poster.webp",
        genres: ["Action-drama"],
        directors: "",
        writers: "",
        actors: ["Kurt Russel"]
    },

    {
        title: "Gladiator",
        published: 2000,
        image: "./img/gladiator.jpg",
        genres: ["Action-drama"],
        directors: "",
        writers: "",
        actors: ["Russel Crowe", "Joaquin Phoenix"]
    },

    {
        title: "The Hunger",
        published: 1983,
        image: "./img/the-hunger.jpg",
        genres: ["Drama", "Romance"],
        directors: "",
        writers: "",
        actors: ["Catherine Deneuve", "Susan Sarando", "David Bowie"]
    },

    {
        title: "Tango and Cash",
        published: 1989,
        image: "./img/tangocash2.jpg",
        genres: ["Action-drama", "Action"],
        directors: "",
        writers: "",
        actors: ["Kurt Russel", "Sylvester Stalone"]
    },

    {
        title: "Blow Out",
        published: 1981,
        image: "./img/blow-out.jpg",
        genres: ["Thriller", "Action-drama"],
        directors: "",
        writers: "",
        actors: ["John Travolta", "Nancy Allen"]
    },

    {
        title: "Dune",
        published: 1984,
        image: "./img/dune1984.jpg",
        genres: ["Fantasy", "Drama", "Science-fiction"],
        directors: "",
        writers: "",
        actors: ["Everett McGill", "Sting", "Kyle MacLachlan"]
    }
]

const FORM = document.querySelector(".searchForm")

FORM.addEventListener("submit", submitHandler)

function submitHandler(event) {
    event.preventDefault()

    const RESULTS = myMovies.filter(function (element) {
        return searchTitle(event.target.search.value, element.title)
            || findInArray(element.genres, event.target.search.value)
            || findInArray(element.actors, event.target.search.value)
            
    })


    console.log(RESULTS)
    const UL = document.getElementsByClassName("movieResults")[0]

    RESULTS.forEach(function(result) {
        const LI = document.createElement("li")
        LI.innerHTML = 
            `<h2 class="movieTitle">${result.title}</h2>
            <div class="boxHeader">
            <span class="moviePublished">${result.published}</span>
            <img src="${result.image}" class="movieImage">
            </div>
            <ul>
            <li class="movieGenres">${result.genres.join(", ")}</li>
            </ul>
            <div class="featureList">
            <h3 class="movieActors">stars:</h3>
            <ul>
            <li class="movieActors">${result.actors.join(", ")}</li>
            </ul>  
            </div> 
            `

            function createList(movie) {
                const LI = document.createElement("li")
                LI.innerHTML = 
                `<h3>${movie.title}</h3>
                <span>${movie.published}</span>
                <img>${movie.image}</img>
                <h4>Genre<h4>
                <ul class="genre"> ${generateListItems(movie.genres)}</ul>
                <h4>Director</h4>
                <ul class="director"> 
                <h4>Actors</h4>   
                <ul class="actors">${generateListItems(movie.actors)}</ul>`
            
                return LI
            }  

    UL.append(LI)
    })
}  

function searchTitle(keyword, title) {
    return title
        .toLowerCase()
        .includes(
            keyword.toLowerCase())
}

function findInArray(haystack, needle) {
    console.log(haystack);
    return haystack.find(function (item) {
        return item.toLowerCase().includes(needle.toLowerCase())
    })
}

const LIST = RESULTS.map(createList)
const RESULT_LIST = document.querySelector("./")

function generateListItems(items) {
    return items.map(item => `<li>${item}</li>`).join('');
}

