// import React from 'react';
// import SideBar from '../sidebar';
// import Header from '../header';

// export default function Layout(props) {
//   return (
//     // <div className='w-full  bg-gray-50 overflow-hidden '>
//         <div className=' w-full bg-white '>
//         <Header/>
//         <div className='flex'>
//         <SideBar />
//             {props.children}
//             </div>
//         </div>
//     // </div>
//   )
// }
import React from 'react';
import { useState } from 'react';
// import Header from '../../pages/header/Header';
import Header from '../header';
import SideBar from '../sidebar';
// import Footer from '../footer';
import Mobilenavbar from '../header/MobileNavbar';

export default function Layout(props) {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("xs:hidden");
    setShowSidebar(true);
  }
  return (
    <>
      <div className='w-full h-screen flex bg-gray-50 overflow-hidden'>
        <div className='hidden sm:block md:block xl:block' id='sidebar'>
          <SideBar/>
               </div>
        <div className='w-full bg-white overflow-auto pb-10'>
          <Header sidebar={handleSidebar} showSidebar={showSidebar} />
          <Mobilenavbar/>
          {props.children}
        </div>
      </div>

    </>

  )
}
