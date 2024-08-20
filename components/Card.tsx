// app/components/Card.tsx
import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  content: string;
  nextLink?: string;
  backLink?: string;
  restartLink?: string;
}

const Card: React.FC<CardProps> = ({ title, content, nextLink, backLink, restartLink }) => {
  return (
    <div className="p-6 bg-purple-600 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
      <p className="mb-6 text-white whitespace-pre-wrap">{content}</p>
      <div className="flex justify-around">
        {backLink && (
          <Link href={backLink}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Back
          </Link>
        )}
        {restartLink && (
          <Link href={restartLink}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
            Restart
          </Link>
        )}
        {nextLink && (
          <Link href={nextLink}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
            Next
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
