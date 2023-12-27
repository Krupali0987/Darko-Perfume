import React, { useState } from "react";
import './App.css'
import { Navigate, useNavigate } from "react-router";

export const Login = () => {

    const [login, setLogin] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <div>
                <div style={{
                    backgroundImage:
                        'url("https://darko-theme.myshopify.com/cdn/shop/files/blog_detai-1.jpg?v=1605615107")',

                    width: "100% 100%",
                    backgroundSize: "cover",
                    objectFit: "cover",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "50% 0%",
                }}>
                    <div style={{ backgroundColor: "rgb(0,0,0,0.8)", padding: "10%" }}>
                        <h1 style={{ color: "white", textAlign: "center" }}>ACCOUNT</h1>
                        <p style={{ color: "white", textAlign: "center" }}>Home / About</p>
                    </div>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <div>
                    {login ? (<>
                        <h1 style={{ fontSize: "70px", width: "500px" }}>Reset your password</h1>
                        <p style={{ marginTop: "-4%" }}>We will send you an email to reset your password.</p>
                        <input type="password" name="password" placeholder="Password" style={{ width: "600px", padding: "12px", fontSize: "16px", marginTop: "4%" }} /><br></br>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <button className="sign-in">SUBMIT</button>
                            <button className="cancle" onClick={() => setLogin(false)}>Cancel</button>
                        </div>
                    </>

                    ) : (<><input type="email" name="email" placeholder="Email" style={{ width: "600px", padding: "12px", fontSize: "16px", marginTop: "10%" }} />
                        <br></br>
                        <input type="password" name="password" placeholder="Password" style={{ width: "600px", padding: "12px", fontSize: "16px", marginTop: "4%" }} /><br></br>
                        <button className="sign-in">SIGH IN</button>
                        <hr style={{ border: "1px solid black", marginTop: "4%" }}></hr>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <button className="forgot-pass" onClick={() => setLogin(true)}>Forgot your password?</button>
                            <button className="forgot-pass" onClick={() => navigate('./reg')}>Create account</button>
                            <button className="forgot-pass" onClick={() => navigate('./darko-perfume')}>Return to Store</button>
                        </div></>)}

                </div>
            </div>

        </>
    )
}