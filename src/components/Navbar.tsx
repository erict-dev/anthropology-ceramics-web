// MenuBar.tsx
import React from 'react';

const MenuBar: React.FC = () => {
  const menuItems: string[] = ['About', 'Classes', 'Shop'];

  return (
    <nav className="absolute z-10 top-0 right-0 p-4">
      <ul className="flex space-x-4">
        {menuItems.map((item) => (
          <li key={item}>
            <a href={`${item.toLowerCase()}`} className="">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuBar;
