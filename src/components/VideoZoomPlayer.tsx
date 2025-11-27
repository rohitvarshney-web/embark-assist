import { useRef, useState, useEffect } from "react";

interface VideoZoomPlayerProps {
  src: string;
  className?: string;
}

export const VideoZoomPlayer = ({ src, className = "" }: VideoZoomPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || !isHovering) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const magnifierSize = 200;
    const zoomLevel = 2.5;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const videoRect = video.getBoundingClientRect();
      const scaleX = video.videoWidth / videoRect.width;
      const scaleY = video.videoHeight / videoRect.height;

      const sourceX = (mousePos.x - magnifierSize / 2 / zoomLevel) * scaleX;
      const sourceY = (mousePos.y - magnifierSize / 2 / zoomLevel) * scaleY;
      const sourceWidth = (magnifierSize / zoomLevel) * scaleX;
      const sourceHeight = (magnifierSize / zoomLevel) * scaleY;

      ctx.save();
      ctx.beginPath();
      ctx.arc(magnifierSize / 2, magnifierSize / 2, magnifierSize / 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();

      ctx.drawImage(
        video,
        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight,
        0,
        0,
        magnifierSize,
        magnifierSize
      );

      ctx.restore();

      // Draw border
      ctx.beginPath();
      ctx.arc(magnifierSize / 2, magnifierSize / 2, magnifierSize / 2, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
      ctx.lineWidth = 4;
      ctx.stroke();

      // Add subtle shadow
      ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
      ctx.shadowBlur = 20;
      ctx.stroke();
    };

    const animationFrame = requestAnimationFrame(function animate() {
      draw();
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [isHovering, mousePos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <video
        ref={videoRef}
        src={src}
        controls
        autoPlay
        muted
        loop
        className={className}
      >
        Your browser does not support the video tag.
      </video>

      {isHovering && (
        <canvas
          ref={canvasRef}
          width={200}
          height={200}
          className="absolute pointer-events-none rounded-full"
          style={{
            left: mousePos.x - 100,
            top: mousePos.y - 100,
            filter: "drop-shadow(0 10px 25px rgba(0, 0, 0, 0.5))",
          }}
        />
      )}
    </div>
  );
};
