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
    <div className='lightviolet py-5'>
      <div className=" darkviolet orangecolor title  text-center">
      Transform Your Life
      </div>
      <h3 className='text-white text-capitalize title container text-center p-2'>WHO SHOULD <span className='text-success'>ATTEND</span> THIS <span className='text-success border-bottom border-success border-4'>
      GRAND OFFLINE WORKSHOP</span></h3>

      <div className="container">
        <div className="row pt-3 pt-md-5 d-flex align-items-center
        justify-content-center py-3">
         {
            transform.map((x,i)=>{
                return(
                    <div className="col-12 col-md-3 px-3" key={i}>
                    <div className="h-100 darkviolet  borderstyle p-2">
                        <div className='text-white d-flex align-items-center justify-content-center'>
                            <div className='display-6  d-flex align-items-center justify-content-center'>{x.icon}</div>
                            <div className='fw-medium ps-2 fs-5'>{x.text}</div>
                        </div>
                    </div>
                </div>
                )
            })
         }
        </div>

    <div className="text-center py-3">
    <h1 className="text-white   title">
        Most Importantly, Who Should not miss this
        </h1>
        <div className='orangecolor textsizefont '>"Golden Opportunity"</div>
    </div>


    <div className="row pb-3 pb-md-5 d-flex align-items-center
        justify-content-center py-3">
         {
            transform2.map((x,i)=>{
                return(
                    <div className="col-12 col-md-3 px-3" key={i}>
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
        </div>
      </div>
    </div>
  );
}

export default TransformLife;
