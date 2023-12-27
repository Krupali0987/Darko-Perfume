import React from "react";
import { Navigate, useNavigate } from "react-router";

export const Wishlist = () => {
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
                        <h1 style={{ color: "white", textAlign: "center" }}>WISHLIST</h1>
                        <p style={{ color: "white", textAlign: "center" }}>Home / wishlist</p>
                    </div>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "4%" }}>
                <div>
                    <img src="https://darko-theme.myshopify.com/cdn/shop/t/4/assets/empty-cart.png?v=124674504766911058681630381741" width="90px" height="100px" style={{ display: "block", margin: "auto" }} />
                    <h2 style={{ fontSize: "20px", textAlign: "center" }}><b>Nothing found in wishlist!</b></h2>
                    <button className="shopping" onClick={() => navigate('./darko-perfume')}>start shopping</button>
                </div>
            </div>

        </>
    )
}