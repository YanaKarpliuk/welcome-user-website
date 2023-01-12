import Typewriter from "typewriter-effect";
import frog from "@images/frog.png";
import chess from "@images/chess.png";
import book from "@images/book.png";
import film from "@images/film.png";
import game from "@images/game.png";
import computer from "@images/computer.png";

import update from "immutability-helper";
import { useCallback, useState } from "react";
import type { XYCoord } from "react-dnd";
import { useDrop } from "react-dnd";
import { Box } from "./Box";
interface DragItem {
  type: string;
  id: string;
  top: number;
  left: number;
}

export default function Hobbies() {
  const [boxes, setBoxes] = useState<{
    [key: string]: {
      top: number;
      left: number;
      title: string;
      image: string;
    };
  }>({
    a: { top: 50, left: 20, title: "Chess", image: chess },
    b: { top: 200, left: 20, title: "Movies", image: film },
    c: { top: 50, left: 200, title: "Books", image: book },
    d: { top: 200, left: 200, title: "Video games", image: game },
    e: {
      top: 70,
      left: 420,
      title: "",
      image: frog,
    },
    e2: {
      top: 70,
      left: 420,
      title: "",
      image: frog,
    },
    e3: {
      top: 70,
      left: 420,
      title: "",
      image: frog,
    },
    e4: {
      top: 70,
      left: 420,
      title: "",
      image: frog,
    },
    e5: {
      top: 70,
      left: 420,
      title: "",
      image: frog,
    },
    f: {
      top: 50,
      left: 400,
      title: "Programming",
      image: computer,
    },
  });

  const ItemTypes = {
    BOX: "box",
  };

  const moveBox = useCallback(
    (id: string, left: number, top: number) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        })
      );
    },
    [boxes, setBoxes]
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item: DragItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveBox(item.id, left, top);
        return undefined;
      },
    }),
    [moveBox]
  );

  return (
    <section className="flex-1">
      <div className="relative z-10">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(10)
              .typeString("What are my hobbies? Thanks for asking! There you go:")
              .start();
          }}
        />
      </div>

      <ul ref={drop} className="relative w-[100%] h-[90%]">
        {Object.keys(boxes).map((key) => {
          const { left, top, title, image } = boxes[key] as {
            top: number;
            left: number;
            title: string;
            image: string;
          };
          return (
            <Box key={key} id={key} left={left} top={top}>
              <div className="flex flex-col items-center">
                <img
                  style={{ width: title === "" ? "50px" : "100px" }}
                  className="w-[100px]"
                  src={image}
                  alt={title}
                />
                <p>{title}</p>
              </div>
            </Box>
          );
        })}
      </ul>
    </section>
  );
}
