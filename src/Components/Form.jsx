import React from 'react';

function Form() {
    return (
        <div style={{ backgroundColor: "#efe8fb" }}>
            <div className='text-center container py-4'>
                <div className='h4 fw-bold' style={{ fontFamily: "Hind Vadodara" }}>વિશેષ આપના સવાલો આવકાર્ય છે</div>
                <div>
                    <textarea className='w-100 h-100 px-3 pt-2' rows={5} placeholder='message'></textarea>
                </div>
                <div className='col-12'>
                    <button className='buttons w-100 btn text-light' type="button">Send</button>
                </div>
            </div>
        </div>
    )
}
export default Form;