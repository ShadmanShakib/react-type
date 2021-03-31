import React from 'react'
import {useSelector} from 'react-redux';
import MenuItem from './MenuItem';
import {ReactComponent as HomeIcon} from '../../icons/home.svg'
function Sidebar() {
    const isMenuOpen=useSelector((state:any)=>state.layout.sidebar)
    return (
        <React.Fragment>
        <div className={`pt-16  hidden h-full min-h-screen relative z-20  ${isMenuOpen?'w-60':'w-16'}   xl:flex flex-col `}>
            <MenuItem link="/" children={<HomeIcon className="h-6 w-6 fill-current"/>} name="Home"/>
        </div>
        </React.Fragment>
    )
}

export default Sidebar;