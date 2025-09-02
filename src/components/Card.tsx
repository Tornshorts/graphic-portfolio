import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => (
  <div className="p-4 border rounded shadow bg-white">
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    {children}
  </div>
);

export default Card;
