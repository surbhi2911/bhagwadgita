import { useState } from "react";
import { IoMail } from "react-icons/io5"
import { MdCall } from "react-icons/md"
import { Link } from "react-router-dom"

function Buynow() {

    const [quantity, setQuantity] = useState(1);
    const price = 200;

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <>
            <div className='TicketForm_bg w-100 h-auto d-flex position-relative'>
                <div className='w-100 h-100 position-relative z-1 d-flex align-items-center'>
                    <div className='container py-4'>
                        <div className='row d-flex justify-content-center align-items-center align-content-center'>
                            <div className='col-12 col-lg-6 p-4 p-lg-5'>
                                <div className="h-100">
                                    <div className='d-flex gap-2 align-items-center'>
                                        <div className='shadow p-2' style={{ width: "70px", height: "70px" }}>
                                            <img src="https://cdn.razorpay.com/logos/OTPpnLXC5Zaubo_large.png" className='img-fluid object-fit-cover' alt="" />
                                        </div>
                                        <div className='title fs-5'>Paras Pandhi</div>
                                    </div>
                                    <div className='title fs-3 mt-3 mb-2'>Live Workshop in Ahmedabad</div>
                                    <div className='rounded' style={{ width: "50px", border: "3px solid var(--orange)" }}></div>
                                    <div className='my-3'>
                                        <div><span className='fw-bold'>Date :</span> 9, 10, 11 April 2025</div>
                                        <div className='my-1'><span className='fw-bold'>Time :</span> 08:30 PM to 11:30 PM</div>
                                        <div><span className='fw-bold'>Venue :</span> Sardar Patel Smruti Bhavan - Varachha Main Road Hira Nagar, Mini Bazar, Khodiyar Nagar, Surat.</div>
                                    </div>
                                    <div className='w-100 h-100'>
                                        <img src="https://s3.ap-south-1.amazonaws.com/rzp-prod-merchant-assets/payment-link/description/oamaj49fo6u70i.jpeg" className='img-fluid object-fit-cover' alt="" />
                                    </div>
                                    <div className='my-3'>
                                        <div className='fw-bold'>Contact Us :</div>
                                        <Link to={"mailto:info@paraspandhi.com"} className='text-decoration-none text-dark contact_menu'>
                                            <div className='my-1'><IoMail className="me-2" /> <span>info@paraspandhi.com</span></div>
                                        </Link>
                                        <Link to={"tel:9909919894"} className='text-decoration-none text-dark contact_menu'>
                                            <div><MdCall className="me-2" /> <span>9909919894</span></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-lg-6 px-4 pb-4 p-lg-5'>
                                <div className="h-100">
                                    <div className='bg-white shadow p-4'>
                                        <div className='title fs-5'> Payment Details</div>
                                        <div className='rounded mt-2' style={{ width: "50px", border: "3px solid var(--orange)" }}></div>
                                        <div className='w-100 mt-4'>
                                            <label htmlFor="name" className='w-25'>Name</label>
                                            <input type="text" className='w-75 input_form rounded border border-1 border-secondary px-2 py-1' name="Name" id="name" />
                                        </div>
                                        <div className='w-100 my-4'>
                                            <label htmlFor="email" className='w-25'>Email</label>
                                            <input type="text" className='w-75 input_form rounded border border-1 border-secondary px-2 py-1' name="Email" id="email" />
                                        </div>
                                        <div className='w-100'>
                                            <label htmlFor="phone" className='w-25'>Phone</label>
                                            <input type="number" className='w-75 input_form rounded border border-1 border-secondary px-2 py-1' name="Phone" id="phone" />
                                        </div>
                                        <div className="w-100 d-flex align-items-center justify-content-between w-100 my-4">
                                            <div className="w-25 fw-bold">Fee</div>
                                            <div className="w-75 rounded border border-1 border-secondary p-2 d-flex align-items-center" style={{ background: "whitesmoke" }}>
                                                <span className="fw-bold">₹ {price.toLocaleString("en-IN")}.00</span>
                                                <div className="d-flex align-items-center rounded bg-white ms-auto border border-1 border-secondary p-2">
                                                    <button onClick={decreaseQuantity} className="border border-1 border-secondary rounded p-1 orangecolor bg-white cursor-pointer fw-bold">-</button>
                                                    <span className="text-center" style={{ minWidth: "40px" }}>{quantity}</span>
                                                    <button onClick={increaseQuantity} className="border border-1 border-secondary rounded p-1 orangecolor bg-white cursor-pointer fw-bold">+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-100'>
                                            <Link to={""} className='text-decoration-none'>
                                                <button className='buttons w-100 btn text-light' type="button" style={{ fontFamily: "Sora, Sans-serif", fontWeight: 700 }}>Submit</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Buynow
