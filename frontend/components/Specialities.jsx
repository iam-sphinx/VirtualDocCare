import React from 'react';
import Image from "next/image";


const Specialities = () => {
  return (
    <div className='w-full'>
        <p className=' ml-20 text-5xl mt-16 font-extrabold text-[#28282B]'>Top-searched specialities </p>

   <div className="mt-10  lg:grid grid-cols-4  gap-8 mx-32">

    {/* //card 1 primarycare */}

   <div className="bg-white h-[20rem] w-[20rem] shadow-2xl  border rounded-xl" >

   <div className="text-black flex flex-col items-center mt-2">
 <img  className="  flex h-[16rem]" src="/primarycare.jpg" alt="" />

   <p className='bold  text-2xl font-bold'>Primary Care</p>
  
  </div>
  
  </div>

  {/* //card 2 dentist */}

  <div className="bg-white h-[20rem] w-[20rem] shadow-2xl  border rounded-xl" >

   <div className="text-black flex flex-col items-center mt-16">
 <img  className="  h-[10.5rem]" src="dentist.jpg" alt="" />

   <p className='bold mt-8 text-2xl font-bold'>Dentist</p>
  
  </div>
  
  </div>

  {/* card 3  OBB-GYN*/}

  <div className="bg-white h-[20rem] w-[20rem] shadow-2xl  border rounded-xl" >

   <div className="text-black flex flex-col items-center mt-16">
 <img  className="  h-[10.5rem]" src="./gyn.jpg" alt="" />

   <p className='bold mt-8 text-2xl font-bold'>OBB-GYN</p>
  
  </div>
  
  </div>

  {/* card 4 eye */}
  <div className="bg-white h-[20rem] w-[20rem] shadow-2xl  border rounded-xl" >

   <div className="text-black flex flex-col items-center mt-16">
 <img  className="  h-[10.5rem] rounded-[23rem]" src="./eye.jpg" alt="" />

   <p className='bold mt-8 text-2xl font-bold'>Eye Doctor</p>
  
  </div>
  
  </div>
  <div className="bg-white h-[20rem] w-[20rem] shadow-2xl  border rounded-xl" >

   <div className="text-black flex flex-col items-center mt-16">
 <img  className="  h-[10rem]" src="./psyciatrist.jpg" alt="" />

   <p className='bold mt-8 text-2xl font-bold'>Psychiatrist</p>
  
  </div>
  
  </div>
  <div className="bg-white h-[20rem] w-[20rem] shadow-2xl  border rounded-xl" >

   <div className="text-black flex flex-col items-center mt-16">
 <img  className="  h-[10rem] rounded-[20rem]" src="cardio.jpg" alt="" />

   <p className='bold mt-8 text-2xl font-bold'>Cardiologist</p>
  
  </div>
  
  </div>
  <div className="bg-white h-[20rem] w-[20rem] shadow-2xl  border rounded-xl" >

   <div className="text-black flex flex-col items-center mt-16">
 <img  className="  h-[10.5rem]" src="./psyciatrist copy.jpg" alt="" />

   <p className='bold mt-8 text-2xl font-bold'>Neurologist</p>
  
  </div>
  
  </div>
  <div className="bg-white h-[20rem] w-[20rem] shadow-2xl  border rounded-xl" >

   <div className="text-black flex flex-col items-center mt-16">
 <img  className="  h-[10.5rem]" src="./doc2.jpg" alt="" />

   <p className='bold mt-8 text-2xl font-bold'>Dermatologist</p>
  
  </div>
  
  </div>
  
</div>
      </div>
  );
};

export default Specialities;
