import React from "react";

function ServiceCard(props){
    const {title, desc, link}= props.testprops? props.testprops:props; 
    return(
        <>
        <div className="service-card-boundary" data-testid="service-card">
            <h4 className="service-title">
                {title}
            </h4>
            <p className="service-desc">
                {desc}
            </p>
            <div  className="service-link">
            <a href={link}>
                Click Here
            </a>
            </div>
            
        </div>

        </>
    )
}
export default ServiceCard;