import React from "react";
import { useNavigate } from "react-router";
import { Carousel } from 'antd';
import Slider from "react-slick";
import { Pagination } from 'antd';
import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'





export const Blog = () => {

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
                        <h1 style={{ color: "white", textAlign: "center" }}>NEWS    </h1>
                        <p style={{ color: "white", textAlign: "center" }}>Home / About</p>
                    </div>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "40px",marginTop:"3%" }}>
                <div>
                    <div style={{ display: "flex", justifyContent: "center" }}>

                        <div>

                            <h5 style={{ fontSize: "25px" }}>RECENT ARTICLES</h5>

                            <div style={{ display: "flex", gap: "20px" }}>
                                <img src="https://darko-theme.myshopify.com/cdn/shop/articles/Blog-9_970x.png?v=1605615380" height="80px" width="120px" />
                                <div style={{ marginTop: "-14%" }}>
                                    <h6 style={{ width: "250px", fontSize: "20px" }}>REVEAL THE WOMAN WITHIN</h6>
                                    <p style={{ width: "250px", marginTop: "-15%" }}>Ruis curabitur ligula sapien, tincidunt non,...</p>
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "20px", marginTop: "8%" }}>
                                <img src="https://darko-theme.myshopify.com/cdn/shop/articles/Blog-4_d9cec501-471a-473d-99f6-5eada5e88adf_970x.png?v=1605615049" height="80px" width="120px" />
                                <div style={{ marginTop: "-14%" }}>
                                    <h6 style={{ width: "250px", fontSize: "20px" }}>SECRET FRAGRANCES FOR WOMEN</h6>
                                    <p style={{ width: "250px", marginTop: "-15%" }}>Cames cum sociis natoque penatibus...</p>
                                </div>
                            </div>

                            <h5 style={{ fontSize: "25px" }}>BEST PRODUCTS</h5>
                        </div>
                    </div>

                    <div style={{ width: "300px", marginLeft: "-10%" }}>
                        <Carousel dotPosition="bottom" autoplay>
                            <div>
                                <div className="change-photos" style={{ padding: "3%" }} >
                                    <div className="change-photo">
                                        <img src="https://darko-theme.myshopify.com/cdn/shop/products/Darko_04_600x.png?v=1630990740" height="200px" width="200px" className="img-1" />
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
                            </div>
                            <div>
                                <div className="change-photos" style={{ padding: "3%" }} >
                                    <div className="change-photo">
                                        <img src="https://darko-theme.myshopify.com/cdn/shop/products/Darko_05_600x.png?v=1630990776" height="200px" width="200px" className="img-1" />
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
                            </div>
                            <div>
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
                            </div>
                            <div>
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
                            </div>
                        </Carousel>
                    </div>
                </div>


                <div>
                    <div>
                        <div>
                            <img src="https://darko-theme.myshopify.com/cdn/shop/articles/Blog-9_970x.png?v=1605615380" height="450px" width="900px" />
                            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                                <svg style={{ marginTop: "3px" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#a87c36" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>
                                <p style={{ marginTop: "1px" }}>By Ramamoorthi M <span style={{ marginLeft: "10px" }}>|</span></p>
                                <svg style={{ marginLeft: "10px", marginTop: "4px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a87c36" class="bi bi-calendar-week" viewBox="0 0 16 16">
                                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                </svg>
                                <p style={{ marginTop: "1px" }}>December 4, 2020</p>
                            </div>

                            <h5 style={{ fontSize: "22px", marginTop: "1%" }}>REVEAL THE WOMAN WITHIN</h5>
                            <p style={{ width: "800px", marginTop: "-2%" }}>Ruis curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus t...</p>
                        </div>

                        <div style={{ marginTop: "10%" }}>
                            <img src="https://darko-theme.myshopify.com/cdn/shop/articles/Blog-4_d9cec501-471a-473d-99f6-5eada5e88adf_970x.png?v=1605615049" height="450px" width="900px" />
                            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                                <svg style={{ marginTop: "3px" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#a87c36" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>
                                <p style={{ marginTop: "1px" }}>By Ramamoorthi M <span style={{ marginLeft: "10px" }}>|</span></p>
                                <svg style={{ marginLeft: "10px", marginTop: "4px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a87c36" class="bi bi-calendar-week" viewBox="0 0 16 16">
                                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                </svg>
                                <p style={{ marginTop: "1px" }}>December 7, 2020</p>
                            </div>

                            <h5 style={{ fontSize: "22px", marginTop: "1%" }}>SECRET FRAGRANCES FOR WOMEN</h5>
                            <p style={{ width: "800px", marginTop: "-2%" }}>Cames cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, preti...</p>
                        </div>


                        <div style={{ marginTop: "10%" }}>
                            <img src="https://darko-theme.myshopify.com/cdn/shop/articles/Blog-1_970x.png?v=1605614664" height="450px" width="900px" />
                            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                                <svg style={{ marginTop: "3px" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#a87c36" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>
                                <p style={{ marginTop: "1px" }}>By Ramamoorthi M <span style={{ marginLeft: "10px" }}>|</span></p>
                                <svg style={{ marginLeft: "10px", marginTop: "4px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a87c36" class="bi bi-calendar-week" viewBox="0 0 16 16">
                                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                </svg>
                                <p style={{ marginTop: "1px" }}>December 6, 2020</p>
                            </div>

                            <h5 style={{ fontSize: "22px", marginTop: "1%" }}>THE SCENT OF DIGNITY</h5>
                            <p style={{ width: "800px", marginTop: "-2%" }}>Muis sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis grav...</p>
                        </div>


                        <div style={{ marginTop: "10%" }}>
                            <img src="https://darko-theme.myshopify.com/cdn/shop/articles/Blog-8_970x.png?v=1605614783" height="450px" width="900px" />
                            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                                <svg style={{ marginTop: "3px" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#a87c36" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>
                                <p style={{ marginTop: "1px" }}>By Ramamoorthi M <span style={{ marginLeft: "10px" }}>|</span></p>
                                <svg style={{ marginLeft: "10px", marginTop: "4px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a87c36" class="bi bi-calendar-week" viewBox="0 0 16 16">
                                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                </svg>
                                <p style={{ marginTop: "1px" }}>December 6, 2020</p>
                            </div>

                            <h5 style={{ fontSize: "22px", marginTop: "1%" }}>EXTRAORDINARY COLLECTIONS</h5>
                            <p style={{ width: "800px", marginTop: "-2%" }}>Quis imperdiet massa tincidunt nunc pulvinar sapien et. Gravida quis blandit turpis cursus in hac. Fames ac turpis egestas integer eget aliquet nib...</p>
                        </div>


                        <div style={{ marginTop: "10%" }}>
                            <img src="https://darko-theme.myshopify.com/cdn/shop/articles/Blog-3_970x.png?v=1605614698" height="450px" width="900px" />
                            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                                <svg style={{ marginTop: "3px" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#a87c36" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>
                                <p style={{ marginTop: "1px" }}>By Ramamoorthi M <span style={{ marginLeft: "10px" }}>|</span></p>
                                <svg style={{ marginLeft: "10px", marginTop: "4px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a87c36" class="bi bi-calendar-week" viewBox="0 0 16 16">
                                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                </svg>
                                <p style={{ marginTop: "1px" }}>December 6, 2020</p>
                            </div>

                            <h5 style={{ fontSize: "22px", marginTop: "1%" }}>FEED YOUR SENSES</h5>
                            <p style={{ width: "800px", marginTop: "-2%" }}>Augue neque gravida in fermentum et. Aliquam id diam maecenas ultricies mi eget mauris pharetra et.  Non tellus orci ac auctor augue mauris augue. .</p>
                        </div>

                        <div style={{ marginTop: "10%" }}>
                            <img src="https://darko-theme.myshopify.com/cdn/shop/articles/Blog-10_970x.png?v=1605614837" height="450px" width="900px" />
                            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                                <svg style={{ marginTop: "3px" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#a87c36" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>
                                <p style={{ marginTop: "1px" }}>By Ramamoorthi M <span style={{ marginLeft: "10px" }}>|</span></p>
                                <svg style={{ marginLeft: "10px", marginTop: "4px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a87c36" class="bi bi-calendar-week" viewBox="0 0 16 16">
                                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                </svg>
                                <p style={{ marginTop: "1px" }}>December 6, 2020</p>
                            </div>

                            <h5 style={{ fontSize: "22px", marginTop: "1%" }}>FEED YOUR SENSES</h5>
                            <p style={{ width: "800px", marginTop: "-2%" }}>Nunc mattis enim ut tellus elementum sagittis. In tellus integer feugiat scelerisque varius morbi enim nunc. Suspendisse faucibus interdum posuere ...</p>
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>

                        <IoIosArrowBack size={20} style={{ backgroundColor: "#a87c36", color: "white", padding: "8px", width: "45px" }} />
                        <button className="number1">1</button>
                        <button className="number2" style={{ cursor: "pointer" }} onClick={() => navigate('/blog2')}>2</button>
                        <IoIosArrowForward size={20} style={{ backgroundColor: "#a87c36", color: "white", padding: "8px", width: "45px" }} />
                    </div>


                </div>
            </div>


        </>
    )
}