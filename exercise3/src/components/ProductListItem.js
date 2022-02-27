import React from "react";
import styles from './ProductListItem.module.css';
//import cx from 'classnames';
//import logo from './images/'{props.name}'.png';


/* Product list item */
const ProductListItem = props => {
  let stars = [];
   for(var i = props.review; i >= 0.5; i--)
      {
        if(i < 1)
        {
          stars.push(<div className = {styles.starDiv}><img src={require('../images/halfstar.PNG')}/></div>);
        }
        else
        stars.push(<div className = {styles.starDiv}><img src={require('../images/star.PNG')}/></div>);
      }

  return <div className = {styles.productDiv}>
    <img src={require('../images/'+props.name+'.PNG')}/>
    <div>
      {props.desc}
    </div>
    <div>
      {stars}
    </div>
    <div>
      <div className = {styles.priceDiv}>
        ${props.price}
      </div>
      {props.oldprice?
      <div className = {styles.oldPriceDiv}>
        ${props.oldprice}
      </div>:null
      }
    </div>
  </div>
}

export default ProductListItem;