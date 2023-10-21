import './movies.css';

export default function Movies() {
    const movies = {
     movie1: {
      "title": "Antebellum",
      "year": 2020,
      "cast": [
      "Janelle Monáe",
      "Eric Lange",
      "Jena Malone",
      "Jack Huston",
      "Kiersey Clemons",
      "Gabourey Sidibe"
      ],
      "genres": [
      "Thriller"
      ],
      "href": "Antebellum_(film)",
      "extract": "Antebellum is a 2020 American thriller film written and directed by Gerard Bush and Christopher Renz in their feature directorial debuts. The film stars Janelle Monáe, Eric Lange, Jena Malone, Jack Huston, Kiersey Clemons, and Gabourey Sidibe, and follows a 21st century African-American woman who wakes to find herself mysteriously in a Southern slave plantation from which she must escape.",
      "thumbnail": "https://upload.wikimedia.org/wikipedia/en/2/2e/Antebellum_poster.jpeg",
      "thumbnail_width": 259,
      "thumbnail_height": 384
      },
     movie2: {
      "title": "The Nest",
      "year": 2020,
      "cast": [
      "Jude Law",
      "Carrie Coon",
      "Charlie Shotwell",
      "Oona Roche",
      "Adeel Akhtar"
      ],
      "genres": [
      "Drama",
      "Romance"
      ],
      "href": "The_Nest_(2020_film)",
      "extract": "The Nest is a 2020 romantic drama film written, directed, and produced by Sean Durkin. The film stars stars Jude Law, Carrie Coon, Charlie Shotwell, Oona Roche, and Adeel Akhtar.",
      "thumbnail": "https://upload.wikimedia.org/wikipedia/en/c/cc/The_Nest_poster.jpeg",
      "thumbnail_width": 259,
      "thumbnail_height": 384
      },
     movie3: {
      "title": "Blackbird",
      "year": 2020,
      "cast": [
      "Susan Sarandon",
      "Kate Winslet",
      "Mia Wasikowska",
      "Lindsay Duncan",
      "Rainn Wilson",
      "Bex Taylor-Klaus",
      "Sam Neill"
      ],
      "genres": [
      "Drama"
      ],
      "href": "Blackbird_(2019_film)",
      "extract": "Blackbird is a 2019 American drama film directed by Roger Michell and written by Christian Torpe. It is a remake of the 2014 Danish film Silent Heart, also written by Torpe. It stars Susan Sarandon, Kate Winslet, Mia Wasikowska, Lindsay Duncan, Rainn Wilson, Bex Taylor-Klaus, and Sam Neill.",
      "thumbnail": "https://upload.wikimedia.org/wikipedia/en/4/4d/Blackbird_poster.jpg",
      "thumbnail_width": 259,
      "thumbnail_height": 384
      },
     movie4: {
      "title": "Lost Girls & Love Hotels",
      "year": 2020,
      "cast": [
      "Alexandra Daddario",
      "Takehiro Hira",
      "Carice van Houten"
      ],
      "genres": [
      "Drama",
      "Erotic",
      "Thriller"
      ],
      "href": "Lost_Girls_%26_Love_Hotels",
      "extract": "Lost Girls & Love Hotels is a 2020 American erotic thriller drama film directed by William Olsson from a screenplay by Catherine Hanrahan, based on Hanrahan's 2006 novel Lost Girls and Love Hotels. The film stars Alexandra Daddario as an American English teacher in Tokyo, who loses herself to the city's nightlife and begins an affair with a member of the Yakuza gangs. It was released through video on demand on September 18, 2020, by Astrakan Film AB.",
      "thumbnail": "https://upload.wikimedia.org/wikipedia/en/4/44/Lost_Girls_%26_Love_Hotels_film_poster.png",
      "thumbnail_width": 220,
      "thumbnail_height": 322
      },
     movie5: {
      "title": "Killian & the Comeback Kids",
      "year": 2020,
      "cast": [
      "Taylor A. Purdee",
      "John Donchak",
      "Nathan Purdee",
      "Kassie DePaiva"
      ],
      "genres": [
      "Musical"
      ],
      "href": "Killian_%26_the_Comeback_Kids",
      "extract": "Killian & the Comeback Kids is a 2020 American folk-rock musical film written and directed by Taylor A. Purdee. The film stars Purdee, John Donchak, Nathan Purdee, and Kassie DePaiva along with an ensemble cast that features Maddi Jane and Lee Grant. Killian & the Comeback Kids follows a mixed-race musician who finds himself back in his struggling rural hometown after graduating from an expensive university. The film's screenplay and original music have been preserved by The Academy of Motion Pictures Arts and Sciences' permanent archive."
      }
    };
    const movie1 = {
        movie1: {
         "title": "Antebellum",
         "year": 2020,
         "cast": [
         "Janelle Monáe",
         "Eric Lange",
         "Jena Malone",
         "Jack Huston",
         "Kiersey Clemons",
         "Gabourey Sidibe"
         ],
         "genres": [
         "Thriller"
         ],
         "href": "Antebellum_(film)",
         "extract": "Antebellum is a 2020 American thriller film written and directed by Gerard Bush and Christopher Renz in their feature directorial debuts. The film stars Janelle Monáe, Eric Lange, Jena Malone, Jack Huston, Kiersey Clemons, and Gabourey Sidibe, and follows a 21st century African-American woman who wakes to find herself mysteriously in a Southern slave plantation from which she must escape.",
         "thumbnail": "https://upload.wikimedia.org/wikipedia/en/2/2e/Antebellum_poster.jpeg",
         "thumbnail_width": 259,
         "thumbnail_height": 384
         },
       };

    // Convertir el objeto movies en un arreglo de valores
    const movieArray = Object.values(movies);

    // Añadir una nueva película al final del arreglo
    // movieArray.push(movieArray);

    // Eliminar el último elemento del arreglo
    // movieArray.pop();

    // Eliminar el primer elemento del arreglo
    // movieArray.shift();

    // Añadir elementos al principio del arreglo
    // movieArray.unshift(movie1);


    return (
        <div className='movie-container'>
        <h1>Movies with Json</h1>
        <div className="movies">
        {movieArray.map((movie, index) => {
            console.log("movie", index, movie);
            return (
            <div key={index} className="card">
                <h2>{movie.title}</h2>
                <p>{movie.year}</p>
            </div>
            );
        })}
        </div>
        </div>
      );
}