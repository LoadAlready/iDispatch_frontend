import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List } from 'semantic-ui-react'
import { Scrollbars } from 'react-custom-scrollbars';


const mapStateToProps = (state) => ({
  currentDetail: state.currentDetail,
})

class AdditionalInfo extends Component {
  renderAddionalInfo = () => {
    if (this.props.currentDetail !== null){
      switch (this.props.currentDetail.currentDetail.detailType) {

        case "client":
          return (
            <div className="additional-client">
              <h1 className="text-center">Client Details</h1>
              <br />
              <List>
                <List.Item>
                  <List.Content>
                      <strong>Client ID:</strong> {this.props.currentDetail.currentDetail.id}
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Content>
                      <strong>Client Address: </strong>{this.props.currentDetail.currentDetail.street_address}, {this.props.currentDetail.currentDetail.city}. {this.props.currentDetail.currentDetail.state}                </List.Content>
                </List.Item>
              
                <List.Item>
                  <List.Content>
                      <strong>Client Phone: </strong>{this.props.currentDetail.currentDetail.phone}             
                  </List.Content>
                </List.Item>
              
                <List.Item>
                  <List.Content>
                    <strong>Client Point of Contact: </strong>{this.props.currentDetail.currentDetail.refrence}                
                  </List.Content>
                </List.Item>
              </List>
            </div>
          ) 

        case "tech":
          return (
            <div className="additional-tech">
              <h1 className="text-center short-padding-top">Technician Details</h1>
              <br />
              <List>
                <List.Item>
                  <List.Content>
                    <strong>Name: </strong>{this.props.currentDetail.currentDetail.firstname} {this.props.currentDetail.currentDetail.lastname}
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Content>
                    <strong>Phone: </strong>{this.props.currentDetail.currentDetail.phone}
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Content>
                    <strong>Email: </strong>{this.props.currentDetail.currentDetail.email}
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Content>
                    <strong>Address: </strong>Private  
                  </List.Content>
                </List.Item>
              </List>
            </div>
          )

        case "material":
        debugger
          return (
            <div className="additional-material">
              <h1 className="text-center">Material PO Details</h1>
              <List>
                <List.Item>
                  <List.Content>
                      <strong>Material ID: </strong>{this.props.currentDetail.currentDetail.id}
                    </List.Content>
                </List.Item>
              </List>
            </div>
          )

        default:
          return <h1 className="text-center">Invalid, Please retry</h1>
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