import { useGLTF } from '@react-three/drei';
import { Avatar } from './Avatar';

export const Experience = () => {
  const { scene } = useGLTF('/models/avatar.glb');

  return (
    <>
      <ambientLight intensity={0.5} />
      // this one works fines
      <primitive object={scene} />
      // this one doesn't work
      {/* <Avatar /> */}
    </>
  );
};
