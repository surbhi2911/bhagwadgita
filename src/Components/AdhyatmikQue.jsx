import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';

function AdhyatmikQue() {
    let data=[
        {
            pera:"આપણે કોણ છીએ? ક્યાંથી આવ્યા છીએ અને શું કામ આવ્યા છીએ?",
        },
        {
            pera:"સમગ્ર જગત આપમેળે ચાલે છે કે કોઈ ચલાવનાર છે?",
        },
        {
            pera:"ઈશ્વર છે તો ક્યાં છે અને કોણ છે અને કેવા છે?",
        },
        {
            pera:"શું એ ઈશ્વર સુધી પહોંચવા માટે માર્ગદર્શક કે ગુરુની જરૂર પડે ખરી?",
        },
        {
            pera:"ગર્ભાવસ્થાના પહેલા કોઈ માતા ને ઇચ્છિત સંતાન પ્રાપ્ત કરવામાં ભગવદ્ ગીતા કઈ રીતે મદદરૂપ થઇ શકે?",
        },
        {
            pera:"ગર્ભમાં જીવ આવ્યા બાદ ભગવદ્ ગીતા સાંભળવાથી બાળક પર શો પ્રભાવ પડે છે?",
        },
       
    ]
  return (
<>
<div className='darkviolet py-5'>
          <div className=" yellowcolor lightviolet title  text-center">
          વ્યવહારિક જીવનના પ્રશ્નો
         </div>
   
         <div className="container py-3 py-lg-5">
   <div className="row">
   <div className="col-12 col-lg-6">
   <div className="h-100">
       <img src="https://geeta.paraspandhi.com/wp-content/uploads/2024/06/2final.jpeg" alt="" className='img-fluid object-fit-cover rounded-4 border border-2 '/>
   </div>
       </div>
       <div className="col-12 col-lg-6 ">
           <div className="h-100 text-white d-flex flex-column justify-content-center ">
             {
               data.map((x,i)=>{
                   return(
                       <div className='d-flex align-items-center py-1 '>
                       <div className='fs-5 d-flex align-items-center justify-content-center'><FaHandPointRight /></div>
                       <div className='ps-2 fs-5'>{x.pera}</div>
                   </div>
                   )
               })
             }
           </div>
       </div>
      
   </div>
   <div className="col-12 lightviolet text-white text-center mt-5 fs-5 fw-bold p-3 rounded-2">
<h2 className='fw-bold'>કાળ + પ્રકૃતિનાં ગુણોનો અભ્યાસ + કર્મનો સિદ્ધાંત = <span className='text-danger'> પરિણામ</span></h2>
<h2 className='fw-bold'>પરિણામ + ગીતાજ્ઞાન = <span className='text-danger'> સફળતા</span></h2>
   </div>
         </div>
       </div>
       <div className="lightviolet">
        <div className="container p-3 p-md-5">
<div className='title text-white text-center px-2 px-md-4'>
"Unfold the Bhagwad Geeta Gyan with the Paras Pandhi
along with some <span className='orangecolor'>Eminent Speakers of India</span>"
</div>
<div className="row d-flex justify-content-center py-5">
    <div className="col-12 col-md-6 col-lg-6">
        <img src="https://geeta.paraspandhi.com/wp-content/uploads/2024/07/1.UNFOLD-THE-BHAGWAD-GEETA-GYAN-WITH-THE-PARAS-PANDHI-ALONG-WITH-1-2048x1645.jpg" alt="" className='img-fluid w-100 h-100 rounded-4 border border-secondary border-3' />
    </div>
</div>
        </div>
       </div>
</>
  );
}

export default AdhyatmikQue;
