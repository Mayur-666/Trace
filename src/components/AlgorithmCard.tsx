import type { AlgorithmData } from '@/utils/types';
import { useNavigate } from 'react-router-dom';
import React, { useRef, useState } from 'react';

interface AlgorithmCardProps {
  algorithm: AlgorithmData;
}

function AlgorithmCard({ algorithm }: Readonly<AlgorithmCardProps>) {
  const navigate = useNavigate();
  const cardRef = useRef<HTMLButtonElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (algorithm.route) {
      navigate(algorithm.route);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  return (
    <button
      ref={cardRef}
      className={`min-h-96 glow-border p-px rounded-xl overflow-hidden relative ${algorithm.route ? 'cursor-pointer' : 'cursor-default'}${hovered ? ' glow-active' : ''}`}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transform: `perspective(600px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: 'transform 0.2s cubic-bezier(.03,.98,.52,.99)',
      }}
    >
      <div className={`rounded-xl bg-[#1f1f1f] h-full w-full flex flex-col`}>
        <img
          src={algorithm.image}
          alt={algorithm.name}
          className="w-full rounded-t-xl"
        />

        <div className="p-4 flex flex-col gap-2">
          <h2 className="flex capitalize text-2xl">{algorithm.name}</h2>
          <p className="text-start text-sm">
            {algorithm.description || 'No desc available.'}
          </p>
        </div>
      </div>
    </button>
  );
}

export default AlgorithmCard;
