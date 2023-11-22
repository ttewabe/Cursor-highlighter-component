import React, { useState, useEffect } from "react";

const CursorHighlighter = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [highlighterVisible, setHighlighterVisible] = useState(false);

  const cursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setIsMouseOver(true);
    setHighlighterVisible(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
    
    setTimeout(() => {
      setHighlighterVisible(false);
    }, 500); // delay before removing the highlighter
  };
  useEffect(() => {
    const handleMouseMove = (e) => cursorPosition(e);

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h1
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hello world
      </h1>
      {highlighterVisible && (
        <div
          className="cursor-highlighter"
          style={{ left: position.x, top: position.y }}
        />
      )}
    </div>
  );
};

export default CursorHighlighter;
