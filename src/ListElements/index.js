import {Component} from 'react'

import './index.css'

class ListElements extends Component {
  render() {
    const {listGen, deleteSearch, checkBoxStatus} = this.props
    const {webSite, userName, id, password} = listGen
    const First = webSite.slice(0, 1).toUpperCase()
    const deleteElement = () => {
      deleteSearch(id)
    }

    return (
      <li className="listElement">
        <div className="div1">
          <h1 className="letter">{First}</h1>
        </div>
        <div className="div1">
          <p>{webSite}</p>
          <p>{userName}</p>
          {checkBoxStatus ? (
            <p>{password}</p>
          ) : (
            <img
              className="imageee"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
        </div>
        <div className="div1">
          <button
            className="buttonn"
            type="button"
            testid="delete"
            onClick={deleteElement}
          >
            <img
              className="icon"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default ListElements
