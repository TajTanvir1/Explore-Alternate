import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SliderStyles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
   return (
      <div className='md:px-10 my-6 lg:h-[600px]'>
         <div className=''>
            <Swiper
               spaceBetween={30}
               centeredSlides={true}
               autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
               }}
               pagination={{
                  clickable: true,
               }}
               navigation={true}
               modules={[Autoplay, Pagination, Navigation]}
               className="mySwiper"
            >
               <div className=' rounded-xl'>
                  <SwiperSlide className='relative'>
                     <div className="md:h-[600px] rounded-lg">
                        <img src='https://i.ibb.co/B3YWZ5c/Banner-Bgpng.png' alt="" className='' />
                        <div className='absolute top-0 w-full md:h-[600px]  flex items-center justify-around'>
                           <div className='flex justify-around items-center border border-orange-100 rounded-lg'>
                              <h3 className='text-orange-200 rounded-md text-lg md:text-4xl font-bold p-4 mx-2 md:mx-20 bg-black bg-opacity-80 border-y-2 border-gray-500'>Have You Any Queries?</h3>
                              <div className='max-w-[250px] w-[150px] md:w-[60%]'>
                                 <img src="https://i.ibb.co/vLxVKP7/Tension-Animated.gif" alt="" className='rounded-lg bg-gray-200 h-auto' />
                              </div>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide className='relative'>
                     <div className="md:h-[600px] rounded-lg">
                        <img src='https://i.ibb.co/B3YWZ5c/Banner-Bgpng.png' alt="" className='' />
                        <div className='absolute top-0 w-full md:h-[600px]  flex items-center justify-around'>
                           <div className='flex justify-around items-center border border-orange-100 rounded-lg'>
                              <h3 className='text-orange-200 rounded-md text-lg md:text-4xl font-bold p-4 mx-2 md:mx-20 bg-black bg-opacity-80 border-y-2 border-gray-500'>
                                 Do You Need Alternate Ideas?</h3>
                              <div className='max-w-[250px] w-[50%]'>
                                 <img src="https://i.ibb.co/dsTFpWt/Thinking-Animate.gif" alt="" className='rounded-lg' />
                              </div>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide className='relative'>
                     <div className="md:h-[600px] rounded-lg">
                        <img src='https://i.ibb.co/B3YWZ5c/Banner-Bgpng.png' alt="" className='' />
                        <div className='absolute top-0 w-full md:h-[600px]  flex items-center justify-around'>
                           <div className='flex justify-around items-center border border-orange-100 rounded-lg mt-6 md:mt-0'>
                              <h3 className='text-orange-200 rounded-md text-lg md:text-4xl font-bold p-4 mx-2 md:mx-20 bg-black bg-opacity-80 border-y-2 border-gray-500 max-w-[525px]'>Add Your Queries Here and Get Best Recommendations</h3>
                              <div className='max-w-[300px]'>
                                 <img src="https://i.ibb.co/16PsBPM/Queries-to-Get-Animated.gif" alt="" className='rounded-lg' />
                              </div>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               </div>
            </Swiper>
         </div>
      </div>
   );
};

export default Slider;