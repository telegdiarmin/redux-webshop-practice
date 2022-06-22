import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const MainHeader = (props) => {
  const dispatch = useDispatch()
  const cartButtonHandler = () => {
    dispatch(uiActions.changeIsCartVisible())
  }

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={cartButtonHandler}/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
