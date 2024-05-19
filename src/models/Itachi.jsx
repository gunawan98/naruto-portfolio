/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: angelolamonaca (https://sketchfab.com/angelolamonaca)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/itachi-uchiha-sharingan-akatsuki-amaterasu-867dfc95e96a49878837f80428918ca9
Title: Itachi Uchiha Sharingan Akatsuki Amaterasu
*/

// const adjustObitoForScreenSize = () => {
// 	let screenScale, screenPosition, rotation;

// 	if (window.innerWidth < 768) {
// 		screenScale = [28, 28, 28];
// 		screenPosition = [1, -20, -18];
// 		rotation = [0, 0, 0];
// 	} else {
// 		screenScale = [30, 30, 50];
// 		screenPosition = [1, -15, -25.4];
// 		rotation = [0.2, 0, 0];
// 	}

// 	return [screenScale, screenPosition, rotation];
// };

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";

import itachiScene from "../assets/3d/itachi.glb";

function Itachi(props) {
  const itachiRef = useRef();

  const { nodes, materials } = useGLTF(itachiScene);

  return (
    <a.group ref={itachiRef} {...props}>
      <group
        position={[0, 0.052, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.368}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.007, 0.246, 0.005]}>
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials.Suit}
            />
            <mesh
              geometry={nodes.Object_5.geometry}
              material={materials.Red_suit}
            />
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials.Black_suit}
            />
          </group>
          <group
            position={[-0.002, 1.373, 0.224]}
            rotation={[0.446, 0, 0]}
            scale={0.043}
          >
            <mesh
              geometry={nodes.Object_10.geometry}
              material={materials.Blu_vestito}
            />
            <mesh
              geometry={nodes.Object_11.geometry}
              material={materials.Rete_vestito}
            />
            <mesh
              geometry={nodes.Object_12.geometry}
              material={materials.Nero}
            />
          </group>
          <group
            position={[-0.003, 1.503, -0.004]}
            rotation={[0.364, 0, -Math.PI]}
            scale={[-0.27, 0.042, 0.27]}
          >
            <mesh
              geometry={nodes.Object_14.geometry}
              material={materials.Black_Necklace}
            />
            <mesh
              geometry={nodes.Object_15.geometry}
              material={materials.Metallo_collana}
            />
          </group>
          <group
            position={[-0.024, 1.892, 0.339]}
            scale={[0.158, 0.059, 0.059]}
          >
            <mesh
              geometry={nodes.Object_17.geometry}
              material={materials.Metallo_coprifronte}
            />
            <mesh
              geometry={nodes.Object_18.geometry}
              material={materials.Metallo_scuro_coprifronte}
            />
          </group>
          <group
            position={[0.496, -2.459, 0.414]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.085, 0.085, 0.085]}
          >
            <mesh
              geometry={nodes.Object_28.geometry}
              material={materials.Smalto}
            />
            <mesh
              geometry={nodes.Object_29.geometry}
              material={materials.Skin}
            />
          </group>
          <group position={[0.114, 2.106, 0.02]} scale={0.114}>
            <mesh
              geometry={nodes.Object_35.geometry}
              material={materials.Nero_capelli}
            />
            <mesh
              geometry={nodes.Object_36.geometry}
              material={materials.Rosso_coda_capelli}
            />
          </group>
          <group position={[-0.005, 1.737, 0.1]} scale={0.141}>
            <mesh
              name="mesh_14"
              geometry={nodes.mesh_14.geometry}
              material={materials.Skin}
              morphTargetDictionary={nodes.mesh_14.morphTargetDictionary}
              morphTargetInfluences={nodes.mesh_14.morphTargetInfluences}
            />
            <mesh
              name="mesh_14_1"
              geometry={nodes.mesh_14_1.geometry}
              material={materials.Nero_pastello}
              morphTargetDictionary={nodes.mesh_14_1.morphTargetDictionary}
              morphTargetInfluences={nodes.mesh_14_1.morphTargetInfluences}
            />
            <mesh
              name="mesh_14_2"
              geometry={nodes.mesh_14_2.geometry}
              material={materials.Bianco_occhi}
              morphTargetDictionary={nodes.mesh_14_2.morphTargetDictionary}
              morphTargetInfluences={nodes.mesh_14_2.morphTargetInfluences}
            />
            <mesh
              name="mesh_14_3"
              geometry={nodes.mesh_14_3.geometry}
              material={materials.Rosso_occhio}
              morphTargetDictionary={nodes.mesh_14_3.morphTargetDictionary}
              morphTargetInfluences={nodes.mesh_14_3.morphTargetInfluences}
            />
            <mesh
              name="mesh_14_4"
              geometry={nodes.mesh_14_4.geometry}
              material={materials.Nero_occhi}
              morphTargetDictionary={nodes.mesh_14_4.morphTargetDictionary}
              morphTargetInfluences={nodes.mesh_14_4.morphTargetInfluences}
            />
            <mesh
              name="mesh_14_5"
              geometry={nodes.mesh_14_5.geometry}
              material={materials.Blood}
              morphTargetDictionary={nodes.mesh_14_5.morphTargetDictionary}
              morphTargetInfluences={nodes.mesh_14_5.morphTargetInfluences}
            />
          </group>
          <mesh
            geometry={nodes.Object_8.geometry}
            material={materials.Blue_shirt}
            position={[-0.277, 1.412, 0.112]}
            rotation={[0.369, 0.364, 0.24]}
            scale={0.088}
          />
          <mesh
            geometry={nodes.Object_20.geometry}
            material={materials.Blu_coprifronte}
            position={[-0.005, 1.966, 0.257]}
            scale={[0.064, 0.064, 0.006]}
          />
          <mesh
            geometry={nodes.mesh_6.geometry}
            material={materials.mesh_6}
            position={[-0.005, 1.737, 0.1]}
            scale={0.141}
          />
          <mesh
            geometry={nodes.mesh_7.geometry}
            material={materials.mesh_6}
            position={[-0.005, 1.737, 0.1]}
            scale={0.141}
          />
          <mesh
            geometry={nodes.mesh_8.geometry}
            material={materials.mesh_6}
            position={[-0.005, 1.737, 0.1]}
            scale={0.141}
          />
          <mesh
            geometry={nodes.Object_31.geometry}
            material={materials.Gambe}
            position={[0.545, -2.001, 0]}
            rotation={[0, 0, 0.081]}
            scale={0.09}
          />
          <mesh
            geometry={nodes.Object_33.geometry}
            material={materials.Blu_scarpe}
            position={[0.544, -2.001, 0.005]}
            rotation={[0, 0, 0.081]}
            scale={0.09}
          />
          <mesh
            geometry={nodes.Object_38.geometry}
            material={materials.Ears}
            position={[-0.005, 1.737, 0.1]}
            scale={0.141}
          />
        </group>
      </group>
    </a.group>
  );
}

export default Itachi;
