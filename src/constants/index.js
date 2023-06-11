import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    myproj,
    myproj2,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "درباره من",
    },
    {
      id: "work",
      title: "نمونه کار",
    },
    {
      id: "contact",
      title: "تماس با من",
    },
  ];
  
  const services = [
    {
      title: " توسعه دهنده فرانت",
      icon: web,
      class : "exptitle"
    
    },
    {
      title: "توسعه دهنده react",
      icon: mobile,
      class : "exptitle"
    },
    {
      title: "آشنا با بک اند",
      icon: backend,
      class : "exptitle"
    },
    {
      title: " تولید محتوا ",
      icon: creator,
      class : "exptitle"
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      
      title: "React.js برنامه نویس",
      company_name: "initializer",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
     "برنامه نویس ری اکت (senior) : پروژه های مخطلفی با استفاده از ری اکت انجام دادم",
     "عملیات CRUD  رو در قالب rest انجام دادم ",
     "این سایت جذاب رو هم با کمک کتابخونه Threejs و vite بالا آوردم",
     "در استایل دهی از tailwind css استفاده شده"

      ],
    },
    {
      
      title: "آشنا با بک اند ",
      company_name: "Nodejs",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
     "علاوه بر این که در حال توسعه فرانت هستم تا حدودی هم با بک اند کار کردم",
     "یک سرور تجاری برای : ",
     "Registration , Authentication , Authorizathion " ,
     "CRUD for : Products , Categories  , Orders , Reviews , Brands , Colors,  ",
     " تولید ProductId انحصاری برای هر محصول و ارتباط محصول با شخص سفارش دهنده و تعداد کل "
      ],
    },
    {
      title: "دیتا بیس",
      company_name: "Mongodb",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
      "به عنوان پایگاه داده از mongoose استفاده کردم",
      "mongoose از نوع پایگاه داده های non-relational هست و امکان ذخیره داده به صورت Object (شئ) رو فراهم میکنه",
      "چون رو vs Code  نصب میشه برای تست و را اندازی پروژه دسترسی مناسبی داره"
      ],
    },
    {
      title: "وردپرس",
      company_name: "Wordpress",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
      "روی وردپرس تسلط دارم از صفر برای بالا اوردن انواع سایت فروشگاهی , شرکتی و مارکت پلیس و ...",
      "تو یکی از پروژه های ری اکتیم از وردپرس به عنوان backend و database استفاده کردم",
      "طوری که UI با React طراحی شده بود و برای عملیات CRUD از وردپرس اسافاده میشه"

      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "سایت جذابی هست من فکر میکنم برای صفحه لندینگ مناسب باشه .",
      name: "سارا محمدی",
      designation: " محمدی",
      company: "پیشتازان تکنولوژی",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "سایت خوبی شده تبریک ! البته یکم جا برای بهتر شدن داره ولی در کل سایت خوبی هست.",
      name: "رضا بوشهری",
      designation: " بوشهری",
      company: "موسسه تحقیقاتی",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "من سایت رو با گوشی بررسی کردم سایت خوبی هست همچنین این که سرعت لود خوبی هم داره !",
      name: "مرضیه حق جو",
      designation: "حقجو ",
      company: "ارتباطات نوین",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "پرتفولیو",
      description:
        " یک صفحه لندینگ با انیمیشن های جذاب برای معرفی و نمایش پروژه های انجام شده و توانایی های ساخت صفحه لندینگ جذاب. و مناسب برای معرفی کار",
        
        
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: myproj,
      source_code_link: "https://github.com/Mehrdad-Mh/3D_Portfolio",
    },
    {
      name: "مدیریت مخاطبین",
      description:
        "یک نرم افزار برای ساخت تغیر و حذف مخاطبین امکان اضافه کردن ادرس عکس نوع گروه و شماره تماس و ذخیره هر مخاطب در فایل json.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: myproj2,
      source_code_link: "https://github.com/Mehrdad-Mh/contacts-manager",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };