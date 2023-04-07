import React, { useRef, useEffect, useState } from 'react';
import { zoomIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const Index = (data) => {
  const styles = StyleSheet.create({
    zoomIn: {
      animationName: zoomIn,
      animationDuration: '4s',
    },
  });

  const ref = useRef(null);
  const [animation, setAnimation] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimation(styles.zoomIn);
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [styles]);

  return (
    <div
      ref={ref}
      className={`opacity-[90%] w-[150px] h-[185px] border-[1px] border-[#BF17C3] bg-[#1f122a]-bg-500/50 rounded-sm md:mx-6 mt-12 ${css(
        animation
      )}`}
    >
      <img className="mx-auto w-[120px] mt-4" src={data.image} alt="" />
      <h1 className="text-white text-center font-md mt-2 leading-7">
        {data.name}
      </h1>
    </div>
  );
};

export default Index;
