import React from "react";

function Food({ fav }) {
  console.log({ fav });
  return <h3>I Like {fav}</h3>;
}

function App() {
  return (
    <div className="App">
      <h1>I love React!!!</h1>
      <Food fav="kimchi" />
      <Food fav="samguypsal" />
      <Food fav="ramen" />
      <Food fav="udong" />
    </div>);
}

export default App;
