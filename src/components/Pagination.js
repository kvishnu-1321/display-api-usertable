import React from 'react';
import pagiNavigate from '../App';

const pagiNavigate = number => {
  pagiNavigate(number);
};

const Pagination = ({ postsPerPage, totalPosts }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination ">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a
              onClick={() => pagiNavigate(number)}
              href="!#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
