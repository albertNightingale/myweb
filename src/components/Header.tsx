import React from 'react';
import { Link } from 'react-router-dom';

function navPanels() {
  const navItems = ['Project', 'Blog', 'About'];

  const listOfNavs = navItems.map((item) => (
    <div className="px-3">
      <Link className="text-white text-3xl" to={`/${item.toLowerCase()}`}>
        {item.toLowerCase()}
      </Link>
    </div>
  ));
  return listOfNavs;
}

export default () => {
  return (
    <div className="flex flex-row justify-between bg-theme0">
      <Link className="flex flex-col" to="/">
        <img className="w-9 h-fit" alt="profile img" src={`${process.env.PUBLIC_URL}/img/square-profile.JPG`} />
      </Link>
      <div className="px-3 flex flex-row">{navPanels()}</div>
    </div>
  );
};
