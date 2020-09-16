import React from 'react'
import { LoginBg } from '../../assets'
import {Input, Button, Gap, Link} from '../../components'

const Login = () => {
    return (
        <div className="main-page">
        <div className="left-section">
            <img src={LoginBg} className="bg-img" alt="img"></img>
        </div>
        <div className="right-section">
            <div className="right-section-wrapper">
                <h1 className="title">Login</h1>
                <Gap height={15}/>
                <Input placeholder="Masukkan Email" />
                <Gap height={15}/>
                <Input placeholder="Masukkan Password" />
                <Gap height={20}/>
                <Button title="Login"/>
                <Gap height={80}/>
                <Link onClick="" title="Belum Punya Akun?, Silakan Daftar"></Link>
            </div>
        </div>
    </div>
    )
}

export default Login
