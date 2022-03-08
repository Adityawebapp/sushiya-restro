import React from 'react'
import Login from './Login';

import { useSelector } from "react-redux";
import RegistredEmail from './RegistredEmail';
import ResetPassword from './ResetPassword';
import Header from './Header';
import SidePanelContent from './SidePanelContent';

const FirstLoginManagement = () => {
    const { firstLoginFormStatus, registredEmailStatus, resetPasswordStatus } = useSelector((state) => state.auth)


    // For Registred Email For Data 

    return (
        <>
            {/* For Header  */}

            <Header />

            <div className="container-fluid">
                <div className="row">

                    {/* For Side Panel  */}
                    <SidePanelContent />

                    {/* For  Login Page  */}
                    {
                        firstLoginFormStatus && (
                            <Login />

                        )
                    }

                    {/* For Registred Email Page  */}
                    {
                        registredEmailStatus && (
                            <RegistredEmail />

                        )

                    }


                    {/* For Reset Password Page  */}
                    {
                        resetPasswordStatus && (
                            <ResetPassword />
                        )

                    }

                </div>
            </div>






        </>
    )
}

export default FirstLoginManagement;
