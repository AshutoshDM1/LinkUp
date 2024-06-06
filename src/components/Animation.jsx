import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Plane, OrbitControls, useGLTF } from '@react-three/drei';
import css from './styles/Animation.module.css';

function extractMeshes(object) {
  const meshes = [];
  object.traverse((child) => {
    if (child.isMesh) {
      meshes.push(child);
    }
  });
  return meshes;
}

function ToyModel(props) {
  const group = useRef();
  const { scene } = useGLTF('./just_a_girl.glb'); // Adjust the path as needed

  useEffect(() => {
    console.log('Scene:', scene);
  }, [scene]);
  useFrame(() => {
    if (group.current) {
      group.current.rotation.z += 0.005;
    }
  });

  const meshes = extractMeshes(scene);

  return (
    <group ref={group} {...props} dispose={null}>
      {meshes.map((mesh, index) => (
        <mesh
          key={index}
          geometry={mesh.geometry}
          material={mesh.material}
          castShadow
        />
      ))}
    </group>
  );
}

export default function Animation() {
  return (
    <div className={css.container}>
      <Canvas shadows camera={{ position: [0, -180, 10], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <directionalLight intensity={.5} position={[2, 10, 5]} />
        <spotLight position={[10, 10, 0]} angle={0.15} penumbra={1} castShadow />
        <pointLight position={[-10, -10, -10]} color="black" />
        <ToyModel position={[-30, 30, -60]} />
        <Plane rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} args={[10, 10]} receiveShadow>
          <shadowMaterial attach="material" opacity={0.5} />
        </Plane>
        {/* <OrbitControls scale={3} /> */}
      </Canvas>
    </div>
  );
}
