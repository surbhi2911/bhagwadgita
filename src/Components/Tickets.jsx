import React from 'react'
import { Link } from 'react-router-dom';

function Tickets() {
    return (
        <div style={{ backgroundColor: "#06001c" }}>
            <div className='py-5'>
                <div className='text-center h3 text-light py-3' style={{ textTransform: "capitalize", background: '#120b2a', fontStyle: 'Hind Vadodara', fontSize: "25px", fontWeight: "700" }}>The time and money invested in this workshop will be the greatest investment of your life.</div>
                <div className='text-center'>
                    <div className='col-lg-4 col-md-6 col-sm-8 col-10 bg-light p-3 pt-2 pb-4 mx-auto '>
                        <div className='rounded rounded-bottom-0 my-3' style={{ background: '#d37c00' }}>
                            <div className='py-4' style={{ fontFamily: "Sora, Sans-serif", fontSize: "30px", fontWeight: 800, textTransform: "uppercase", lineHeight: "36px" }}>Ticket<br />₹ 200</div>
                        </div>
                        <Link to={"/buynow"} className='text-decoration-none'>
                            <button  className='buttons w-100 btn text-light' type="button" style={{ fontFamily: "Sora, Sans-serif", fontWeight: 700 }}>Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tickets;