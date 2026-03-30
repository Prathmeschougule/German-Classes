import Slider from 'react-slick';
import { Quote } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Sarah Mueller',
    image: 'https://images.unsplash.com/photo-1725473824377-b1a507db7afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBwb3J0cmFpdCUyMHdvbWFufGVufDF8fHx8MTc3MzA4MDQxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    feedback: 'The teaching methods are excellent! I cleared my B2 exam on the first attempt. The instructors are very supportive and the learning environment is fantastic.',
    course: 'B2 Level Graduate',
  },
  {
    name: 'Michael Schmidt',
    image: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczMDgwNDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    feedback: 'Best German language institute in the city! The small batch sizes ensure personalized attention. I highly recommend this institute to anyone serious about learning German.',
    course: 'A2 Level Graduate',
  },
  {
    name: 'Emma Johnson',
    image: 'https://images.unsplash.com/photo-1645664747204-31fee58898dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc3R1ZGVudCUyMHNtaWxpbmd8ZW58MXx8fHwxNzczMDU3NjM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    feedback: 'Amazing experience! The online classes were interactive and engaging. The study materials are comprehensive and the faculty is always ready to help.',
    course: 'B1 Level Graduate',
  },
];

export function Testimonials() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#2F8AA3] uppercase tracking-wide text-sm font-semibold mb-2">Testimonials</p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Student Feedback</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Hear what our students have to say about their learning experience
          </p>
        </div>

        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 border-t-4 border-[#2F8AA3]">
                <Quote className="w-12 h-12 text-[#F2C230] mb-4" />
                <p className="text-gray-700 dark:text-gray-200 text-lg mb-6 italic leading-relaxed">
                  "{testimonial.feedback}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-[#2F8AA3] dark:text-[#F2C230]">{testimonial.course}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}