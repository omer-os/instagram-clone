import { Avatar } from "@mui/material";
import { MobilesBottomNav } from "../components";

export default function Favorites() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full relative border p-3 font-bold">
        Activity
      </div>

      <div className="w-full px-2 py-2 flex flex-col gap-3">
        <div className="text-x font-bold">Yesterday</div>
        <div className="flex justify-between items-center">
          <div className="left flex gap-2">
            <Avatar src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6" />
            <div className="flex flex-col">
              <div className="font-bold">omar-csgo</div>
              <div className="text-sm text-gray-400">started following you</div>
            </div>
          </div>
          <div className="right">
            <button className="p-1 px-3 rounded-full bg-gray-200">
              following
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="left flex gap-2">
            <Avatar src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6" />
            <div className="flex flex-col">
              <div className="font-bold">omar-csgo</div>
              <div className="text-sm text-gray-400">started following you</div>
            </div>
          </div>
          <div className="right">
            <button className="p-1 px-3 rounded-full bg-gray-200">
              following
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="left flex gap-2">
            <Avatar src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6" />
            <div className="flex flex-col">
              <div className="font-bold">omar-csgo</div>
              <div className="text-sm text-gray-400">started following you</div>
            </div>
          </div>
          <div className="right">
            <button className="p-1 px-3 rounded-full bg-gray-200">
              following
            </button>
          </div>
        </div>

        <div className="text-x font-bold">This Week</div>
        <div className="flex justify-between items-center">
          <div className="left flex gap-2">
            <Avatar src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6" />
            <div className="flex flex-col">
              <div className="font-bold">omar-csgo</div>
              <div className="text-sm text-gray-400">started following you</div>
            </div>
          </div>
          <div className="right">
            <button className="p-1 px-3 rounded-full bg-gray-200">
              following
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="left flex gap-2">
            <Avatar src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6" />
            <div className="flex flex-col">
              <div className="font-bold">omar-csgo</div>
              <div className="text-sm text-gray-400">started following you</div>
            </div>
          </div>
          <div className="right">
            <button className="p-1 px-3 rounded-full bg-gray-200">
              following
            </button>
          </div>
        </div>
      </div>

      <MobilesBottomNav />
    </>
  );
}
