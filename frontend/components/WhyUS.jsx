import React from 'react'
import {FaUserDoctor} from "@heroicons/react/24/outline"
import { WhyUsCards } from './WhyUsCards';

const WhyUS = () => {
  const cardImage  = [
{img_src: "/alcohol-free.png" , title: "Our service is cost-free for patients" ,description:"We work without any extra changes and commissions. You pay only clinics for your services." },
{img_src: "/doctor-2.png" , title: "Our call center has doctors",description:"Our call center employs operators with medical knowledge, who can help you choose the best medicine." },
{img_src: "/security.png" , title: "Your data in a safe way",description:"We guarantee you the confidentiality of your data. Your personal information is collected for the record only." },

];
  return (
    <div className="w-full h-[35rem] bg-[#d8efea] mt-32">
        <p className='ml-16 py-20 text-[#363c45] font-extrabold text-5xl'>Why our Medical Center?</p>
        <div className="mx-16 grid grid-cols-3 gap-16">
        {cardImage.map((item, idx) => {
          return (
            <div key={idx}>
              <WhyUsCards {...item} />
            </div>
          );
        })}
</div>
</div>
  )
}

export default WhyUS