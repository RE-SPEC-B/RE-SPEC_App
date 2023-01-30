import { Children, isValidElement, ReactNode } from "react";

export const useGetType = (children: ReactNode, type: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray.filter(
    (children) => isValidElement(children) && children.type === type,
  );
};
