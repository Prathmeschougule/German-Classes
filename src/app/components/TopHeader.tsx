import { Mail, Phone, MapPin } from 'lucide-react';

export function TopHeader() {
  return (
    <div className="bg-[#2F8AA3] border-b border-[#1F2A30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side - Logo and Slogan */}
          <div className="flex items-center space-x-4">
            <div className="bg-[#F2C230] px-6 py-2 rounded-md">
              <h1 className="font-bold text-2xl text-[#1F2A30] tracking-wide">NURSINEX</h1>
            </div>
            <div className="text-white text-sm font-semibold tracking-wide">
              WE ARE NURSES FOR NURSES
            </div>
          </div>
          
          {/* Right Side - Contact Info */}
          <div className="flex items-center space-x-6 text-sm text-white">
            <a href="mailto:info@nursinex.com" className="flex items-center space-x-2 hover:text-[#F2C230] transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@nursinex.com</span>
            </a>
            <a href="tel:+4930123456789" className="flex items-center space-x-2 hover:text-[#F2C230] transition-colors">
              <Phone className="w-4 h-4" />
              <span>+49 30 123 456 789</span>
            </a>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Berlin, Germany</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}