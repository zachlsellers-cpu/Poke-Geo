"use client";

import { useRef, useCallback, useState } from "react";
import type { Coordinate } from "@/types";

interface Props {
  guessCoord: Coordinate | null;
  answerCoord: Coordinate | null;
  onGuess: (coord: Coordinate) => void;
  disabled: boolean;
  calibrating?: boolean; // dev-only: show click coordinates
}

function Pin({ coord, color, label }: { coord: Coordinate; color: "red" | "yellow"; label: string }) {
  const colorClass = color === "red" ? "bg-red-500" : "bg-yellow-400";
  const ringClass = color === "red" ? "ring-red-300" : "ring-yellow-200";
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-full pointer-events-none"
      style={{ left: `${coord.x}%`, top: `${coord.y}%` }}
      title={label}
    >
      <div className={`w-4 h-4 rounded-full ${colorClass} ring-2 ${ringClass} shadow-lg`} />
    </div>
  );
}

function ConnectingLine({ from, to }: { from: Coordinate; to: Coordinate }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: "visible" }}>
      <line
        x1={`${from.x}%`} y1={`${from.y}%`}
        x2={`${to.x}%`}   y2={`${to.y}%`}
        stroke="white" strokeWidth="1.5" strokeDasharray="4 3" strokeOpacity="0.7"
      />
    </svg>
  );
}

export default function MapCanvas({ guessCoord, answerCoord, onGuess, disabled, calibrating = false }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [lastClick, setLastClick] = useState<Coordinate | null>(null);
  const [hoverCoord, setHoverCoord] = useState<Coordinate | null>(null);

  const getCoord = useCallback((e: React.MouseEvent<HTMLDivElement>): Coordinate | null => {
    if (!containerRef.current) return null;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.min(100, Math.max(0, ((e.clientY - rect.top) / rect.height) * 100));
    return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const coord = getCoord(e);
      if (!coord) return;
      if (calibrating) {
        setLastClick(coord);
        return;
      }
      if (disabled) return;
      onGuess(coord);
    },
    [disabled, onGuess, calibrating, getCoord]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!calibrating) return;
      setHoverCoord(getCoord(e));
    },
    [calibrating, getCoord]
  );

  const showPlaceholder = !imgLoaded || imgError;

  return (
    <div className="flex flex-col gap-1">
      <div
        ref={containerRef}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoverCoord(null)}
        className={`relative w-full select-none rounded-lg border border-slate-700 overflow-hidden ${
          calibrating ? "cursor-crosshair" : disabled ? "cursor-default" : "cursor-crosshair"
        }`}
      >
        {showPlaceholder && (
          <div className="flex items-center justify-center bg-slate-700" style={{ aspectRatio: "4/3" }}>
            <div className="text-center text-slate-400">
              <div className="text-4xl mb-2">🗺️</div>
              <div className="text-lg font-bold">MAP PLACEHOLDER</div>
              <div className="text-sm mt-1">Drop kanto.png into public/maps/</div>
            </div>
          </div>
        )}

        {/* Image drives container height — no object-cover cropping so pins are pixel-accurate */}
        {!imgError && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/maps/kanto.png"
            alt="Kanto map"
            draggable={false}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className="block w-full h-auto"
            style={{ display: imgLoaded ? "block" : "none" }}
          />
        )}

        {/* Pin layer */}
        <div className="absolute inset-0 pointer-events-none">
          {guessCoord && answerCoord && <ConnectingLine from={guessCoord} to={answerCoord} />}
          {guessCoord && <Pin coord={guessCoord} color="red" label="Your guess" />}
          {answerCoord && <Pin coord={answerCoord} color="yellow" label="Correct location" />}
          {calibrating && lastClick && <Pin coord={lastClick} color="red" label="Last click" />}
        </div>

        {/* Calibration hover readout */}
        {calibrating && hoverCoord && (
          <div className="absolute bottom-2 left-2 bg-black/80 text-yellow-400 text-xs font-mono px-2 py-1 rounded pointer-events-none">
            x: {hoverCoord.x.toFixed(1)} y: {hoverCoord.y.toFixed(1)}
          </div>
        )}
      </div>

      {/* Calibration click log — shows below the map */}
      {calibrating && lastClick && (
        <div className="bg-slate-800 border border-yellow-400 rounded p-2 text-xs font-mono text-yellow-300">
          Last click → <span className="text-white">{"{ x: "}{lastClick.x.toFixed(1)}{", y: "}{lastClick.y.toFixed(1)}{" }"}</span>
          <span className="text-slate-400 ml-2">(click map to update)</span>
        </div>
      )}
    </div>
  );
}
