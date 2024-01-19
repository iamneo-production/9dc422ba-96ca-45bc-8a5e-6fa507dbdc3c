import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import '../../assests/styling/GetStartedPopUp.css'

export const CreateAccountPopup = ({ getBackStyle }) => {
    return (
        <div className="content-box top-10" >
            <div className="text-2xl mt-5 mb-3 font-sans font-bold ">
                <h2 className="">Pick an Account Type</h2>
            </div>

            <Link to={"/CreateSavingsAccount"} className="GetStartedType">
                <Button variant="success" className="GetStartedTypeBtn" >
                    SAVINGS ACCOUNT
                </Button>
            </Link>
            <Link to={"/CreateSalaryAccount"} className="GetStartedType">

                <Button variant="success" className="GetStartedTypeBtn">
                    SALARY ACCOUNT
                </Button>
            </Link>
            <Link to={"/CreateCurrentAccount"} className="GetStartedType">

                <Button variant="success" className="GetStartedTypeBtn">
                    CURRENT ACCOUNT
                </Button>
            </Link>
            <div className="font-2xl flex font-bold h-[10%] mr-[10%] ml-auto cursor-pointer justify-center" onClick={(e) => getBackStyle(e)}>
                <span className="m-auto">
                    <BsArrowLeft />
                </span>
                <span className="m-auto pl-2">
                    Back
                </span>
            </div>
        </div>
    )
}
