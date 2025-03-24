// import React from "react";
import RegisterForm from "../components/RegisterForm";
import ModelTux from "../components/ModelTux";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import BoxWrapper from "./Closed";
// import "./Page2.css";

function Registration() {
  return (
    <div id="register" className="absolute min-h-screen py-16 bg-[#2b4bff50] z-50 flex items-center md:justify-center flex-col gap-[9vh]"  style={{width:"100%",bottom:"0%"}}>
      <div className="text flex items-center justify-center flex-col md:gap-6">
        <div className="heading  text-white font-bold text-2xl md:text-[6vh] text-center">
        Walchand Linux Users` Group
        <br/>
          Member Board Drive 2
        </div>
        <div className="heading text-white text-[1.2vh] text-2xl md:text-[2.5vh] text-center">
          <p>
            Prepare to join a vibrant community of Linux enthusiasts and immerse
            yourself in the dynamic world of Open Source.
          </p>
        </div>
      </div>

      <div className="bg-[#ffffff54]  h-max pt-5 box flex flex-col md:flex-row-reverse gap-4 w-full md:w-[80vw] h-[80vh] rounded-xl ">
        <div id="register" className="register flex-1 flex justify-center items-center w-full md:w-[50%] bg-opacity-[20%] rounded-xl  sm:mb-0">
          <RegisterForm />
          <div className="border-div"></div>
        </div>

        <div id="tux" className="tux flex-1 flex justify-center items-center w-full md:w-[50%] bg-opacity-[20%] rounded-xl ">
          <Canvas className="w-[70vw] h-[250vh] md:w-full md:h-full">
            <ambientLight intensity={1.5} />
            <ModelTux />
            <OrbitControls enableZoom={false} enablePan={true} />
          </Canvas>
        </div>        
      </div>
    </div>
  );
}

export default Registration;