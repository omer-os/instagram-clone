import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Navbar() {
  return (
    <div className="flex sticky top-0 left-0 justify-center items-center  z-50 bg-white p-3
    ">
      <div className="innerNavbar w-full max-w-[50em] flex  justify-between items-center ">
        <div className="left relative object-cover w-24 h-10">
          <Image src="/text_logo.png" layout="fill" alt="logo" />
          <KeyboardArrowDownIcon className="absolute top-2 -right-5" />
        </div>

        <div className="middle sm:block hidden">
          <div className="input relative">
            <input
              className="w-full h-full p-2 pl-8 rounded-md bg-gray-200"
              type="text"
              placeholder="search"
            />
            <SearchIcon
              fontSize="small"
              className="absolute top-[.55em] left-2"
            />
          </div>
        </div>

        <div className="right sm:flex-row items-center flex-row-reverse flex gap-3">
          <IconButton color="inherit" className="sm:flex hidden">
            <HomeOutlinedIcon />
          </IconButton>
          <IconButton color="inherit">
            <svg
              aria-label="Messenger"
              className="_ab6-"
              color="#262626"
              fill="#262626"
              height="21"
              role="img"
              viewBox="0 0 24 24"
              width="21"
            >
              <path
                d="M12.003 2.001a9.705 9.705 0 110 19.4 10.876 10.876 0 01-2.895-.384.798.798 0 00-.533.04l-1.984.876a.801.801 0 01-1.123-.708l-.054-1.78a.806.806 0 00-.27-.569 9.49 9.49 0 01-3.14-7.175 9.65 9.65 0 0110-9.7z"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="1.739"
              ></path>
              <path
                d="M17.79 10.132a.659.659 0 00-.962-.873l-2.556 2.05a.63.63 0 01-.758.002L11.06 9.47a1.576 1.576 0 00-2.277.42l-2.567 3.98a.659.659 0 00.961.875l2.556-2.049a.63.63 0 01.759-.002l2.452 1.84a1.576 1.576 0 002.278-.42z"
                fillRule="evenodd"
              ></path>
            </svg>
          </IconButton>
          <IconButton color="inherit">
            <AddBoxOutlinedIcon />
          </IconButton>
          <IconButton color="inherit" className="sm:flex hidden">
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <IconButton color="inherit" className="sm:flex hidden">
            <ExploreOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
