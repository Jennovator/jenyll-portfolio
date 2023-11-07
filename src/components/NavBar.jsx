import React from 'react';
// link
import { Link } from 'react-scroll';
import { navLinks } from '../constants';
import { motion } from 'framer-motion';
import { slideIn} from '../utils/motion';

const NavBar = () => {
  return (
    <nav className='fixed bottom-4 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <motion.div 
          variants={slideIn('down', 'tween', 0.5, 1)}
          initial="hidden"
          animate="show"
          viewport={{once: false, amount: 0.7}}
          className='w-full bg-black-100 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] 
          mx-auto px-5 flex justify-between items-center text-2xl text-secondary'
        >
          {navLinks.map((link) => {
            const Icon = link.icon; // Extract the icon component from the link object
            return (
              <Link 
                key={link.id} 
                to={link.id}
                activeClass='active'
                smooth={true}
                spy={true}
                offset={-200}
                duration={800}
                className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-[#915eff] hover:text-black hover:rounded-3xl'
              > {/* Add a key to the parent div */}
                <Icon /> {/* Render the icon component */}
              </Link>
            );
          })}
        </motion.div>
      </div>
    </nav>
  )
}

export default NavBar;