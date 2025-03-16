import React from 'react';
import { FaBusinessTime, FaUserTie } from 'react-icons/fa';
import { FaPersonPregnant } from 'react-icons/fa6';
import { GrUserFemale } from 'react-icons/gr';
import { PiStudentBold } from 'react-icons/pi';
import { RiHeartsFill } from 'react-icons/ri';

function TransformLife() {
    let transform = [
        {
            icon: <FaUserTie />,
            text: "Business Man"
        },
        {
            icon: <GrUserFemale />,
            text: "Housewife"
        },
        {
            icon: <FaBusinessTime />,
            text: "Self-Employed"
        },
    ]
    let transform2 = [
        {
            icon: <RiHeartsFill />,
            text: "New Married Couple"
        },
        {
            icon: <FaPersonPregnant />,
            text: "Pregnant Ladies"
        },
        {
            icon: <PiStudentBold />,
            text: "UPSC/GPSC Student"
        },
    ]
    return (
        <div className='lightviolet '>
            <div className=" darkviolet orangecolor title  text-center">
                Breaking Barriers: A Transformative Talk
            </div>
            <div className='container'>
                <div className="row align-items-center justify-content-center">
                    <div className='col-lg-5 col-10'>
                        <p className='text-light lh-lg text-center' style={{ fontFamily: "Hind Vadodara" }}><span className='fw-bold orangecolor'>શ્રીમદ ભગવદ ગીતા </span> માત્ર એક પવિત્ર ગ્રંથ નથી, તે જીવન જીવવાની કળા, જ્ઞાન અને આત્મસાધનાનો અદ્ભુત માર્ગદર્શક છે. મહાભારતના યુદ્ધક્ષેત્રે ભગવાન શ્રીકૃષ્ણ દ્વારા અર્જુનને અપાયેલું આ દિવ્ય ઉપદેશ આજેય માનવજીવન માટે પ્રેરણારૂપ છે. તે આપણને ધર્મ, કર્તવ્ય અને નિષ્કામ કર્મની મહત્તા શીખવે છે. સફળતા ફક્ત ભૌતિક સંપત્તિમાં નથી, પરંતુ નિષ્ઠાપૂર્વક કરેલા કર્મ અને આત્મસુદ્ધિમાં છે. જીવનના દરેક સંજોગોમાં, ગીતા આપણને માર્ગદર્શન અને શાંતિ પ્રદાન કરે છે, જે અંતે આત્મસાક્ષાત્કાર અને દિવ્ય સત્ય તરફ દોરી જાય છે.
                            આ પવિત્ર શાસ્ત્રના સુવાક્યો અને જીવનપ્રેરક શિક્ષણ પર વિશેષ ઉલ્લેખ કરવા માટે,<span className='fw-bold orangecolor'> શ્રી ગોવિંદ કાકા ધોળકિયા ખાસ વક્તા</span> તરીકે ઉપસ્થિત રહેશે. તેમના જીવન અનુભવ અને આધ્યાત્મિક વિઝનથી આપણે ગીતા ના સાદગીભર્યા પણ ઊંડા મર્મને વધુ સારી રીતે સમજી શકીશું.</p>
                    </div>
                    <div className="col-lg-7 col-10">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-8 col-md-7 col-sm-6 col-10 text-center">
                                <img src={require('../Images/Geeta Status PNg.jpg')} alt="" className='img-fluid' />
                            </div>
                            <div className="col-lg-4 col-md-5 col-sm-6 col-10 text-center">
                                <img src={require('../Images/SINGER.jpgs.jpg')} alt="" className='img-fluid' style={{ height: "500px" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="text-center py-1">
                    <div className='orangecolor textsizefont '>"First Time In Surat"</div>
                    <h1 className="text-white   title">
                        Philosophy With Western Kirtan Deep Wisdom, Soulful Devotion.
                    </h1>
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
