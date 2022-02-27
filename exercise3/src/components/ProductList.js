import React from "react";
import ProductListItem from './ProductListItem';

/* Product list component, which renders bunch of ProductListItem components inside a HTML ul element based on the data received through items prop */
const ProductList = props => {
  return <div>
    {
      props.items.map(i => <ProductListItem {...i} key={ i.id }/>)
    }
  </div>
}

export default ProductList;