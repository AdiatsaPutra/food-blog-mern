import React from 'react'
import './register.scss'
import { RegisterBg } from '../../assets'
import {Input, Button, Gap, Link} from '../../components'

const Register = () => {
    return (
        <div className="main-page">
            <div className="left-section">
                <img src={RegisterBg} className="bg-img" alt="img"></img>
            </div>
            <div className="right-section">
                <div className="right-section-wrapper">
                    <h1 className="title">Register</h1>
                    <Gap height={15}/>
                    <Input placeholder="Masukkan Nama" />
                    <Gap height={15}/>
                    <Input placeholder="Masukkan Email" />
                    <Gap height={15}/>
                    <Input placeholder="Masukkan Password" />
                    <Gap height={20}/>
                    <Button title="Submit"/>
                    <Gap height={80}/>
                    <Link onClick="" title="Kembali Ke Login"></Link>
                </div>
            </div>
        </div>
    )
}

export default Register
