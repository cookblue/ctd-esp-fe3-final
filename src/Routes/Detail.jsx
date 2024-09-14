import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const { state } = useContext(ContextGlobal);

  useEffect(() => {
    const fetchDentist = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      setDentist(data);
    };

    fetchDentist();
  }, [id]);

  if (!dentist) return <p>Loading...</p>;

  return (
    <div className={`detail ${state}`}> 
      <h1>Detalle del dentista {id}</h1>
      <p>NOMBRE: {dentist.name}</p>
      <p>EMAIL: {dentist.email}</p>
      <p>TELEFONO: {dentist.phone}</p>
      <p>WEBSITE: {dentist.website}</p>
    </div>
  );
};

export default Detail;
