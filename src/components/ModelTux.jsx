import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const ModelTux = () => {
  const modelRef = useRef();
  const { scene } = useGLTF("/christmas_cute_penguin.glb");

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  return (
    <primitive scale={80} object={scene} position={[0, 1, 0]} ref={modelRef} />
  );
};

export default ModelTux;