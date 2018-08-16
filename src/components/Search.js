import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

class Search extends Component {
  constructor(props){
    super(props)

    this.state = {
      searchQuery: ""
    }
  }
  onChange = (event) => {
    this.setState({
      searchQuery: event.target.value
    })
  }

  onSubmit = () => {
    console.log('here')
  }

  render() {
    return (
      <div className="ui icon input">
        <input 
          type="text" 
          placeholder="Search Job Number..."
          onChange={(event) => this.onChange(event)}
          value={this.state.searchQuery}
        ></input>
        <i 
          className="search link icon"
          onClick={this.onSubmit}
        ></i>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
