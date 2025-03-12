import axios from "axios";
import { useState } from "react";
import { IoMail } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";

function Buynow() {
    const [obj, setobj] = useState({});
    let [blankobj, setblankobj] = useState({});
    const [savedId, setSavedId] = useState(null);
    const [errormsg, seterrormsg] = useState({});

    const getdata = (e) => {
        const { name, value } = e.target;
        obj[name] = value;
        blankobj[name] = "";
        setobj({ ...obj });
        setblankobj({ ...blankobj });

        if (e.target.name === "name") {
            if (e.target.value === "" || e.target.value === undefined) {
                errormsg[e.target.name] = "Name is required!";
            } else if (!/^[a-zA-Z ]{1,40}$/.test(e.target.value)) {
                errormsg[e.target.name] = "Name must be alaphabet.";
            } else {
                errormsg[e.target.name] = "";
            }
        }

        if (e.target.name === "email") {
            if (e.target.value === "" || e.target.value === undefined) {
                errormsg[e.target.name] = "E-mail is required!";
            } else if (!e.target.value.includes("@gmail") && !e.target.value.includes("@yahoo") &&
                e.target.value.includes("@outlook") &&
                e.target.value.includes("@icloud") &&
                e.target.value.includes("@hotmail")) {
                errormsg[e.target.name] = "E-mail is not valid.";
            } else {
                errormsg[e.target.name] = "";
            }
        }

        if (e.target.name === "phnumber") {
            if (e.target.value === "" || e.target.value === undefined) {
                errormsg[e.target.name] = "Phone Number is required!";
            } else if (e.target.value.length < 10) {
                errormsg[e.target.name] = "Phone Number must be 10 digits.";
            } else if (e.target.value.length > 10) {
                errormsg[e.target.name] = "Phone Number is not valid.";
            } else {
                errormsg[e.target.name] = "";
            }
        }

        if (e.target.name === "area") {
            if (e.target.value === "" || e.target.value === "Select Near Area") {
                errormsg[e.target.name] = "Please select a valid area!";
            } else {
                errormsg[e.target.name] = "";
            }
        }
        if (e.target.name === "pass") {
            if (!value || value < 1 || value > 5) {
                errormsg.pass = "Please select a valid number of passes!";
            } else {
                errormsg.pass = "";
            }
        }

        seterrormsg({ ...errormsg });
    };

    const savedata = () => {

        if (!obj.name === "" || obj.name === undefined) {
            errormsg.name = "Name is required!";
        }

        if (!obj.email === "" || obj.email === undefined) {
            errormsg.email = "E-mail is required!";
        }

        if (!obj.phnumber === "" || obj.phnumber === undefined) {
            errormsg.phnumber = "Phone Number is required!";
        }

        if (!obj.area || obj.area === "Select Near Area") {
            errormsg.area = "Please select a valid area!";
        }

        if (!obj.pass || obj.pass < 1 || obj.pass > 5) {
            errormsg.pass = "Please select a valid number of passes!";
        }

        if (Object.values(errormsg).every((x) => x === "")) {
            axios.post("https://geeta-backend.vercel.app/", obj).then((res) => {
                console.log(res.data);
                setSavedId(res.data._id);
                setobj({ ...blankobj });
            });
        }

        seterrormsg({ ...errormsg });
    };

    return (
        <>
            <div className="TicketForm_bg w-100 h-auto d-flex position-relative">
                <div className="w-100 h-100 position-relative z-1 d-flex align-items-center">
                    <div className="container py-4">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-12 col-lg-6 p-4 p-lg-5">
                                <div className="h-100">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="shadow rounded-circle" style={{ width: "70px", height: "70px" }}>
                                            <img src={require('../Images/social army Logo.jpg')} className="img-fluid object-fit-cover rounded-circle" alt="" />
                                        </div>
                                        <div className="title fs-5 ps-1">Social Unity Charitable Trust</div>
                                    </div>
                                    <div className="title fs-3 mt-3 mb-2">Bhagavad Gita Course In Surat</div>
                                    <div className="rounded" style={{ width: "50px", border: "3px solid var(--orange)" }}></div>
                                    <div className="my-3">
                                        <div><span className="fw-bold">Date :</span> 9, 10, 11 April 2025</div>
                                        <div className="my-1"><span className="fw-bold">Time :</span> 08:00 PM to 11:30 PM</div>
                                        <div><span className="fw-bold">Venue :</span> Sardar Patel Smruti Bhavan - Varachha Main Road Hira Nagar, Mini Bazar, Khodiyar Nagar, Surat.</div>
                                    </div>
                                    <div className="w-100 h-100">
                                        <img src={require("../Images/ImportedPhoto_1741755792907.jpg")} className="img-fluid object-fit-cover rounded w-100 h-100" alt="" />
                                    </div>
                                    <div className="my-3">
                                        <div className="fw-bold">Contact Us :</div>
                                        <Link to={"mailto:info@paraspandhi.com"} className="text-decoration-none text-dark contact_menu">
                                            <div className="my-1"><IoMail className="me-2" /> <span>official@socialarmytrust.com</span></div>
                                        </Link>
                                        <Link to={"tel:9909919894"} className="text-decoration-none text-dark contact_menu">
                                            <div><MdCall className="me-2" /> <span>+91 90676 65653</span></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 px-2 pb-4 p-lg-5">
                                <div className="h-100">
                                    <div className="bg-white shadow p-4">
                                        <div className="title fs-5">Bhagavad Gita Course Registration Form</div>
                                        <div className="rounded mt-2" style={{ width: "50px", border: "3px solid var(--orange)" }}></div>

                                        <div className="w-100 mt-4">
                                            <label htmlFor="name" className="w-25">Name</label>
                                            <input type="text" className="w-75 input_form rounded border border-1 border-secondary px-2 py-1" name="name" value={obj.name} onChange={getdata} id="name" />
                                            <div className='text-danger w-75 ms-auto'>{errormsg.name}</div>
                                        </div>

                                        <div className="w-100 my-4">
                                            <label htmlFor="email" className="w-25">Email</label>
                                            <input type="text" className="w-75 input_form rounded border border-1 border-secondary px-2 py-1" name="email" value={obj.email} onChange={getdata} id="email" />
                                            <div className='text-danger w-75 ms-auto'>{errormsg.email}</div>
                                        </div>

                                        <div className="w-100">
                                            <label htmlFor="phone" className="w-25">Phone</label>
                                            <input type="number" className="w-75 input_form rounded border border-1 border-secondary px-2 py-1" name="phnumber" value={obj.phnumber} onChange={getdata} id="phone" />
                                            <div className='text-danger w-75 ms-auto'>{errormsg.phnumber}</div>
                                        </div>

                                        <div className="w-100 my-4">
                                            <label htmlFor="area" className="w-25">Area</label>
                                            <select id="area" className="w-75 input_form rounded border border-1 border-secondary px-2 py-1" name="area" value={obj.area} onChange={getdata}>
                                                <option value="">Select Nearest Area</option>
                                                <option value="Yogi Chowk">Yogi Chowk</option>
                                                <option value="Hirabag">Hirabag</option>
                                                <option value="Station">Station</option>
                                                <option value="Mota Varachha">Mota Varachha</option>
                                                <option value="Utran">Utran</option>
                                                <option value="Kamrej">Kamrej</option>
                                                <option value="Sarthana">Sarthana</option>
                                                <option value="Katargam">Katargam</option>
                                                <option value="Gajera_Katargam">Gajera(Katargam)</option>
                                                <option value="Vesu">Vesu</option>
                                                <option value="Kapodra">Kapodra</option>
                                                <option value="Valak_Patiya">Valak Patiya</option>
                                                <option value="Valenja">Valenja</option>
                                                <option value="Amroli">Amroli</option>
                                                <option value="Adajan">Adajan</option>
                                                <option value="Ghoddodroad">Ghod_Dod Road</option>
                                                <option value="Althan">Althan</option>
                                                <option value="Punagam">Punagam</option>
                                                <option value="Puna_Parvat-Patiya">Puna(Parvat-Patiya)</option>
                                            </select>
                                            <div className='text-danger w-75 ms-auto'>{errormsg.area}</div>
                                        </div>

                                        <div className="w-100 mt-4">
                                            <label htmlFor="pass" className="w-25">No. Of Pass</label>
                                            <select id="pass" className="w-75 input_form rounded border border-1 border-secondary px-2 py-1" name="pass" value={obj.pass} onChange={getdata}>
                                                <option value="">Select Pass</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <div className='text-danger w-75 ms-auto'>{errormsg.pass}</div>
                                        </div>

                                        {/* Submit Button */}
                                        <div className="w-100 mt-4">
                                            <Link to={""} className="text-decoration-none">
                                                <button className="buttons w-100 btn text-light" type="button" onClick={savedata} style={{ fontFamily: "Sora, Sans-serif", fontWeight: 700 }}>Submit</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Popup */}
            {savedId && (
                <div className="popup-overlay position-fixed w-100 h-100 d-flex justify-content-center align-items-center" onClick={() => setSavedId(null)}>
                    <div className="popup-content bg-white rounded text-center p-3">
                        <h3>Success!</h3>
                        <p>Your form has been submitted.</p>
                        <p><strong>Saved ID : </strong> {savedId}</p>
                        <button className="px-3 py-2 border-0 text-white cursor-pointer rounded" onClick={() => {
                            navigator.clipboard.writeText(savedId);
                            setSavedId(null);
                        }}>Copy ID</button>
                        <div className="fw-bold mt-3">રજીસ્ટ્રેશન માટે ID જરૂરી છે, તેથી તેને સાચવી રાખજો અને કૉપિ કરવાનું ભૂલશો નહીં.</div>
                    </div>
                </div>
            )}
        </>

    );
}

export default Buynow;