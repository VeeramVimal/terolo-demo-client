import React from 'react'
import Layout from '../../../components/layout'

export default function index() {
  return (
    <Layout>
      <div className='mx-10'>
        <h1 className='text-[23px] font-bold pt-10 p-3 '>Choose the plan that’s right for you</h1>
        <h2 className='text-base  font-medium pl-3'><i className="ri-check-fill ri-lg p-3 text-[#1890ff]  mt-3"></i>Watch all you want. Ad-free.</h2>
        <h2 className='text-base font-medium leading-loose  pl-3'><i className="ri-check-fill ri-lg p-3 text-[#1890ff]  mt-3"></i>Recommendations just for you.</h2>
        <h2 className='text-base  font-medium pl-3'><i className="ri-check-fill ri-lg p-3 text-[#1890ff]  mt-3"></i>Change or cancel your plan anytime.</h2>
        <div className='justify-center pt-10 flex gap-10  '>
          <h2 className='py-10 rounded-md text-center bg-[#1890ff] ml-10 text-white text-base font-medium w-28 h-28 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Basic</h2>
          <h2 className='py-10 rounded-md text-center bg-[#1890ff]  text-white text-base font-medium w-28 h-28 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Standard</h2>
          <h2 className='py-10 rounded-md text-center bg-[#1890ff]   text-white text-base font-medium w-28 h-28 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Premium</h2>

        </div>
        <div className='mx-10 flex py-5 pt-5 border-b border-solid border-bordercolor'>
          <h2 className='text-base font-medium'>Monthly Price <span className='text-blue-400'>(Billed Manually)</span> </h2>
          <div className=' hover:text-blue-400 flex gap-x-28	ml-24	 justify-center  '>
            <h2>$199</h2>
            <h2>$199</h2>
            <h2>$199</h2>
          </div>
        </div>
        <div className=' mx-10 flex py-5 pt-5 border-b border-solid border-bordercolor'>
          <h2 className='text-base font-medium'>Monthly Price <span className='text-blue-400'>(Billed Six month)</span></h2>
          <div className=' hover:text-blue-400 flex gap-x-28 ml-20 pl-2	justify-center  '>
            <h2>$199</h2>
            <h2>$199</h2>
            <h2>$199</h2>
          </div>
        </div>
        <div className=' mx-10 flex py-5 pt-5 border-b border-solid border-bordercolor'>
          <h2 className='text-base font-medium'>Monthly Price  <span className='text-blue-400'>(Billed Annually)</span></h2>
          <div className=' hover:text-blue-400 flex gap-x-28	ml-24		 justify-center  '>
            <h2>$199</h2>
            <h2>$199</h2>
            <h2>$199</h2>
          </div>
        </div>
        <h2 className='text-sm py-4 ml-10 font-medium'>Only people who live with you may use your account. Watch on 3 different devices at the same time with Premium,<br /> 2 with Standard, and 1 with Basic.</h2>

        <button className='bg-blue-500 ml-10 text-[18px] text-center w-52 h-12 mt-3 text-white'>Next</button>
      </div>
    </Layout>
  )
}
