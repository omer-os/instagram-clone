import { Avatar, IconButton } from "@mui/material";
import { Feeds, Layout } from "../components";
import { v4 as uuidv4 } from "uuid";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {motion} from "framer-motion";

export default function Index({ user }) {
  return (
    <Layout>
      <div
        className="grid w-full max-w-[50em] mx-auto mt-2
      sm:grid-cols-[minmax(200px,1fr)_300px] 
      gap-4
      grid-rows-[6em_200px] 
      p-3
      "
      >
        <motion.div className="box rounded-md border border-gray-300 overflow-scroll relative flex">
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
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{
                  width: "2.5em",
                  height: "2.5em",
                }}
              />
              <div className="text-xs mt-1 text-gray-500">simpl.dsign</div>
            </div>
          ))}

          <div
            color="inherit"
            className="sticky top-5 right-3 items-center flex"
          >
            <button className="bg-white rounded-full active:scale-95 transition-all">
              <ChevronRightIcon
                sx={{
                  fill: "gray",
                }}
              />
            </button>
          </div>
        </motion.div>

        <Feeds />
        <div className="box bg-red-600/50">content</div>
      </div>
    </Layout>
  );
}
