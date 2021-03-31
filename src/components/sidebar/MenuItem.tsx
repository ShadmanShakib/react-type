import React from 'react';
import {Link} from '@reach/router';
import {useSelector} from 'react-redux'

interface Props{
    children:React.ReactNode,
    name:string,
    link:string,
}

function MenuItem({children,name,link}:Props) {
    const isOpen=useSelector((state:any)=>state.layout.sidebar)
    return (
        
        <div  className="relative menuitem hover:bg-gray-700">
            <Link to={`${link}`}>
              <div  className={`flex  hover:bg-gray-700 w-full hover:text-white py-4 text-gray-400 ${isOpen?"justify-start pl-5":"justify-center"}  items-center`}>
           {children}
           {isOpen && <h1 className='w-10 pl-5'>{ name}</h1>}  
          
        </div>
    {   !isOpen && <div  className="absolute menuextend  hidden bg-purple-700  top-0 w-44 pl-5 ml-16 py-4  text-white">
            {name}
        </div>}
        </Link>
        </div>
     
    )
}

export default MenuItem;