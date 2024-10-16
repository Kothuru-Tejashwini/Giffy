import React, { useState } from 'react';
function App() {
  const [query, setQuery] = useState('');
  const [gifs, setGifs] = useState([]);
  const fetchGifs = async () => {
    const apiKey = 'f9MAWMVUm4XFBTPt637hqzpu32TScNUx';
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();
    setGifs(data);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    fetchGifs();
  };
  return (
    <div className="app">
      <h1>Giffy Search</h1>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Search for GIFs"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="gif-container">
        {gifs.map((gif) => (
          <div key={gif.id} className="gif">
            <img src={gif.images.fixed_height.url} alt={gif.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
