import { Avatar, IconButton } from "@mui/material";

import { v4 as uuidv4 } from "uuid";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Stories() {
  const [StoryContainerWidth, setStoryContainerWidth] = useState(0);
  const StoryConRef = useRef();
  const ScrollRightBtn = useRef();
  useEffect(() => {
    setStoryContainerWidth(
      StoryConRef.current.scrollWidth - StoryConRef.current.offsetWidth
    );
  }, []);

  return (
    <motion.div
      ref={StoryConRef}
      className="box rounded-md border border-gray-300 overflow-hidden cursor-grab relative active:cursor-grabbing"
    >
      <motion.div
        drag="x"
        dragConstraints={{
          right: 0,
          left: -StoryContainerWidth,
        }}
        className="flex gap-2"
      >
        {[
          {
            name: "simpl.dsign",
            img: "https://mui.com/static/images/avatar/1.jpg",
          },
          {
            name: "simpl.dsign",
            img: "https://mui.com/static/images/avatar/1.jpg",
          },
          {
            name: "simpl.dsign",
            img: "https://mui.com/static/images/avatar/1.jpg",
          },
          {
            name: "simpl.dsign",
            img: "https://mui.com/static/images/avatar/1.jpg",
          },
          {
            name: "simpl.dsign",
            img: "https://mui.com/static/images/avatar/1.jpg",
          },
          {
            name: "simpl.dsign",
            img: "https://mui.com/static/images/avatar/1.jpg",
          },
          {
            name: "simpl.dsign",
            img: "https://mui.com/static/images/avatar/1.jpg",
          },
          {
            name: "simpl.dsign",
            img: "https://mui.com/static/images/avatar/1.jpg",
          },
          {
            name: "simpl.dsign",
            img: "https://mui.com/static/images/avatar/1.jpg",
          },
          {
            name: "simpl.dsign",
            img: "https://mui.com/static/images/avatar/1.jpg",
          },
          {
            name: "simpl.dsign",
            img: "https://mui.com/static/images/avatar/1.jpg",
          },
        ].map((item, index) => (
          <div
            key={uuidv4()}
            className="box bg-white rounded-md flex flex-col items-center justify-center p-2"
          >
            <div className="outer-avatar p-[.15em] bg-red-600 rounded-full from-pink-500 bg-gradient-to-r to-yellow-500">
              <div className="bg-white p-[.1em] rounded-full">
                <Avatar
                  src={item.img}
                  sx={{
                    width: "3em",
                    height: "3em",
                  }}
                  onDragStart={(e) => e.preventDefault()}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="text-xs mt-1 text-gray-500">{item.name}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
