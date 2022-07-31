import { Avatar, Grid } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Layout } from "../components";
import { v4 as uuidv4 } from "uuid";

export default function Index({ user }) {
  return (
    <Layout>
      <div
        className="grid w-full max-w-[50em] mx-auto mt-2
      sm:grid-cols-[minmax(200px,1fr)_300px] 
      gap-4
      grid-rows-[8em_200px] 
      p-3
      "
      >
        <div className="box bg-red-600/50 rounded-md border border-gray-400">
          stories
        </div>
        <div className="box flex flex-col sm:block hidden min-h-[21em]">
          <div className="flex gap-2 items-center">
            <Avatar
              src="https://images.unsplash.com/photo-1659256955381-4e6636e3aa56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              sx={{
                width: 65,
                height: 65,
              }}
            />

            <div className="flex flex-col">
              <div className="name text-lg font-bold">simple.design</div>
              <div className="text-gray-500">simple design</div>
            </div>

            <div className="text-blue-600 hover:underline ml-auto  font-bold">
              Switch
            </div>
          </div>

          <div className="w-full flex justify-between my-4">
            <div className="left text-gray-400 font-bold">
              Suggestions For You
            </div>
            <div className="text-md text-gray-700 ">see all</div>
          </div>

          <div className="feed-cards gap-3 flex flex-col">
            {[
              {
                name: "xza.sa",
                img: "https://images.unsplash.com/photo-1659256955381-4e6636e3aa56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
                desc: "krn wrn",
              },
              {
                name: "xza.sa",
                img: "https://images.unsplash.com/photo-1659256955381-4e6636e3aa56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
                desc: "krn wrn",
              },
              {
                name: "xza.sa",
                img: "https://images.unsplash.com/photo-1659256955381-4e6636e3aa56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
                desc: "krn wrn",
              },
              {
                name: "xza.sa",
                img: "https://images.unsplash.com/photo-1659256955381-4e6636e3aa56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
                desc: "krn wrn",
              },
            ].map((item) => (
              <div key={uuidv4()} className="flex gap-2 items-center">
                <Avatar
                  src={item.img}
                  sx={{
                    width: 45,
                    height: 45,
                  }}
                  alt={item.name}
                />

                <div className="flex text-sm flex-col">
                  <div className="name font-bold">{item.name}</div>
                  <div className="text-gray-500">{item.desc}</div>
                </div>

                <div className="text-blue-600 text-sm hover:underline ml-auto ">
                  Follow
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="box bg-red-600/50">content</div>
      </div>
    </Layout>
  );
}
