import { useDispatch, useSelector } from 'react-redux';

import { uiAction } from '../../store/ui-slice';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartQuantity = useSelector(state => state.cart.totalQuantity)

  const toggleCartHandler = (event) => {
    event.preventDefault();

    dispatch(uiAction.toggle());
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
