import LanguageDropdown from "./LanguageDropdown";
import FacebookIcon from '../assets/facebook.png';
import InstagramIcon from '../assets/instagram.png';
import YouTubeIcon from '../assets/youtube.png';
import TwitterIcon from '../assets/twitter.png';
import apple from '../assets/apple.png'
import google from '../assets/google.png'

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-r from-[#8CBAF7] to-[#A1ECB5] py-10 text-gray-700">
      <div className="flex flex-col container mx-auto px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:px-4">
          {/* Stepstone Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Stepstone</h4>
            <ul>
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Press Release</a></li>
              <li><a href="#" className="hover:underline">Become a partner</a></li>
            </ul>
          </div>

          {/* Jobseeker Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Jobseeker</h4>
            <ul>
              <li><a href="#" className="hover:underline">Career with Stepstone</a></li>
              <li><a href="#" className="hover:underline">Salary Information</a></li>
              <li><a href="#" className="hover:underline">Gross Net Calculator</a></li>
              <li><a href="#" className="hover:underline">Career advice</a></li>
              <li><a href="#" className="hover:underline">Create a CV</a></li>
              <li><a href="#" className="hover:underline">Create a Cover Letter</a></li>
            </ul>
          </div>

          {/* Recruiter Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Recruiter</h4>
            <ul>
              <li><a href="#" className="hover:underline">Post Job Ads</a></li>
              <li><a href="#" className="hover:underline">Recruiting News</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Let is connect</h4>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-blue-500"><img className="w-10" src={TwitterIcon} alt="" /> </a></li>
              <li><a href="#" className="text-blue-700"><img className="w-10" src={FacebookIcon} alt="" /> </a></li>
              <li><a href="#" className="text-pink-500"><img className="w-10" src={InstagramIcon} alt="" /> </a></li>
              <li><a href="#" className="text-red-500"><img className="w-10" src={YouTubeIcon} alt="" /> </a></li>
            </ul>
          </div>
        </div>

        {/* Apps Section */}
        <div className="mt-10 text-center lg:px-4">
          <h4 className="font-semibold text-lg mb-4">Apps</h4>
          <div className="flex justify-center space-x-4">
            <a href="#"><img src={apple} alt="App Store" className="h-10" /></a>
            <a href="#"><img src={google}alt="Google Play" className="h-10" /></a>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-10 pt-6 text-center text-sm">
          <ul className="flex flex-wrap justify-center space-x-4">
            <li><a href="#" className="hover:underline">Privacy policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Privacy settings</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
            <li><a href="#" className="hover:underline">Terms and conditions</a></li>
            <li><a href="#" className="hover:underline">Imprint</a></li>
            <li><a href="#" className="hover:underline">Sitemap</a></li>
          </ul>
          <hr className="mt-4 h-1 w-full bg-gray-500 border-0"/>
          <div className="flex justify-between items-center py-4">
            <p className=" ">© The Stepstone Group GmbH 2024</p>
            <LanguageDropdown/>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
