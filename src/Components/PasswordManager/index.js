import {Component} from 'react'

import './index.css'

class PasswordManager extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="headingElement">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
            alt="app logo"
            className="logo"
          />
        </div>
        <div className="upperBox">
          <div className="smallImgContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
            />
          </div>
          <div className="formContainer">
            <h1 className="formHeading">Add New Password</h1>
            <form className="inputForm">
              <div className="inputContainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                  alt="website"
                  className="inputIcon"
                />
                <input type="text" className="inputElement" />
              </div>
              <div className="inputContainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="inputIcon"
                />
                <input type="text" className="inputElement" />
              </div>
              <div className="inputContainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="inputIcon"
                />
                <input type="password" className="inputElement" />
              </div>
              <button type="button" className="formBtn">
                Add
              </button>
            </form>
          </div>
          <div className="largeImgContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="lgManagerImg"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default PasswordManager
