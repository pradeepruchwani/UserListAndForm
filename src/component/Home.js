import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
// import {database} from '../Firebase';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the data from the  URL
        const response = await fetch(
          'https://react-contact-bb621-default-rtdb.firebaseio.com/reactform.json'
        );
        const jsonData = await response.json();

        // Convert the data to an array
        const dataArray = Object.keys(jsonData).map(key => ({
          id: key,
          ...jsonData[key]
        }));

        setData(dataArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
    <div className='py-4'>
      <h1>Display List</h1>
      <Table striped variant='dark'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    </div>
  );
};

export default Home;
