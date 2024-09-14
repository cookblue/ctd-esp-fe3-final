import { useState } from 'react';
import { Link } from "react-router-dom";


const Card = ({name, username, id}) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const addFav = ()=>{   
    const favorite = { name, username, id };
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push(favorite);
    localStorage.setItem("favorites", JSON.stringify(favorites));

    setShowConfirm(true);
    setTimeout(() => setShowConfirm(false), 3000);
  }

  return (
    <div className="card">
       <img src="public/images/doctor.jpg" alt={`Dr(a). ${name}`} className="dentist-image"/>
        <div className="card-info">
        <p>{name}</p>
        <p> {username}</p>
        <p>ID: {id}</p>
      </div>

        <Link to={`/dentist/${id}`} className="details-link">
          <span>Ver detalles</span>
        </Link>

        <button onClick={addFav} className="favButton">Favorito ❤️</button>
        {showConfirm && <div className="confirmation">Agregado a favoritos</div>}
    </div>
  );
};

export default Card;
