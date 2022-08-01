import { Avatar, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { v4 as uuidv4 } from "uuid";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";


export default function Post({ post }) {
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
    <div
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
        <div className="right-2 absolute -translate-y-[50%] top-[50%] z-30">
          <IconButton ref={ScrollLeft} color="inherit">
            <ArrowCircleRightRoundedIcon sx={{ fill: "white" }} />
          </IconButton>
        </div>
        <div className="left-2 absolute -translate-y-[50%] top-[50%] z-30">
          <IconButton ref={ScrollRight} color="inherit">
            <ArrowCircleLeftIcon sx={{ fill: "white" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
