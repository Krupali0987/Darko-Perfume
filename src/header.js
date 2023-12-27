import React from "react";
import { useNavigate } from "react-router";

export const Header = () => {
    const navigate = useNavigate();
    return (
        <>

            {/* <--------header--------> */}
            <div className=" container-fluid" style={{ display: "flex", justifyContent: "space-around", padding: "20px", gap: "70px", width: "100%", backgroundColor: "white" }}>
                <div>
                    <img src="https://darko-theme.myshopify.com/cdn/shop/files/Darko_300x300.png?v=1630474547" height="55px" width="190px" />
                </div>
                <div style={{ paddingTop: "20px", display: "flex", gap: "20px" }}>
                    <button className="home1" onClick={() => navigate('/darko-perfume')}>HOME</button>
                    <button className="home" onClick={() => navigate('/about')}>ABOUT</button>
                    <button className="home" onClick={() => navigate('/services')} >SERVICES </button>
                    <div className="dropdown" style={{ marginTop: "7px" }}>
                        <button className="home2" onClick={() => navigate('/shop')}  >SHOP</button>
                        <div className="dropdown-content" style={{ marginTop: "20px" }}>
                            <div style={{ display: "flex", justifyContent: "space-around", gap: "150px", textAlign: "center", backgroundColor: "white" }}>
                                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                                    <a href="shop.js" className="nm" style={{ fontSize: "20px", marginBottom: "-25%" }}><b>Floral Scenet</b></a><br></br>
                                    <a href="shop.js" className="nm">Acqua Di Gio</a>
                                    <a href="shop.js" className="nm">Armani Beauty</a>
                                    <a href="shop.js" className="nm">Hugo Boss Hugo</a>
                                    <a href="shop.js" className="nm">Malone London</a>
                                    <a href="shop.js" className="nm">Silvia Dio</a>
                                    <a href="shop.js" className="nm">Perfume Prowl</a>
                                    <a href="shop.js" className="nm">Ritzy Spritz</a>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                                    <a href="shop.js" className="nm" style={{ fontSize: "20px", marginBottom: "-25%" }}><b>Fresh Scenet</b></a><br></br>
                                    <a href="shop.js" className="nm">Burberry Brit</a>
                                    <a href="shop.js" className="nm">Carala Gio</a>
                                    <a href="shop.js" className="nm">Jackseon</a>
                                    <a href="shop.js" className="nm">Nautica Perfume</a>
                                    <a href="shop.js" className="nm">Edi Sol</a>
                                    <a href="shop.js" className="nm">Spirited Spritz</a>
                                    <a href="shop.js" className="nm">Lady Luck</a>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                                    <a href="shop.js" className="nm" style={{ fontSize: "20px", marginBottom: "-25%" }}><b>Orient Scenet</b></a><br></br>
                                    <a href="shop.js" className="nm">Delish</a>
                                    <a href="shop.js" className="nm">Dior Perfume</a>
                                    <a href="shop.js" className="nm">Jacobs Fragrance</a>
                                    <a href="shop.js" className="nm">Pareal Gio </a>
                                    <a href="shop.js" className="nm">Sweet Scenet </a>
                                    <a href="shop.js" className="nm">White Light</a>
                                    <a href="shop.js" className="nm">Connection</a>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                                    <a href="shop.js" className="nm" style={{ fontSize: "20px", marginBottom: "-25%" }}><b>Woody Scenet</b></a><br></br>
                                    <a href="shop.js" className="nm">Dolce Perfume</a>
                                    <a href="shop.js" className="nm">Eternity</a>
                                    <a href="shop.js" className="nm">Kenneth Reaction</a>
                                    <a href="shop.js" className="nm">Perfumraia</a>
                                    <a href="shop.js" className="nm">Die Eu Sol  </a>
                                    <a href="shop.js" className="nm">Future Love</a>
                                    <a href="shop.js" className="nm">Ambient</a>
                                </div>
                                <div>
                                    <img src="https://darko-theme.myshopify.com/cdn/shop/files/slider_image2.png?v=1630483834" height="270px" width="420px" style={{ marginLeft: "25%" }} />
                                    <p style={{ fontSize: "20px", marginTop: "-4%" }}><b>Armani Beauty</b></p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <button className="home" onClick={() => navigate('/blog')}>BLOG</button>
                    <button className="home" onClick={() => navigate('/FAQ')} >FAQ'S</button>
                    <button className="home" onClick={() => navigate('/contact')} >CONTACT</button>
                </div>
                <div>
                    <button style={{ backgroundColor: "white", border: "none", paddingTop: "15px" }} >
                        <svg style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-bucket" viewBox="0 0 16 16">
                            <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527zm9.892 1-1.286 8.574a.5.5 0 0 1-.494.426H4.36a.5.5 0 0 1-.494-.426L2.58 6h10.838z" />
                        </svg></button>
                    <button onClick={() => navigate('./login')} style={{ backgroundColor: "white", border: "none" }} >
                        <svg style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                        </svg></button>
                    <button onClick={() => navigate('./wishlist')} style={{ backgroundColor: "white", border: "none" }} >
                        <svg style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg></button>

                </div>
            </div>

            {/* <--------header--------> */}

        </>
    )
}