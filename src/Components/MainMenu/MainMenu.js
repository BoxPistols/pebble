import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MenuItem from './MenuItem/MenuItem';

import './MainMenu.scss';

/**
 * MainMenu provides a way for users to navigate from one site section to another.
 * It contains a top (`menu`) and bottom (`auxMenu`) set of menu items, with each
 * allowing a two-level structure.
 */

class MainMenu extends React.Component {
  render() {
    const {
      activeItem,
      className,
      menu,
      auxMenu,
      showOnSmallScreen
    } = this.props;

    const classes = classNames('main-menu', className, {
      opened: showOnSmallScreen
    });

    return (
      <nav className={classes} aria-label="Main navigation">
        <div className="main-menu-top">
          <ul className="main-menu-items">
            {menu.map(item => (
              <MenuItem
                activeItem={activeItem}
                item={item}
                key={item.id}
                icon={item.icon}
              />
            ))}
          </ul>
        </div>
        {auxMenu && (
          <div className="main-menu-bottom">
            <ul className="main-menu-items">
              {auxMenu.map(item => (
                <MenuItem
                  activeItem={activeItem}
                  item={item}
                  key={item.id}
                  icon={item.icon}
                />
              ))}
            </ul>

          </div>
        )}
      </nav>
    );
  }
}

MainMenu.propTypes = {
  /**
   * id of the item that is active
   */
  activeItem: PropTypes.string,
  /**
   * Additional ClassNames to add to button group
   */
  className: PropTypes.string,
  /**
   * Menu items for the upper portion of the menu
   */
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * Menu items for the lower portion of the menu (e.g. Profile, Support)
   */
  auxMenu: PropTypes.arrayOf(PropTypes.object),
  /**
   * show or hide menu below 30rem (480px)
   */
  showOnSmallScreen: PropTypes.bool,
};

export default MainMenu;