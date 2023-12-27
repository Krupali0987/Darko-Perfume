import React from "react";
import { useNavigate } from "react-router";

export const Reg = () => {
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

            <div style={{ display: "flex", alignItems: "center",flexDirection:"column" }}>
            <input type="text" name="fname" placeholder="First Name" style={{ width: "300px", padding: "12px", fontSize: "16px", marginTop: "4%" }} />
            <input type="text" name="lname" placeholder="Last Name" style={{ width: "300px", padding: "12px", fontSize: "16px", marginTop: "2%" }} />
            <input type="email" name="email" placeholder="Email" style={{ width: "300px", padding: "12px", fontSize: "16px", marginTop: "2%" }} />
            <input type="password" name="password" placeholder="Password" style={{ width: "300px", padding: "12px", fontSize: "16px", marginTop: "2%" }} />
            <button className="reg-create">CREATE</button>
            <button className="forgot-pass" style={{marginLeft:"-11%"}} onClick={() => navigate('./darko-perfume')}>Return to Store</button>
        </div>
        </>
    )
}

