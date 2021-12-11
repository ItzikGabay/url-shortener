import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export const _id: React.FC = ({}) => {
  const [linkData, setLinkData]: any = useState({});
  const router = useRouter();
  const { id } = router.query;

  const handleLink = async (id: any) => {
    try {
      const rawResponse = await fetch(`http://localhost:5000/shorten/${id}`, {
        method: 'GET',
      });

      const content = await rawResponse.json();
      setLinkData(content);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    handleLink(id);
  }, [id]);

  useEffect(() => {
    if (linkData.original) window.location.href = linkData.original;
  }, [linkData]);

  if (!linkData.original)
    return <p>We cannot find the ID your looking for. sorry..</p>;
  return <p>Redirecting to {linkData.original} ...</p>;
};

export default _id;
