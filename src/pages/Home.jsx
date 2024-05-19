import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { HomeInfo, Loader } from "../components";
import Mountain from "../models/Mountain";
import { Bird } from "../models/Bird";

import Obito from "../models/Obito";

function Home() {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);

  const adjustObitoForScreenSize = () => {
    let screenScale, screenPosition, rotation;

    if (window.innerWidth < 768) {
      screenScale = [10, 10, 10];
      screenPosition = [1, 1, 0];
      rotation = [0, 0, 0];
    } else {
      screenScale = [30, 30, 30];
      screenPosition = [1, 3, -10];
      rotation = [-0.1, 0.4, 0.1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [isObitoScale, isObitoPosition, isObitoRotaion] =
    adjustObitoForScreenSize();

  return (
    <section className="w-full h-screen relative bg-main">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Obito
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={isObitoPosition}
            scale={isObitoScale}
            rotation={isObitoRotaion}
          />
          {/* <Itachi
            position={isItachiPosition}
            scale={isItachiScale}
            rotation={isItachiRotaion}
          /> */}
          <Mountain />
          <Bird />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;
