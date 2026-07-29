import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  interactive?: boolean;
  density?: number;
  shape?: 'icosahedron' | 'torusKnot' | 'particles' | 'stars' | 'sphere' | 'waves' | 'none';
  colorHex?: string;
  className?: string;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  interactive = true,
  density = 1200,
  shape = 'stars',
  colorHex = '#3b82f6',
  className = '',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all floating elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Subtle Ambient & Point Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(new THREE.Color(colorHex), 2, 30);
    pointLight1.position.set(4, 4, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x10b981, 1.5, 30);
    pointLight2.position.set(-4, -4, 2);
    scene.add(pointLight2);

    // Helper: Create circular star texture programmatically
    const createStarTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(200, 230, 255, 0.8)');
        gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const starTexture = createStarTexture();

    // 1. Primary Floating Twinkling Stars
    const starCount = density;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starScales = new Float32Array(starCount);
    const starSpeeds = new Float32Array(starCount);
    const starColors = new Float32Array(starCount * 3);

    const palette = [
      new THREE.Color('#ffffff'), // Pure White
      new THREE.Color('#93c5fd'), // Light Blue
      new THREE.Color('#38bdf8'), // Sky Blue
      new THREE.Color('#a7f3d0'), // Soft Emerald
      new THREE.Color('#c084fc'), // Soft Purple
    ];

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      starPositions[i3] = (Math.random() - 0.5) * 16;
      starPositions[i3 + 1] = (Math.random() - 0.5) * 16;
      starPositions[i3 + 2] = (Math.random() - 0.5) * 12;

      starScales[i] = Math.random() * 0.12 + 0.03;
      starSpeeds[i] = Math.random() * 0.02 + 0.005;

      const randomColor = palette[Math.floor(Math.random() * palette.length)];
      starColors[i3] = randomColor.r;
      starColors[i3 + 1] = randomColor.g;
      starColors[i3 + 2] = randomColor.b;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.1,
      map: starTexture,
      transparent: true,
      opacity: 0.9,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const starField = new THREE.Points(starGeo, starMat);
    mainGroup.add(starField);

    // 2. Secondary Glowing Stardust Layer (Finer Background Dust)
    const dustCount = Math.floor(density * 0.6);
    const dustGeo = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);

    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPositions[i] = (Math.random() - 0.5) * 20;
      dustPositions[i + 1] = (Math.random() - 0.5) * 20;
      dustPositions[i + 2] = (Math.random() - 0.5) * 14;
    }

    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMat = new THREE.PointsMaterial({
      size: 0.025,
      color: new THREE.Color('#60a5fa'),
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });

    const dustField = new THREE.Points(dustGeo, dustMat);
    mainGroup.add(dustField);

    // Optional legacy 3D shape (Only included if explicitly requested and NOT 'stars' or 'particles' or 'none')
    let mainMesh: THREE.Mesh | null = null;
    let mainGeo: THREE.BufferGeometry | null = null;
    let mainMat: THREE.Material | null = null;

    if (shape !== 'stars' && shape !== 'particles' && shape !== 'none') {
      if (shape === 'icosahedron') {
        mainGeo = new THREE.IcosahedronGeometry(1.6, 1);
      } else if (shape === 'torusKnot') {
        mainGeo = new THREE.TorusKnotGeometry(1.2, 0.3, 120, 16);
      } else if (shape === 'sphere') {
        mainGeo = new THREE.SphereGeometry(1.5, 32, 32);
      } else if (shape === 'waves') {
        mainGeo = new THREE.PlaneGeometry(10, 10, 32, 32);
      }

      if (mainGeo) {
        mainMat = new THREE.MeshStandardMaterial({
          color: new THREE.Color(colorHex),
          wireframe: true,
          transparent: true,
          opacity: 0.2, // much softer if used
        });
        mainMesh = new THREE.Mesh(mainGeo, mainMat);
        mainGroup.add(mainMesh);
      }
    }

    // Smooth Mouse Interaction & Motion Variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 2;
      mouseY = -(y / rect.height) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Responsive Resize Observer
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      if (newW === 0 || newH === 0) return;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    });

    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse rotation interpolation
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      // Gentle floating rotation of the starfield responding to mouse
      mainGroup.rotation.y = elapsedTime * 0.05 + targetX * 0.3;
      mainGroup.rotation.x = elapsedTime * 0.03 + targetY * 0.3;

      // Twinkle effect: oscillate opacity & subtle vertical float on positions
      const posAttr = starGeo.attributes.position;
      const posArr = posAttr.array as Float32Array;

      for (let i = 0; i < starCount; i++) {
        const i3 = i * 3;
        // Float gently up and down
        posArr[i3 + 1] += Math.sin(elapsedTime * 2 + i) * 0.0015;
      }
      posAttr.needsUpdate = true;

      // Pulse star opacity for twinkling star effect
      starMat.opacity = 0.75 + Math.sin(elapsedTime * 2.5) * 0.2;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      starGeo.dispose();
      starMat.dispose();
      dustGeo.dispose();
      dustMat.dispose();
      starTexture.dispose();
      if (mainGeo) mainGeo.dispose();
      if (mainMat) mainMat.dispose();
      renderer.dispose();
    };
  }, [interactive, density, shape, colorHex]);

  return <div ref={mountRef} className={`w-full h-full min-h-[300px] relative pointer-events-none ${className}`} />;
};
