import * as React from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavBar from '../components/Global/header';
import Footer from '../components/Global/Footer';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import '../assests/styling/error.css'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        seterrorMsgstyle("none")
        setValue(newValue);
    };
    const [newUserName, setnewUserName] = useState("");
    const [verifyUser, setverifyUser] = useState("");
    const [currpass, setcurrpass] = useState("");
    const [newPass, setnewPass] = useState("");
    const [confirmPass, setconfirmPass] = useState("");
    const [newEmail, setnewEmail] = useState("");
    const [confirmEmail, setconfirmEmail] = useState("");
    const [phone, setphone] = useState("");
    const [confirmphone, setconfirmphone] = useState("");
    const handleMobileChange = (e: React.BaseSyntheticEvent) => {
        console.log(e);
        var result = e.target.value.replace(/\D/g, '');
        if (result.length > 10) {
            setphone(result.substr(0, 10))
        } else {
            setphone(result);
        }
    }

    const handleconfirmMobileChange = (e: React.BaseSyntheticEvent) => {
        console.log(e);

        var result = e.target.value.replace(/\D/g, '');
        setconfirmphone(result);
    }


    function changenewEmail(e: React.BaseSyntheticEvent) {
        setnewEmail(e.target.value);
    }
    function changeconfirmEmail(e: React.BaseSyntheticEvent) {
        setconfirmEmail(e.target.value);
    }
    function changeCurrPass(e: React.BaseSyntheticEvent) {
        setcurrpass(e.target.value);
    }
    function changenewPass(e: React.BaseSyntheticEvent) {
        setnewPass(e.target.value)
    }
    function changeconfirmPass(e: React.BaseSyntheticEvent) {
        setconfirmPass(e.target.value)
    }
    function updateUserName(e: React.BaseSyntheticEvent) {
        setnewUserName(e.target.value);
    }
    function verifyUserName(e: React.BaseSyntheticEvent) {
        setverifyUser(e.target.value)
    }
    function finalPasswordSet(e: React.BaseSyntheticEvent) {
        if (newPass === confirmPass && newPass !== "" && currpass !== "") {
            if (value < 3) {
                setValue(value + 1)
            }
            /*TDOD: Verify old password*/
        } else {
            seterrorMsgstyle("block");
        }
    }
    function VerifyEmailFinal(e: React.BaseSyntheticEvent) {
        if (newEmail === "" || newEmail !== confirmEmail) {
            seterrorMsgstyle("block");
        } else {
            if (value < 3) {
                setValue(value + 1)
                seterrorMsgstyle("none");
            }
        }
    }

    function VerifyUsernameFinal(e: React.BaseSyntheticEvent) {
        if (newUserName === "" || newUserName !== verifyUser) {
            seterrorMsgstyle("block");
        } else {
            if (value < 3) {
                setValue(value + 1)
                seterrorMsgstyle("none");
            }
        }
    }

    const [errorMsgstyle, seterrorMsgstyle] = useState("none")
    const errorMsg = "Kindly put all the fields correctly"
    return (
        <div data-testid="editAccountDetails">
            <NavBar setnotOn={""} />
            <div style={{ height: "50px" }}></div>
            <div style={{ width: "50%", margin: "auto" }}>

                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Update Username" {...a11yProps(0)} style={{ width: "25%", border: "0.5px solid #e8e4e4" }} />
                            <Tab label="Change Password" {...a11yProps(1)} style={{ width: "25%", border: "0.5px solid #e8e4e4" }} />
                            <Tab label="Update Email" {...a11yProps(2)} style={{ width: "25%", border: "0.5px solid #e8e4e4" }} />
                            <Tab label="update phone" {...a11yProps(2)} style={{ width: "25%", border: "0.5px solid #e8e4e4" }} />
                        </Tabs>
                    </Box>
                    <div className="editaccdetailsbox">

                        <TabPanel value={value} index={0} >
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', height: "400px" }}>
                                <div className="error" style={{ display: errorMsgstyle }} onClick={e => seterrorMsgstyle("none")}>{errorMsg}</div>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', height: "75%", width: "100%" }}>
                                    <Input placeholder='Enter New Username' style={{ width: '50%', margin: "auto" }} onChange={(e) => updateUserName(e)} required />
                                    <Input placeholder='Confirm Username' style={{ width: '50%', margin: "auto" }} onInput={(e) => verifyUserName(e)} required />
                                </div>
                                <Button variant='contained' style={{ width: '30%' }} onClick={e => VerifyUsernameFinal(e)}>Submit</Button>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1} >
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', height: "400px" }}>
                                <div className="error" style={{ display: errorMsgstyle }} onClick={e => seterrorMsgstyle("none")}>{errorMsg}</div>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', height: "75%", width: "100%" }}>
                                    <Input placeholder='Enter Old Password' type='password' style={{ width: '50%', margin: "auto" }} onChange={e => changeCurrPass(e)} required />
                                    <Input placeholder='Enter New Password' type='password' style={{ width: '50%', margin: "auto" }} onChange={e => changenewPass(e)} required />
                                    <Input placeholder='Confirm Password' type='password' style={{ width: '50%', margin: "auto" }} onChange={e => changeconfirmPass(e)} required />
                                </div>
                                <Button variant='contained' style={{ width: '30%' }} onClick={e => finalPasswordSet(e)}>Submit</Button>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={2} >
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', height: "400px" }}>
                                <div className="error" style={{ display: errorMsgstyle }} onClick={e => seterrorMsgstyle("none")}>{errorMsg}</div>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', height: "75%", width: "100%" }}>
                                    <Input placeholder='Enter New Email' type='email' style={{ width: '50%', margin: "auto" }} onChange={e => changenewEmail(e)} required />
                                    <Input placeholder='Confirm Email' type='email' style={{ width: '50%', margin: "auto" }} onChange={e => changeconfirmEmail(e)} required />
                                </div>
                                <Button variant='contained' style={{ width: '30%' }} onSubmit={e => VerifyEmailFinal(e)}>Submit</Button>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={3} >
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', height: "400px" }}>
                                <div className="error" style={{ display: errorMsgstyle }} onClick={e => seterrorMsgstyle("none")}>{errorMsg}</div>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', height: "75%", width: "100%" }}>
                                    <Input placeholder='Enter New Phone Number' value={phone} style={{ width: '50%', margin: "auto" }} onChange={e => handleMobileChange(e)} maxRows={10} required />
                                    <Input placeholder='Confirm Phone Number' value={confirmphone} style={{ width: '50%', margin: "auto" }} onChange={e => handleconfirmMobileChange(e)} required />
                                </div>
                                <Button variant='contained' style={{ width: '30%' }} >Submit</Button>
                            </div>
                        </TabPanel>
                    </div>
                </Box>
            </div>
            <div style={{ height: "50px" }}></div>
            <Footer />
        </div>
    );
}
