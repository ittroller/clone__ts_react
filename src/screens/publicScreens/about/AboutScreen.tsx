import React, { useEffect } from 'react';

const AboutScreen: React.FC = () => {
  useEffect(() => {
    console.log('AboutScreen.tsx - useEffect');
  }, []);

  return <>About Screen</>;
};

export default AboutScreen;
