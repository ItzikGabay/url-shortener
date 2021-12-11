import React from 'react';
import { useRouter } from 'next/router';
//

export const _id: React.FC = ({}) => {
  const handleLink = async () => {
    try {
      const rawResponse = await fetch(`http://localhost:5000/shorten/ib63h1`, {
        method: 'GET',
      });

      const content = await rawResponse.json();
      console.log(rawResponse);
    } catch (err) {
      console.log(err);
    }
  };
  handleLink();

  return <p>Redirecting from the id of ...</p>;
};

export default _id;
