import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-[#1F2A30] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="bg-[#F2C230] px-4 py-2 rounded-md inline-block mb-4">
              <h3 className="text-xl font-bold text-[#1F2A30]">NURSINEX</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for German language education. Empowering students to achieve fluency and cultural understanding.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F2C230] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F2C230] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F2C230] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#certification" className="text-gray-400 hover:text-white transition-colors">CEFR & Certification</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-bold mb-4">Courses</h4>
            <ul className="space-y-2">
              <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors">A1 Level</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors">A2 Level</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors">B1 Level</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors">B2 Level</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors">Exam Preparation</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors">Spoken German</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">info@germanlanguage.de</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">+49 30 123 456 789</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Friedrichstraße 123, 10117 Berlin, Germany</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            Copyright © {new Date().getFullYear()} NURSINEX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}