import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './components/Pagination';

import './style.css';
const URL = 'https://gorest.co.in/public/v1/users?page=';
const postPerPage = 100;
const totalPosts = 1000;

const Table = () => {
  const [info, setEmployees] = React.useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  React.useEffect(() => {
    getData(currentPage);
  }, []);

  const getData = async indexNumber => {
    const response = await axios.get(URL + `${indexNumber}`);
    setEmployees(response.data);
  };
  const loadNextPageData = () => {
    setCurrentPage(currentPage + 1);
    getData(currentPage + 1);
  };

  const loadPreviousPageData = () => {
    setCurrentPage(currentPage - 1);
    getData(currentPage - 1);
  };

  const pagiNavigate = pageIndex => {
    setCurrentPage(pageIndex);
    getData(pageIndex);
  };

  const removeData = id => {
    //  axios.delete(info.data.id).then(res => {
    //const del = info.data.filter(employee => {
    // console.log(id);
    // console.log(employee.id);
    //  return id !== employee.id;
    //});
    //info.data = del;
    setEmployees(
      info.data.splice(info.data.findIndex(item => item.id === id), 1)
    );
    //getData();
    // })
  };

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
            <td className="opration">
              <button className="button" onClick={() => removeData(id)}>
                Delete
              </button>
              <button onClick={() => editData(id)}>Edit</button>
              <button onClick={() => ViewData(id)}>View</button>
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

      <div className="pag-row">
        <button onClick={() => loadPreviousPageData()}>prev</button>

        <Pagination postsPerPage={postPerPage} totalPosts={totalPosts} />

        <button onClick={() => loadNextPageData()}>Next</button>
      </div>
    </div>
  );
};

export default Table;
