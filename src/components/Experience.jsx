import React from 'react'
import {motion} from 'framer-motion'

export default function Experience() {
    const EXPERIENCES=[
        {year:"November 2024 - Present",
            role:"Serive Engineer",
            company:"A one machinery and equipmennts",
            description:"I joined the A one machinery and equipment to play a role as an Laser Service Enginner, a comprehensive 2 years journey designed to build the expertise in Laser Services.This program provide me with in-depth knowledge and hands-on experience with Autocad,Cypcut,NC Studio, RD Works, YM Works, Artcam As a laser machine service engineer, you play a vital role in maintaining, troubleshooting, and optimizing laser equipment that is essential for industries like manufacturing, automotive, and medical devices. This role combines technical expertise, problem-solving skills, and customer interaction.",
            software:["Autocad","Cypcut","Artcam","NC Studio","RD Works","YM Works"]
        },
        {year:"January 2023 - November 2024",
            role:"CNC Laser Operator/Programmer",
            company:"G Star Fabrication (Traori)",
            description:"During my one-year tenure at G Star Fabrication, I was responsible for operating and programming CNC laser machines to produce high-quality, precision parts for various industries, including manufacturing and fabrication. My role involved both hands-on operation and software programming to optimize machine performance and meet production goals.",
            software:["Autocad","Cypcut","Artcam","NC Studio","RD Works","YM Works"]
        },
        {year:"Februaray 2021 - December 2022",
            role:"Supervisor/Production Manager",
            company:"Webby Toys Pvt.Ltd.(Manesar,Gurugram)",
            description:"Led and supervised the daily operations of the production floor, ensuring the efficient and smooth functioning of manufacturing processes for a leading toy production company.Managed a team of skilled workers, fostering a collaborative environment that prioritized safety, productivity, and high-quality standards.Coordinated production schedules, monitored inventory levels, and ensured timely delivery of products, resulting in on-time order fulfillment and enhanced customer satisfaction.Implemented process improvements that resulted in a reduction of production time and cost, optimizing resource allocation and overall output.Maintained strict adherence to safety protocols, compliance regulations, and quality control standards, ensuring high-quality production and zero defects.Trained and developed team members, ensuring continuous improvement in both individual and team performance.Collaborated closely with other departments, including engineering and logistics, to meet production goals and resolve any operational challenges.",
            software:["Autocad","SolidWork","Microsoft Excel","MicroSoft Teams"]
        },
        {year:"March 2020 - January 2021",
            role:"CNC Laser Operator",
            company:"Library Shoes Pvt.Ltd.(Karnal)",
            description:"During my nine months tenure at Liberty Shoes Pvt. Ltd. Karnal,Operated and maintained CNC laser cutting machines to produce high-quality components for footwear manufacturing, ensuring precision and efficiency.Interpreted technical drawings and programmed laser machines to meet specific design and production requirements.Conducted routine maintenance and troubleshooting of machinery, minimizing downtime and ensuring continuous operation.Collaborated with the design and production teams to optimize cutting techniques, reducing material waste and production time.",
            software:["Autocad","SolidWork","CNC Simulator Pro"]
        },
        {year:"October 2018 - August 2019",
            role:"Production Manager",
            company:"PAN Agency NSDL (Karnal)",
            description:"Assisted clients in accurately filling out and submitting PAN card application forms, ensuring compliance with NSDL guidelines and government regulations.Verified and processed documents required for PAN applications, maintaining a high level of accuracy and attention to detail.Provided guidance to applicants on documentation requirements, application procedures, and issue resolution.Maintained records of applications and tracked their status to ensure timely processing and delivery.Collaborated with the team to resolve discrepancies and address client queries promptly, enhancing customer satisfaction.",
            software:["NSDL","My Pan","DSL","OCR"]
        },
        {year:"February 2018 - August 2018",
            role:"Purchaser",
            company:"Muskan Rice Mills(Tarori)",
            description:"Managed procurement of raw materials, including rice grains and ancillary supplies, ensuring consistent quality and timely availability to meet production demands.Conducted market research to identify reliable suppliers and negotiated cost-effective contracts, reducing procurement expenses.Evaluated supplier performance based on delivery timelines, quality standards, and cost efficiency, fostering strong vendor relationships.Maintained detailed records of purchase orders, invoices, and payment schedules, ensuring transparency and accountability in procurement operations.",
            software:["Agri Bazar","Grain Market"]
        },  
        
    ];
  return (
    <div>
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
         className='my-20 text-center text-4xl'>Experience</motion.h1>

        <div>
            {EXPERIENCES.map((value,index)=>(
                <div className='mb-8 flex flex-wrap lg:justify-center' key={index}>
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{x:-100,opacity:0}}
                    transition={{duration:0.5}}
                    className='w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-neutral-600'>{value.year}
                        </p>
                        </motion.div>
                        <motion.div 
                        whileInView={{opacity:1,x:0}}
                        initial={{x:100,opacity:0}}
                        transition={{duration:0.5}}
                        className='w-full max-w-xl lg:3/4'>
                            <h6 className='mb-2 font-semibold '>{value.role}- <span>{value.company}</span></h6>
                            <p className='mb-4 text-neutral-700'>{value.description}</p>
                            <div className='flex flex-wrap'>
                                {value.software.map((soft,index)=>(
                                    <span className='mr-2 border border-neutral-100 rounded-md cursor-pointer px-2 py-1 text-xs hover:bg-slate-50 hover:text-purple-600 text-neutral-950 font-semibold' key={index}>{soft}</span>
                                ))}</div>
                            </motion.div>
                        </div>

            ))}
        </div>
    </div>
  )
}
