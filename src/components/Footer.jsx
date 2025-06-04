import React from "react";
import { 
  BsFacebook, 
  BsTwitter, 
  BsInstagram, 
  BsYoutube, 
  BsPinterest, 
  BsEnvelope 
} from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-[#0d3547] text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-yellow-400 transition-colors">Courses</a></li>
              <li><a href="#mission" className="hover:text-yellow-400 transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Traffic Laws</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Practice Tests</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Driver's Handbook</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <BsFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <BsTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <BsInstagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <BsYoutube size={20} />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <BsPinterest size={20} />
              </a>
            </div>
            <div className="flex items-center">
              <BsEnvelope className="mr-2" />
              <a href="mailto:info@tubyikorereos.com" className="hover:text-yellow-400 transition-colors">
                byikorereonlineservices@gmail.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TubyikorereOS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}