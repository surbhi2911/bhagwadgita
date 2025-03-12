import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';

function AdhyatmikQue() {

    let data = [
        {
            pera: "આપણે કોણ છીએ? ક્યાંથી આવ્યા છીએ અને શું કામ આવ્યા છીએ?",
        },
        {
            pera: "સમગ્ર જગત આપમેળે ચાલે છે કે કોઈ ચલાવનાર છે?",
        },
        {
            pera: "ઈશ્વર છે તો ક્યાં છે અને કોણ છે અને કેવા છે?",
        },
        {
            pera: "શું એ ઈશ્વર સુધી પહોંચવા માટે માર્ગદર્શક કે ગુરુની જરૂર પડે ખરી?",
        },
        {
            pera: "ગર્ભાવસ્થાના પહેલા કોઈ માતા ને ઇચ્છિત સંતાન પ્રાપ્ત કરવામાં ભગવદ્ ગીતા કઈ રીતે મદદરૂપ થઇ શકે?",
        },
        {
            pera: "ગર્ભમાં જીવ આવ્યા બાદ ભગવદ્ ગીતા સાંભળવાથી બાળક પર શો પ્રભાવ પડે છે?",
        },
    ]

    const logos = [
        {
            src: require("../Images/Goldi_Solar_Logo-removebg-preview.png"),
            alt: "Goldi Solar"
        },
        {
            src: require("../Images/Shivam_Jewels-removebg-preview.png"),
            alt: "Shivam Jewels"
        },
        {
            src: require("../Images/SHG_Shri_Hari_Group_Logo_17.0-removebg-preview.png"),
            alt: "SHG Shri Hari Group"
        },
        {
            src: require("../Images/Narola_Shine_Within_Blue_page-0001-removebg-preview.png"),
            alt: "Narola"
        }
    ];

    return (
        <>
            <div className='darkviolet py-5'>
                <div className=" yellowcolor lightviolet title  text-center gujfont">
                    વ્યવહારિક જીવનના પ્રશ્નો
                </div>

                <div className="container py-3 py-lg-5">
                    <div className="row g-3">
                        <div className="col-12 col-lg-6">
                            <div className="h-100">
                                <img src="https://geeta.paraspandhi.com/wp-content/uploads/2024/06/2final.jpeg" alt="" className='img-fluid object-fit-cover rounded-4 border border-2 ' />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 ">
                            <div className="h-100 text-white d-flex flex-column justify-content-center ">
                                {
                                    data.map((x, i) => {
                                        return (
                                            <div className='d-flex align-items-center py-1 '>
                                                <div className='fs-5 d-flex align-items-center justify-content-center'><FaHandPointRight /></div>
                                                <div className='ps-2 pera'>{x.pera}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className="col-12 lightviolet text-white text-center mt-5 fs-5 fw-bold p-3 rounded-2">
                        <h2 className='fw-bold gujfont'>કાળ + પ્રકૃતિનાં ગુણોનો અભ્યાસ + કર્મનો સિદ્ધાંત = <span className='text-danger'> પરિણામ</span></h2>
                        <h2 className='fw-bold gujfont'>પરિણામ + ગીતાજ્ઞાન = <span className='text-danger'> સફળતા</span></h2>
                    </div>
                </div>
            </div>

            <div className="lightviolet">
                <div className="container p-3 p-md-5">
                    <div className='title text-white text-center px-2 px-md-4'>
                        "Unveil the Knowledge of Bhagavad Gita with Paras Pandhi and <span className='orangecolor'>Eminent Sponsors of India</span>"
                    </div>
                    <div className="row d-flex text-center justify-content-center mt-5">
                        {logos.map((logo, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-3 col-sm-6 mb-4">
                                <div className="d-flex justify-content-center bg-white border border-2 border-secondary rounded-3 w-100 h-100">
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="img-fluid rounded-3 object-fit-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdhyatmikQue;