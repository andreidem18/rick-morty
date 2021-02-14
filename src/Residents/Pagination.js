import "./Pagination.css";

const Pagination = ({ residentsPerPage, totalResidents, paginate, selected }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResidents / residentsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="text-center">
      <div className="pagination">
          {pageNumbers.map((number) => (
              <a 
              key={number} 
              href="!#" 
              onClick={() => paginate(number)}
              className={number === selected ? "selected" : ""}>
                {number}
              </a>
          ))}
      </div>
    </div>
  );
};

export default Pagination;
