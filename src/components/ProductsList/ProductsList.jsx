import ProductsListItem from 'components/ProductsListItem/ProductsListItem';
import { ProductsListWrap } from './ProductsList.styled';

const ProductsList = ({ products }) => {
  return (
    <ProductsListWrap>
      {products.map(
        ({ _id, groupBloodNotAllowed, weight, calories, category, title }) => (
          <ProductsListItem
            key={_id}
            weight={weight}
            calories={calories}
            category={category}
            title={title}
            groupBloodNotAllowed={groupBloodNotAllowed}
          />
        )
      )}
    </ProductsListWrap>
  );
};

export default ProductsList;
