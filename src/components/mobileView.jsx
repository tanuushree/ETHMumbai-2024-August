import React, { useState } from 'react';
import { IoIosMenu, IoIosClose } from 'react-icons/io';

function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed top-10 left-5 z-50 w-full md:hidden">
      {/* Hamburger Menu Button */}
      {menuOpen ? (
        <IoIosClose
        style={{ transform: 'scale(2)', color: 'brown' }}
        onClick={toggleMenu}
        className="absolute top-4 right-4"
      />
      ) : (
        <IoIosMenu
          style={{ transform: 'scale(2)', color: 'brown' }}
          onClick={toggleMenu}
          className="ml-4"
        />
      )}

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className='relative' >
        <div className="fixed top-0 left-0 right-0 w-64 h-fit 
        flex flex-col bg-gray-800 bg-opacity-75 transition-opacity duration-300 overflow-y-auto">
          <div className="bg-white p-4 rounded-md mt-20">
          <IoIosClose
              style={{ transform: 'scale(2)', color: 'white' }}
              onClick={toggleMenu}
              className="absolute top-4 left-5 cursor-pointer"
            />
            <ul>
              <li>Menu Item 1</li>
              <li>Menu Item 2</li>
              <li>Menu Item 3</li>
            </ul>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
