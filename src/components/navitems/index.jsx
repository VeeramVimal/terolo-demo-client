import React from 'react'

const Navitems = ({
    itemName,
    icon,
    className,
}) => {
  return (
    <React.Fragment>
   
    <div className={`flex items-center border-l border-l-gray-200 justify-center space-x-2 ${className}`}>
    <div><i className={icon}></i></div>
      
    <div className='font-semibold mb-1 '>{itemName}</div>
        
    </div>
 

    </React.Fragment>
  )
}

export default Navitems