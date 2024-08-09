import React from 'react';
export const Loading = () => {

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-blue-500 text-white text-2xl font-bold flex items-center justify-center rounded-full">
              <span>Logo</span>
            </div>
          </div>
        </div>
      </div>
    );
};
