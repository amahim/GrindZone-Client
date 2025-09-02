import './Banner.css';
import Navbar from './Navbar';
const Banner = () => (
  <div id="bannerBG">
        <Navbar className="z-50 "/>
<div className="flex flex-col items-center justify-center ">
    
    <h1 className='lg:text-6xl text-2xl font-bold mb-4 text-white text-center lg:mt-16 mt-2 '>
            Crush your health  and <br />fitness
            goals in no time
        </h1>

        <p className='text-gray-300 text-center lg:text-lg  text-sm lg:max-w-2xl lg:mt-6  mx-auto px-8 lg:px-4'>
            It doesn't matter if your goal is to get stronger, burn fat, or to just stay fit our world class coaches will guide you every step of the way.
        </p>

        <button className="mt-8 w-36 text-center hidden lg:block btn rounded-full text-sm bg-[#97FB57] py-2 border-none">Join For Grind</button>

        </div>
        
  </div>
);

export default Banner;
