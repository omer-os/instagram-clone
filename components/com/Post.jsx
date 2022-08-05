import {
  Avatar,
  Dialog,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  styled,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { v4 as uuidv4 } from "uuid";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

export default function Post({ post }) {
  const ScrollImages = useRef();
  const ScrollLeft = useRef();
  const ScrollRight = useRef();
  const [OpenDialog, setOpenDialog] = useState(false);
  const [ShowComment, setShowComment] = useState(true);
  const [Liked, setLiked] = useState(false);

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
    <>
      <div className="post sm:border border-gray-300 rounded flex flex-col">
        <div className="post-nav flex justify-between items-center p-2">
          <div className="flex items-center text-sm">
            <Avatar
              src={post.user_img}
              sx={{
                width: "2.4em",
                height: "2.4em",
              }}
            />
            <div className="flex flex-col -gap-3 ml-2 self-center">
              <div className="font-bold text-gray-900">{post.user_name}</div>
              <div className="text-gray-400">{post.user_subname}</div>
            </div>
          </div>
          <div className="right sm:rotate-0 transition-all rotate-90">
            <IconButton color="inherit" onClick={() => setOpenDialog(true)}>
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
          <div className="right-2 absolute sm:flex hidden -translate-y-[50%] top-[50%] z-30">
            <IconButton ref={ScrollLeft} color="inherit">
              <ArrowCircleRightRoundedIcon sx={{ fill: "white" }} />
            </IconButton>
          </div>
          <div className="left-2 absolute sm:flex hidden -translate-y-[50%] top-[50%] z-30">
            <IconButton ref={ScrollRight} color="inherit">
              <ArrowCircleLeftIcon sx={{ fill: "white" }} />
            </IconButton>
          </div>
        </div>

        <div className="flex items-center pt-2 px-3 py-2  justify-between">
          <div className="flex gap-3 items-center">
            <SendOutlinedIcon className="active:scale-[.7] transition-all" />
            <ChatBubbleOutlineOutlinedIcon className="active:scale-[.7] transition-all" />
            <BookmarkBorderIcon className="active:scale-[.7] transition-all" />
          </div>
          <div className="left" onClick={() => setLiked(!Liked)}>
            {Liked ? (
              <FavoriteOutlinedIcon
                className="active:scale-[.7] transition-all"
                sx={{ fill: "red" }}
              />
            ) : (
              <FavoriteBorderOutlinedIcon className="active:scale-[.7] transition-all" />
            )}
          </div>
        </div>

        <div className="flex px-3 flex-col">
          <div className="font-bold text-lg">4,405 likes</div>
          <div className="flex text-sm">
            <div
              className="
            text-gray-800 
            line-clamp-2 "
            >
              <span className="font-bold text-black">lorem aika </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              eligendi labore culpa et assumenda a, necessitatibus temporibus
              vel quis vitae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Neque eligendi labore culpa et assumenda a, necessitatibus
              temporibus vel quis vitae?
            </div>
          </div>
          <div className="text-gray-400">view all 9 comments</div>
        </div>
      </div>

      <AnimatePresence>
        {OpenDialog && <MyDialog setOpenDialog={setOpenDialog} />}
      </AnimatePresence>
    </>
  );
}

const MyDialog = ({ setOpenDialog }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[999] flex items-center justify-center">
      <motion.div
        animate={{
          y: [200, 0],
          opacity: [0, 1],
        }}
        exit={{ opacity: 0, y: 200 }}
        transition={{ duration: 0.4, type: "just" }}
        className="bg-white sm:rounded rounded-t-[1.2em] sm:w-[24em]  w-full sm:relative fixed bottom-0 flex flex-col z-20  sm:text-xs text-sm"
      >
        <div className="bg-gray-300 sm:w-0 sm:mt-0 transition-all w-2/6 rounded-full self-center h-1 mt-2" />
        <div className="text-red-600 font-bold p-3 text-center capitalize active:bg-black/20 cursor-pointer  ">
          report
        </div>
        <div className="text-red-600 font-bold p-3 text-center capitalize active:bg-black/20 cursor-pointer ">
          unfollow
        </div>
        <div className="p-3 text-center capitalize active:bg-black/20 cursor-pointer  ">
          add to favorates
        </div>
        <div className="p-3 sm:relative hidden text-center capitalize active:bg-black/20 cursor-pointer  ">
          go to post
        </div>
        <div className="p-3 text-center capitalize active:bg-black/20 cursor-pointer  ">
          share to...
        </div>
        <div className="p-3 sm:relative hidden text-center capitalize active:bg-black/20 cursor-pointer  ">
          copy link
        </div>
        <div className="p-3 sm:relative hidden text-center capitalize active:bg-black/20 cursor-pointer  ">
          embed
        </div>
        <div
          onClick={() => {
            setOpenDialog(false);
          }}
          className="p-3 text-center capitalize active:bg-black/20 cursor-pointer  "
        >
          cancel
        </div>
      </motion.div>
      <div
        onClick={() => {
          setOpenDialog(false);
        }}
        className="h-screen w-screen fixed top-0 left-0 bg-black/20 z-10"
      />
    </div>
  );
};
