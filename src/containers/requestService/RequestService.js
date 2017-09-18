import React, { Component } from 'react';
import Radium from 'radium';
import { Grid, Row, Col } from 'react-bootstrap'
import globalConst from '../../globalConst';
import Title from '../../components/Title'
import FieldGroup from '../../components/FieldGroup'
import { connect } from 'react-redux';
import { requestService } from '../../store/actions/requestAction';
import Button from '../../components/Button'
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css'


var styles = {
    dateInput: {
        borderRadius: 2,
        width: '100%'
    }
};

class RequestService extends React.Component {
    constructor() {
        super();
        this.state = {
            startDate: ''
        }
        this.requestHandler = this.requestHandler.bind(this)
        this.dateHandler = this.dateHandler.bind(this)
    }

    requestHandler(e) {
        e.preventDefault();
        var requestData = {
            service: this.service.value,
            address: this.address.value,
            email: this.email.value,
            phone: this.phone.value,
        }
        console.log(requestData)
        this.props.requestService(requestData)
    }
    dateHandler(date) {
        this.setState({
            startDate: date
        })
        
    }
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} >
                        {/* <Title>Request  Your Service</Title> */}
                    </Col>
                    <form>
                        <Col xs={12} md={6} mdOffset={3}> 
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Select Service</ControlLabel>
                                <FormControl componentClass="select" placeholder="select"
                                    inputRef={(input) => this.service = input} >
                                    <option value="plumbing">Plumbing</option>
                                    <option value="electrician">Electrician</option>
                                    <option value="bike_tuneup">Bike Tune-up</option>
                                    <option value="lock">Lock Crack</option>
                                </FormControl>
                            </FormGroup>
                            <FieldGroup
                                id="address"
                                type="text"
                                placeholder="Address"
                                inputRef={(input) => this.address = input}
                            />
                            <FieldGroup
                                id="email"
                                type="email"
                                placeholder="Email"
                                inputRef={(input) => this.email = input}
                            />
                            <FieldGroup
                                id="phone"
                                type="text"
                                placeholder="Phone Number"
                                inputRef={(input) => this.phone = input}
                            />
                            </Col>
                            <Col md={3} mdOffset={3}>
                            <FormGroup>
                                <DatePicker
                                    dateFormat="DD/MM/YYYY"
                                    selected={this.state.startDate}
                                    onChange={(date) =>  this.dateHandler(date)}
                                    placeholderText="Click to select a date"
                                    className="date-picker"
                                    style={
                                        { border: 'red' }
                                    }
                                />

                            </FormGroup>
                            </Col>
                            <Col md={3}>
                                    
                            <FormGroup controlId="formControlsSelect">
                                {/* <ControlLabel>Select Time Between</ControlLabel> */}
                                <FormControl componentClass="select" placeholder="select"
                                    inputRef={(input) => this.serviceTime = input} >
                                    <option value="time1">10 to 1</option>
                                    <option value="time2">1 to 4</option>
                                    <option value="time3">4 to 7</option>
                                    {/* <option value="lock">Lock Crack</option> */}
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col xs={12} style={{ textAlign: 'center', marginBottom: 50 }}>
                            <Button filled clickHandler={this.requestHandler}>
                                Submit
                             </Button>
                        </Col>
                    </form>
                </Row>
            </Grid>

        );
    }
}



RequestService = Radium(RequestService);
// export default RequestService;

// const mapStateToProps = state => {
//   return {
//       user: state.authReducer
//   }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        requestService: (requestData) => {
            dispatch(requestService(requestData));
        }
    }
}
export default connect(null, mapDispatchToProps)(RequestService)
// export default Signup;