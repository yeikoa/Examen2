"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [showMaintenanceDropdown, setShowMaintenanceDropdown] = useState(false);
  const [showAlmacenDropdown, setShowAlmacenDropdown] = useState(false);

  const toggleMaintenanceDropdown = () => {
    setShowMaintenanceDropdown(!showMaintenanceDropdown);
  };

  const toggleAlmacenDropdown = () => {
    setShowAlmacenDropdown(!showAlmacenDropdown);
  };

  const routes = [
    { href: '/maintenance', name: 'GPT', subroutes: ['Reactive', 'Preventive'] },
  
    { href: '/contacto', name: 'Contacto' },
  ];

  return (
    <nav className="flex items-center justify-between p-2" style={{ backgroundColor: 'rgb(53, 53, 53)' }}>
      <div className="flex items-center">
        <Image src="/bot.jpg" alt="bot" width={50} height={50} className='rounded-full' />
        <Link href="/">
          <span className="ml-2 text-white text-lg font-bold cursor-pointer">Inicio</span>
        </Link>
      </div>
      <div className="flex items-center">
        {routes.map((route) => (
          <div key={route.href} className="relative">
            {route.name === 'Mantenimiento' ? (
              <div className="relative">
                <span
                  className="text-white mr-4 cursor-pointer"
                  onClick={toggleMaintenanceDropdown}
                >
                  {route.name}
                </span>
                {showMaintenanceDropdown && route.subroutes && (
                  <div className="absolute z-10 bg-white rounded shadow-md py-2">
                    {route.subroutes.map((subroute) => (
                      <Link key={subroute} href={`/maintenance/${subroute.toLowerCase().replace(' ', '-')}`}>
                        <span className="block text-gray-800 px-4 py-2 hover:bg-blue-100 cursor-pointer">
                          {subroute}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : route.name === 'Almacen' ? (
              <div className="relative">
                <span
                  className="text-white mr-4 cursor-pointer"
                  onClick={toggleAlmacenDropdown}
                >
                  {route.name}
                </span>
                {showAlmacenDropdown && route.subroutes && (
                  <div className="absolute z-10 bg-white rounded shadow-md py-2">
                    {route.subroutes.map((subroute) => (
                      <Link key={subroute} href={`/almacen/${subroute.toLowerCase().replace(' ', '-')}`}>
                        <span className="block text-gray-800 px-4 py-2 hover:bg-blue-100 cursor-pointer">
                          {subroute}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={route.href} href={route.href}>
                <span className="text-white mr-4 cursor-pointer">{route.name}</span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;