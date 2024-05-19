import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

import mountainScene from "../assets/3d/mountain.glb";

export default function Mountain() {
  const mountainRef = useRef();

  // Load the 3D model and animations from the provided GLTF file
  const { scene } = useGLTF(mountainScene);

  useFrame((_, delta) => {
    if (mountainRef.current) {
      mountainRef.current.rotation.y += 0.03 * delta; // Adjust the rotation speed here
    }
  });

  return (
    // to create and display 3D objects
    <mesh ref={mountainRef} position={[5, 5, 5]} scale={[0.1, 0.1, 0.1]}>
      {/* use the primitive element when you want to directly embed a complex 3D
      model or scene */}
      <primitive object={scene} />
    </mesh>
  );
}
