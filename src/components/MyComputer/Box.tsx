import type { CSSProperties, FC, ReactNode } from "react";
import { useDrag } from "react-dnd";

export interface BoxProps {
  id: any;
  left: number;
  top: number;
  hideSourceOnDrag?: boolean;
  children: ReactNode;
}

export const Box: FC<BoxProps> = ({ id, left, top, children }) => {
  const ItemTypes = {
    BOX: "box",
  };

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top]
  );

  if (isDragging) {
    return <div ref={drag} />;
  }

  return (
    <li
      className="absolute cursor-move"
      ref={drag}
      style={{ left, top }}
      data-testid="box"
    >
      {children}
    </li>
  );
};
