// import React from "react";
import RegisterForm from "../components/RegisterForm";
import ModelTux from "../components/ModelTux";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import BoxWrapper from "./Closed";
// import "./Page2.css";



function Registration() {
  return (
    <div id="register" className="min-h-screen py-16 bg-[#2b4bff5000] z-50 flex items-center md:justify-center flex-col gap-[9vh] w-full mb-24">
      <div className="text text-black flex items-center justify-center flex-col md:gap-6 bg-white/10 px-8 py-4 rounded-lg backdrop-blur-sm">
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

      <div className="pt-5 box flex flex-col md:flex-row-reverse gap-4 w-full md:w-[80vw] h-[80vh] rounded-lg bg-white/10 backdrop-blur-sm">
        <div id="register" className="register flex-1 flex justify-center items-center w-full md:w-[50%] bg-opacity-[20%] sm:mb-0">
          <RegisterForm />
          <div className="border-div"></div>
        </div>

        <div id="tux" className="tux flex-1 flex justify-center items-center w-full md:w-[50%]">
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