import React from "react";

const Inbox = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="w-16">
        <a>
          <div className="rounded-full bg-gray-400 w-8 h-8"></div>
        </a>
        <a>
          <div className="rounded-full bg-gray-400 w-8 h-8"></div>
        </a>
        <a>
          <div className="rounded-full bg-gray-400 w-8 h-8"></div>
        </a>
        <a>
          <div className="rounded-full bg-gray-400 w-8 h-8"></div>
        </a>
      </div>
      <div className="w-64 bg-green-200">submenu</div>
      <div className="flex-auto bg-blue-200">content</div>
    </div>
  );
};

export default Inbox;
