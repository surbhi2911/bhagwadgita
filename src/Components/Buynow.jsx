import { IoMail } from "react-icons/io5"
import { MdCall } from "react-icons/md"

function Buynow() {
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
                                        <div><span className='fw-bold'>Date :</span> 4 August 2024 (Sunday)</div>
                                        <div className='my-1'><span className='fw-bold'>Time :</span> 02:00 PM to 08:00 PM</div>
                                        <div><span className='fw-bold'>Venue :</span> Zoology Hall, Gujarat University Navrangpura, Ahmedabad</div>
                                    </div>
                                    <div className='w-100 h-100'>
                                        <img src="https://s3.ap-south-1.amazonaws.com/rzp-prod-merchant-assets/payment-link/description/oamaj49fo6u70i.jpeg" className='img-fluid object-fit-cover' alt="" />
                                    </div>
                                    <div className='my-3'>
                                        <div className='fw-bold'>Contact Us :</div>
                                        <a href="mailto:info@paraspandhi.com" className='text-decoration-none text-dark contact_menu'>
                                        <div className='my-1'><IoMail /> <span classname='mx-2'>info@paraspandhi.com</span></div>
                                        </a>
                                        <a href="tel:9909919894" className='text-decoration-none text-dark contact_menu'>
                                            <div><MdCall /> <span className='mx-2'>9909919894</span></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-lg-6 p-4 p-lg-5'>
                                <div className="h-100">
                                    <div className='bg-white shadow p-4'>
                                        <div className='title fs-5'> Payment Details</div>
                                        <div className='rounded mt-2' style={{ width: "50px", border: "3px solid var(--orange)" }}></div>
                                        <div className='w-100 mt-4'>
                                            <label htmlFor="name" className='w-25'>Name</label>
                                            <input type="text" className='w-75 input_form border border-1 border-secondary px-2 py-1' name="Name" id="name" />
                                        </div>
                                        <div className='w-100 my-4'>
                                            <label htmlFor="email" className='w-25'>Email</label>
                                            <input type="text" className='w-75 input_form border border-1 border-secondary px-2 py-1' name="Email" id="email" />
                                        </div>
                                        <div className='w-100'>
                                            <label htmlFor="phone" className='w-25'>Phone</label>
                                            <input type="number" className='w-75 input_form border border-1 border-secondary px-2 py-1' name="Phone" id="phone" />
                                        </div>
                                        <div className='w-100 mt-4 mb-2'>
                                            <label htmlFor="fee" className='w-25'>Fee</label>
                                            <input type="button" className='w-75 px-2 py-1 fw-bold' name="Fee" id="fee" value="₹ 200.00" />
                                        </div>
                                    </div>
                                    <div className='w-100 h-100 d-flex align-content-center'>
                                        <div className='w-75 p-3 d-flex align-items-center' style={{ background: "whitesmoke" }}>
                                            <img src="https://cdn.razorpay.com/static/assets/pay_methods_branding.png" className='img-fluid object-fit-cover' alt="" />
                                        </div>
                                        <div className='w-25'>
                                            <div style={{ background: "#de8404" }} className='p-3 text-white fw-bold text-center'>
                                                Pay ₹ 200.00
                                            </div>
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
