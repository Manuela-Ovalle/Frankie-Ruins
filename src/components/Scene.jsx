import {
  PresentationControls,
  useGLTF,
  OrbitControls,
  Center,
  Environment,
} from '@react-three/drei'
import * as THREE from 'three'
import { useLoader, Canvas } from '@react-three/fiber'
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Scene() {
  const model = useGLTF('../../models/fingerPrint-gold.gltf')

  const map = useLoader(
    THREE.TextureLoader,
    '../C09E5C_DAD2B9_654429_81582D-512px.png'
  )

  return (
    <div className="canvas-container">
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 50,
          position: [-2, 2, 6],
        }}
      >
        <Environment
          background={false} // can be true, false or "only" (which only sets the background) (default: false)
          blur={0} // blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
          files={[
            'Standard-Cube-Map/px.png',
            'Standard-Cube-Map/nx.png',
            'Standard-Cube-Map/py.png',
            'Standard-Cube-Map/ny.png',
            'Standard-Cube-Map/pz.png',
            'Standard-Cube-Map/nz.png',
          ]}
          path="/"
          preset={null}
          scene={undefined} // adds the ability to pass a custom THREE.Scene, can also be a ref
          encoding={undefined} // adds the ability to pass a custom THREE.TextureEncoding (default: THREE.sRGBEncoding for an array of files and THREE.LinearEncoding for a single texture)
        />
        {/* <Environment preset="sunset" /> */}
        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={10} />
        <PresentationControls
          enabled={true}
          global={false}
          cursor={true}
          snap={false}
          speed={1} // Speed factor
          zoom={1} // Zoom factor when half the polar-max is reached
          polar={[0, Math.PI / 2]} // Vertical limits
          azimuth={[-Infinity, Infinity]} // Horizontal limits
          rotation={[0, 0, 0]} // Default rotation
          config={{ mass: 1, tension: 90, friction: 20 }} // Spring config
        >
          <primitive
            object={model.scene}
            scale={1.8}
            rotation-z={7}
            rotation-x={1.2}
            rotation-y={-0.3}
            position={[1, 0, -1]}
          >
            <meshBasicMaterial color="#ffffff" />
          </primitive>
        </PresentationControls>

        {/* <mesh
          position-y={-3}
          position-x={1}
          rotation-x={-Math.PI * 0.5}
          scale={10}
        >
          <planeGeometry />
          <meshBasicMaterial color="#FFB7D2" />
        </mesh> */}
      </Canvas>
      <p className="ring-instruction">
        click and drag <br></br>on ring to move around
      </p>
    </div>
  )
}
