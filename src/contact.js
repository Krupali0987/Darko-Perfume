import React from "react";
import { useNavigate } from "react-router";
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
import { BsSendFill } from 'react-icons/bs'

export const Contact = () => {
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
                        <h1 style={{ color: "white", textAlign: "center" }}>CONTACT</h1>
                        <p style={{ color: "white", textAlign: "center" }}>Home / About</p>
                    </div>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "40px",marginTop:"3%" }}>
                <div>
                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRTrV9TUxxUw_xApM6bkPEs2bWjVFb6AjZs0BnFJU6B2Lz2NyYT" height="570px" width="780px" />
                </div>
                <div >
                    <div style={{ display: "flex", border: "1px solid black", gap: "30px", padding: "20px", width: "320px" }}>
                        <FaPhoneSquareAlt size="60" style={{ marginTop: "15%" }} />
                        <div>
                            <p style={{ fontSize: "22px" }}><b>Phone</b></p>
                            <p><b>Toll-Free:</b> 0123 - 456 - 789</p>
                            <p style={{ marginTop: "-4%" }}><b>Fax:</b>0123 - 456 - 789</p>
                        </div>
                    </div>

                    <div style={{ display: "flex", border: "1px solid black", gap: "30px", padding: "20px", width: "320px", marginTop: "10%" }}>
                        <MdEmail size="60" style={{ marginTop: "15%" }} />
                        <div>
                            <p style={{ fontSize: "22px" }}><b>Email</b></p>
                            <p>mail@example.com</p>
                            <p style={{ marginTop: "-4%" }}>support@example.com</p>
                        </div>
                    </div>

                    <div style={{ display: "flex", border: "1px solid black", gap: "30px", padding: "20px", width: "320px", marginTop: "10%" }}>
                        <BsSendFill size="50" style={{ marginTop: "15%" }} />
                        <div>
                            <p style={{ fontSize: "22px" }}><b>Address</b></p>
                            <p>No: 58 A, East Madison Street,</p>
                            <p style={{ marginTop: "-4%" }}>Baltimore, MD, USA 4508</p>
                        </div>
                    </div>

                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <div>
                    <h1 style={{ fontSize: "50px", color: "#1a1a1a" ,marginBottom:"1%",marginTop:"5%"}}>CONTACT FORM</h1>

                  
                        <input type="text" id="name" name="name" placeholder="Name" style={{ padding: "12px", width: "350px",border:"1px soild black",fontSize:"17px" }} />
                        <input type="email" id="email" name="email" placeholder="Email" style={{ padding: "12px", width: "350px",border:"1px soild black",marginLeft:"30px",fontSize:"17px" }} />
                        <input type="tel" id="phone" name="phone" placeholder="Phone" style={{ padding: "12px", width: "350px",border:"1px soild black",marginLeft:"30px",fontSize:"17px" }} /><br>
                        </br>
                        <textarea name="message" rows="12" cols="123" placeholder="Message" style={{fontSize:"17px",padding:"12px",marginTop:"30px" }}></textarea>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button className="contact-button">SEND</button>
                        </div>
                </div>
            </div>


        </>
    )
}