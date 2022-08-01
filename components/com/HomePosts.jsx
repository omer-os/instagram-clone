import { Avatar, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useEffect, useRef, useState } from "react";
import { wrap } from "popmotion";
import { AnimatePresence, motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Image from "next/image";

export default function HomePosts() {
  const [Posts, setPosts] = useState([
    {
      user_img: "https://mui.com/static/images/avatar/1.jpg",
      user_name: "simpl.dsign",
      user_subname: "simpl.dsign",
      post_imgs: [
        "https://images.unsplash.com/photo-1659313649584-f6c0ac45ead4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659257888235-b50322732ee4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659330815396-e0df311b2c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659313649584-f6c0ac45ead4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659257888235-b50322732ee4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659330815396-e0df311b2c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      ],
      post_likes: 123,
      post_date: "2020-01-01",
      post_desc:
        "ronasit_ui Adding some motion to UI elements enhances the interactivity of the interfaces and provides a smoother user experience. UI and UX designers add animations to their designs to guide users through the interfaces, alert them of changes, influence their decisions, and indicate relationships between UI elements.  @ronas_it team created a list of resources that can help with creating animations! Swipe the cards and explore all of them! How often do you add animations to your designs? Share your thoughts in the comments!",
    },
  ]);

  const ScrollImages = useRef();
  const ScrollLeft = useRef();
  const ScrollRight = useRef();

  useEffect(() => {
    ScrollImages.current.scrollLeft = 0;
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        ScrollImages.current.scrollLeft -= 100;
      }
      if (e.key === "ArrowRight") {
        ScrollImages.current.scrollLeft += 100;
      }
    });

    ScrollLeft.current.addEventListener("click", () => {
      ScrollImages.current.scrollLeft += 300;
    });

    ScrollRight.current.addEventListener("click", () => {
      ScrollImages.current.scrollLeft -= 300;
    });
  }, []);

  return (
    <div className="box flex flex-col gap-2">
      {Posts.map((post) => (
        <div
          key={uuidv4()}
          className="post sm:border border-gray-300 rounded flex flex-col"
        >
          <div className="post-nav flex justify-between items-center p-2">
            <div className="flex items-center font-bold text-sm">
              <Avatar
                src={post.user_img}
                sx={{
                  width: "2.4em",
                  height: "2.4em",
                }}
              />
              <div className="ml-2">
                <div className="text-gray-900">{post.user_name}</div>
              </div>
            </div>
            <div className="right sm:rotate-0 transition-all rotate-90">
              <IconButton color="inherit">
                <MoreHorizIcon />
              </IconButton>
            </div>
          </div>

          <div className="img-outer relative">
            <div
              ref={ScrollImages}
              className="post-img-verflow overflow-scroll snap-mandatory snap-x img w-full h-[30em] flex relative scroll-smooth"
            >
              {post.post_imgs.map((img, index) => (
                <div
                  key={uuidv4()}
                  className="snap-center relative min-w-full h-[30em]"
                >
                  <Image
                    src={img}
                    className="object-cover object-center w-full h-full"
                    layout="fill"
                  />
                </div>
              ))}
            </div>
            <IconButton
              ref={ScrollLeft}
              color="inherit"
              className="absolute translate-y-[-50%] right-2 top-[50%] z-30"
            >
              <ArrowCircleRightRoundedIcon sx={{ fill: "white" }} />
            </IconButton>
            <IconButton
              ref={ScrollRight}
              color="inherit"
              className="absolute translate-y-[-50%] left-2 top-[50%] z-30"
            >
              <ArrowCircleLeftIcon sx={{ fill: "white" }} />
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  );
}
