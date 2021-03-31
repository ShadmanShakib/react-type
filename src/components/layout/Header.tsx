import React from 'react';
import {ReactComponent as MenuIcon} from '../../icons/menu.svg';


import {useDispatch} from 'react-redux';
import {toggleSidebar} from '../../store/layout/actions'

function Header() {
    const dispatch=useDispatch()
    return (
        <div className="h-16 flex fixed top-0 z-40 shadow-md items-center justify-between  w-full bg-white">
            <MenuIcon onClick={()=>dispatch(toggleSidebar())} className="h-5 w-5 ml-6"/>
           
            
        </div>
       
    )
}

export default Header
