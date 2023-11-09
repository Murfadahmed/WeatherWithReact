import React, { useState } from "react";
import "./App.css";
const API_KEY = `59a087918d987252bfa01858fb687995`;

function App() {
  const [location, setLocation] = useState("");
  const [data, setdata] = useState({});

  function fectchApi(event) {
    if (event.key === "Enter") {
      try {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=59a087918d987252bfa01858fb687995&units=metric`
        )
          // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
          .then((res) => res.json())
          .then((data) => {
            setdata(data);
            // console.log(data);
            setLocation("");
          });
      } catch (error) {
        console.log("yahn error hai ", error);
      }
    }
    // else{
    //   alert('please hit enter button')
    // }
  }

  return (
    <>
      <div className="app">
        <div className="searchBox">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={fectchApi}
            placeholder="Enter city name..."
          />
        </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp}°C</h1> : null}
              {/* <h1>{data.main.temp}°C</h1> */}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like}°C</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humadity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.main ? <p className="bold">{data.wind.speed}%</p> : null}
              <p>Wind</p>
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={fectchApi}>check</button>
      <p>
        yahan per anaa hai
        {inputValue}
      </p> */}
    </>
  );
}

export default App;

// function location() {
// navigator.geolocation.getCurrentPosition((e)=> console.log(e.coords.latitude,e.coords.longitude))
//  }

// location()
// function fectchApi() {
//     navigator.geolocation.getCurrentPosition((e) =>{
//       let lat = e.coords.latitude
//       let lon = e.coords.longitude
//       console.log(e.coords.latitude, e.coords.longitude)
//     })
//   }
