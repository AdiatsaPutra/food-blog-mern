import React from 'react'
import './register.scss'
import { RegisterBg } from '../../assets'
import {  Button} from '../../components'
import Input from '../../components/atoms/Input'

const Register = () => {
    return (
        <div className="main-page">
            <div className="left-section">
                <img src={RegisterBg} className="bg-img" alt="img"></img>
            </div>
            <div className="right-section">
                <div className="right-section-wrapper">
                    <h1 className="title">Register</h1>
                    <Input placeholder="Masukkan Nama" />
                    <Input placeholder="Masukkan Email" />
                    <Input placeholder="Masukkan Password" />
                    <Button title="Submit"/>
                </div>
            </div>
        </div>
    )
}

export default Register
