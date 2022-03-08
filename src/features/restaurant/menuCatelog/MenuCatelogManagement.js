import React from 'react'
import ResMainHeader from '../ResMainHeader'
import SideBar from '../sidebar/SideBar'
import MenuCatelogContent from './MenuCatelogContent'

function MenuCatelogManagement() {
    return (
        <>
            <ResMainHeader/>
            <div id="wrapper">
                <SideBar />
                <MenuCatelogContent />
            </div>
        </>
    )
}

export default MenuCatelogManagement
