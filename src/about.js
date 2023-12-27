import React from "react";
import { Navigate, useNavigate } from "react-router";

export const About = () => {

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
                        <h1 style={{ color: "white", textAlign: "center" }}>ABOUT</h1>
                        <p style={{ color: "white", textAlign: "center" }}>Home / About</p>
                    </div>
                </div>
            </div>

            <h1 style={{ fontSize: "70px", textAlign: "center", color: "#1a1a1a" }}>OUR TEAM</h1>
            <h6 style={{ fontSize: "18px", textAlign: "center", color: "#1a1a1a", marginTop: "-2%" }}>Board Members</h6>
            <p style={{ textAlign: "center", color: "#1a1a1a", marginTop: "-1%" }}>Quam adipiscing vitae proin sagittis nisl rhoncus</p>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "3%", gap: "30px" }}>

                <div>
                    <img src="https://darko-theme.myshopify.com/cdn/shop/files/ser-4_800x.jpg?v=1631681904" height="280px" width="300px" />
                    <h5 style={{ fontSize: "23px", marginTop: "7%", textAlign: "center" }}>Alicia Woods</h5>
                    <h6 style={{ fontSize: "18px", marginTop: "-10%", textAlign: "center" }}>Office Manager</h6>
                </div>

                <div>
                    <img src="https://darko-theme.myshopify.com/cdn/shop/files/ser-3_800x.jpg?v=1631681996" height="280px" width="300px" />
                    <h5 style={{ fontSize: "23px", marginTop: "7%", textAlign: "center" }}>Shawn Romero</h5>
                    <h6 style={{ fontSize: "18px", marginTop: "-10%", textAlign: "center" }}>Media Manager</h6>
                </div>

                <div>
                    <img src="https://darko-theme.myshopify.com/cdn/shop/files/ser-2_714bc16d-bbdb-4dc6-931c-60171230c437_800x.jpg?v=1631682059" height="280px" width="300px" />
                    <h5 style={{ fontSize: "23px", marginTop: "7%", textAlign: "center" }}>Calvin Fisher</h5>
                    <h6 style={{ fontSize: "18px", marginTop: "-10%", textAlign: "center" }}>Service Coordinate</h6>
                </div>

                <div>
                    <img src="https://darko-theme.myshopify.com/cdn/shop/files/ser-1_eb6b438c-48d6-4eb9-9e8b-268bd5b2bcab_800x.jpg?v=1631682106" height="280px" width="300px" />
                    <h5 style={{ fontSize: "23px", marginTop: "7%", textAlign: "center" }}>Dwight Clark</h5>
                    <h6 style={{ fontSize: "18px", marginTop: "-10%", textAlign: "center" }}>Sales Manager</h6>
                </div>
            </div>

            <h1 style={{ fontSize: "70px", textAlign: "center", color: "#1a1a1a" }}>ESSENCE OF ATTRACTION</h1>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "3%", gap: "30px" }}>

                <div>
                    <p style={{ width: "400px" }}>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Praesent imperdiet felis id consectetur imperdiet. In quis ornare magna. Duis interdum orci vitae sapien suscipit, sit amet vestibulum risus tempus. Cras et sapien purus. Sed ultrices ipsum a pharetra pretium. Quisque non auctor elit.</p>
                </div>

                <div>
                    <img src="https://darko-theme.myshopify.com/cdn/shop/files/abo-04_800x.png?v=1631687066" height="210px" width="360px" />
                </div>

                <div>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <svg style={{ marginTop: "18px" }} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill=" #a87c36" class="bi bi-record2-fill" viewBox="0 0 16 16">
                            <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                            <path d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        <p style={{ fontSize: "18px" }}>Extreme Performance</p>
                    </div>

                    <div style={{ display: "flex", gap: "10px", marginTop: "-7%" }}>
                        <svg style={{ marginTop: "18px" }} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill=" #a87c36" class="bi bi-record2-fill" viewBox="0 0 16 16">
                            <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                            <path d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        <p style={{ fontSize: "18px" }}>Higher Fragrance Concentration</p>
                    </div>

                    <div style={{ display: "flex", gap: "10px", marginTop: "-7%" }}>
                        <svg style={{ marginTop: "18px" }} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill=" #a87c36" class="bi bi-record2-fill" viewBox="0 0 16 16">
                            <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                            <path d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        <p style={{ fontSize: "18px" }}>Less Alcohol</p>
                    </div>

                    <div style={{ display: "flex", gap: "10px", marginTop: "-7%" }}>
                        <svg style={{ marginTop: "18px" }} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill=" #a87c36" class="bi bi-record2-fill" viewBox="0 0 16 16">
                            <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                            <path d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        <p style={{ fontSize: "18px" }}>Elaborately Prepared</p>
                    </div>

                    <div style={{ display: "flex", gap: "10px", marginTop: "-7%" }}>
                        <svg style={{ marginTop: "18px" }} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill=" #a87c36" class="bi bi-record2-fill" viewBox="0 0 16 16">
                            <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                            <path d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        <p style={{ fontSize: "18px" }}>Packing & Branding</p>
                    </div>

                </div>
            </div>

            <div style={{
                backgroundImage:
                    'url("https://darko-theme.myshopify.com/cdn/shop/files/abo-06.jpg?v=1631687515")',

                width: "100%",
                backgroundSize: "cover",
                marginTop: "7%"


            }}>
                <div style={{ backgroundColor: "rgb(241,242,246,0.8)", padding: "1%", paddingBottom: "3%" }}>

                    <h1 style={{ fontSize: "70px", textAlign: "center", color: "#1a1a1a" }}>ESSENCE OF ATTRACTION</h1>
                    <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
                        <div>
                            <div>
                                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAA7ADsDASIAAhEBAxEB/8QAGgABAQACAwAAAAAAAAAAAAAAAAYCBwEDBf/EACkQAAICAQIEBAcAAAAAAAAAAAABAgMEBREGEiFBMVJhgRQycZGh0fD/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARExQf/aAAwDAQACEQMRAD8AlgAAAM1VZKuVihJwi9nJLovcDAAAAAAAAHMYuUlGKbbeyS7mw9O0aFOgvBt+a2LdjXaT/XT7E9wZg15OdZkWrm+HS5U/M9+v4LWq+q6dkK5qUqpcs0uz23LeYnutWZWPZiZNlFy2nXLZnUWXGuBB0V50FtZGShP1Xb+9SNMxqgAKgAAPc4W1WvTcycMh8tNyScvK14P6dSt0zTcfCuycqi+VqyXzNuScV4vo/c1sCip4u1inJjDCxZqxRlzWTi+m/ZepLAGYoACoAAAAAAAAAAD/2Q=="
                                    height="50px" width="50px" />
                                <p style={{ width: "650px", paddingLeft: "3%", marginTop: "1%" }}>Tincidunt arcu non sodales neque sodales ut etiam sit. Erat velit scelerisque in dictum. Turpis egestas integer eget aliquet nibh praesent tristique magna nec ultrices dui sapien.</p>
                            </div>

                            <div style={{ marginTop: "8%" }}>
                                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAA6ADwDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAYFBAP/xAAtEAABAwIDBwIHAQAAAAAAAAAAAQIDBBEGEhMFFDE1UXOyIoEVITJBYXGhM//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAXEQEBAQEAAAAAAAAAAAAAAAAAQQEx/9oADAMBAAIRAxEAPwCWAAAHRBRVFRBNNDGr44UvIqKnpT9HOAB7zUVRT08M80asjmRVjVVT1ex4ACxwhyuXvr4tI4scIcrl7y+LQI4AAbuFo6hlRLUtkZFSRttO6RLtcnS3U6d7wxvmbdJrZuNlyfu172/FvY55bpg2HS4OqF1be9r/AMMEUjexSyofURVKyMlo3ttA6NLNanS3UwTehu7BtRq/S2oTSv1+V7f0wQBYYR5ZL3l8WkeWGEeWS95fFoEeAANTZG1W0TZaeqi16Ob/AEj+6L1T8ml8K2HuibQ3upSlV+XLl+ebjbgTJvJiiqTZSUiImqnp1LJbJa1rdQZ1y7X2qytbFTUkWhRw/Qz7qvVTLAAFhhHlkveXxaR5YYR5ZL3l8WgR4AAAAAAABYYR5ZL3l8WkeWGEeWS95fFoH//Z"
                                    height="50px" width="50px" />
                                <p style={{ width: "650px", paddingLeft: "3%", marginTop: "1%" }}>Sed vestibulum nulla elementum auctor tincidunt. Aliquam sit amet cursus mauris. Sed vitae mattis ipsum. Vestibulum enim nulla, sollicitudin ac hendrerit nec, tempor quis nisl.</p>
                            </div>

                            <div style={{ marginTop: "8%" }}>
                                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAA6AD4DASIAAhEBAxEB/8QAGgABAQADAQEAAAAAAAAAAAAAAAYBAwQFAv/EAC8QAAEDAgMGBQMFAAAAAAAAAAEAAgMEEQUGIRIxQUSCwhMUIlFhFXGRMkKBobH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQEBAQEAAAAAAAAAAAAAAAAAAREh/9oADAMBAAIRAxEAPwCWREQEREBEWQCQSATbU/CDCp8m850dymFT5N5zo7kEwiIgL7ijfNI2ONpc9xs1o3kroo8NrK57W08D3B37rWaPudyqMvYd9Kne3EHQRyS+mKzxtE8Rff7aK4iX+l1vmnU3lpPGb+ptt3yTut8rZV+DSQeVhkbNI4gzSM1bpuaDxHEn7L1s4NqG1gLXTGn2QCLO2QfknQlTSzOtUVPk3nOjuUwqfJvOdHcqiYW6lqZaSYTQODZBuJaHf6tKIO2bF8QnftSVkxI1ADyB+BoqPC8WoK0wCpjvWuladnZ9Jfa23fhpv+yj10UE7KaugmkaXMY8FwG8jirEq/rZYRi9LSyBrxVRPZI22jrWIv8A3+VF49hTsKrnMAJgf6onH29v4Xq4nj+HyzUs9JFN49O8EOcAAW8W3vdacczLHiUBp4qQCO99uXVwPxbcstJ1U+Tec6O5TCp8m850dyqJhERAREQEREBU+Tec6O5TCp8m850dyD//2Q=="
                                    height="50px" width="50px" />
                                <p style={{ width: "650px", paddingLeft: "3%", marginTop: "1%" }}>Quis lectus nulla at volutpat. Ultrices neque ornare aenean euismod elementum nisi. Nec ultrices dui sapien eget mi proin sed libero. Sem et tortor consequat id porta.</p>
                            </div>
                        </div>

                        <div>
                            <img src="https://darko-theme.myshopify.com/cdn/shop/files/abo-03_970x.jpg?v=1631681792" height="450px" width="580px" />
                        </div>

                    </div>
                </div>
            </div>

            <div style={{
                backgroundImage:
                    'url("https://darko-theme.myshopify.com/cdn/shop/files/single-pink-tulip-in-a-clear-vase_1950x.jpg?v=1631596103")',

                width: "100%",
                backgroundSize: "cover",
                backgroundPosition: "50% 30%",
            }}>
                <h1 style={{ fontSize: "70px", textAlign: "center", color: "#1a1a1a" }}>OUR ACHIEVEMENTS</h1>
                <p style={{ textAlign: "center", color: "#1a1a1a", marginTop: "-2%" }}>Pharetra massa massa ultricies mi quis hendrerit dolor magna eget</p>
               
                <div style={{ display: "flex", justifyContent: "center",gap:"30px",marginTop:"3%" }}>
                  
                    <div style={{ border: "1px solid #a87c36", padding: "20px", width: "220px", boxShadow: "0px 1px 5px 1px #a87c36" }}>
                        <svg style={{ border: "3px solid black", borderRadius: "50%" }} xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                        <h1 style={{ fontSize: "50px", color: "#a87c36", marginTop: "8px" }}>80<span style={{ color: "black" }}>K</span></h1>
                        <h6 style={{ fontSize: "24px", color: "#a87c36", marginTop: "-20px" }}>Sales</h6>
                        <p style={{ fontSize: "18px", marginTop: "-20%" }}>Turpis egestas sed</p>
                    </div>
                  
                    <div style={{ border: "1px solid #a87c36", padding: "20px", width: "220px", boxShadow: "0px 1px 5px 1px #a87c36" }}>
                        <svg style={{ border: "3px solid black", borderRadius: "50%" }} xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>
                        <h1 style={{ fontSize: "50px", color: "#a87c36", marginTop: "8px" }}>10<span style={{ color: "black" }}>K</span></h1>
                        <h6 style={{ fontSize: "24px", color: "#a87c36", marginTop: "-20px" }}>Flavors</h6>
                        <p style={{ fontSize: "18px", marginTop: "-20%" }}>Non enim praesent</p>
                    </div>
                  
                    <div style={{ border: "1px solid #a87c36", padding: "20px", width: "220px", boxShadow: "0px 1px 5px 1px #a87c36" }}>
                        <svg style={{ border: "3px solid black", borderRadius: "50%", padding: "20px" }} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                        </svg>
                        <h1 style={{ fontSize: "50px", color: "#a87c36", marginTop: "8px" }}>15<span style={{ color: "black" }}>K</span></h1>
                        <h6 style={{ fontSize: "24px", color: "#a87c36", marginTop: "-20px" }}>Branches</h6>
                        <p style={{ fontSize: "18px", marginTop: "-20%" }}>Libero volutpat sed cras</p>
                    </div>
                   
                    <div style={{ border: "1px solid #a87c36", padding: "20px", width: "220px", boxShadow: "0px 1px 5px 1px #a87c36",backgroundColor:"white" }}>
                        <svg style={{ border: "3px solid black", borderRadius: "50%", padding: "20px" }} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                        </svg>
                        <h1 style={{ fontSize: "50px", color: "#a87c36", marginTop: "8px" }}>50<span style={{ color: "black" }}>K</span></h1>
                        <h6 style={{ fontSize: "24px", color: "#a87c36", marginTop: "-20px" }}>Customers</h6>
                        <p style={{ fontSize: "18px", marginTop: "-20%" }}>Massa sapien faucibus</p>
                    </div>
                </div>
            </div>


            


        </>
    )
}