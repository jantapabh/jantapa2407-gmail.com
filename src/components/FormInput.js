import React, { useState, useEffect } from 'react'
import './Form.css'
import { formActions } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { animalActions } from '../redux/store'
import { bindActionCreators } from 'redux';
import axios from 'axios'
import { Form, Col } from 'react-bootstrap';


const FormInput = props => {

    const actionsAnimal = bindActionCreators(animalActions, useDispatch())
    const actionForm = bindActionCreators(formActions, useDispatch())
    const form = useSelector(state => state.form)
    const dispatch = useDispatch();
    const animals = useSelector(state => state.animal)

    const addAnimal = async () => {

        await axios.post(`http://localhost/api/animals`, form)

        actionsAnimal.addAnimal(animals, form)
    }


    return (
        <div>
            <div className="col-6 mt-5 mx-auto card">
                <div className="card-body">
                    <h1 className="Topic">" ADD CAT OR DOG "</h1>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="imgUrl1">Image 1 : รูปภาพ</label>
                        <input type="text"
                            name="imgUrl1"
                            className="form-control"
                            id="imgUrl1"
                            onChange={(e) => actionForm.changeImgurl1(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imgUrl2">Image 2 : รูปภาพ</label>
                        <input type="text"
                            name="imgUrl2"
                            className="form-control"
                            id="imgUrl2"
                            onChange={(e) => actionForm.changeImgurl2(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imgUrl3">Image 3  : รูปภาพ</label>
                        <input type="text"
                            name="imgUrl3"
                            className="form-control"
                            id="imgUrl3"
                            onChange={(e) => actionForm.changeImgurl3(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="strain">Strain : สายพันธ์</label>
                        <input type="text"
                            name="strain"
                            className="form-control"
                            id="strain"
                            onChange={(e) => actionForm.changeStrain(e.target.value)}
                        />

                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name : ชื่อ</label>
                        <input type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            onChange={(e) => actionForm.changeName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="old">Old : อายุ</label>
                        <input type="number"
                            name="old"
                            className="form-control"
                            id="old"
                            onChange={(e) => actionForm.changeOld(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="habit">Habits : นิสัย</label>
                        <input type="text"
                            name="habit"
                            className="form-control"
                            id="habit"
                            onChange={(e) => actionForm.changeHabit(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="because">Because : เหตุผลที่หาบ้านใหม่</label>
                        <input type="text"
                            name="because"
                            className="form-control"
                            id="because"
                            onChange={(e) => actionForm.changeBecause(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imgUrl">Status : สถานะ</label>
                        <input type="text"
                            name="status"
                            className="form-control"
                            id="status"
                            onChange={(e) => actionForm.changeStatus(e.target.value)}
                        />
                    </div>
                    <div className="card-body">
                    <h1 className="Topic">" ADD YOUR DATA"</h1>
                </div>
                    <div className="form-group">
                                    <label htmlFor="username">IMAGE</label>
                                    <input type="text"
                                        name="imgUrlUser"
                                        className="form-control"
                                        id="imgUrlUser"
                                        onChange={(e) => actionForm.changeImgurlUser(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username">USER NAME</label>
                                    <input type="text"
                                        name="username"
                                        className="form-control"
                                        id="username"
                                        onChange={(e) => actionForm.changeNameUser(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email*</label>
                                    <input type="email"
                                        name="email"
                                        className="form-control"
                                        id="email"
                                        onChange={(e) => actionForm.changeEmailUser(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="text">Telephone</label>
                                    <input type="text"
                                        name="telephone"
                                        className="form-control"
                                        id="telephone"
                                        onChange={(e) => actionForm.changeTelephoneUser(e.target.value)}

                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="text">Facebook</label>
                                    <input type="text"
                                        name="facebook"
                                        className="form-control"
                                        id="facebook"
                                        onChange={(e) => actionForm.changeFacebookUser(e.target.value)}

                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Line</label>
                                    <input type="text"
                                        name="line"
                                        className="form-control"
                                        id="line"
                                        onChange={(e) => actionForm.changeLineUser(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input type="text"
                                        name="address"
                                        className="form-control"
                                        id="address"
                                        onChange={(e) => actionForm.changeAddressUser(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input type="text"
                                        name="address"
                                        className="form-control"
                                        id="address"
                                        onChange={(e) => actionForm.changeCityUser(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input type="text"
                                        name="address"
                                        className="form-control"
                                        id="address"
                                        onChange={(e) => actionForm.changeStateUser(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input type="text"
                                        name="address"
                                        className="form-control"
                                        id="address"
                                        onChange={(e) => actionForm.changeZipUser(e.target.value)}
                                    />
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-primary my-1" type="submit" onClick={addAnimal}>ADD</button>
                                </div>
                </form>
            </div>
        </div>
    );
}

export default FormInput;

