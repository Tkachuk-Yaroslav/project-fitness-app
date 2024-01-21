import { PaginationContainer, PaginationWrapper, SpanPagination } from './Pagination.styled';

export const Pagination = ({
  perPage,
  allExercises,
  currentPage,
  changePage,
}) => {
  const pageNumbers = [];
  const pages = Math.ceil(allExercises / perPage);

  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationWrapper>
      <PaginationContainer>
        {pageNumbers.map(number => (
            <div key={number}>
            <SpanPagination
              href="#"
              onClick={() => changePage(number)}
              className={number === currentPage ? 'active' : ''}
            />
          </div>
        ))}
      </PaginationContainer>
    </PaginationWrapper>
  );
};
