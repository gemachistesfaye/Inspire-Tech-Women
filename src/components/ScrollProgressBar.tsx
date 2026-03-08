import { useScrollProgress } from "@/hooks/useScrollProgress";

const ScrollProgressBar = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5">
      <div
        className="h-full gradient-accent transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
