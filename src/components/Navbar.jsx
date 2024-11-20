import React from 'react';

function NavigationBar() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <span className="font-bold">Bill Splitter</span>
      <ul className="flex items-center space-x-4">
        <li><a href="#home" className="hover:text-gray-300">Home</a></li>
        <li><a href="#link" className="hover:text-gray-300">About</a></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
