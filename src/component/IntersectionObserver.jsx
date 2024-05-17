import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const InterSectionObserver = ({children,setVisible,thresholdValue=0.5}) => {
  const controls = useAnimation();
  const ref = useRef(null);
console.log(ref,'reff')
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('Intersection change:', entry.isIntersecting);
        if (entry.isIntersecting) {
        //   controls.start('visible');
        setVisible && setVisible(true)
        } else {
        //   controls.start('hidden');
        setVisible(false)
        }
      },
      {
        threshold: thresholdValue,  // Customize this value based on how much of the item must be visible
      }
    );

    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref?.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  // const variants = {
  //   visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  //   hidden: { opacity: 0, scale: 0.8 }
  // };

  return (
    <div
      ref={ref}
      // initial={{opacity:0,y:'-200%'}}
      // animate={{opacity:1,y:'0'}}
      // variants={variants}
      // transition={{duration:5}}
      // style={{ marginBottom: 20 }}
    >
      
    {children}
    </div>
  );
};

export default InterSectionObserver;
