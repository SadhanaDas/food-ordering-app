import { Fragment } from "react";

import mealImage from '../../assests/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Ordering Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt='The Header' />
            </div>
        </Fragment>
    );
};

export default Header;
