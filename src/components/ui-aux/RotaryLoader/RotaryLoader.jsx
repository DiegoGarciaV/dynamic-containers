import React from "react";
import styles from './RotaryLoader.module.css'
import PropTypes from 'prop-types';
import rotaryImg from '../../../assets/imgs/icons/buffering.png'
const RotaryLoader = ({size, color}) => {
    return (
        <div className={`${styles.rotaryContainer} ${styles[size]}`}>
            <img src={rotaryImg} alt="Loading"  className={styles.rotaryIcon}/>
        </div>
    )
}
RotaryLoader.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string
  };

export default RotaryLoader;

