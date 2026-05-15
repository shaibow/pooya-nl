export default function PixelAvatar() {
  // 16x16 pixel art portrait — hair black, skin tone expressed in grayscale
  // Row by row definition: each row is 16 values, 0=transparent,1=white,2=lightgray,3=gray,4=darkgray,5=black
  const palette: Record<number, string> = {
    0: "transparent",
    1: "#ffffff",
    2: "#cccccc",
    3: "#888888",
    4: "#444444",
    5: "#000000",
  };

  const grid: number[][] = [
    [0,0,0,0,5,5,5,5,5,5,5,5,0,0,0,0],
    [0,0,0,5,5,5,5,5,5,5,5,5,5,0,0,0],
    [0,0,5,5,5,5,5,5,5,5,5,5,5,5,0,0],
    [0,0,5,5,2,2,2,2,2,2,2,2,5,5,0,0],
    [0,0,5,2,2,2,2,2,2,2,2,2,2,5,0,0],
    [0,0,5,2,5,5,2,2,2,2,5,5,2,5,0,0],
    [0,0,5,2,5,1,2,2,2,2,5,1,2,5,0,0],
    [0,0,5,2,2,2,2,2,2,2,2,2,2,5,0,0],
    [0,0,5,2,2,2,3,2,2,3,2,2,2,5,0,0],
    [0,0,5,2,2,2,2,3,3,2,2,2,2,5,0,0],
    [0,0,5,2,2,2,2,2,2,2,2,2,2,5,0,0],
    [0,0,5,5,2,2,2,1,1,2,2,2,5,5,0,0],
    [0,0,0,5,5,2,2,2,2,2,2,5,5,0,0,0],
    [0,0,0,0,5,5,5,5,5,5,5,5,0,0,0,0],
    [0,0,5,5,1,1,1,1,1,1,1,1,5,5,0,0],
    [0,5,5,1,1,1,1,1,1,1,1,1,1,5,5,0],
  ];

  const PIXEL = 18;

  return (
    <div
      style={{
        display: "inline-grid",
        gridTemplateColumns: `repeat(16, ${PIXEL}px)`,
        imageRendering: "pixelated",
      }}
      aria-label="Pixel art portrait"
    >
      {grid.flat().map((val, i) => (
        <div
          key={i}
          style={{
            width: PIXEL,
            height: PIXEL,
            backgroundColor: palette[val],
          }}
        />
      ))}
    </div>
  );
}
