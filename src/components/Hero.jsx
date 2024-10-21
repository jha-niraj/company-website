import React,{useState,useRef,useEffect} from 'react';
import metal from './Assets/metal-thing.png'

const Hero = () => {


    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollContainerRef = useRef(null);
  
    const handleScroll = () => {
        const position = scrollContainerRef.current.scrollTop;
        setScrollPosition(Math.floor(position)+'px');
        console.log('Container Scroll position:', position);
    };

  //   const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       // Check if the element is intersecting (visible)
  //       if (entries[0].isIntersecting) {
  //         setIsVisible(true);
  //         const scrollContainer = scrollContainerRef.current;
  //         scrollContainer.addEventListener('scroll', handleScroll);
  //       } else {
  //         setIsVisible(false);
  //         const scrollContainer = scrollContainerRef.current;
  //         scrollContainer.removeEventListener('scroll', handleScroll);
  //       }
  //     },
  //     {
  //       threshold: 0.1, // Trigger when 10% of the element is visible
  //     }
  //   );
  //   if (elementRef.current) {
  //     observer.observe(elementRef.current); // Start observing the element
  //   }
  //   return () => {
  //     if (elementRef.current) {
  //       observer.unobserve(elementRef.current); // Stop observing on cleanup
  //     }
  //   };
  // }, []);


  return (
    <div id='hero' ref={scrollContainerRef} className='min-h-screen bg-black'>
      <div id='full-hero' className="" >
        <div ref={elementRef} className='' data-aos="slide-down" >
          <div id='hero-top' className="flex lg:justify-center items-center ">
              <img src={metal} className="h-36 z-10 -mr-20 mobile:w-40 tablet:w-auto"/>
              <h1 className="text-7xl xl:text-8xl">DESIGN WITH</h1>
          </div>
          <div id='hero-bottom' className="" data-aos="slide-up">
              <h1 className="text-center text-7xl xl:text-8xl " id='hero-left-heading'>DEVELOPER <span className='bg-gradient-to-l from-blue-700  to-black pr-10'>CODER'z</span></h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
