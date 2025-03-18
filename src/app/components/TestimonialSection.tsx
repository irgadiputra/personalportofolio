"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import orang1 from '@/app/image/orang1.jpg';
import orang2 from '@/app/image/orang2.jpg';
import orang3 from '@/app/image/orang3.jpg';

const testimonials = [
    {
      id: 1,
      text: "This is a fantastic product! It has greatly improved my workflow. The intuitive design and user-friendly interface make it easy to navigate and use. I've been able to complete tasks more efficiently and effectively, which has significantly boosted my productivity. I highly recommend this product to anyone looking to streamline their processes and achieve better results.",
      author: "John Doe",
      image: orang1,
    },
    {
      id: 2,
      text: "I love using this service. It's intuitive and efficient, allowing me to focus on what truly matters. The support team is incredibly responsive and helpful, always ready to assist with any issues or questions I might have. The features offered are exactly what I need to manage my projects effectively, and I can't imagine going back to my old methods.",
      author: "Jane Smith",
      image: orang2,
    },
    {
      id: 3,
      text: "Highly recommend to anyone looking for quality and reliability. The attention to detail and commitment to excellence are evident in every aspect of this service. I've been consistently impressed with the performance and results, and the peace of mind knowing I can rely on this service is invaluable. It's a game-changer for anyone serious about achieving their goals.",
      author: "Alice Johnson",
      image: orang3,
    },
  ];

export default function TestimonialSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    };

    return (
        <div id="portofolio-section" className="relative bg-[#D98324] h-screen w-full grid grid-cols-8 grid-rows-9 gap-4 bg-cover bg-center bg-[url('../app/image/picture4.png')] text-[#FFF0DC]">
            <div className="flex flex-col items-center justify-end w-full col-span-8 text-[20px] -mb-6">
              - Testimoni
            </div>
            <div className="w-full pl-4 pr-4 font-extrabold row-start-2 col-span-8 flex flex-col items-center justify-center text-[50px] text-[#131010] ">
              Customer Testimonial
            </div>
            <div className="row-start-3 row-span-6 rounded-3xl col-start-1 md:col-start-2 col-span-1 md:col-span-6 gap-5 flex flex-col md:flex-row w-full">
                <button onClick={handlePrev} className="text-3xl font-extrabold">
                    &lt;
                </button>
                <div className="bg-[#131010] p-6 gap-10 rounded-3xl text-center w-full mx-4 flex flex-col md:flex-row">
                    <div className="h-48 md:h-full w-full md:w-2/3 relative rounded-3xl">
                    <Image
                    src={testimonials[currentIndex].image}
                    className="p-10 ml-10 rounded-full" alt="Logo" layout="fill" objectFit="cover"
                    />
                    </div>
                    <div className="flex flex-col w-full justify-center p-10">
                        <p className="text-lg mb-2">{testimonials[currentIndex].text}</p>
                        <p className="text-3xl text-[#D98324]">- {testimonials[currentIndex].author}</p>
                    </div>
                </div>
                <button onClick={handleNext} className="text-3xl font-extrabold">
                    &gt;
                </button>
            </div>
        </div>
    )
}