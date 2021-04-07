import React from 'react';
import Header from './Header';
import Sidebar from '../sidebar';
import PhoneSidebar from '../sidebar/PhoneSidebar';

interface Props{
    children:React.ReactNode
}

function Layout({children}:Props):JSX.Element {
    return (
        <React.Fragment>
        <div className=" relative">
        <Header/>
        <div className="flex ">
            <div className="bg-gray-900 ">
            <Sidebar/>
           <PhoneSidebar/>
            </div>
        
        <div className={`mt-16 w-full `}>
        {children}
        </div>
      
        </div>
        </div>
    </React.Fragment>
    )
}

export default Layout
