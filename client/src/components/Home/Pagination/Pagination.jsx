import './pagination.css';

const Pagination = ({goToNextPage, goToPreviousPage, totalPages,currentPage}) => {
    return (
        <div className="pagination">
            <button className="previousBtn" onClick={goToPreviousPage} disabled={currentPage === 1}>
                Anterior
            </button>
            <span className="currentBtn">{currentPage}</span>
            <button className="nextBtn" onClick={goToNextPage} disabled={currentPage === totalPages}>
                Siguiente
            </button>
        </div>
    )
}

export default Pagination;