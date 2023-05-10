import { motion } from 'framer-motion';
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import SectionWrapper from '../hoc/SectionWrapper';
import { slideIn } from '../utils/motion';

//template_zhobq8a
//service_lay7ukm
//jiKgzXamXSt-Zb9Nn
const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => { 
    const {value , name} = e.target;
    setForm({...form , [name] : value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_lay7ukm' ,
      'template_zhobq8a',
      {
        form_name : form.name,
        to_name : 'mehrdad',
        form_email : form.email,
        to_email : 'mmsirmehrdadmailbox@gmail.com',
        message : form.message
      },
      'jiKgzXamXSt-Zb9Nn'

    )
    .then(() => {
       setLoading(false);
       alert ('با تشکر ! پیام شما موفقیت آمیز بود');

       setForm({
        name : '',
        email : '' , 
        message : '', 
       })
    },(error) => {
      setLoading(false);
      console.log(error , "error is ");

      alert("با عرض پوزش  | مشکلی پیش آمده")
    }
    )
   };

  return (
    <div
      className='xl:mt-12 xl:flex-row
    flex gap-10 overflow-hidden
    flex-col-reverse '
    >
      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8
      rounded-2xl'

      >
        <p className={styles.sectionSubText}>
          با من در تماس باشید
        </p>
        <h3 className={styles.sectionHeadText} >
          تماس
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col' >
            <span className='text-white font-medium mb-4 ' >
              نام شما
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='اسمتون لطفا !'
              className='bg-tertiari py-4 px-6
    placeholder:text-secondary
    text-white rounded-lg outlined-none
    border-none font-medium
    '
            />
          </label>

          <label className='flex flex-col' >
            <span className='text-white font-medium mb-4 ' >
              ایمیل شما
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder=' ایمیلتون لطفا !'
              className='bg-tertiari py-4 px-6
    placeholder:text-secondary
    text-white rounded-lg outlined-none
    border-none font-medium
    '
            />
          </label>

          <label className='flex flex-col' >
            <span className='text-white font-medium mb-4 ' >
              پیام شما
            </span>
            <textarea
              rows='7'
              
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='پیامتون رو اینجا بنویسید!'
              className='bg-tertiari py-4 px-6
    placeholder:text-secondary
    text-white rounded-lg outlined-none
    border-none font-medium
    '
            />
          </label>
          <button
          onClick={handleSubmit}
          type='submit'
          className='bg-tertiari py-3 px-8 
          outlined-none w-fit text-white font-bold shadow-md
          shadow-primary rounded-xl'
          >
            {loading ? 'در حال ارسال !' : 'ارسال شد'}

          </button>
        </form>

      </motion.div>


      <motion.div
      variants={slideIn('left', "tween", 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
       >
<EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")