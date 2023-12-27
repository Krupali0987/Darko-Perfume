import React from "react";
import { useNavigate } from "react-router";
import './App.css'

export const Services = () => {

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
                        <h1 style={{ color: "white", textAlign: "center" }}>SERVICES</h1>
                        <p style={{ color: "white", textAlign: "center" }}>Home / About</p>
                    </div>
                </div>
            </div>

            <h1 style={{ fontSize: "70px", textAlign: "center", color: "#1a1a1a" }}>HIGHER FRAGRANCE</h1>

            <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>

                <div className="img-1">
                    <div className="service-img-1" style={{
                        backgroundImage:
                            'url("https://darko-theme.myshopify.com/cdn/shop/files/abo-02_600x.jpg?v=1631681729")',
                        height: "550px",
                        width: "650px",
                        backgroundSize: "cover"
                    }}>
                        <div>
                            <h1 className="text"><b>ATTRACTION</b></h1>
                        </div>
                    </div>
                </div>

                <div className="img-1">
                    <div className="service-img-1" style={{
                        backgroundImage:
                            'url("https://darko-theme.myshopify.com/cdn/shop/files/abo-01_600x.jpg?v=1631681751")',
                        height: "550px",
                        width: "650px",
                        backgroundSize: "cover"
                    }}>
                        <div>
                            <h1 className="text"><b>NICE SMELL</b></h1>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: "black", color: "white", padding: "1%", paddingBottom: "5%", marginTop: "5%" }}>

                <h1 style={{ fontSize: "70px", textAlign: "center", }}>NATURAL INGREDIENTS</h1>
                <p style={{ textAlign: "center", marginTop: "-2%" }}>Hac habitasse platea dictumst quisque sagittis purus sit</p>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "3%" }}>
                    <div style={{ backgroundColor: "white", color: "black", padding: "3%", width: "1200px", }}>
                        <div style={{ display: "flex", gap: "70px" }}>
                            <div>
                                <h1 style={{ fontSize: "40px" }}>HIGHLY VERSATILE FRAGRANCE</h1>
                                <p style={{ width: "950px" }}>Nec feugiat in fermentum posuere urna. Convallis convallis tellus id interdum velit laoreet. Et malesuada fames ac turpis egestas sed tempus. Vulputate mi sit amet mauris commodo quis. Quis viverra nibh cras pulvinar mattis. Tincidunt arcu non sodales neque.</p>
                            </div>
                            <div style={{ marginTop: "5%" }}>
                                <button className="ser-button">SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 style={{ fontSize: "70px", textAlign: "center", color: "#1a1a1a" }}>OUR CLIENTS WORDS</h1>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "3%", gap: "30px" }}>
                <div style={{ backgroundColor: "#1a1a1a", color: "white", padding: "20px" }}>
                    <p style={{ width: "550px" }}> Feugiat pretium nibh ipsum consequat nisl. Erat imperdiet sed euismod.Sed cras ornare arcu dui vivamus arcu. Ultrices vitae auctor eu augue ut. Rhoncus dolor purus non enim praesent elementum facilisis aliquam fames.. </p>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a87c36" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a87c36" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a87c36" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a87c36" class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a87c36" class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>
                    <div style={{ display: "flex", gap: "20px", marginTop: "7%" }}>
                        <img src="https://darko-theme.myshopify.com/cdn/shop/files/ser-6_200x200.jpg?v=1631682919" height="100px" width="80px" />
                        <p style={{ fontSize: "18px", marginTop: "5%" }}><b>Hannah Stocking - </b><span style={{ color: "#a87c36" }}>Musician</span></p>
                    </div>

                </div>

                <div style={{ backgroundColor: "#1a1a1a", color: "white", padding: "20px" }}>
                    <p style={{ width: "550px" }}> Feugiat pretium nibh ipsum consequat nisl. Erat imperdiet sed euismod.Sed cras ornare arcu dui vivamus arcu. Ultrices vitae auctor eu augue ut. Rhoncus dolor purus non enim praesent elementum facilisis aliquam fames.. </p>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a87c36" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a87c36" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a87c36" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a87c36" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a87c36" class="bi bi-star-half" viewBox="0 0 16 16">
                        <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                    </svg>

                    <div style={{ display: "flex", gap: "20px", marginTop: "7%" }}>
                        <img src="https://darko-theme.myshopify.com/cdn/shop/files/ser-5_200x200.jpg?v=1631682953" height="100px" width="80px" />
                        <p style={{ fontSize: "18px", marginTop: "5%" }}><b>Freda Casey - </b><span style={{ color: "#a87c36" }}>Journalist</span></p>
                    </div>
                </div>
            </div>


  

        </>
    )
}