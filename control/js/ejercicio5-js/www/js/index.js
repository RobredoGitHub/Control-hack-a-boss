'use strict';
const URL = "https://rickandmortyapi.com/api/episode"
const getCharacters = async (URL) => {

    try {
        const response = await fetch (URL);
        const data = await response.json();
        const episodes = data.results
        let epInJanuary = episodes.filter((value) => {
            return  value.air_date.includes(January)
        });
        console.log(epInJanuary)
}   catch{
        console.warn("Something is not working out");
}
}

getCharacters(URL);
