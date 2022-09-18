import Header from "./Header";
import "./Home.css";
import HomeBooks from "./HomeBooks";

function Home() {
  let finalBookGenres = [];
  const bookGenres = [
    "Thriller",
    "Suspense",
    "Western",
    "Travel",
    "Romance",
    "Memoir",
    "Mystery",
    "Poetry",
    "Horror",
    "Humour",
    "Journal",
    "Fantasy",
    "History",
    "Drama",
    "Crime",
    "Classic",
    "Biography",
    "Business",
    "Action",
    "Art",
    "Diary",
    "Fairytale",
    "Satire",
    "Sports",
  ];

  let link = `https://www.googleapis.com/books/v1/volumes?q=`;

  function getRandomBookGenre() {
    for (let i = 0; i < 7; i++) {
      let randomBookGenre =
        bookGenres[Math.floor(Math.random() * bookGenres.length)];

      finalBookGenres.push(randomBookGenre);
    }
  }

  getRandomBookGenre();
  // console.log(randomBookGenres);
  return (
    <section>
      <Header />
      {finalBookGenres.map((finalBookGenre) => (
        <HomeBooks title = {finalBookGenre} fetchBook={link + `${finalBookGenre}`} />
      ))}
    </section>
  );
}

export default Home;
