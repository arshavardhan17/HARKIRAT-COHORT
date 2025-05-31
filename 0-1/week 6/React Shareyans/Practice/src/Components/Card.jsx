import React from "react";

const Card = (props) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-sm hover:scale-105 transition-transform duration-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {props.title}
      </h2>
      <p className="text-gray-600 text-base">{props.content}</p>
    </div>
  );
};

export default Card;

// Destructuring

// import React from "react";

// const Card = ({ title, content }) => {
//   return (
//     <div className="bg-white rounded-2xl shadow-md p-6 max-w-sm hover:scale-105 transition-transform duration-200">
//       <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
//       <p className="text-gray-600 text-base">{content}</p>
//     </div>
//   );
// };

// export default Card;
