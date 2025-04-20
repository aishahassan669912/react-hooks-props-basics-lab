// src/components/Home.js
export default function Home({ name, city, color }) {
  return (
    <div id="home">
      <h1 style={{ color }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}