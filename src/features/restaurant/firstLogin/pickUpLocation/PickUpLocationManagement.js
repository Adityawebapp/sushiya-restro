import React from 'react'
import Header from '../Header'
import SidePanelContent from '../SidePanelContent'
import PickUpContent from './PickUpContent'

function PickUpLocationManagement() {
    return (
        <>
            {/* For Header  */}
            <Header />
            <div className="container-fluid">
                <div className="row">
                    {/* For SidePanel  */}
                    <SidePanelContent />

                    {/* For Main Content  */}
                    <PickUpContent />
                </div>
            </div>
        </>
    )
}

export default PickUpLocationManagement
