import { useState, useEffect } from "react";

function PromoBanner() {
  const messages = [
    "🎉 Free shipping on orders over $50",
    "🎁 Get 20% off your first purchase",
    "⚡ Flash sale: Up to 50% off select items",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
      console.log("Banner message rotated");
    }, 4000);

    return () => {
      clearInterval(interval);
      console.log("Banner interval cleared");
    };
  }, [isVisible, messages.length]);

  if (!isVisible) return null;

  return (
    <div className="bg-green-800 text-white px-4 py-3 flex justify-between items-center">
      <div className="flex gap-2 items-center justify-center flex-1">
        <span>{messages[currentMessageIndex]}</span>
        <span className="flex gap-1">• • •</span>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="text-white text-xl hover:text-gray-200"
      >
        ✕
      </button>
    </div>
  );
}

export default PromoBanner;
