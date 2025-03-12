import React from 'react'
import { Link } from 'react-router-dom';

function Tickets() {
    return (
        <div className='lightviolet'>
            <div className='container'>
                <div className='row d-flex justify-content-center align-items-center align-content-center'>
                    <div className='col-12 col-lg-6 col-md-6'>
                        <div className="h-100">
                            <div className='py-4 py-lg-5'>
                                <div className='text-center'>
                                    <div className='bg-light p-3 pt-2 pb-4 mx-auto '>
                                        <div className='rounded rounded-bottom-0 my-3' style={{ background: '#d37c00' }}>
                                            <div className='py-4' style={{ fontFamily: "Sora, Sans-serif", fontSize: "30px", fontWeight: 800, textTransform: "uppercase", lineHeight: "36px" }}> Donate <br />₹ 200</div>
                                        </div>
                                        <Link to={"/buynow"} className='text-decoration-none'>
                                            <button className='buttons w-100 btn text-light' type="button" style={{ fontFamily: "Sora, Sans-serif", fontWeight: 700 }}>Register Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 col-md-6'>
                        <div className="h-100">
                        <div style={{ backgroundColor: "#efe8fb" }}>
            <div className='text-center container py-4'>
                <div className='h4 fw-bold' style={{ fontFamily: "Hind Vadodara" }}>
                    વિશેષ આપના સવાલો આવકાર્ય છે
                </div>
                <form 
                    target="_blank"  
                    action="https://formsubmit.co/official@socialarmytrust.com" 
                    method="POST"
                >
                    <div>
                        <textarea 
                            className='w-100 h-100 px-3 pt-2 form-control' 
                            name="message"  
                            rows={5} 
                            placeholder='message' 
                            required
                        ></textarea>
                    </div>

                    {/* Hidden input for spam prevention */}
                    <input type="hidden" name="_captcha" value="false" />

                    <div className='col-12 mt-3'>
                        <button className='buttons w-100 btn text-light' type="submit">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tickets;