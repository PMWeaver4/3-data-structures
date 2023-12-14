//? Objects

// let marvelHero = {
//     fullName: "Peter Parker",
//     codeName: "Spider-Man",
//     age: 25,
//     active: true,
// };

/*
? Object Literal
    When our values are written within our keys
        - Are HardCoded

? Structure

    keyword: objectName = {
        key: value
    }

    *Objects are considered Dictionaries

*/

let theSimpsons = {
    id: 1,
    est: 1989,
    genre: "animated",
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

// console.log(theSimpsons.genre);// animated
// console.log(theSimpsons.seasons["season one"][0].episode_title);

// theSimpsons.characters = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];
// console.log(theSimpsons);

/*
    - Use an array method to add another character to the character arry
    - console.log just the characters from theSimpson object

*/
// theSimpsons.characters.push("Moe");
// console.log(theSimpsons.characters);

// theSimpsons.currently_running = false;
// console.log(theSimpsons);


/*
 - Navigate to season one, episode 2, and change the date to reflect a date of '1990-1-14'
*/

theSimpsons.seasons["season one"][1].aired = "1990-01-14"
console.log(theSimpsons.seasons["season one"][1]);
