import React from "react";
import './App.css'
import { useNavigate } from "react-router";
import { Collapse } from 'antd';
import { TiMinus } from 'react-icons/ti'
import { FaPlus } from 'react-icons/fa'
import { CgMenuGridR } from 'react-icons/cg'
import { TfiMenuAlt } from 'react-icons/tfi'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import './app.scss'
import { GoCircle } from 'react-icons/go';
import { Carousel } from 'antd';
import { Checkbox } from 'antd';
import { Option } from "antd/es/mentions";

const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
};






const items = [
    {
        key: '1',
        label: <p style={{ fontSize: "15px", padding: "-5px", color: "#a87c36", marginTop: "0%", width: "200px" }}>Men's Perfume</p>,
        children: <div className="test"><p style={{ fontSize: "14px" }}>Men's Perfume</p></div>,
    },
    {
        key: '2',
        label: <p style={{ fontSize: "15px", padding: "-10px", color: "#a87c36", marginTop: "0%", width: "200px" }}>Women's Perfume</p>,
        children: <p style={{ fontSize: "14px" }}>Carala Gio </p>,
    },
    {
        key: '3',
        label: <p style={{ fontSize: "15px", padding: "-10px", color: "#a87c36", marginTop: "0%", width: "200px" }}>Kid's Perfume</p>,
        children: <p style={{ fontSize: "14px" }}>Eternity</p>,
    }
];

export const Page = () => {
    const navigate = useNavigate();

    <Checkbox.Group
        style={{
            width: '100%',
        }}
        onChange={onChange}
    ></Checkbox.Group>

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
                        <h1 style={{ color: "white", textAlign: "center" }}>COLLECTION</h1>
                        <p style={{ color: "white", textAlign: "center" }}>Home / About</p>
                    </div>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <div>
                    <div className="test">
                        <p style={{ fontSize: "22px" }}><b>Category</b></p>
                        <Collapse expandIconPosition="end" style={{ width: "250px", border: "none" }} accordion items={items} expandIcon={(i) => i.isActive ? <TiMinus size={10} color="#a87c36" /> : <FaPlus size={10} color="#a87c36" />} />
                    </div>

                    <p style={{ fontSize: "22px" }}><b>Availability</b></p>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <Checkbox value="A"> In stock (4)</Checkbox>
                        <div style={{ display: "flex", gap: "5px", marginLeft: "-1px" }}>
                            <GoCircle size={27} color="	#888888" style={{ marginTop: "15px" }} />
                            <p style={{ color: "#888888" }}> out of stock (0)</p>
                        </div>
                        <div style={{ display: "flex", gap: "20px" }}>
                            <button className="clear">CLEAR</button>
                            <button className="clear">APPLY</button>
                        </div>
                    </div>

                    <p style={{ fontSize: "22px" }}><b>Price</b></p>
                    <p>The highest price is $245.00</p>
                    <label htmlFor="from" style={{ backgroundColor: "white" }}>From $</label><br></br>
                    <input type="number" name="from" style={{ padding: "10px", width: "250px", border: "1px solid black" }}></input><br></br>
                    <label htmlFor="from" style={{ backgroundColor: "white" }}>To$</label><br></br>
                    <input type="number" name="from" style={{ padding: "10px", width: "250px", border: "1px solid black" }}></input>
                    <div style={{ display: "flex", gap: "20px", marginTop: "7% " }}>
                        <button className="clear">CLEAR</button>
                        <button className="clear">APPLY</button>
                    </div>

                    <p style={{ fontSize: "22px" }}><b>Product type</b></p>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <Checkbox value="A">  Men (7)</Checkbox>
                        <Checkbox value="A" style={{ marginTop: "5%" }}>  Women (10)</Checkbox>
                    </div>

                    <p style={{ fontSize: "22px" }}><b> Brand</b></p>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <Checkbox value="A">  Aarps (1)</Checkbox>
                        <Checkbox value="A" style={{ marginTop: "5%" }}> Bottled Heaven (4)</Checkbox>
                        <Checkbox value="A" style={{ marginTop: "5%" }}>  Cologne Crafts (2)</Checkbox>
                        <Checkbox value="A" style={{ marginTop: "5%" }}> Ellen's (1)</Checkbox>
                        <Checkbox value="A" style={{ marginTop: "5%" }}> Fresh Fragrances (3)</Checkbox>
                        <Checkbox value="A" style={{ marginTop: "5%" }}> Gentle (1)</Checkbox>
                        <Checkbox value="A" style={{ marginTop: "5%" }}> Sweet Smells (3)</Checkbox>
                        <Checkbox value="A" style={{ marginTop: "5%" }}>The Perfume Room (2)</Checkbox>
                    </div>


                    <button className="clear-all">CLEAR ALL</button>

                    <p style={{ fontSize: "22px" }}><b>Best Sellers</b></p>

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
                    <div style={{ display: "flex", gap: "200px", backgroundColor: "#0000000d", border: "1px solid black", padding: "5px" }}>
                        <div style={{ display: "flex", border: "1px solid black", height: "38px", marginTop: "5px" }}>
                            <CgMenuGridR size={28} style={{ backgroundColor: "#a87c36", color: "white", padding: "5px" }} />
                            <TfiMenuAlt size={28} style={{ color: "black", marginTop: "2px", padding: "5px" }} />
                        </div>

                        <div style={{ display: "flex", gap: "5px" }}>
                            <p>Paginate by</p>
                            <input type="number" value="9" style={{ width: "50px", height: "25px", marginTop: "15px", backgroundColor: "#a87c36", color: "white", border: "none", fontSize: "15px" }}></input>

                        </div>

                        <div style={{ display: "flex", gap: "5px" }}>
                            <p>Sort by </p>
                            <p style={{ backgroundColor: "#a87c36", color: "white", border: "none", fontSize: "15px", padding: "7px" }}>Featured</p>

                        </div>

                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
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

                    <div style={{ display: "flex", justifyContent: "center" }}>

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


                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>

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

                    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>

                        <IoIosArrowBack size={20} style={{ backgroundColor: "#a87c36", color: "white", padding: "8px", width: "45px" }} />
                        <button className="number1" style={{cursor:"pointer"}} onClick={() => navigate('/shop')}>1</button>
                        <button className="number2">2</button>
                        <IoIosArrowForward size={20} style={{ backgroundColor: "#a87c36", color: "white", padding: "8px", width: "45px" }} />
                    </div>

                </div>





            </div>


        </>
    )

}