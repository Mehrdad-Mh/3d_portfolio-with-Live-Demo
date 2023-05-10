import {motion} from 'framer-motion';
import {ComputersCanvas} from './canvas'
import {styles} from '../styles'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>

<div  className={`${styles.paddingX} absolute max-w-7xl insert-0 
 mx-auto flex flex-row top-16  items-start gap-5 `} >

<div className=' flex-col-reverse 
 justify-start
 items-center mt-10'>

  <div className='w-5 h-5 
  rounded-full bg-[#915eff] '/>

<div className='w-1 sm:h-80 
h-40 violet-gradient mr-[7px]' />


</div>
<div >
  <h2 className={`${styles.heroHeadText}
   text-white`}>سلام من &nbsp; 
   <span className='text-[#915eff]'>مهرداد هستم
   </span></h2>
   <p className={`${styles.heroSubText}  text-white-100 mt-3 `}>
یه طراح وبسایتم که خیلی <br className='sm:block hidden  '/>
علاقه به استفاده از تکنولوژی های جدید <br/>
در وبسایت هایی که ایجاد میکنم دارم
   </p>
</div>
</div>
<ComputersCanvas/>

<div className='absolute xs:bottom-10 bottom-32
items-center  justify-center flex w-full '>
  <a href='#about'>
    <div className='w-[35px] h-[64px] rounded-3xl border-4
    border-secondary flex justify-center items-start p-2
    '>
<motion.div
animate={{
  y:[0 , 24 , 0 ]
}}

transition={{
  duration : 1,
  repeat : Infinity,
  repeatType : 'loop'
}}
className="w-3 h-3 rounded-full bg-secondary mb-1"
/>


    </div>
  </a>

</div>
    </section>
  )
}

export default Hero