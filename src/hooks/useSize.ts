import { useState, useEffect } from "react";
import { useWindowDimensions } from "react-native";
const FIGMA_WIDTH = 390;

interface ISizeState {
  width: number;
  height: number;
}

export const useSize = (size: number): ISizeState => {
  const [sizeData, setSizeData] = useState<ISizeState>({ width: 0, height: 0 });
  const { width, height } = useWindowDimensions();
  useEffect(() => {
    setSizeData({
      width: (size * width) / FIGMA_WIDTH,
      height,
    });
  }, [size]);
  return sizeData;
};
