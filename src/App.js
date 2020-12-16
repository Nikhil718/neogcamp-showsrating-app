import React, { useState } from "react";
import "./styles.css";

const seriesDB = {
  TrendingNow: [
    {
      imageurl: "https://tvguide1.cbsistatic.com/feed/1/970/119532970.jpg",
      name: "13 Reasons Why",
      rating: " Rating: 4.0/5"
    },
    {
      imageurl:
        "data:image/jpeg;base64,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",
      name: "The God Place",
      rating: " Rating: 3.5/5"
    },
    {
      imageurl:
        "https://media.gqindia.com/wp-content/uploads/2020/11/Fabulous-lives-of-Bollywood-wives.jpg",
      name: "Bollywood Waves",
      rating: "Rating: 3.0/5"
    },
    {
      imageurl:
        "https://occ-0-999-1001.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcB7jn-98Y0O9Kd7aX0oeGG5JDvfAUll90fLntp7_W6j1ph9QqGn-1IBWIwHZdHTlJRBeFyfR1BZ0eanVmFRoyfDe8w0QnmCTOo4IUPHRWYKJu0op40npOx1UYo8-jlzBN3qccI6Ogd0s8zZIi-FV5yCeGyTnuc.jpg",
      name: "Drive To Servive",
      rating: "Rating: 4.5/5"
    },
    {
      imageurl:
        "https://www.cinematyrant.com/wp-content/uploads/2016/10/friends-on-netflix.jpg",
      name: "Friends",
      rating: "Rating: 4.8/5"
    }
  ],

  UStvShows: [
    {
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0n92lk_uwG2yYCA_MKGzrhVnZvcK6R90_Rw&usqp=CAU",
      name: "Big Bang Theory",
      rating: " Rating: 5/5"
    },
    {
      imageurl:
        "https://m.media-amazon.com/images/M/MV5BOTI2MjIzN2ItZDg0OS00MTlhLWIzMTMtYWI4ZTA0NGE4NDJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY1200_CR93,0,630,1200_AL_.jpg",
      name: "Two and a Half Men",
      rating: "Rating: 4.5/5"
    },
    {
      imageurl:
        "https://m.media-amazon.com/images/M/MV5BNzA5MjkwYzMtNGY2MS00YWRjLThkNTktOTNmMzdlZjE3Y2IxXkEyXkFqcGdeQXVyMjkwMzMxODg@._V1_UY268_CR0,0,182,268_AL_.jpg",
      name: " Umbrella Academy",
      rating: "Rating: 4/5"
    },
    {
      imageurl:
        "https://upload.wikimedia.org/wikipedia/en/0/0b/House_of_Cards_season_1.png",
      name: "House Of Cards",
      rating: "Rating: 2/5"
    }
  ],
  NewReleases: [
    {
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWw3Qd36I2XUMPQfN4Y5I8415fPpYe8rqQtQ&usqp=CAU",
      name: "Crash Landing On You",
      rating: " Rating: 3/5"
    },
    {
      imageurl: "https://tvguide1.cbsistatic.com/feed/1/970/119532970.jpg",
      name: "13 Reasons Why",
      rating: "Rating: 5/5"
    },
    {
      imageurl:
        "https://upload.wikimedia.org/wikipedia/en/1/14/The_Last_Dance_2020.jpg",
      name: "The Last Dance",
      rating: "Rating: 4/5"
    },
    {
      imageurl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/31/The_Walking_Dead%2C_Season_One_cover.jpeg/220px-The_Walking_Dead%2C_Season_One_cover.jpeg",
      name: "The Walking Dead",
      rating: "Rating: 5/5"
    }
  ]
};
export default function App() {
  const [mainsection, setmainsection] = useState("TrendingNow");
  function mainClickHandler(main) {
    setmainsection(main);
  }
  return (
    <div className="App">
      <h1>
        <span className="head-txt">Netflix</span> Rating App
      </h1>
      <h4 className="head-txt">🍿 Netflix And Chill 🍿</h4>

      <div>
        {Object.keys(seriesDB).map((main) => (
          <button
            onClick={() => mainClickHandler(main)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {main}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {seriesDB[mainsection].map((series) => (
            <div className="container">
              <li
                className="list-items"
                key={series.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  width: "90%",
                  height: "10rem",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                {" "}
                <img className="list-img" src={series["imageurl"]}></img>
                <div
                  className="list-text"
                  style={{
                    fontSize: "larger",
                    float: "right",
                    padding: "3px 0.1px"
                  }}
                >
                  {" "}
                  {series.name}{" "}
                </div>
                <div
                  className="list-text"
                  style={{
                    fontSize: "medium",
                    padding: "8px 40px",
                    float: "right"
                  }}
                >
                  {" "}
                  {series.rating}{" "}
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
