import React from "react";

function ServiceCard(props){
    return(
        <>
        <div className="service-card-boundary">
            <h4 className="service-title">
                {props.title}
            </h4>
            <p className="service-desc">
                {props.desc}
            </p>
            <div  className="service-link">
            <a href={props.link}>
                Click Here
            </a>
            </div>
            
        </div>

        </>
    )
}
export default ServiceCard;