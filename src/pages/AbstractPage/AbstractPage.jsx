import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuContainer from '../../components/LateralMenu/MenuContainer'
import MenuItem from '../../components/LateralMenu/MenuItem'
import SubMenu from '../../components/LateralMenu/SubMenu'
import styles from '../Spa.module.css'
import PropTypes from 'prop-types';

const AbstractPage = ({ menuTree }) => {

    return (<div className={styles.mainContainer}>
        <div className={styles.lateralMenu}>
            <MenuContainer>
                {menuTree.map((element, index) =>
                    <React.Fragment key={element.id}>
                        {element.itemResource ?
                            <MenuItem label={element.itemLabel} to={element.itemResource} key={element.id}/>
                            :
                            <MenuItem label={element.itemLabel}  key={element.id}>
                                <SubMenu>
                                    {element.itemContent.map((subElement, subIndex) =>
                                        <MenuItem label={subElement.itemLabel} to={subElement.itemResource} key={`${element.id}_${subElement.id}`}/>
                                    )}
                                </SubMenu>
                            </MenuItem>
                        }
                    </React.Fragment>
                )}
            </MenuContainer>
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