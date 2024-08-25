import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className=" ">
      <div className="max-w-app-lg">
        <div className="w-full min-h-[100svh]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
