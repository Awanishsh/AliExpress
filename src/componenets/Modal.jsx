import React from "react";

function Modal({ isModelOpen, setisModelOpen, children }) {
  if (!isModelOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 text-3xl hover:text-gray-600"
          onClick={() => setisModelOpen(false)}
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
