import React, { useEffect, useState } from "react";
import { ITabOptions } from "./Tab";

const useTab = <T>(options: ReadonlyArray<ITabOptions<T>>) => {
  const [selected, setSelected] = useState<T | null>(null);

  useEffect(() => {
    setSelected(options[0].value);
  }, [options]);

  const changeSelected = (value: T) => {
    setSelected(value);
  };

  return {
    selected,
    changeSelected,
  };
};

export default useTab;
