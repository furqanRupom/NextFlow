import React from 'react'

const Avatars = () => {
  return (
    <div className="flex items-center space-x-3">
      <img
        className="object-cover w-10 h-10 rounded-full ring ring-gray-300 dark:ring-gray-600"
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
        alt=""
      />
      <img
        className="object-cover w-10 h-10 rounded-full ring ring-gray-300 dark:ring-gray-600"
        src="https://t3.ftcdn.net/jpg/01/93/56/24/360_F_193562494_uZu3hswS738ZiuypuRl2oID4gM7mmAHX.jpg"
        alt=""
      />
      <img
        className="object-cover w-10 h-10 rounded-full ring ring-gray-300 dark:ring-gray-600"
        src="https://img.freepik.com/free-photo/close-up-photo-amicable-man-black-shirt-posing-his-passport-picture_132075-8192.jpg"
        alt=""
      />
      <img
        className="object-cover w-10 h-10 rounded-full ring ring-gray-300 dark:ring-gray-600"
        src="https://i.pinimg.com/736x/93/f4/0e/93f40ec756290812571be534e12bcfe7.jpg"
        alt=""
      />
    </div>
  );
}

export default Avatars
