import React from 'react';
import { Link } from 'react-router-dom';

function navPanels() {
  const navItems = ['Project', 'Blog', 'About'];

  const listOfNavs = navItems.map((item) => (
    <button>
      <Link className="text-white text-3xl align-center" to={`/${item.toLowerCase()}`}>
        <div className="">{item.toLowerCase()}</div>
      </Link>
    </button>
  ));
  return listOfNavs;
}

export default () => {
  return (
    <div className="flex flex-row justify-between bg-theme0">
      <div className="flex flex-col basis-1/12">
        <Link to="/">
          <img className="w-10 h-10" alt="profile img" src={`${process.env.PUBLIC_URL}/img/profile.JPG`} />
          <div className="">Albert Liu</div>
        </Link>
      </div>
      <div className="flex flex-row justify-around basis-3/12">{navPanels()}</div>
    </div>
  );
};
