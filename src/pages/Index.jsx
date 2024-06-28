import React from "react";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Kitten Paradise</h1>
        <p className="text-lg mb-6">Enjoy this adorable kitten!</p>
        <img
          src="/images/cute-kitten.jpg"
          alt="Cute Kitten"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Index;