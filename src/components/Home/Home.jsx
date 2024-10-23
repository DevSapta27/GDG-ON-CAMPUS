import React from 'react'
import NavbarBanner from '../Navbar/NavbarBanner'
import Hero from '../Hero/Hero'
import NumberCounter from '../NumberCounter/NumberCounter'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import Banner from '../Banner/Banner'
import SubjectCard from '../SubjectCard/SubjectCard'
import Testimonial from '../Testimonial/Testimonial'
import img1 from '/banner1.jpg'
import img2 from '/banner2.jpg'

const Home = () => {
    const BannerData = {
        image: img2,
        tag: "Become a Cloud Engineer",
        title: "Join Google Arcade Program through GDG 0n-Campus",
        subtitle:
          "Are you ready to grow your cloud skills and earn Google Cloud swag? Game on! Head over to The Arcade to participate in games that feature hands-on learning labs. Complete labs and you’ll earn digital badges. These badges award you points that you can use to redeem great Google Cloud prizes from the prize counter, including backpacks, t-shirts, mugs, and more. You can even choose charitable donations. But take note: each game is available for a limited time only, so earn your digital badges and points while you can!",
        link: "#",
      };

      const BannerData2 = {
        image: img1,
        tag: "Widen Your Technical Network",
        title: "Get the Oppurtunity to be a part of GDG Kolkata",
        subtitle:
          " GDG Kolkata is a technology driven community, that aims to bring the developers, entrepreneurs, working professionals, and students together to learn, teach, share, and most importantly, form lasting connections.Google Developer Group (GDG) Kolkata is a non-profit independent organization where developers and tech enthusiasts come together to discuss, learn, and share their experiences related to Google technologies and other cloud advancements. The community is open to professionals and entrepreneurs interested in technology development and networking",
        link: "#",
      };
  return (
    <>
       <NavbarBanner/>
       <Hero/>
       <NumberCounter/>
       <WhyChooseUs/>
       <Banner {...BannerData} /> 
       <Banner {...BannerData2} reverse={true}/>
       <SubjectCard/>
       <Testimonial/>
    </>
  )
}

export default Home