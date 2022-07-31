import { Avatar, IconButton } from "@mui/material";
import { Feeds, Layout } from "../components";
import { v4 as uuidv4 } from "uuid";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Index({ user }) {
  const [StoryContainerWidth, setStoryContainerWidth] = useState(0);
  const StoryConRef = useRef();
  const ScrollRightBtn = useRef();
  useEffect(() => {
    setStoryContainerWidth(
      StoryConRef.current.scrollWidth - StoryConRef.current.offsetWidth
    );
  }, []);

  return (
    <Layout>
      <div
        className="grid w-full max-w-[50em] mx-auto mt-2
      sm:grid-cols-[minmax(200px,1fr)_300px] 
      gap-4
      grid-rows-[max_200px] 
      p-3
      relative
      "
      >
        <motion.div
          ref={StoryConRef}
          className="box rounded-md border border-gray-300 overflow-hidden cursor-grab relative active:cursor-grabbing		"
        >
          <motion.div
            drag="x"
            dragConstraints={{
              right: 0,
              left: -StoryContainerWidth,
            }}
            className="flex"
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
                <Avatar
                  src={item.img}
                  sx={{
                    width: "4em",
                    height: "4em",
                  }}
                  onDragStart={(e) => e.preventDefault()}
                  
                  className="rounded-full"
                />
                <div className="text-xs mt-1 text-gray-500">{item.name}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <Feeds />
        <div className="box bg-red-600/50">content</div>
      </div>
    </Layout>
  );
}
