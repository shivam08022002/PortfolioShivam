import React from 'react'
import Icon from '../icon/icon';


const Jobs = () => {
  const jobs = [{ company: "UnstudioAi", duration: "August,2023 - current", post: "Software Developer Intern", link:"https://www.linkedin.com/company/unstudioai/" },
    { company: "ZeviAi", duration: "May,2023 - June,2023", post: "Frontend Engineering Intern", link:"https://www.linkedin.com/company/zevi-ai/" },
    { company: "Oyesters", duration: "November,2022 - January,2023", post: "Frontend Intern", link:"https://www.linkedin.com/company/oyesters/" },];
  return (
    <div className='mb-12 px-2 tablet:px-12 desktop:px-20 mt-4'>
      <h1 className='name desktop:text-5xl tablet:text-2xl text-xl mb-8'>Where I’ve Worked</h1>
      <div className='flex flex-col gap-4 w-full md:w-[60%]  '>
        
        {jobs && jobs.map((job) => (
          <div className='flex justify-between items-center'>
            <div className=''>
              <h1 className=" pl-6 font-spaceFont text-2xl  relative before:content-['▹'] before:text-[#ffa51d] before:text-lg before:mt-2 before:absolute before:left-0 before:leading-3">{job.post} </h1>
              <div className='flex items-center '>
                <h1 className='pl-6 font-spaceFont text-base opacity-80'>{job.company} </h1>
                <a href={job.link} target="_blank" rel="noreferrer" className='w-4 h-4 flex justify-center items-center ml-[2px] cursor-pointer animate-[all_1s_ease-in] transition-transform hover:translate-x-[2px]'>
                  <Icon className='w-2' name='Arrow' />
                </a>
              </div>
            </div>
            <p className='font-spaceFont text-base opacity-80'>{job.duration} </p>
          </div>
        )) }
      </div>
    </div>
  )
}

export default Jobs