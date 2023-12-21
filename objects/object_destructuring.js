let theSimpsons = {
    id: 1,
    est: 1989,
    genre: "animated",
    characters: ["Homer", "Marge", "Bart", "Lisa", "Maggie"],
    seasons: {
        "season one" : [
            {
                episode_title: "Simpsons Roasting on an open fire",
                aired: "1989-12-17",
            },
            {
                episode_title: "Bart the Genius",
                aired: "1990-01-01",
            },
        ] ,
        "Season Two": [
            
        ],
        "Season Three": [

        ],

    },
    currently_running: true,
};

//cool way to draw keys out of objects
let {characters, seasons} = theSimpsons;
console.log(characters);
console.log(seasons);
characters.push ("Moe");
console.log(theSimpsons);

let { currently_running: on_air } = theSimpsons;
// console.log(on_air); // on_air is a representation of the value that exists within the currently_running key
// let on_air2 = theSipsons.currently_running;
// console.log(on_air2);

//? Spread with Objects

let simpsonsCharacters = {
    simpsonHouse: ["Homer", "Marge", "Bart", "Lisa", "Maggie"],
    moesTavern: ["Moe", "Barney"],
};

let generalLocations = {
    park: "statue",
    beach: "dock",
    lake: "3 eyed fish",
};

let locations = {
    ...simpsonsCharacters,
    dmv: ["Patty", "Selma"],
    ...generalLocations,
};

console.log(locations);

console.log(locations.simpsonHouse);

theSimpsons = {
    ...theSimpsons,
    locations: { ...locations},
};

console.log(theSimpsons);