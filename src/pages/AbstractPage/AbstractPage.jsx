import React from 'react';
import { Outlet } from 'react-router-dom';
import LateralMenu from '@encit/web-ui-components/LateralMenu'
import styles from '../Spa.module.css'
import PropTypes from 'prop-types';

const AbstractPage = ({ menuTree }) => {

    return (<div className={styles.mainContainer}>
        <div className={styles.lateralMenu}>
            <LateralMenu menuOptions={menuTree}></LateralMenu>
        </div>
        <div className={styles.spaContent}>
            <div className={styles.spaInnerContent}>
                <Outlet />
            </div>
        </div>
    </div>)
};


AbstractPage.propTypes = {
    menuTree: PropTypes.arrayOf(
        PropTypes.shape({
            itemLabel: PropTypes.string.isRequired,
            itemResource: PropTypes.string,
            itemContent: PropTypes.arrayOf(
                PropTypes.shape(
                    {
                        itemLabel: PropTypes.string.isRequired,
                        itemResource: PropTypes.string.isRequired
                    }
                )
            )
        })
    ).isRequired
};

export default AbstractPage;