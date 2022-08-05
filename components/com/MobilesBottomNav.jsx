import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MovieFilterOutlinedIcon from "@mui/icons-material/MovieFilterOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useState } from "react";
import { useRouter } from "next/router";

export default function MobilesBottomNav() {
  const [value, setValue] = useState(0);
  const router = useRouter();

  return (
    <div className="fixed bottom-0 left-0 right-0 sm:hidden">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          sx={{
            minWidth: "1em",
          }}
          icon={<HomeRoundedIcon />}
          onClick={() => router.push("/")}
        />
        <BottomNavigationAction
          sx={{
            minWidth: "1em",
          }}
          icon={<SearchRoundedIcon />}
          onClick={() => router.push("/search")}
        />
        <BottomNavigationAction
          sx={{
            minWidth: "1em",
          }}
          icon={<MovieFilterOutlinedIcon />}
          onClick={() => router.push("/movies")}
        />
        <BottomNavigationAction
          sx={{
            minWidth: "1em",
          }}
          icon={<FavoriteBorderOutlinedIcon />}
          onClick={() => router.push("/favorites")}
        />
        <BottomNavigationAction
          sx={{
            minWidth: "1em",
          }}
          icon={
            <Avatar
              src="https://images.unsplash.com/photo-1659332395153-a33f9c4cc74e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              sx={{
                width: "1.5em",
                height: "1.5em",
              }}
            />
          }
          onClick={() => router.push("/profile")}
        />
      </BottomNavigation>
    </div>
  );
}
