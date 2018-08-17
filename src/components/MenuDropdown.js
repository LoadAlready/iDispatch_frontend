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
    this.state = {
        currentCategoryToDisplay: 'Search For'
    }
  }
  onClick = (event, searchCat) => {
    this.props.setSearchCategory(event.target.id)
      this.setState({ currentCategoryToDisplay: searchCat})
  }

  render() {
    return (
        <div className="menu-dropdown">
            <Dropdown item text={this.state.currentCategoryToDisplay}>
                <Dropdown.Menu>
                    <Dropdown.Item 
                        onClick={(event) => this.onClick(event, 'Job Number')}
                        id="jobNumber"
                    >Job Number</Dropdown.Item>
                    <Dropdown.Item 
                        onClick={(event) => this.onClick(event, 'Employee ID')}
                        id="employeeID"
                    >Employee ID</Dropdown.Item>
                    <Dropdown.Item 
                        onClick={(event) => this.onClick(event, 'Client Name')}
                        id="clientName"
                    >Client Name</Dropdown.Item>
                    <Dropdown.Item
                        onClick={(event) => this.onClick(event, 'Client ID')}
                        id="clientID"
                    >Client ID</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuDropdown)
