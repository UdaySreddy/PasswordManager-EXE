import {Component} from 'react'

import ListElements from '../ListElements'

import './index.css'

let initialList = []
class Password extends Component {
  state = {
    requiredList: initialList,
    id: 1,
    webSite: '',
    userName: '',
    password: '',
    isChecked: false,
  }

  webSite = event => {
    this.setState({webSite: event.target.value})
  }

  userName = event => {
    this.setState({userName: event.target.value})
  }

  password = event => {
    this.setState({password: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
  }

  checkBox = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  addToList = () => {
    this.setState(prevState => ({id: prevState.id + 1}))
    initialList.push(this.state)
  }

  filterList = event => {
    const x = event.target.value.toUpperCase()
    console.log(x)
    const {requiredList} = this.state
    if (x === '') {
      this.setState({requiredList: initialList})
    } else {
      const filterdSearch = requiredList.filter(each =>
        each.webSite.toUpperCase().includes(x),
      )
      this.setState({
        requiredList: filterdSearch,
      })
    }
  }

  deleteSearch = id => {
    const {requiredList} = this.state
    const deleteSearch = requiredList.filter(each => each.id !== id)
    this.setState({
      requiredList: deleteSearch,
    })
    initialList = initialList.filter(each => each.id !== id)
  }

  render() {
    const {requiredList, isChecked} = this.state
    const x = requiredList.length
    return (
      <div>
        <img
          className="appLogo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="container1">
          <form className="textContainer" onSubmit={this.submitForm}>
            <h1>Add New Password</h1>
            <div className="textbox">
              <img
                className="icon1"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input
                onChange={this.webSite}
                className="searchBox1"
                type="text"
                placeholder="Enter website"
              />
            </div>
            <div className="textbox">
              <img
                className="icon1"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                onChange={this.userName}
                className="searchBox1"
                type="text"
                placeholder="Enter Username"
              />
            </div>
            <div className="textbox">
              <img
                className="icon1"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                className="searchBox1"
                onChange={this.password}
                type="password"
                placeholder="Enter Password"
              />
            </div>
            <div className="buttonBox">
              <button
                onClick={this.addToList}
                className="button1"
                type="submit"
              >
                Add
              </button>
            </div>
          </form>
          <div>
            <img
              className="passwordManager"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
              alt="password manager"
            />
          </div>
        </div>
        <div className="container2">
          <div className="hedderContainer">
            <div className="counter">
              <div>
                <h1>Your Passwords </h1>
              </div>
              <div>
                {x > 0 ? (
                  <p className="number">{x}</p>
                ) : (
                  <p className="number">0</p>
                )}
              </div>
            </div>

            <div className="iconContainer">
              <img
                className="icon1"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />

              <input
                className="searchBox"
                onChange={this.filterList}
                type="search"
                placeholder="search"
              />
            </div>
          </div>
          <hr />
          <div className="checkboxContainer">
            <input
              id="check"
              className="checkboxx"
              type="checkbox"
              onChange={this.checkBox}
            />
            <label htmlFor="check">Show passwords</label>
          </div>

          {requiredList.length > 0 ? (
            <ul className="listt">
              {requiredList.map(each => (
                <ListElements
                  listGen={each}
                  key={each.id}
                  deleteSearch={this.deleteSearch}
                  checkBoxStatus={isChecked}
                />
              ))}
            </ul>
          ) : (
            <div className="nopass">
              <img
                className="nopasswords"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                alt="no passwords"
              />
              <p>No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Password
