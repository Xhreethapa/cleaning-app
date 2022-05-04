import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import MobNav from '../components/MobNav'
import Whyus from '../components/Whyus'
import Banner from '../components/Banner'
import About from '../components/About'
import Elite from '../components/Elite/Elite'
import Comment from '../components/Elite/Comment'
import Top from '../components/Top'
import Blogs from '../components/Blogs'
import Weare from '../components/Banner/Weare'

const MainDisplay = () => {
  return (
    <div>
      <Head>
      {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/> */}

        <title>elite Cleaning</title>
        
        <meta name="description" content="Generated by create next app" />
   
            </Head>
          <Top/>
          {/* <Home/> */}
          <Banner/>
          <Weare/>
          <About/>
         <Box position="fixed" bottom='0' right='0' zIndex='300' >
         {/* <QuoteButton /> */}
         </Box>
         <Box backgroundColor='whitesmoke'>
           <MobNav/>
           {/* <Intro/> */}
           <Whyus/>
           <Elite/>
           <Comment/>
           <Blogs/>
           {/* <Customer/> */}
           <Faq  />
           {/* <OurServices/> */}
           {/* <AboutUs/> */}
           <Footer/>
         </Box>
          
     
    </div>
  )
}

export default MainDisplay
