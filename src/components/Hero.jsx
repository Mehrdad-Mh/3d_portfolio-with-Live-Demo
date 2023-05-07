import {motion} from 'framer-motion';
import {ComputersCanvas} from './canvas'
import {styles} from '../styles'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
<div  className={`${styles.paddingX} relative insert-0 top-[160] max-xl-7xl
 mx-auto flex flex-row-reverse justify-items-end gap-1 `} >
<div style={{position : 'absolute' , zIndex :'10' , right :'4rem'}} className=' flex-col-reverse inline-flex justify-start items-center mt-10'>
  <div className='w-5 h-5 rounded-full bg-[#915eff] '/>
<div className='w-1 sm:h-80 h-40 violet-gradient' />


</div>
<div className='text-right relative z-10 top-20 right-20'>
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
    </section>
  )
}

export default Hero