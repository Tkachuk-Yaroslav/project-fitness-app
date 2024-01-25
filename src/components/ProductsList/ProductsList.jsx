import ProductsListItem from 'components/ProductsListItem/ProductsListItem';
import { ProductsListWrap } from './ProductsList.styled';
import { Button } from '../../pages/ProductsPage/ProductsPage.styled';

const ProductsList = ({
  products,
  fetchMoreProducts,
  isFetchButtonDisabled,
}) => {
  return (
    <ProductsListWrap>
      {products.map(
        ({ _id, groupBloodNotAllowed, weight, calories, category, title }) => (
          <ProductsListItem
            key={_id}
            id={_id}
            weight={weight}
            calories={calories}
            category={category}
            title={title}
            groupBloodNotAllowed={groupBloodNotAllowed}
          />
        )
      )}
      <Button onClick={fetchMoreProducts} disabled={isFetchButtonDisabled}>
        {isFetchButtonDisabled ? 'No More Products' : 'Load More'}
      </Button>
    </ProductsListWrap>
  );
};

export default ProductsList;
