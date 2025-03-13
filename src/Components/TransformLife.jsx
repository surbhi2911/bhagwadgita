import React from 'react';
import {  FaBusinessTime, FaUserTie } from 'react-icons/fa';
import { FaPersonPregnant } from 'react-icons/fa6';
import { GrUserFemale } from 'react-icons/gr';
import { PiStudentBold } from 'react-icons/pi';
import { RiHeartsFill } from 'react-icons/ri';

function TransformLife() {
    let transform=[
        {
            icon:<FaUserTie/>,
            text:"Business Man"
        },
        {
            icon:<GrUserFemale/>,
            text:"Housewife"
        },
        {
            icon:<FaBusinessTime/>,
            text:"Self-Employed"
        },
    ]
    let transform2=[
        {
            icon:<RiHeartsFill/>,
            text:"New Married Couple"
        },
        {
            icon:<FaPersonPregnant/>,
            text:"Pregnant Ladies"
        },
        {
            icon:<PiStudentBold/>,
            text:"UPSC/GPSC Student"
        },
    ]
  return (
    <div className='lightviolet p-3'>
      <div className=" darkviolet orangecolor title  text-center">
      Transform Your Life
      </div>
   
      <div className="container">
 

    <div className="text-center py-3">
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
