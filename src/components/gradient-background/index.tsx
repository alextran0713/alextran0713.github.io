import { ReactNode, useEffect, useRef } from "react";
import styles from './index.module.scss';

interface GradientComponentProps {
  children: ReactNode;
}

const GradientComponent = ({ children }: GradientComponentProps) => {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gradientRefNode = gradientRef.current;
    if (gradientRefNode) {
      const gradientDirection = getRandomGradientDirection();
      gradientRefNode.style.backgroundImage = `linear-gradient(${gradientDirection}, #2C1250, #4F228D)`;
    }
  }, []);

  const getRandomGradientDirection = () => {
    const directions = ["to right", "to left", "to top", "to bottom"];
    const randomIndex = Math.floor(Math.random() * directions.length);
    return directions[randomIndex];
  };

  return (
    <div className={styles?.["gradient-container"]} ref={gradientRef}>
      {children}
    </div>
  );
};

export default GradientComponent;
