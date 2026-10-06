import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const BackgroundCanvas = () => {
  const mountRef = useRef(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer = null;
    let scene = null;
    let camera = null;
    let animationFrameId = null;
    let geometry = null;
    let particleMaterial = null;
    let pointTexture = null;
    let icoGeometry = null;
    let icoMaterial = null;
    let sphereGeometry = null;
    let sphereMaterial = null;
    let torusGeometry = null;
    let torusMaterial = null;

    try {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // 1. Scene & Camera
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 25;

      // 2. WebGL Renderer with graceful check
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: window.devicePixelRatio < 2,
        powerPreference: 'high-performance'
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.appendChild(renderer.domElement);

      const worldGroup = new THREE.Group();
      scene.add(worldGroup);

      // 3. Particles
      const particleCount = window.innerWidth < 768 ? 300 : 700;
      geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const cyanColor = new THREE.Color(0x00f0ff);
      const blueColor = new THREE.Color(0x0066ff);
      const purpleColor = new THREE.Color(0x9333ea);

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 60;
        positions[i3 + 1] = (Math.random() - 0.5) * 60;
        positions[i3 + 2] = (Math.random() - 0.5) * 50;

        const choice = Math.random();
        const mixedColor = choice < 0.6 ? cyanColor : choice < 0.85 ? blueColor : purpleColor;
        colors[i3] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      // Circular canvas texture
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        grad.addColorStop(0, 'rgba(255,255,255,1)');
        grad.addColorStop(0.3, 'rgba(0,240,255,0.7)');
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 32, 32);
      }
      pointTexture = new THREE.CanvasTexture(canvas);

      particleMaterial = new THREE.PointsMaterial({
        size: 0.35,
        map: pointTexture,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });

      const particles = new THREE.Points(geometry, particleMaterial);
      worldGroup.add(particles);

      // 4. Subtle Wireframe Geometries
      icoGeometry = new THREE.IcosahedronGeometry(7, 1);
      icoMaterial = new THREE.MeshBasicMaterial({
        color: 0x0066ff,
        wireframe: true,
        transparent: true,
        opacity: 0.08
      });
      const icoMesh = new THREE.Mesh(icoGeometry, icoMaterial);
      icoMesh.position.set(12, -2, -5);
      worldGroup.add(icoMesh);

      sphereGeometry = new THREE.SphereGeometry(3.5, 16, 16);
      sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        wireframe: true,
        transparent: true,
        opacity: 0.05
      });
      const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphereMesh.position.set(-14, 8, -8);
      worldGroup.add(sphereMesh);

      torusGeometry = new THREE.TorusKnotGeometry(4.5, 0.4, 64, 12);
      torusMaterial = new THREE.MeshBasicMaterial({
        color: 0x9333ea,
        wireframe: true,
        transparent: true,
        opacity: 0.04
      });
      const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
      torusMesh.position.set(-10, -12, -10);
      worldGroup.add(torusMesh);

      // Mouse & Scroll Tracking
      let targetMouseX = 0;
      let targetMouseY = 0;
      let currentMouseX = 0;
      let currentMouseY = 0;

      const handleMouseMove = (e) => {
        targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        targetMouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
      };

      let scrollY = window.scrollY;
      const handleScroll = () => {
        scrollY = window.scrollY;
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('scroll', handleScroll, { passive: true });

      const handleResize = () => {
        if (!camera || !renderer) return;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize);

      const clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();

        if (!prefersReducedMotion) {
          currentMouseX += (targetMouseX - currentMouseX) * 0.05;
          currentMouseY += (targetMouseY - currentMouseY) * 0.05;

          worldGroup.rotation.y = currentMouseX * 0.15 + elapsedTime * 0.02;
          worldGroup.rotation.x = -currentMouseY * 0.15;

          icoMesh.rotation.x = elapsedTime * 0.06;
          icoMesh.rotation.y = elapsedTime * 0.08;
          sphereMesh.rotation.y = elapsedTime * 0.05;
          torusMesh.rotation.x = elapsedTime * 0.04;
          torusMesh.rotation.z = elapsedTime * 0.03;

          particles.rotation.y = elapsedTime * 0.015;
          worldGroup.position.y = (scrollY * 0.005) % 15;
        }

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);

        if (container && renderer && renderer.domElement) {
          try {
            container.removeChild(renderer.domElement);
          } catch (_) {}
        }

        if (geometry) geometry.dispose();
        if (particleMaterial) particleMaterial.dispose();
        if (pointTexture) pointTexture.dispose();
        if (icoGeometry) icoGeometry.dispose();
        if (icoMaterial) icoMaterial.dispose();
        if (sphereGeometry) sphereGeometry.dispose();
        if (sphereMaterial) sphereMaterial.dispose();
        if (torusGeometry) torusGeometry.dispose();
        if (torusMaterial) torusMaterial.dispose();
        if (renderer) renderer.dispose();
      };
    } catch (err) {
      console.warn('Three.js initialization safely bypassed:', err);
      setHasWebGL(false);
    }
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-60"
      aria-hidden="true"
    >
      {/* Fallback CSS ambient background if WebGL is unavailable */}
      {!hasWebGL && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,240,255,0.12),rgba(255,255,255,0))]" />
      )}
    </div>
  );
};

export default BackgroundCanvas;
