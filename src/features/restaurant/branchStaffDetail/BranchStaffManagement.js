import React from 'react'
import ResMainHeader from '../ResMainHeader'
import SideBar from '../sidebar/SideBar'
import BranchStaffContent from './BranchStaffContent'


function BranchStaffManagement() {
    return (
        <>
            <ResMainHeader />
            <div id="wrapper">
                <SideBar />
                <BranchStaffContent />
               
                
            </div>

        </>
    )
}

export default BranchStaffManagement
