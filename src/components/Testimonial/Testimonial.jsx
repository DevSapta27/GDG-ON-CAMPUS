import React from "react";
import Slider from "react-slick";
import User1 from '../../assets/Anuska.jpg';
import  User2 from '../../assets/Saptarshi.jpg';
import User3 from '../../assets/Anirban.png';
import User4 from '../../assets/Priyobrata.png';
import User5 from '../../assets/Sujay Dey.jpg'
import { desc } from "framer-motion/client";

const TestimonialsData = [
  {
    id: 1,
    name: "Anuska Biswas",
    desc: "Incredible Learning Experience!" ,
    text: "Joining this tech community has been an amazing experience! The workshops, hackathons, and hands-on sessions helped me enhance my technical skills, especially in web development and cloud computing. The mentors are super helpful, and the collaborative environment encourages constant learning. Highly recommend it to anyone looking to grow in tech!",
    img: User1,
    delay: 0.2,
  },
  {
    id: 2,
    name: "Saptarshi Paul",
    desc: " Networking and Growth Opportunities",
    text: "Being part of this community has opened up so many networking opportunities. I’ve connected with industry professionals, collaborated with peers on exciting projects, and even got the chance to present my work at events. It’s a fantastic platform to build your personal brand and grow your career.",
    img: User2,
    delay: 0.5,
  },
  {
    id: 3,
    name: "Anirban Bandyopadhay",
    desc: "Supportive and Welcoming Environment",
    text: "I was initially intimidated to join, but the community is so welcoming and inclusive! No matter what your skill level is, you’ll find guidance and support. The senior members are always eager to help, and there’s a real sense of camaraderie here. I’ve learned so much in such a short time.",
    img: User3,
    delay: 0.8,
  },
  {
    id: 4,
    name: "Priyobrata Mondal",
    desc: "Real-World Projects and Skill Development",
    text: "What I love about this community is the focus on real-world projects. We’ve worked on everything from building websites to developing mobile apps. These projects helped me apply theoretical knowledge in practical scenarios, which has been instrumental in improving my problem-solving skills and portfolio.",
    img: User4,
    delay: 0.8,
  },
  {
    id: 5,
    name: " Sujay De",
    desc: "Empowering and Inspiring!",
    text: "Joining this tech community has been a transformative experience for me. It’s empowering to see so many like-minded people working together towards common goals. The inspiring talks, innovative projects, and constant exposure to new technologies have motivated me to pursue bigger goals in my tech journey.",
    img: User5,
    delay: 1.1,
  },
];

const Testimonial = () => {
  const setting = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-14 mb-10">
      <div className="container">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6">
          <h1 className="uppercase font-semibold text-orange-600">
            OUR TESTIMONIALS
          </h1>
          <p className="font-semibold text-3xl ">
            What Our Members Say About Us
          </p>
        </div>
        {/* Testimonial cards section */}
        <div>
          <Slider {...setting}>
            {TestimonialsData.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10">
                    {/* upper section */}
                    <div className="flex justify-start items-center gap-5">
                      <img
                        src={item.img}
                        alt=""
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <p className="text-xl font-bold text-black/80">
                          {item.name}
                        </p>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                    {/* bottom section */}
                    <div className="py-6 space-y-4">
                      <p className="text-sm text-gray-500">{item.text}</p>
                      <p>⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
