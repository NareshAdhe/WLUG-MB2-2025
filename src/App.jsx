import React, { useState, useEffect } from "react";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  
  const getTransformX = (multiplier) => {
    if (windowWidth < 640) { 
      return scrollY * (multiplier * 0.5); 
    } else if (windowWidth < 1024) { 
      return scrollY * (multiplier * 0.75); 
    } else { 
      return scrollY * multiplier; 
    }
  };

  return (
    <div className="bg-black min-h-[300vh] w-full text-white relative overflow-hidden">
      {/* Night Sky */}
      <img 
        src="src/assets/night.png" 
        alt="Night Sky" 
        className="absolute h-[170vh] w-full"
      />

      {/* Moon */}
      <img 
        src="src/assets/moon.png" 
        alt="Moon" 
        className="absolute z-[100] top-[5%] left-[15%] 
                  w-[70px] h-[70px]  // Small size for mobile
                  sm:w-[150px] sm:h-[150px]  
                  md:w-[20px] md:h-[20px]  
                  lg:w-[150px] lg:h-[150px]"
        style={{ 
          transform: `translateY(${getTransformX(1)}px)`,
          height: window.innerWidth <= 473 && window.innerHeight <= 857 ? "150px" : undefined,
          width: window.innerWidth <= 473 && window.innerHeight <= 857 ? "150px" : undefined,
        }}
      />

      {/* Mountain One */}
      <img 
        src="src/assets/maountain_one.png" 
        alt="Mountain One" 
        className="absolute z-[1000] h-[15vh] top-[25%] sm:h-[30vh] md:h-[40vh] lg:h-[50vh] w-auto left-[-25%]"
        style={{ 
          transform: `translateX(${Math.min(40, getTransformX(0.05))}%)`,
          height: window.innerWidth <= 473 && window.innerHeight <= 857 ? "10%" : undefined,
          top: window.innerWidth <= 473 && window.innerHeight <= 857 ? "17%" : undefined,
          
        }}  
            
      />

      {/* Mountain Two */}
      <img 
        src="src/assets/mountain_two.png" 
        alt="Mountain Two" 
        className="absolute z-[1000] h-[15vh] top-[26%] sm:h-[30vh] md:h-[40vh] lg:h-[50vh] w-auto right-[-35%]"
        style={{ 
          transform: `translateX(${Math.max(-40, -(getTransformX(0.05)))}%)`,
          height: window.innerWidth <= 473 && window.innerHeight <= 857 ? "10%" : undefined,
          top: window.innerWidth <= 473 && window.innerHeight <= 857 ? "17%" : undefined,
        }}      
      />

      {/* Mountain Three */}
      <img 
        src="src/assets/maountain_one.png" 
        alt="Mountain Three" 
        className="absolute z-[100] h-[15vh] top-[25%] sm:h-[30vh] md:h-[40vh] lg:h-[50vh] w-auto left-[-1%]
        m-0"
        style={{ 
          transform: `translateX(${Math.min(40, getTransformX(0.06))}%)`,
          visibility: window.innerWidth <= 473 && window.innerHeight <= 857 ? "hidden" : "visible",
          
        }}      
      />

      {/* Building */}
      

        <img 
          src="src/assets/building.png" 
          alt="Building" 
          className="absolute z-[1000] 
                    h-[200%]   
                    w-[150%] 
                    sm:-top-[10%]
                    object-cover"
          style={{
            top: window.innerWidth <= 473 && window.innerHeight <= 857 ? "-18%" : "-5%",
            

          }}      
        />

        <img 
          src="src/assets/building.png" 
          alt="Building" 
          className="absolute z-[1000] 
                    h-[200%]   
                    w-[150%] 
                    sm:-top-[10%]
                    object-cover"
          style={{
            top: window.innerWidth <= 473 && window.innerHeight <= 857 ? "-18%" : "20%",
            

          }}      
        />


        <img src="src/assets/vally_one.png" alt="" className="absolute z-[1000] "
        style={{
          top: window.innerWidth <= 473 && window.innerHeight <= 857 ? "27%" : "44%",
          height: window.innerWidth <= 473 && window.innerHeight <= 857 ? "30%" : "50%",
          right: window.innerWidth <= 473 && window.innerHeight <= 857 ? "-70%" : "-21%",
          transform: window.innerWidth <= 473 && window.innerHeight <= 857 ?`translateX(${Math.max(-30, -(getTransformX(0.09)))}%)` : `translateX(${Math.max(-40, -(getTransformX(0.05)))}%)`,
        }}   
        />

        <img src="src/assets/vally_two.png" alt="" className="absolute z-[1000] "
          style={{
            top: window.innerWidth <= 473 && window.innerHeight <= 857 ? "27%" : "44%",
            height: window.innerWidth <= 473 && window.innerHeight <= 857 ? "30%" : "50%",
            left: window.innerWidth <= 473 && window.innerHeight <= 857 ? "-70%" : "-21%",
            transform: window.innerWidth <= 473 && window.innerHeight <= 857 ?`translateX(${Math.min(30, (getTransformX(0.09)))}%)` : `translateX(${Math.min(40, (getTransformX(0.05)))}%)`,
        }}   
        />
     
      


    </div>
  );
}

export default App;