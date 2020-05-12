import React from "react";

const Pagination = (props) => {
  const { currentPage, goPrev, goNext } = props;
  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev}>
        ←
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" onClick={goNext}>
        →
      </button>
    </div>
  );
};

export default Pagination;
