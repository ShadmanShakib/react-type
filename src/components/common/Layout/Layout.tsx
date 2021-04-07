import React from 'react';
import Header from '../Header'


interface Props{
    children:React.ReactNode
}

function Layout({children}:Props) {
    return (
    <React.Fragment>
       <Header/>
        {children}
    </React.Fragment>
    )
}

export default Layout
