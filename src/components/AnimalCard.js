import React from 'react';
import axios from 'axios';
import './AnimalCard.css';
import { animalActions } from '../redux/store'
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Col, roundedCircle } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBIcon, MDBBtn, MDBListGroupItem, MDBCard, MDBCardBody, MDBView, MDBMask } from "mdbreact";


const AnimalCard = props => {

    const form = useSelector(state => state.form)
    const actions = bindActionCreators(animalActions, useDispatch())


    const deleteAnimal = async () => {

        const result = await axios.delete(`http://localhost:8000/api/animals/${props.id}`)
        actions.deleteAnimal(props.id)
    }

    const updateAnimal = async () => {
        const result = await axios.put(`http://localhost:8000/api/animals/${props.id}`, form)
        actions.updateAnimal(props.id, form)
    }

    return (

        <div className="main">
            {/* <button className="Button2">STATUS : {props.status}</button>
            <div className="blog"> 
                    <img src={props.imgUrl} style={{ width: 200, height: 150 }} /> <br />
                STRAIN : {props.strain} <br />
                NAME : {props.name} <br />
                OLD: {props.old} <br />
                HABIT : {props.habits} <br />
                BECAUSE : {props.because} <br />
            </div>
            <div>
                <button className="Button" >CONTACT</button>
                <button className="Button" onClick={deleteAnimal} >DELETE</button>
            </div> */}

            <MDBCard className="my-5 px-5 pb-5" inline>
                <MDBCardBody>
                    <MDBRow>
                            <MDBCol lg="5">
                                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                    <img
                                        className="img-fluid"
                                        src={props.imgUrl}
                                        alt=""
                                        style={{ width: 250, height: 180 }}
                                    />
                                    <a href="#!">
                                        <MDBMask overlay="white-slight" />
                                    </a>
                                </MDBView>
                            </MDBCol>
                            <MDBCol lg="7">
                                <a href="#!" className="green-text">
                                    <h6 className="font-weight-bold mb-1">
                                        <MDBIcon icon="utensils" className="pr-2" /> Animal </h6>
                                </a>
                                <h3 className="font-weight-bold mb-1 p-0">
                                    <strong>  STRAIN : {props.strain} <br /> 
                                    NAME : {props.name} <br />
                                    OLD: {props.old} ปี<br />
                                    </strong>
                                </h3>
                                <p>
                                    HABIT : {props.habits} <br />
                                    BECAUSE : {props.because} <br />
                                </p>

                                <MDBBtn color="success" size="md" className="waves-light " style={{ padding: 5, margin: 5}}> Read more </MDBBtn>
                                <MDBBtn color="success" size="md" className="waves-light " style={{ padding: 5, margin: 5}}> Read more </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                   
                </MDBCardBody>
            </MDBCard>



        </div>
    )
}

export default AnimalCard;