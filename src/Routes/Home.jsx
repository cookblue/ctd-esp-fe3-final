import { useEffect, useState } from 'react';
import Card from '../Components/Card';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const handleCardClick = (id) => {
    navigate(`/dentist/${id}`);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(response);
        console.log(response.data[0].address); 
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <main className={`home`}>
      <h1>Home</h1>
      <div className='card-grid'>
        {users.map((user) => (
          <Card 
            key={user.id} 
            name={user.name} 
            username={user.username} 
            id={user.id}
            onClick={() => handleCardClick(user.id)}
          />
        ))}
      </div>
    </main>
  );
}

export default Home;
