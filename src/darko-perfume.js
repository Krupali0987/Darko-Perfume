import React from "react";
import './App.css'
import { Carousel } from 'antd';
import slide2 from './Darko_04_600x.webp';
import slide3 from './img1.webp';
import { useNavigate } from "react-router";



export const Perfume = () => {
    const navigate = useNavigate();

    return (
        <>
         


            <div id="main">
                <Carousel autoplay>
                    <div style={{ position: "relative", height: "1200px" }}>
                        <div style={{ display: "flex", height: "1000px" }}>
                            <div style={{ marginTop: "20%", marginLeft: "7%" }}>
                                <h2 style={{ fontSize: "48px" }}>EVE'S ESSENCE</h2>
                                <p style={{ fontSize: "24px", marginTop: "-4%" }}> Contains lower concentration of fragrance</p>
                                <button className="button-1">SHOP NOW</button>
                            </div>
                            <div style={{ position: "absolute" }}>
                                <img src="https://darko-theme.myshopify.com/cdn/shop/files/slider-3_2000x_8ca00117-03ce-4ba5-a865-79330ff6f307.png?v=1630484909"
                                    height="1100px" width="1900px" style={{ backgroundSize: "cover" }} />
                            </div>
                        </div>
                    </div>
                    <div style={{ height: "1200px" }}>
                        <div style={{ display: "flex", height: "1000px", position: "relative" }}>
                            <div >
                                <img src="https://darko-theme.myshopify.com/cdn/shop/files/slider_image2.png?v=1630483834"
                                    height="1100px" width="1900px" style={{ backgroundSize: "cover" }} />
                            </div>
                            <div style={{ position: "absolute", right: "100px", top: "450px" }}>
                                <h2 style={{ fontSize: "48px" }}>ELLE PERFUMES</h2>
                                <p style={{ fontSize: "24px", marginTop: "-4%" }}> The most popular type of fragr</p>
                                <button className="button-1">SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                    <div style={{ position: "relative", height: "1200px" }}>
                        <div style={{ display: "flex", height: "1000px" }}>
                            <div style={{ marginTop: "20%", marginLeft: "7%" }}>
                                <h2 style={{ fontSize: "48px" }}>THE SCENTURY</h2>
                                <p style={{ fontSize: "24px", marginTop: "-4%" }}> Highest concentration fragrance</p>
                                <button className="button-1">SHOP NOW</button>
                            </div>
                            <div style={{ position: "absolute" }}>
                                <img src="https://darko-theme.myshopify.com/cdn/shop/files/dark_slide.png?v=1630476123"
                                    height="1100px" width="1900px" style={{ backgroundSize: "cover" }} />
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>


            {/* <div className="change-photos" style={{ padding: "5%" }}>
                <div className="change-photo">
                    <img src={slide} height="200px" width="200px" className="img-1" />
                </div>
                <div className="change-photo">
                    <div className="div-1">
                        <h1>hello</h1>
                    </div>
                </div>
            </div> */}

            <h1 style={{ fontSize: "70px", textAlign: "center", color: "#1a1a1a" }}>OUR PRODUCTS</h1>


            {/* part-----1 */}
            <div style={{ display: "flex", justifyContent: "center" }}>


                <div className="change-photos" style={{ padding: "3%" }} >
                    <div className="change-photo">
                        <img src={slide2} height="200px" width="200px" className="img-1" />
                    </div>
                    <div className="change-photo" style={{ marginTop: "30%", marginLeft: "35%", backgroundColor: "#f2efee", textAlign: "center" }}>
                        <div>
                            <p style={{ fontSize: "20px" }}><b>Carala Gio</b></p>
                            <p style={{ color: "#9F6000", fontSize: "18px" }}>$225.00</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                            </svg>
                        </div>
                    </div>
                </div>


                <div className="change-photos" style={{ padding: "3%" }} >
                    <div className="change-photo">
                        <img src={slide3} height="200px" width="200px" className="img-1" />
                    </div>
                    <div className="change-photo" style={{ marginTop: "30%", marginLeft: "35%", backgroundColor: "#f2efee", textAlign: "center" }}>
                        <div>
                            <p style={{ fontSize: "20px" }}><b>Delish</b></p>
                            <p style={{ color: "#9F6000", fontSize: "18px" }}>$325.00</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="change-photos" style={{ padding: "3%" }} >
                    <div className="change-photo">
                        <img src="https://darko-theme.myshopify.com/cdn/shop/products/Darko_06_97a3446f-a6cf-4717-b375-06c80e5e78e1_600x.png?v=1630990822" height="200px" width="200px" className="img-1" />
                    </div>
                    <div className="change-photo" style={{ marginTop: "30%", marginLeft: "35%", backgroundColor: "#f2efee", textAlign: "center" }}>
                        <div>
                            <p style={{ fontSize: "20px" }}><b>Dior Perfume</b></p>
                            <p style={{ color: "#9F6000", fontSize: "18px" }}>$125.00</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="change-photos" style={{ padding: "3%" }} >
                    <div className="change-photo">
                        <img src="https://darko-theme.myshopify.com/cdn/shop/products/Darko_07_c4dc4aff-1450-475c-b6dd-4ea3b2022b57_600x.png?v=1630990837" height="200px" width="200px" className="img-1" />
                    </div>
                    <div className="change-photo" style={{ marginTop: "30%", marginLeft: "35%", backgroundColor: "#f2efee", textAlign: "center" }}>
                        <div>
                            <p style={{ fontSize: "20px" }}><b>Dolce Perfume</b></p>
                            <p style={{ color: "#9F6000", fontSize: "18px" }}>$52.69</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="change-photos" style={{ padding: "3%" }} >
                    <div className="change-photo">
                        <img src="https://darko-theme.myshopify.com/cdn/shop/products/Darko_08_490b84ad-42e2-4593-b667-e0c461c59e2a_600x.png?v=1630990854" height="200px" width="200px" className="img-1" />
                    </div>
                    <div className="change-photo" style={{ marginTop: "30%", marginLeft: "35%", backgroundColor: "#f2efee", textAlign: "center" }}>
                        <div>
                            <p style={{ fontSize: "20px" }}><b>Eternity</b></p>
                            <p style={{ color: "#9F6000", fontSize: "18px" }}>$275.00</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>


            {/* part----2 */}


            <div style={{ display: "flex", justifyContent: "center" }}>


                <div className="change-photos" style={{ padding: "3%" }} >
                    <div className="change-photo">
                        <img src="https://darko-theme.myshopify.com/cdn/shop/products/Darko_09_9efcb609-f6a7-432a-97d2-83fc78bb8896_600x.png?v=1630990880" height="200px" width="200px" className="img-1" />
                    </div>
                    <div className="change-photo" style={{ marginTop: "30%", marginLeft: "35%", backgroundColor: "#f2efee", textAlign: "center" }}>
                        <div>
                            <p style={{ fontSize: "20px" }}><b>Hugo Boss Hugo</b></p>
                            <p style={{ color: "#9F6000", fontSize: "18px" }}>$225.00</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                            </svg>
                        </div>
                    </div>
                </div>


                <div className="change-photos" style={{ padding: "3%" }} >
                    <div className="change-photo">
                        <img src="https://darko-theme.myshopify.com/cdn/shop/products/Darko_10_600x.png?v=1630990896" height="200px" width="200px" className="img-1" />
                    </div>
                    <div className="change-photo" style={{ marginTop: "30%", marginLeft: "35%", backgroundColor: "#f2efee", textAlign: "center" }}>
                        <div>
                            <p style={{ fontSize: "20px" }}><b>Jackseon</b></p>
                            <p style={{ color: "#9F6000", fontSize: "18px" }}>$225.00</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="change-photos" style={{ padding: "3%" }} >
                    <div className="change-photo">
                        <img src="https://darko-theme.myshopify.com/cdn/shop/products/Darko_11_15671f52-485d-4fc8-b08f-a1ce2a3c6bbd_600x.png?v=1630990917" height="200px" width="200px" className="img-1" />
                    </div>
                    <div className="change-photo" style={{ marginTop: "30%", marginLeft: "35%", backgroundColor: "#f2efee", textAlign: "center" }}>
                        <div>
                            <p style={{ fontSize: "20px" }}><b>Jacobs Fragrance</b></p>
                            <p style={{ color: "#9F6000", fontSize: "18px" }}>$225.00</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="change-photos" style={{ padding: "3%" }} >
                    <div className="change-photo">
                        <img src="https://darko-theme.myshopify.com/cdn/shop/products/Darko_12_3b9d6784-1c10-4882-b427-ce9c0f4aefc8_600x.png?v=1630990975" height="200px" width="200px" className="img-1" />
                    </div>
                    <div className="change-photo" style={{ marginTop: "30%", marginLeft: "35%", backgroundColor: "#f2efee", textAlign: "center" }}>
                        <div>
                            <p style={{ fontSize: "20px" }}><b>kenneth Reaction</b></p>
                            <p style={{ color: "#9F6000", fontSize: "18px" }}>$15.00</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="change-photos" style={{ padding: "3%" }} >
                    <div className="change-photo">
                        <img src="https://darko-theme.myshopify.com/cdn/shop/products/Darko_13_c1b6d98a-10cd-42a6-ac33-156ad0e58363_600x.png?v=1630990998" height="200px" width="200px" className="img-1" />
                    </div>
                    <div className="change-photo" style={{ marginTop: "30%", marginLeft: "35%", backgroundColor: "#f2efee", textAlign: "center" }}>
                        <div>
                            <p style={{ fontSize: "20px" }}><b>Malone London</b></p>
                            <p style={{ color: "#9F6000", fontSize: "18px" }}>$225.00</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>

            {/* part----3 */}


            <div style={{ display: "flex", justifyContent: "center" }}>


                <div className="change-photos" style={{ padding: "3%" }} >
                    <div className="change-photo">
                        <img src="https://darko-theme.myshopify.com/cdn/shop/products/Darko_14_600x.png?v=1630991021" height="200px" width="200px" className="img-1" />
                    </div>
                    <div className="change-photo" style={{ marginTop: "30%", marginLeft: "35%", backgroundColor: "#f2efee", textAlign: "center" }}>
                        <div>
                            <p style={{ fontSize: "20px" }}><b>Nautica Perfume</b></p>
                            <p style={{ color: "#9F6000", fontSize: "18px" }}>$225.00</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="change-photos" style={{ padding: "3%" }} >
                    <div className="change-photo">
                        <img src="https://darko-theme.myshopify.com/cdn/shop/products/Darko_15_1f35ddb6-09e0-47a1-b614-efb894408508_600x.png?v=1630991043" height="200px" width="200px" className="img-1" />
                    </div>
                    <div className="change-photo" style={{ marginTop: "30%", marginLeft: "35%", backgroundColor: "#f2efee", textAlign: "center" }}>
                        <div>
                            <p style={{ fontSize: "20px" }}><b>Pareal Glo</b></p>
                            <p style={{ color: "#9F6000", fontSize: "18px" }}>$225.00</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                            </svg>
                        </div>
                    </div>
                </div>


                <div className="change-photos" style={{ padding: "3%" }} >
                    <div className="change-photo">
                        <img src="https://darko-theme.myshopify.com/cdn/shop/products/Darko_16_fddd2332-472c-473c-b5c6-d557833a462f_600x.png?v=1630991077" height="200px" width="200px" className="img-1" />
                    </div>
                    <div className="change-photo" style={{ marginTop: "30%", marginLeft: "35%", backgroundColor: "#f2efee", textAlign: "center" }}>
                        <div>
                            <p style={{ fontSize: "20px" }}><b>Perfumraia</b></p>
                            <p style={{ color: "#9F6000", fontSize: "18px" }}>$245.00</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="change-photos" style={{ padding: "3%" }} >
                    <div className="change-photo">
                        <img src="https://darko-theme.myshopify.com/cdn/shop/products/Darko_17_600x.png?v=1630991095" height="200px" width="200px" className="img-1" />
                    </div>
                    <div className="change-photo" style={{ marginTop: "30%", marginLeft: "35%", backgroundColor: "#f2efee", textAlign: "center" }}>
                        <div>
                            <p style={{ fontSize: "20px" }}><b>Silvia Dio</b></p>
                            <p style={{ color: "#9F6000", fontSize: "18px" }}>$225.00</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="change-photos" style={{ padding: "3%" }} >
                    <div className="change-photo">
                        <img src="https://darko-theme.myshopify.com/cdn/shop/products/Darko_03_782bba23-7e85-4a2f-8cda-d0e0bf26b3b5_600x.png?v=1630990558" height="200px" width="200px" className="img-1" />
                    </div>
                    <div className="change-photo" style={{ marginTop: "30%", marginLeft: "35%", backgroundColor: "#f2efee", textAlign: "center" }}>
                        <div>
                            <p style={{ fontSize: "20px" }}><b>Burberry Brit</b></p>
                            <p style={{ color: "#9F6000", fontSize: "18px" }}>$225.00</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>

            <h1 style={{ fontSize: "70px", textAlign: "center", color: "#1a1a1a" }}>WATCH & SHOP</h1>

            {/* */}

            <div style={{ display: "flex", justifyContent: "center", gap: "120px", marginLeft: "-5%", backgroundColor: "#f2efee", padding: "3%" }}>
                <div>
                    <div style={{
                        backgroundImage:
                            'url("https://darko-theme.myshopify.com/cdn/shop/files/abo-11_027519f0-ea22-4520-96ad-c62281986f59.jpg?v=1631015579")',
                        height: "650px",
                        width: "1100px",
                        backgroundSize: "cover",
                    }}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "650px" }}>
                            <svg style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                            </svg>
                        </div>
                    </div>

                </div>
                <div>
                    <img src="https://darko-theme.myshopify.com/cdn/shop/files/Darko_02.png?v=1613566287" height="390px" width="380px" />
                    <h5 className="EVE">EVE’S ESSENCE</h5>
                    <div style={{ width: "400px", textAlign: "center" }}>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis libero placerat cursus cursus. Nunc rutrum tellus a orci pretium sodales. Fusce ante odio, tristique at urna sed, condimentum ornare eros.</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                        <button className="button-2">SHOP NOW</button></div>
                </div>
            </div>


            <h1 style={{ fontSize: "70px", textAlign: "center", color: "#1a1a1a" }}>OUR CLIENTS</h1>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ backgroundColor: "#f2efee", padding: "3%" }}>
                    <img src="https://darko-theme.myshopify.com/cdn/shop/files/icon-1_200x200.png?v=1613555268" height="40px" width="200px" />
                </div>
                <div style={{ backgroundColor: "#f2efee", padding: "3%" }}>
                    <img src="https://darko-theme.myshopify.com/cdn/shop/files/icon-2_200x200.png?v=1613555268" height="40px" width="200px" />
                </div>
                <div style={{ backgroundColor: "#f2efee", padding: "3%" }}>
                    <img src="https://darko-theme.myshopify.com/cdn/shop/files/icon-3_200x200.png?v=1613555268" height="40px" width="200px" />
                </div>
                <div style={{ backgroundColor: "#f2efee", padding: "3%" }}>
                    <img src="https://darko-theme.myshopify.com/cdn/shop/files/icon-4_200x200.png?v=1613555268" height="40px" width="200px" />
                </div>
            </div>

            <div>
                <div style={{
                    backgroundImage:
                        'url("https://darko-theme.myshopify.com/cdn/shop/files/blog_245ccae3-e0eb-44dc-96d4-51dfeae1b64f_1950x.jpg?v=1613555533")',
                    height: "750px",
                    width: "100% 100%",
                    backgroundSize: "cover",
                    objectFit: "cover",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "50% 0%",
                }}>
                    <div style={{ backgroundColor: "rgb(34,34,34,0.6)", height: "750px" }}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "750px", lineHeight: "30px" }}>
                            <div>
                                <p style={{ color: "white", fontSize: "20px", fontFamily: "Arial, Helvetica, sans-serif", textAlign: "center" }}>HIGHEST CONCENTRATION OF FRAGRANCE</p>
                                <h1 style={{ fontSize: "75px", textAlign: "center", color: "white" }}>THE SCENTURY</h1>
                                <p style={{ color: "white", wordSpacing: "-2px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis libero placerat cursus cursus.</p>
                                <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                                    <button className="button-3">SHOP NOW</button></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            <h1 style={{ fontSize: "70px", textAlign: "center", color: "#1a1a1a" }}>NEWS</h1>

            <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                <div>
                    <div className="news-img-1" style={{
                        backgroundImage:
                            'url("https://darko-theme.myshopify.com/cdn/shop/articles/Blog-9.png?v=1605615380")',
                        height: "380px",
                        width: "850px",
                        backgroundSize: "cover"

                    }}>
                        <div style={{ backgroundColor: "rgb(0,0,0,0.7)", height: "380px" }}>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "350px" }}>
                                <div>
                                    <h5 style={{ color: "white", fontSize: "22px" }}>REVEAL THE WOMAN WITHIN</h5>
                                    <p style={{ color: "white", fontSize: "18px" }}>By Ramamoorthi M   | December 4, 2020  |  2 Comments</p>
                                    <div style={{ border: "2px solid white", width: "40px" }}></div>
                                    <p style={{ color: "white", width: "700px" }}>Ruis curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus t...</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="news-img-1" style={{
                        backgroundImage:
                            'url("https://darko-theme.myshopify.com/cdn/shop/articles/Blog-4_d9cec501-471a-473d-99f6-5eada5e88adf.png?v=1605615049")',
                        height: "380px",
                        width: "850px",
                        backgroundSize: "cover"

                    }}>
                        <div style={{ backgroundColor: "rgb(0,0,0,0.6)", height: "380px" }}>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "350px" }}>
                                <div>
                                    <h5 style={{ color: "white", fontSize: "22px" }}>SECRET FRAGRANCES FOR WOMEN</h5>
                                    <p style={{ color: "white", fontSize: "18px" }}>By Ramamoorthi M   | December 4, 2020  |  2 Comments</p>
                                    <div style={{ border: "2px solid white", width: "40px" }}></div>
                                    <p style={{ color: "white", width: "700px" }}>Cames cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, preti...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                <button className="read-more">READ MORE</button>
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}>
                <div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg></div>
                    <h6 style={{ fontSize: "18px", textAlign: "center", marginTop: "20px" }}>THE LATEST PERFUMES</h6>
                    <p style={{ textAlign: "center", marginTop: "-35px" }}>@darkoperfumes</p>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}>
                <div>
                    <h1 style={{ fontSize: "25px", textAlign: "center" }}>JOIN OUR MAILING LIST FOR THE LATEST NEWS & OFFERS</h1>
                    <input type="email" placeholder="Your email address" name="email" style={{ width: "700px", padding: "10px", fontSize: "17px" }}></input>
                    <button className="submit">SUBMIT</button>
                </div>
            </div>



           
        </>
    )
}