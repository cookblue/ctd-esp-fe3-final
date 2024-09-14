import { useState,useEffect } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Cargar favoritos desde localStorage al iniciar el componente
    const loadedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(loadedFavs);
  }, []);

 return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.map(fav => (
          <Card 
            key={fav.id} 
            name={fav.name} 
            username={fav.username} 
            id={fav.id}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;
