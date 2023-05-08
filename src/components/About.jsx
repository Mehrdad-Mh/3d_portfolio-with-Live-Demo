import React from 'react'
import Tilt from 'react-tilt';
import {motion} from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn , textVariant} from '../utils/motion';
import  SectionWrapper  from '../hoc/SectionWrapper';

const ServiceCard = ({index ,title , icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
<motion.div 
variants={fadeIn('right' , 'spring' ,
 0.5 * index , 0.75)}
 className='w-full green-pink-gradient p-[1px] 
 rounded-[20px] shadow-card'
>
<div options={{
  max : 45 , 
  scale : 1 ,
  speed : 450
}}
className='bg-tertiary rounded-[20px]
py-5 px-12 min-h-[288px] flex 
justify-evenly items-center flex-col
'>
<img src={icon} alt={title} className='w-16
h-16 object-contain
' />
<h4 className='text-white text-[20px] 
font-bold text-center
'>
  {title}
</h4>
</div>
</motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}
    className='text-right'>
      <p className={styles.sectionSubText}>
        معرفی
      </p>
      <h3 className={styles.heroHeadText}>
در یک نگاه
      </h3>
    </motion.div>

    <motion.p
    variants={fadeIn("" , "" , 0.1 , 1)}
    className=' text-right mt-4 text-secondary
     text-[17px] max-w-3xl leading-[30px] relative'
    >
یک طراح فرانت اند هستم که بر پایه react 
پروژه هام رو می سازم و تسلط بر وردپرس هم دارم
این پرتغولیو رو با کمک Three.js پیاده سازی کردم
و اولین پروژه ای هست که از مدل سه بعدی و انیمیشن های
جذاب برای یک UI جذاب تر داخلش استفاده میشه.
مرسی 
    </motion.p>
    <div className='mt-20 flex gap-10'>

      {services.map((service , index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}

    </div>
    </>
  )
}

export default SectionWrapper(About , 'about')