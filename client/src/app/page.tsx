'use client';
import { Button } from '@/components/ui/button';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [info, setInfo] = useState('Click Me!');

  const handleClick = () => {
    fetch(process.env.NEXT_PUBLIC_API_URL + '/api/test')
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      });
  };

  return (
    <Button variant='outline' onClick={handleClick}>
      {info}
    </Button>
  );
}
