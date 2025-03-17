import React from 'react';
function TransformLife() {
    return (
        <div className='lightviolet '>

            <div className="container">
                <div className="text-center">
                    <img src={require('../Images/Geeta Status PNg.jpg')} alt="" className='img-fluid py-3' style={{ width: "350px" }} />
                </div>
                <div className='text-center col-sm-8 col-12 mx-auto'>
                    <p className='text-light lh-lg' style={{ fontFamily: "Hind Vadodara" }}><span className='fw-bold orangecolor'>શ્રીમદ્ ભગવદ્ ગીતા </span> એ આપણા હિન્દુ સનાતન સાહિત્યનો હૃદય સમાન ગ્રંથ છે અને જ્ઞાન,કર્મ અને ભક્તિના અજોડ સંગમથી સફળતાના શિખરો પાર કરી શકાય છે જેનું જીવતું જાગતું ઉદાહરણ એટલે આપણા સૌના વ્હાલા ગોવિંદકાકા એમના જીવનમાં ગીતા દ્વારા થયેલા બદલાવ વિશે માર્ગદર્શન આપશે.</p>
                </div>
                <div className="text-center py-1">
                    <div className='orangecolor textsizefont '>"First Time In Surat"</div>
                    <div className="row d-flex justify-content-center py-3 ">
                        <div className="col-12 col-md-4 h-75">
                            <img src={require("../Images/SINGER.jpgs.jpg")} alt="" className='object-fit-contain rounded-4 border border-secondary border-4 w-100 h-75' />
                        </div>
                    </div>
                    {/* <h1 className="text-white   title">
                        Philosophy With Western Kirtan Deep Wisdom, Soulful Devotion.
                    </h1>   */}
                </div>

                {/* 
    <div className="row pb-1 d-flex align-items-center
        justify-content-center ">
         {
            transform2.map((x,i)=>{
                return(
                    <div className="col-12 col-md-3 px-3 my-1" key={i}>
                    <div className="h-100 darkviolet  borderstyle2 p-2">
                        <div className='text-white d-flex align-items-center justify-content-center'>
                            <div className='display-6  d-flex align-items-center justify-content-center'>{x.icon}</div>
                            <div className='fw-medium ps-2 fs-5'>{x.text}</div>
                        </div>
                    </div>
                </div>
                )
            })
         }
        </div> */}
            </div>
        </div>
    );
}

export default TransformLife;
