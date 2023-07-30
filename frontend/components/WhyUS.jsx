import React from 'react'
import {FaUserDoctor} from "@heroicons/react/24/outline"

const WhyUS = () => {
  return (
    <div className="w-full h-[35rem] bg-[#d8efea] mt-32">

        <p className='ml-16 py-20 text-[#363c45] font-extrabold text-5xl'>Why our Medical Center?</p>
        <div className="mx-16 grid grid-cols-3 gap-16">
     
   <div className="bg-[#d8efea] h-[20rem] w-[30rem] " >

<div className="text-black flex flex-col items-center mt-12">
<p className='text-6xl font-bold'>0%</p>

<p className='text-2xl font-medium mt-6'>Our service is cost-free for patients</p>
<p className='w-[24rem] mt-5'>We work without any extra changes and commissions. You pay only clinics for your services.</p>

</div>

</div>

<div className="bg-[#d8efea] h-[20rem] w-[30rem] " >

<div className="text-black flex flex-col items-center mt-8">
<img  className="  flex h-[5rem]" src="/doctor-2.png" alt="" />

<p className='bold  text-2xl font-medium mt-5'>Our call center has doctors</p>

<p className='w-[24rem] mt-5'>Our call center employs operators with medical knowledge, who can help you choose the best medicine.</p>

</div>

</div>

<div className="bg-[#d8efea] h-[20rem] w-[30rem] " >

<div className="text-black flex flex-col items-center mt-8">
<img  className="flex h-[5rem]" src="/security.png" alt="" />

<p className='bold  text-2xl font-medium'>Your data in a safe way</p>
<p className='w-[24rem] mt-5'>We guarantee you the confidentiality of your data. Your personal information is collected for the record only.</p>
</div>
</div>
</div>
    </div>
  )
}

export default WhyUS