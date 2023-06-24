import React from "react"

function About ({image = "https://via.placeholder.com/215", about}) {
    const altText = "blog logo"
    return (
        <aside>
            <img src= {image} alt = {altText}/>
            <p>{about}</p>
        </aside>
    )
}

export default About
