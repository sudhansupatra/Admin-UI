import React from "react";

function Pagination({
  currentPage,
  handlePrevPage,
  handleNextPage,
  totalPages,
}) {
  return (
    <div className="pagination-container">
      <button
        className={`pagination-button prev-next ${currentPage === 1 ? "disabled" : ""}`}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        &lt; Prev
      </button>
      <button className={`pagination-button active prev-next`} disabled>
        {currentPage}
      </button>
      <button
        className={`pagination-button prev-next ${
          currentPage === totalPages ? "disabled" : ""
        }`}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next &gt;
      </button>
    </div>
  );
}

export default Pagination;

