import React from "react";
import { useNavigate } from "react-router";
import { Collapse } from 'antd';
import { TiMinus } from 'react-icons/ti'
import { FaPlus } from 'react-icons/fa'


const items = [
    {
        key: '1',
        label: <p style={{ fontSize: "20px", padding: "-5px", color: "#a87c36", marginTop: "0%", width: "1000px" }}><b>WHAT DO I NEED TO KNOW?</b></p>,
        children: <p style={{ width: "1200px", backgroundColor: "#a87c36", color: "white", fontSize: "15px" }}>Facilisis volutpat est velit egestas dui id ornare. Sed turpis tincidunt id aliquet risus feugiat in. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Non sodales neque sodales ut etiam sit amet. Erat pellentesque adipiscing commodo elit at imperdiet. Enim ut sem viverra aliquet eget sit amet tellus cras. Magna sit amet purus gravida quis blandit turpis cursus in. Fames ac turpis egestas maecenas pharetra convallis posuere.</p>,
    },
    {
        key: '2',
        label: <p style={{ fontSize: "20px", padding: "-10px", color: "#a87c36", marginTop: "0%", width: "1000px" }}><b>HOW WILL I KNOW IF ORDER IS PLACED SUCCESSFULLY?</b></p>,
        children: <p style={{ width: "1200px", backgroundColor: "#a87c36", color: "white", fontSize: "15px" }}>Amet massa vitae tortor condimentum lacinia quis vel eros donec. Viverra justo nec ultrices dui sapien. Ac tortor dignissim convallis aenean et tortor at risus. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Id neque aliquam vestibulum morbi blandit cursus risus at. Elementum integer enim neque volutpat ac tincidunt. Enim ut sem viverra aliquet eget sit amet tellus cras.</p>,
    },
    {
        key: '3',
        label: <p style={{ fontSize: "20px", padding: "-10px", color: "#a87c36", marginTop: "0%", width: "1000px" }}><b>HOW DO I CHECK THE STATUS OF MY ORDER?</b></p>,
        children: <p style={{ width: "1200px", backgroundColor: "#a87c36", color: "white", fontSize: "15px" }}>Mattis aliquamfaucibus purus in massa tempor nec feugiat nisl. Ut diam quam nulla porttitor massa id neque. Enim nulla aliquet porttitor lacus. Enim blandit volutpat maecenas volutpat. Sed felis eget velit aliquet sagittis id consectetur purus. Sollicitudin tempor id eu nisl nunc mi ipsum. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Placerat in egestas erat imperdiet sed euismod nisi porta.</p>,
    },
    {
        key: '4',
        label: <p style={{ fontSize: "20px", padding: "-10px", color: "#a87c36", marginTop: "0%", width: "1000px" }}><b>CAN I CANCEL MY ORDER?</b></p>,
        children: <p style={{ width: "1200px", backgroundColor: "#a87c36", color: "white", fontSize: "15px" }}>Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Bibendum ut tristique et egestas quis. Aliquam nulla facilisi cras fermentum odio eu. Quis vel eros donec ac odio. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Quam adipiscing vitae proin sagittis. Nibh nisl condimentum id venenatis a condimentum vitae. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac.</p>,
    },
    {
        key: '5',
        label: <p style={{ fontSize: "20px", padding: "-10px", color: "#a87c36", marginTop: "0%", width: "1000px" }}><b>DO YOU ALLOW EXCHANGES?</b></p>,
        children: <p style={{ width: "1200px", backgroundColor: "#a87c36", color: "white", fontSize: "15px" }}>Enim ut tellus elementum sagittis vitae et. Dolor purus non enim praesent elementum facilisis leo vel fringilla. Imperdiet proin fermentum leo vel orci porta. Posuere sollicitudin aliquam ultrices sagittis. Justo nec ultrices dui sapien eget mi proin sed. Placerat in egestas erat imperdiet sed euismod nisi porta. Turpis cursus in hac habitasse. Sapien eget mi proin sed libero enim. Massa ultricies mi quis hendrerit dolor magna eget est lorem.</p>,
    },
    {
        key: '6',
        label: <p style={{ fontSize: "20px", padding: "-10px", color: "#a87c36", marginTop: "0%", width: "1000px" }}><b>HOW WILL MY ORDER BE DELIVERED TO ME?</b></p>,
        children: <p style={{ width: "1200px", backgroundColor: "#a87c36", color: "white", fontSize: "15px" }}>Commodo ullamcorper a lacus vestibulum sed arcu non odio. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt..</p>,
    },

];

export const FAQ = () => {

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
                        <h1 style={{ color: "white", textAlign: "center" }}>FAQ'S</h1>
                        <p style={{ color: "white", textAlign: "center" }}>Home / About</p>
                    </div>
                </div>
            </div>

            {/* <--------header--------> */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}>
                <Collapse style={{ width: "65%", border: "none" }} expandIcon={(i) => i.isActive ? <TiMinus size={20} color="#a87c36" /> : <FaPlus size={20} color="#a87c36" />} accordion items={items} />
            </div>




        </>
    )
}