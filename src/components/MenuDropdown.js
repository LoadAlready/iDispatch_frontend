import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSearchCategory } from '../actions'

import { Dropdown } from 'semantic-ui-react'

const mapStateToProps = (state) => ({
    searchCategory: state.searchCategory
})

const mapDispatchToProps = (dispatch) => ({
    setSearchCategory: (category) => dispatch(setSearchCategory(category))
})

class MenuDropdown extends Component {
  constructor(props){
      super(props)

  }
  onClick = (event) => {
    this.props.setSearchCategory(event.target.id)
  }

  render() {
    return (
        <div className="menu-dropdown">
            <Dropdown item text='Search For'>
                <Dropdown.Menu>
                    <Dropdown.Item 
                        onClick={(event) => this.onClick(event)}
                        id="jobNumber"
                    >Job Number</Dropdown.Item>
                    <Dropdown.Item 
                        onClick={(event) => this.onClick(event)}
                        id="employeeID"
                    >Employee ID</Dropdown.Item>
                    <Dropdown.Item 
                        onClick={(event) => this.onClick(event)}
                        id="clientName"
                    >Client Name</Dropdown.Item>
                    <Dropdown.Item
                        onClick={(event) => this.onClick(event)}
                        id="clientID"
                    >Client ID</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuDropdown)
