import React, { Component } from 'react'
import { connect } from 'react-redux'



const mapStateToProps = (state) => ({
  currentDetail: state.currentDetail,
})

class AdditionalInfo extends Component {

  renderAddionalInfo = () => {
    console.log('add deeets', this.props.currentDetail)
    if (this.props.currentDetail !== null){
      switch (this.props.currentDetail.currentDetail.detailType) {
        case "client":
          console.log(this.props.currentDetail.currentDetail)
          return (
            <fragment>
              <h1>Client Details</h1>
              <br />
              <ul>
                <li><strong>Client ID: </strong>{this.props.currentDetail.currentDetail.id}</li>
                <li><strong>Client Address: </strong>{this.props.currentDetail.currentDetail.street_address}, {this.props.currentDetail.currentDetail.city}. {this.props.currentDetail.currentDetail.state}</li>
                <li><strong>Client Email: </strong>{this.props.currentDetail.currentDetail.email}</li>
                <li><strong>Client Phone: </strong>{this.props.currentDetail.currentDetail.phone}</li>
                <li><strong>Client Point of Contact: </strong>{this.props.currentDetail.currentDetail.refrence}</li>

              </ul>
            </fragment>
          ) 
      }



    } return <h1 className="text-center">Additional Info Content</h1>
  }
  


  render() {
    
    return (
      <div className='additional-info'>
        {this.renderAddionalInfo()}
      </div>
    )
  }
}

export default connect(mapStateToProps)(AdditionalInfo)