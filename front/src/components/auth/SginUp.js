import React, { useState, useEffect } from 'react'
import "./sgin.css"
import logo from "./log.svg"
import reg from "./register.svg"
import axios from "axios";


function SginUp() {

    const [mode, setmode] = useState("")

    const [data, setData] = React.useState({
        name: "",
        email: "",
        password: ""
    });

    const [sginIN, setsginIN] = React.useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setData((current) => ({
            ...current,
            [e.target.name]: e.target.value,
        }));
        console.log(data)
    };

    const sgin = (e) => {

        setsginIN((current) => ({
            ...current,
            [e.target.name]: e.target.value,
        }));
        console.log(sginIN)
    };



    const sendData = (e) => {
        e.preventDefault();
        console.log(e.target.name)

        if (e.target.name == "sign-up") {
            axios.post("/signup", data).then((response) => {
                // addnot(`${state.name} Service has been Booked`, 'default')
                console.log(response)
                localStorage.setItem('login', response.data.token)
                localStorage.setItem('userId', response.data.userId);
                window.location.replace("/");

            });
        }
        else {
            axios.post("/signin", sginIN).then((response) => {
                // addnot(`${state.name} Service has been Booked`, 'default')
                console.log(response)
                localStorage.setItem('login', response.data.token)
                localStorage.setItem('userId', response.data.userId);
                window.location.replace("/");

            });


        }


    }

    // const sendData = (e) => {
    //     e.preventDefault();
    //     axios.post("/signup", data).then((response) => {
    //         // addnot(`${state.name} Service has been Booked`, 'default')
    //         console.log(response)
    //         localStorage.setItem('login', response.data.token)
    //         localStorage.setItem('userId', response.data.userId);
    //         window.location.replace("/");

    //     });

    // }


    return (
        <div className={`container ${mode} `}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form className="sign-in-form">
                        <h2 className="title">Sign in </h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input onChange={sgin} name="email" type="text" placeholder="User Email" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input onChange={sgin} name="password" type="password" placeholder="Password" />
                        </div>
                        <input onClick={sendData} type="submit" value="Login" className="btn solid" />

                    </form>
                    <form className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input onChange={handleChange} name="name" type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input onChange={handleChange} name="email" type="email" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input onChange={handleChange} name="password" type="password" placeholder="Password" />
                        </div>
                        <input onClick={sendData} name="sign-up" type="submit" className="btn" value="Sign up" />

                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                            Join US !, You Will Enjoy

            </p>
                        <button onClick={() => setmode("sign-up-mode")} className="btn transparent" id="sign-up-btn">
                            Sign up
            </button>
                    </div>
                    <img src={logo} className="image" alt="logo" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>
                            We Miss YOU
            </p>
                        <button onClick={() => setmode("")} className="btn transparent" id="sign-in-btn">
                            Sign in
            </button>
                    </div>
                    <img src={reg} className="image" alt="register" />
                </div>
            </div>
        </div >

    )
}

export default SginUp
