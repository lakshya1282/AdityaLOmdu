'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './WavyMesh.module.css';

interface WavyMeshProps {
  color?: string;
}

const WavyMesh: React.FC<WavyMeshProps> = ({ 
  color = '#0047AB' // Default to Cobalt Blue
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    
    // No fog for white background to keep it crisp

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 10, 15);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);

    // --- Lights ---
    const ambientLight = new THREE.AmbientLight(0x404080, 0.5);
    scene.add(ambientLight);

    const pLight1 = new THREE.PointLight(color, 2, 50);
    pLight1.position.set(10, 10, 10);
    scene.add(pLight1);

    const pLight2 = new THREE.PointLight(color, 1.5, 50);
    pLight2.position.set(-10, 10, -10);
    scene.add(pLight2);

    // --- Mesh Grid ---
    const SIZE = 65; // Increased size
    const SEGMENTS = 18; // Much wider gaps (fewer segments)
    const geometry = new THREE.PlaneGeometry(SIZE, SIZE, SEGMENTS, SEGMENTS);
    geometry.rotateX(-Math.PI / 2.2); // Flatter perspective

    const positionAttr = geometry.attributes.position;
    const originalPositions = new Float32Array(positionAttr.array.length);
    originalPositions.set(positionAttr.array);

    // Wireframe material
    const wireMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.6 // Good balance for white background
    });

    // Build custom LineSegments for clean square grid look (no diagonals)
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions: number[] = [];
    const lineIndicesMap: number[] = [];

    const wGrid = SEGMENTS + 1;
    const hGrid = SEGMENTS + 1;

    // Horizontal lines
    for (let y = 0; y < hGrid; y++) {
      for (let x = 0; x < wGrid - 1; x++) {
        const i1 = y * wGrid + x;
        const i2 = y * wGrid + (x + 1);
        linePositions.push(0, 0, 0, 0, 0, 0);
        lineIndicesMap.push(i1, i2);
      }
    }
    // Vertical lines
    for (let y = 0; y < hGrid - 1; y++) {
      for (let x = 0; x < wGrid; x++) {
        const i1 = y * wGrid + x;
        const i2 = (y + 1) * wGrid + x;
        linePositions.push(0, 0, 0, 0, 0, 0);
        lineIndicesMap.push(i1, i2);
      }
    }

    const linePosArr = new Float32Array(linePositions);
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePosArr, 3));

    const meshLines = new THREE.LineSegments(lineGeometry, wireMaterial);
    scene.add(meshLines);

    // Points
    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute('position', positionAttr);
    const pointsMat = new THREE.PointsMaterial({
      size: 0.1,
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.2,
      depthWrite: false
    });
    const points = new THREE.Points(pointsGeo, pointsMat);
    scene.add(points);

    // --- Animation State ---
    let time = 0;
    
    // Smooth camera movement
    const radius = 52; // Zoomed to fit the larger mesh
    const theta = Math.PI / 2; // Keep side view
    const phi = Math.PI / 2.5; // Slightly higher angle

    const updateMesh = (t: number) => {
      const pos = positionAttr.array as Float32Array;
      const orig = originalPositions;
      const count = positionAttr.count;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const x = orig[i3];
        const z = orig[i3 + 2];
        
        // Wave logic (More pronounced for larger mesh)
        const y = Math.sin(x * 0.15 + t) * 1.5 + Math.cos(z * 0.15 + t * 0.8) * 1.5;
        
        pos[i3 + 1] = y;
      }
      positionAttr.needsUpdate = true;

      // Update lines for square grid
      const lp = lineGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < lineIndicesMap.length; i++) {
        const src = lineIndicesMap[i] * 3;
        const dst = i * 3;
        lp[dst] = pos[src];
        lp[dst + 1] = pos[src + 1];
        lp[dst + 2] = pos[src + 2];
      }
      lineGeometry.attributes.position.needsUpdate = true;
    };

    let frameId = 0;

    const renderFrame = () => {
      time += reduceMotion ? 0.002 : 0.01;

      // Move lights slightly for dynamics
      pLight1.position.x = Math.sin(time * 0.5) * 1.6;
      pLight1.position.z = Math.cos(time * 0.5) * 1.6;
      
      // Fixed camera look
      camera.position.x = radius * Math.sin(phi) * Math.cos(theta);
      camera.position.y = radius * Math.cos(phi);
      camera.position.z = radius * Math.sin(phi) * Math.sin(theta);
      camera.lookAt(0, -2, 0);

      updateMesh(time);
      renderer.render(scene, camera);
    };

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      renderFrame();
    };

    if (reduceMotion) {
      renderFrame();
    } else {
      animate();
    }

    // --- Handle Resize ---
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderFrame();
    };
    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      geometry.dispose();
      lineGeometry.dispose();
      pointsGeo.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [color]);

  return (
    <div 
      ref={containerRef} 
      className={styles.container}
    />
  );
};

export default WavyMesh;
