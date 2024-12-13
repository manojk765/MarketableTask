'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import { Float } from '@react-three/drei'

function MoneyIcon({ position }) {
  const meshRef = useRef(null)
  const [hovered, setHovered] = useState(false)

  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.1
    }
  })

  return (
    <Float
      speed={1.5}
      rotationIntensity={1}
      floatIntensity={2}
      position={position}
    >
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        {/* Replace Text3D with a simple 3D object */}
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color={hovered ? "#22c55e" : "#16a34a"}
          emissive={hovered ? "#22c55e" : "#16a34a"}
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  )
}

export function MoneyScene() {
  const [key, setKey] = useState(0)
  const [error, setError] = useState(null)

  useEffect(() => {
    const handleContextLost = (event) => {
      event.preventDefault()
      console.log('WebGL context lost. Attempting to restore...')
      setKey(prevKey => prevKey + 1)
    }

    const canvas = document.querySelector('canvas')
    canvas?.addEventListener('webglcontextlost', handleContextLost)

    return () => {
      canvas?.removeEventListener('webglcontextlost', handleContextLost)
    }
  }, [])

  if (error) {
    return <div className="text-white bg-red-500 p-4 rounded">{error}</div>
  }

  return (
    <Canvas
      key={key}
      camera={{ position: [0, 0, 5], fov: 75 }}
      className="h-full w-full absolute inset-0 -z-10"
      onCreated={() => {
        console.log('Canvas created successfully')
      }}
      onError={(e) => {
        console.error('Canvas error:', e)
        setError('Error creating 3D scene. Please check console for details.')
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <MoneyIcon position={[-2, 1, 0]} />
      <MoneyIcon position={[2, -1, -2]} />
      <MoneyIcon position={[1, 2, -1]} />
      <MoneyIcon position={[-1, -2, -3]} />
    </Canvas>
  )
}

export default MoneyScene
