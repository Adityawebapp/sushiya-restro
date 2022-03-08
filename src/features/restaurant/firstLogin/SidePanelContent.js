import React from 'react'
import SushiyaLogo from '../../../img/sushiya_loginlogo.png'
import fishbg from '../../../img/bgfish.jpg'


function SidePanelContent() {
  
    return (
        <>
           <div className="col-md-6 " >

                <img style={{position:"relative", height:"82vh"}}  src={fishbg} alt="img" width="100%"  className="d-inline-block align-text-top mt-3" />
                <img src={SushiyaLogo} width="20%" alt="sfdsfd" style={{position:"absolute", top:"40%", left:"40%" }} />
            </div> 
        </>
    )
}

export default SidePanelContent
