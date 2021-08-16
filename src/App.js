import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
  const URL = 'https://gorest.co.in/public/v1/users?page='

  const Table = () => {
      const [info, setEmployees] = React.useState([]);
      const [currentPage, setCurrentPage ] = useState(1);
      
      React.useEffect(() => {
          getData()
      }, [currentPage])
  
      const getData = async () => {
  
          const response = await axios.get(URL+ `${currentPage}`)
          setEmployees(response.data)
      }
  
      const removeData = (id) => {
  
          axios.delete(info.data.id).then(res => {
              const del = info.filter(employee => id !== employee.id)
              setEmployees(del)
          })
      }

  const renderHeader = () => {
    let headerElement = ['id', 'name', 'email', 'gender', 'status', 'action'];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderBody = () => {
    return (
      info.data &&
      info.data.map(({ id, name, email, gender, status }) => {
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{gender}</td>
            <td>{status}</td>
            <td className='opration'>
                        <button className='button' onClick={() => removeData(info.id)}>Delete</button>
                        <button  onClick={() => editData(id)}>Edit</button>
                        <button  onClick={() => ViewData(id)}>View</button>
             </td>  
       
          
          </tr>
        );
      })
    );
  };

  return (
    <div>
      <h1 id="title">React Table</h1>
      <table id="employee">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>



      <button onClick={() => {() => {
    setCurrentPage(currentPage - 1);
       }}}>prev</button>

      <button onClick={() => {() => {
    setCurrentPage(currentPage + 1);
       }}}>Next</button>
   
       



    </div>
  );
};

export default Table;