import React from "react";

export const Title = ({ children }) => {
  return (
    <h1 className="font-semibold text-5xl tracking-tight text-green-700 text-center mb-4">
      {children}
    </h1>
  );
};
// Todo dymanically generate probably
export const H3 = ({ children }) => {
  return (
    <h3 className="text-2xl leading-6 font-medium text-green-900">{children}</h3>
  );
};

export const H4 = ({ children }) => {
  return (
    <h4 className="text-lg leading-6 font-medium text-green-500">{children}</h4>
  )
}