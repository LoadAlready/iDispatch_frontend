import React, { Component } from 'react'
import { connect } from 'react-redux'



const mapStateToProps = (state) => ({
  currentDetail: state.currentDetail,
})

class AdditionalInfo extends Component {
  
  renderAddionalInfo = () => {
    if (this.props.currentDetail !== null){
      switch (this.props.currentDetail.currentDetail.detailType) {

        case "client":
          return (
            <fragment>
              <h1 className="text-center">Client Details</h1>
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
        break;

        case "tech":
          return (
            <fragment>
              <h1 className="text-center">Technician Details</h1>
              <br />
              <ul>
                <li><strong>Name: </strong>{this.props.currentDetail.currentDetail.firstname} {this.props.currentDetail.currentDetail.lastname}</li>
                <li><strong>Phone: </strong>{this.props.currentDetail.currentDetail.phone}</li>
                <li><strong>Email: </strong>{this.props.currentDetail.currentDetail.email}</li>
                <li><strong>Address: </strong>Private</li>
              </ul>
            </fragment>
          )
        break;

        case "material":
//need to set returned json to a variable then use that variable to populate material po details
          let fetchSupplierInfo = () => {
            let URL = `http://localhost:3000/suppliers/` + this.props.currentDetail.currentDetail.supplier_id;
            fetch(URL).then(r => r.json()).then( supplier => {debugger})
          }

          return (
            <fragment>
              <h1>Material PO Details</h1>
              <ul>
                <li><strong>Material ID: </strong>{this.props.currentDetail.currentDetail.id}</li>
                <li><strong>Supplier ID: </strong>cmon</li>
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