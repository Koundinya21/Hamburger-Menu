// Write your code here
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <nav className="nav-bar-content">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>

    <Popup
      modal
      trigger={
        <button
          aria-label="Menu"
          type="button"
          className="hamburger-icon-button"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu size="30" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <div className="pop-container">
          <div className="icon-container">
            <button
              type="button"
              onClick={() => close()}
              aria-label="close"
              data-testid=" closeButton"
              className="btn"
            >
              <IoMdClose />
            </button>
          </div>
          <div className="content-items">
            <ul className="content">
              <Link to="/" onClick={() => close()}>
                <li className="items">
                  <AiFillHome size="36" />
                  <h1 className="nav-link-content">Home</h1>
                </li>
              </Link>
              <Link to="/about" onClick={() => close()}>
                <li className="items">
                  <BsInfoCircleFill size="36" />
                  <h1 className="nav-link-content">About</h1>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </Popup>
  </nav>
)

export default withRouter(Header)
