import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Step1(props){
    // const statedata=props.data
    const [step, setstep] = useState(2);
    //formdata stats
    const [aadharvalue, setaadharvalue] = useState("");
    const [pannumber, setpannumber] = useState("");
    const [fname, setfname] = useState("");
    const [mname, setmname] = useState("");
    const [lname, setlname] = useState("");
    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const [dob, setdob] = useState("");
    const [gender, setgender] = useState("");
    const [nationality, setnationality] = useState("");
    const [fatherName, setfatherName] = useState("");
    const [motherName, setmotherName] = useState("");
    const [motherMaidenName, setmotherMaidenName] = useState("");
    const [pincode, setpincode] = useState("");
    const [state, setstate] = useState("");
    const [district, setdistrict] = useState("");
    const [annualIncome, setannualIncome] = useState("")
    const [marital, setmarital] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [openingBal, setopeningBal] = useState("");


    //form data update functions
    const FathernameToUpperCase = e => {
        const result = e.target.value.toUpperCase();
        setfatherName(result);
    }
    const MothernameToUpperCase = e => {
        const result = e.target.value.toUpperCase();
        setmotherName(result);
    }
    const motherMaidennameToUpperCase = e => {
        const result = e.target.value.toUpperCase();
        setmotherMaidenName(result);
    }
    const updateState = e => {
        const result = e.target.value.toUpperCase();
        setstate(result);
    }
    const updateDistrict = e => {
        const result = e.target.value.toUpperCase();
        setdistrict(result);
    }
    const updateMarital = e => {
        const result = e.target.value.toUpperCase();
        setmarital(result);
    }
    const handlePinChange = event => {
        var result = event.target.value.replace(/\D/g, '');
        setpincode(result);

    }
    const updateAnnualIncome = event => {
        var result = event.target.value.replace(/\D/g, '');
        setannualIncome(result);

    }
    const updateOpeningBal = event => {
        var result = event.target.value.replace(/\D/g, '');
        setopeningBal(result);

    }
    const handleAadharChange = event => {
        var result = event.target.value.replace(/\D/g, '');
        setaadharvalue(result);

    }
    const handleMobileChange = event => {
        var result = event.target.value.replace(/\D/g, '');
        setphone(result);
    }
    const handleEmailChange = event => {
        var result = event.target.value;
        setemail(result);
    }

    const FnameToUpperCase = e => {
        const result = e.target.value.toUpperCase();
        setfname(result);
    }
    const MnameToUpperCase = e => {
        const result = e.target.value.toUpperCase();
        setmname(result);
    }
    const LnameToUpperCase = e => {
        const result = e.target.value.toUpperCase();
        setlname(result);
    }
    const panToUpperCase = e => {
        const result = e.target.value.toUpperCase();
        setpannumber(result);
    }
    const updateDob = e => {
        setdob(e.target.value);
    }
    const updateGender = e => {
        const ind = e.target.options.selectedIndex
        setgender(e.target.options[ind].value);
    }
    const updateNationality = e => {
        const ind = e.target.options.selectedIndex
        setnationality(e.target.options[ind].value);
    }
    const updateuserName = e => {
        const user = e.target.value;
        setusername(user)
    }
    const updatepass = e => {
        const pass = e.target.value
        setpassword(pass);
    }
    //Step changers
    const nextStep = (e) => {
        e.preventDefault()
        setstep(step + 1);
    }
    function prevStep() {
        setstep(step - 1)
    }
    useEffect(() => {
        prevStep();
    }, []);
    let navigate = useNavigate();
    function navigateToDashoard(e) {
        navigate("/Dashboard");
    }

    async function CreateAccount(e) {
        const UserData = {
            aadharID: aadharvalue,
            panNo: pannumber,
            phoneNo: phone,
            emailId: email,
            firstname: fname,
            lastname: lname,
            dateOfBirth: dob,
            gender: gender,
            country: nationality,
            fatherName: fatherName,
            pin: pincode,
            state: state,
            city: district,
            annualincome: annualIncome,
            marital: marital,
            username: username,
            password: password
        }
        console.log(UserData);
        await axios({
            method: 'post',
            url: 'http://localhost:8081/bankingapp/api/user/register',
            data: UserData
        }).then(e => {
            console.log(e);
        });
        await axios({
            method: 'post',
            url: "http://localhost:8081/bankingapp/api/account/createnewaccount",
            data: {
                username: username,
                closingBalance: openingBal
            }
        }).catch((e)=>navigateToDashoard(e));
    }
    //form data
    // console.log(UserData);
    switch (step) {
        case 1:
            return (
                <>
                    <div className="form-content-box">
                        <div className="text-val">
                            Make Sure Your Aadhaar is connected with your PAN.
                            PAN authentication will be entertained through Aadhaar only.
                            Fields marked *(star) are MANDATORY.
                        </div>
                        <div className="aadharentry">
                            <label className="label">
                                Aadhar Number*
                            </label>
                            <input className="form-input" type={"text"} name="aadharNumber" placeholder="Enter Your Aadhar Number" value={aadharvalue} onChange={(e) => handleAadharChange(e)} maxLength={"12"} minLength={"12"} required />
                        </div>
                        <div style={{ textAlign: "center", padding: "5%" }}>
                            <Button className="aadharsubmit" >Validate Aadhar</Button>
                        </div>
                        <div className="nextbuttonform">
                            <div style={{ margin: "auto", marginLeft: "45%" }}>{step}/9</div>
                            <Button style={{ backgroundColor: "#48842c", width: "30%", float: "right" }} onClick={e => nextStep(e)}>Next<AiFillCaretRight /></Button>
                        </div>
                    </div>

                </>
            )
        case 2:
            return (
                <>
                    <div className="form-content-box">
                        <div className="text-val">
                            Fields marked *(star) are MANDATORY.
                        </div>
                        <form method="post" >

                            <div className="aadharentry">
                                <label className="label">
                                    PAN*
                                </label>
                                <input className="form-input " type={"text"} name="PAN" placeholder="Enter Your Pan Number" value={pannumber} onChange={(e) => panToUpperCase(e)} maxLength={"10"} minLength={"10"} required />
                            </div>
                            <div className="aadharentry">
                                <label className="label">
                                    Mobile Number*
                                </label>
                                <input className="form-input" type={"text"} name="Phone" placeholder="Enter Your Mobile Number" value={phone} onChange={(e) => handleMobileChange(e)} maxLength={"10"} minLength={"10"} required />
                            </div>
                            <div className="aadharentry">
                                <label className="label">
                                    Email*
                                </label>
                                <input className="form-input" type={"Email"} name="Email" placeholder="Email" value={email} onChange={e => handleEmailChange(e)} required />
                            </div>
                            <div className="nextbuttonform">

                                <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => prevStep(e)}><AiFillCaretLeft /> Back</Button>
                                <div style={{ margin: "auto" }}>
                                    {step}/9
                                </div>
                                <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => nextStep(e)}>Next <AiFillCaretRight /></Button>
                            </div>
                        </form>

                    </div>
                </>
            )
        case 3:
            return (
                <>
                    <div className="form-content-box">
                        <div className="text-val">
                            Fields marked *(star) are MANDATORY.
                        </div>
                        <form method="post" >

                            <div className="aadharentry">
                                <label className="label">
                                    USERNAME*
                                </label>
                                <input className="form-input " type={"text"} name="username" placeholder="Enter Your Username" value={username} onChange={(e) => updateuserName(e)} minLength={"6"} required />
                            </div>
                            <div className="aadharentry">
                                <label className="label">
                                    PASSWORD*
                                </label>
                                <input className="form-input" type={"password"} name="password" placeholder="Enter Your Password" value={password} onChange={(e) => updatepass(e)} minLength={"8"} required />
                            </div>
                            <div className="nextbuttonform">

                                <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => prevStep(e)}><AiFillCaretLeft /> Back</Button>
                                <div style={{ margin: "auto" }}>
                                    {step}/9
                                </div>
                                <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => nextStep(e)}>Next <AiFillCaretRight /></Button>
                            </div>
                        </form>

                    </div>
                </>
            )
        case 4:
            return (
                <>
                    <div className="form-content-box">
                        <div className="text-val">
                            Make sure you fill the details as per your Aadhaar Card details to have a hassle free banking experience.
                            Fields marked *(star) are MANDATORY.
                        </div>
                        <form method="post" >
                            <div className="aadharentry">
                                <label className="label">
                                    First Name*
                                </label>
                                <input className="form-input " type={"text"} name="fname" placeholder="Enter Your First Name" value={fname} onChange={(e) => FnameToUpperCase(e)} required />
                            </div>
                            <div className="aadharentry">
                                <label className="label">
                                    Middle Name
                                </label>
                                <input className="form-input" type={"text"} name="mname" placeholder="Enter Your Middle Name" value={mname} onChange={(e) => MnameToUpperCase(e) && (e)} required />
                            </div>
                            <div className="aadharentry">
                                <label className="label">
                                    Last Name*
                                </label>
                                <input className="form-input" type={"text"} name="lname" placeholder="Enter Your Last Name" value={lname} onChange={e => LnameToUpperCase(e) && (e)} required />
                            </div>
                            <div className="nextbuttonform">

                                <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => prevStep(e)}><AiFillCaretLeft /> Back</Button>
                                <div style={{ margin: "auto" }}>
                                    {step}/9
                                </div>
                                <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => nextStep(e)}>Next <AiFillCaretRight /></Button>
                            </div>
                        </form>

                    </div>
                </>

            )
        case 5:
            return (
                <>
                    <div className="form-content-box">
                        <div className="text-val">
                            Make sure you fill the details as per your Aadhaar Card details to have a hassle free banking experience.
                            Fields marked *(star) are MANDATORY.
                        </div>
                        <form method="post" >
                            <div className="aadharentry">
                                <label className="label">
                                    DOB*
                                </label>
                                <input className="form-input " type={"date"} name="dob" onChange={(e) => updateDob(e)} required />
                            </div>
                            <div className="aadharentry">
                                <label className="label">
                                    Gender
                                </label>
                                <select className="form-input" type={"text"} name="gender" placeholder="Gender" onChange={(e) => updateGender(e)} required>
                                    <option className="form-input" id="0" defaultValue={""}>Gender</option>
                                    <option id="1" value={"Male"} >Male</option>
                                    <option id="2" value={"Female"}>Female</option>
                                    <option id="3" value={"Transgender"}>Transgender</option>
                                    <option id="4" value={"Prefer Not to Say"}>Prefer Not to Say</option>

                                </select>
                            </div>
                            <div className="aadharentry">
                                <label className="label">
                                    Nationality*
                                </label>
                                <select className="form-input" type={"text"} name="Nationality" placeholder="Nationality" onChange={e => updateNationality(e)} required>
                                    <option id="0" defaultValue={""}>Nationality</option>
                                    <option id="1" value={"Indian"}>Indian</option>
                                    <option id="2" value={"Others.."}>Others..</option>
                                </select>
                            </div>
                            <div className="nextbuttonform">

                                <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => prevStep(e)}><AiFillCaretLeft /> Back</Button>
                                <div style={{ margin: "auto" }}>
                                    {step}/9
                                </div>
                                <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => nextStep(e)}>Next <AiFillCaretRight /></Button>
                            </div>
                        </form>

                    </div>
                </>
            )
        case 6:
            return (
                <>
                    <div className="form-content-box">
                        <div className="text-val">
                            Make sure you fill the details as per your Aadhaar Card details to have a hassle free banking experience.
                            Fields marked *(star) are MANDATORY.
                        </div>
                        <form method="post" >
                            <div className="aadharentry">
                                <label className="label">
                                    Father's Name*
                                </label>
                                <input className="form-input " type={"text"} name="FatherName" placeholder="Enter Your Father's Name" value={fatherName} onChange={(e) => FathernameToUpperCase(e)} required />
                            </div>
                            <div className="aadharentry">
                                <label className="label">
                                    Mother's Name
                                </label>
                                <input className="form-input" type={"text"} name="MotherName" placeholder="Enter Your Mother's Name" value={motherName} onChange={(e) => MothernameToUpperCase(e)} required />
                            </div>
                            <div className="aadharentry">
                                <label className="label">
                                    Mother's Maiden Name*
                                </label>
                                <input className="form-input" type={"text"} name="MotherMaidenName" placeholder="Enter Your Mother's Maiden Name" value={motherMaidenName} onChange={e => motherMaidennameToUpperCase(e) && (e)} required />
                            </div>
                            <div className="nextbuttonform">

                                <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => prevStep(e)}><AiFillCaretLeft /> Back</Button>
                                <div style={{ margin: "auto" }}>
                                    {step}/9
                                </div>
                                <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => nextStep(e)}>Next <AiFillCaretRight /></Button>
                            </div>
                        </form>

                    </div>
                </>

            )
        case 7:
            return (
                <>
                    <div className="form-content-box">
                        <div className="text-val">
                            Make sure you fill the details as per your Aadhaar Card details to have a hassle free banking experience.
                            Fields marked *(star) are MANDATORY.
                        </div>
                        <form method="post" >
                            <div className="aadharentry">
                                <label className="label">
                                    PINCODE*
                                </label>
                                <input className="form-input " type={"text"} name="pincode" placeholder="Enter Your PINCODE" value={pincode} onChange={(e) => handlePinChange(e)} maxLength={"6"} minLength={"6"} required />
                            </div>
                            <div className="aadharentry">
                                <label className="label">
                                    State*
                                </label>
                                <input className="form-input" type={"text"} name="state" placeholder="Enter Your State" value={state} onChange={(e) => updateState(e)} required />
                            </div>
                            <div className="aadharentry">
                                <label className="label">
                                    District*
                                </label>
                                <input className="form-input" type={"text"} name="district" placeholder="Enter Your District" value={district} onChange={e => updateDistrict(e)} required />
                            </div>
                            <div className="nextbuttonform">

                                <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => prevStep(e)}><AiFillCaretLeft /> Back</Button>
                                <div style={{ margin: "auto" }}>
                                    {step}/9
                                </div>
                                <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => nextStep(e)}>Next <AiFillCaretRight /></Button>
                            </div>
                        </form>

                    </div>
                </>

            )
        case 8:
            return (
                <>
                    <div className="form-content-box">
                        <div className="text-val">
                            Make sure you fill the details as per your Aadhaar Card details to have a hassle free banking experience.
                            Fields marked *(star) are MANDATORY.
                        </div>
                        <form method="post" >
                            <div className="aadharentry">
                                <label className="label">
                                    Annual Income*
                                </label>
                                <input className="form-input " type={"text"} name="pincode" placeholder="Enter Your Annual Income" value={annualIncome} onChange={(e) => updateAnnualIncome(e)} maxLength={"10"} minLength={"6"} required />
                            </div>
                            <div className="aadharentry">
                                <label className="label">
                                    Opening Account Balance*
                                </label>
                                <input className="form-input " type={"text"} name="pincode" placeholder="Enter Your Opening Balance" value={openingBal} onChange={(e) => updateOpeningBal(e)} maxLength={"10"} minLength={"6"} required />
                            </div>
                            <div className="aadharentry">
                                <label className="label">
                                    Marital Status*
                                </label>
                                <input className="form-input" type={"text"} name="state" placeholder="Enter Your Marital Status" value={marital} onChange={(e) => updateMarital(e)} required />
                            </div>
                            <div className="termsandcondition">
                                <div className="condition">
                                    <div style={{ marginRight: "2%" }}>
                                        <input type={"checkbox"} required />
                                    </div>
                                    <div>
                                        All the information provided by me is completely true based on my knowledge and conscience.
                                    </div>
                                </div>
                                <div className="condition">
                                    <div style={{ marginRight: "2%" }}>
                                        <input type={"checkbox"} required />
                                    </div>
                                    <div>
                                        I am fully aware of the legal actions that I may have to face for providing wrong information.
                                    </div>
                                </div>
                                <div className="condition">
                                    <div style={{ marginRight: "2%" }}>
                                        <input type={"checkbox"} required />
                                    </div>
                                    <div>
                                        I will comply with the terms and conditions of the bank.
                                    </div>
                                </div>
                            </div>
                            <div className="nextbuttonform">

                                <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => prevStep(e)}><AiFillCaretLeft /> Back</Button>
                                <div style={{ margin: "auto" }}>
                                    {step}/9
                                </div>
                                <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => nextStep(e)}>Next <AiFillCaretRight /></Button>
                            </div>
                        </form>

                    </div>
                </>
            )
        case 9:
            return (
                <>
                    <div className="form-content-box">
                        <div className="KYCtext">
                            KYC is a standard due diligence process used by financial institutions and other financial services companies to assess and monitor customer risk and verify a customer’s identity. KYC ensures that a customer is who they say they are.
                            <br />
                            <br />
                            Here, at RBH Bank, we provide a smooth process for digital KYC.
                            NO need to visit any branch physically. Get everything done through few clicks only.
                            <br />
                            <br />
                            Choose a date and preferred time for your KYC, our agent will verify your details through a video conference and guess what? You become our one of the valuable customer.
                            Make sure you are available on the choosen date and time.
                            After Submission kindly check your account dashboard for the video conferencing link and other information.
                        </div>
                        <div style={{ display: "flex" }}>
                            <div style={{ width: "60%" }}>

                                <form method="post" >
                                    <div className="aadharentry">
                                        <label className="label" style={{ fontSize: "16px" }}>
                                            Choose Date:
                                        </label>
                                        <input className="form-input " type={"date"} name="kycDate" required />
                                    </div>
                                    <div className="aadharentry">
                                        <label className="label" style={{ fontSize: "16px" }}>
                                            Choose Time:
                                        </label>
                                        <input className="form-input" type={"time"} name="kycTime" required />
                                    </div>
                                    <div className="nextbuttonform">
                                        <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={(e) => CreateAccount(e)}>Submit</Button>
                                    </div>
                                </form>
                            </div>
                            <div style={{ width: "30%", marginLeft: "10%" }}>
                                <div style={{ width: "60%", display: "flex", flexDirection: "column", alignItems: "center", border: "2px solid black", borderRadius: "5px", marginLeft: "30%" }}>
                                    <h6 style={{ textDecoration: "underline" }}> Need Help?</h6>
                                    <a href="/Contact-us">Contact Us</a>
                                    <a href="/">FAQs</a>
                                    <a href="/">Why KYC?</a>
                                </div>
                            </div>

                        </div>
                    </div>

                </>
            )
        default:
            break;
    }

}
export default Step1