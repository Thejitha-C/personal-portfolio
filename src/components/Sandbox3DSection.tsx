import React, { useState } from 'react';
import { Box, Sparkles, Sliders, RefreshCw, Layers, Eye } from 'lucide-react';
import { ThreeCanvas } from './ThreeCanvas';

export const Sandbox3DSection: React.FC = () => {
  const [shape, setShape] = useState<'icosahedron' | 'torusKnot' | 'particles' | 'sphere' | 'waves'>('icosahedron');
  const [colorHex, setColorHex] = useState<string>('#3b82f6');
  const [density, setDensity] = useState<number>(1200);

  const colors = [
    { name: 'Cyber Blue', hex: '#3b82f6' },
    { name: 'Neon Emerald', hex: '#10b981' },
    { name: 'Sunset Amber', hex: '#f59e0b' },
    { name: 'Deep Purple', hex: '#8b5cf6' },
    { name: 'Hot Pink', hex: '#ec4899' },
  ];

  return (
    <section id="sandbox" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background radial light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>3D WEBGL PLAYGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Interactive 3D Sandbox
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Test real-time WebGL geometry shaders, lighting presets, and particle systems. Move your cursor over the stage to manipulate 3D object rotation.
          </p>
        </div>

        {/* Sandbox Canvas & Controls Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-950/80 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-md items-center">
          
          {/* Controls Panel (Left or Top) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Shape Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Box className="w-4 h-4 text-blue-400" />
                <span>3D Geometry Primitive</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'icosahedron', label: 'Icosahedron' },
                  { id: 'torusKnot', label: 'Torus Knot' },
                  { id: 'sphere', label: 'Cyber Sphere' },
                  { id: 'waves', label: 'Wave Plane' },
                  { id: 'particles', label: 'Particle Cloud' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setShape(item.id as any)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      shape === item.id
                        ? 'bg-blue-600 text-white border-blue-500 shadow-md'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-850 hover:border-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Palette Picker */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-blue-400" />
                <span>Shader Accent Color</span>
              </label>
              <div className="flex items-center gap-3">
                {colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setColorHex(c.hex)}
                    className={`w-8 h-8 rounded-full border-2 transition-transform ${
                      colorHex === c.hex ? 'scale-125 border-white shadow-lg' : 'border-transparent opacity-75 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Particle Density Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                <span>Particle Density</span>
                <span className="text-blue-400 font-mono">{density} pts</span>
              </div>
              <input
                type="range"
                min="300"
                max="3000"
                step="100"
                value={density}
                onChange={(e) => setDensity(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>

            {/* Quick Helper Note */}
            <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-800/40 text-xs text-blue-300 space-y-1">
              <div className="font-bold flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" />
                <span>Mouse Interactive Stage</span>
              </div>
              <p className="text-blue-200/80">
                The 3D WebGL renderer computes hardware-accelerated matrix transformations reacting smoothly to your cursor position.
              </p>
            </div>
          </div>

          {/* 3D WebGL Canvas Viewport (Right Column) */}
          <div className="lg:col-span-7 h-[380px] sm:h-[450px] w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 relative shadow-inner">
            <ThreeCanvas
              shape={shape}
              colorHex={colorHex}
              density={density}
              interactive={true}
              className="w-full h-full"
            />
            
            {/* Viewport Overlay Controls */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-400 bg-slate-950/80 px-4 py-2 rounded-xl backdrop-blur-md border border-slate-800">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>THREE.JS WEBGL RENDERER</span>
              </span>
              <span>SHAPE: {shape.toUpperCase()}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
