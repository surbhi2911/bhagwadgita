import React from 'react';

function Form() {
    return (
        <div style={{ backgroundColor: "#efe8fb" }}>
            <div className='text-center container py-4'>
                <div className='h4 fw-bold' style={{ fontFamily: "Hind Vadodara" }}>વિશેષ આપના સવાલો આવકાર્ય છે</div>
              <form target="_blank"  action="https://formsubmit.co/official@socialarmytrust.com" method="POST">

                  <div>
                    <textarea className='w-100 h-100 px-3 pt-2 form-control' name="message"  rows={5} placeholder='message' required></textarea>
                </div>
              </form>
                <div className='col-12'>
                    <button className='buttons w-100 btn text-light' type="submit">Send</button>
                </div>
            </div>
        </div>
    )
}
export default Form;