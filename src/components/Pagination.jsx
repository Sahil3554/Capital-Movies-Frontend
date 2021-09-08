import React from "react";

const Pagination = ({ page, setPage, total }) => {
  const getPaginate = (total) => {
    let content = [];
    for (let i = page; i <= page + 2; i++) {
      content.push(
        <li className="page-item" onClick={() => setPage(i)} key={i}>
          <button className="page-link text-primary">{i}</button>
        </li>
      );
    }
    return content;
  };
  const incPage = () => {
    if (page !== total) {
      setPage(page + 1);
    }
  };
  const decPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };
  return (
    <div className="pagination">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link text-primary"
              onClick={() => decPage()}
            >
              Previous
            </button>
          </li>
          {getPaginate(total)}
          <li className="page-item">
            <button
              className="page-link text-primary"
              onClick={() => incPage()}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
