import { useState } from "react";
import Post from "./Post";
import { v4 as uuidv4 } from "uuid";

export default function HomePosts() {
  const Posts = [
    {
      user_img:
        "https://images.unsplash.com/photo-1659368076528-399473cf1b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      user_name: "lol.me",
      user_subname: "lol me",
      post_imgs: [
        "https://images.unsplash.com/photo-1659359148424-78c78a583d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659360536653-b8b027ed0bcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659313649584-f6c0ac45ead4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659363421537-e0ff02b8a2df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659366700487-11f79bd1247a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      ],
      post_likes: 20,
      post_date: "2020-01-01",
      post_desc:
        "some motion to UI elements enhances the  their decisions, and indicate relationships between UI elements. @ronas_it team created a list of resources that can help with creating animations! Swipe the cards and explore all of them! How often do you add animations to your designs? Share your thoughts in the comments!",
    },
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
    {
      user_img:
        "https://images.unsplash.com/photo-1659368076528-399473cf1b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      user_name: "lol.me",
      user_subname: "lol me",
      post_imgs: [
        "https://images.unsplash.com/photo-1659359148424-78c78a583d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659360536653-b8b027ed0bcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659313649584-f6c0ac45ead4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659363421537-e0ff02b8a2df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659366700487-11f79bd1247a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      ],
      post_likes: 20,
      post_date: "2020-01-01",
      post_desc:
        "some motion to UI elements enhances the  their decisions, and indicate relationships between UI elements. @ronas_it team created a list of resources that can help with creating animations! Swipe the cards and explore all of them! How often do you add animations to your designs? Share your thoughts in the comments!",
    },
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
    {
      user_img:
        "https://images.unsplash.com/photo-1659368076528-399473cf1b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      user_name: "lol.me",
      user_subname: "lol me",
      post_imgs: [
        "https://images.unsplash.com/photo-1659359148424-78c78a583d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659360536653-b8b027ed0bcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659313649584-f6c0ac45ead4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659363421537-e0ff02b8a2df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659366700487-11f79bd1247a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      ],
      post_likes: 20,
      post_date: "2020-01-01",
      post_desc:
        "some motion to UI elements enhances the  their decisions, and indicate relationships between UI elements. @ronas_it team created a list of resources that can help with creating animations! Swipe the cards and explore all of them! How often do you add animations to your designs? Share your thoughts in the comments!",
    },
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
    {
      user_img:
        "https://images.unsplash.com/photo-1659368076528-399473cf1b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      user_name: "lol.me",
      user_subname: "lol me",
      post_imgs: [
        "https://images.unsplash.com/photo-1659359148424-78c78a583d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659360536653-b8b027ed0bcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659313649584-f6c0ac45ead4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659363421537-e0ff02b8a2df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659366700487-11f79bd1247a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      ],
      post_likes: 20,
      post_date: "2020-01-01",
      post_desc:
        "some motion to UI elements enhances the  their decisions, and indicate relationships between UI elements. @ronas_it team created a list of resources that can help with creating animations! Swipe the cards and explore all of them! How often do you add animations to your designs? Share your thoughts in the comments!",
    },
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
    {
      user_img:
        "https://images.unsplash.com/photo-1659368076528-399473cf1b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      user_name: "lol.me",
      user_subname: "lol me",
      post_imgs: [
        "https://images.unsplash.com/photo-1659359148424-78c78a583d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659360536653-b8b027ed0bcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659313649584-f6c0ac45ead4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659363421537-e0ff02b8a2df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659366700487-11f79bd1247a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      ],
      post_likes: 20,
      post_date: "2020-01-01",
      post_desc:
        "some motion to UI elements enhances the  their decisions, and indicate relationships between UI elements. @ronas_it team created a list of resources that can help with creating animations! Swipe the cards and explore all of them! How often do you add animations to your designs? Share your thoughts in the comments!",
    },
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
    {
      user_img:
        "https://images.unsplash.com/photo-1659368076528-399473cf1b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      user_name: "lol.me",
      user_subname: "lol me",
      post_imgs: [
        "https://images.unsplash.com/photo-1659359148424-78c78a583d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659360536653-b8b027ed0bcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659313649584-f6c0ac45ead4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659363421537-e0ff02b8a2df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1659366700487-11f79bd1247a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      ],
      post_likes: 20,
      post_date: "2020-01-01",
      post_desc:
        "some motion to UI elements enhances the  their decisions, and indicate relationships between UI elements. @ronas_it team created a list of resources that can help with creating animations! Swipe the cards and explore all of them! How often do you add animations to your designs? Share your thoughts in the comments!",
    },
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
  ];
  return (
    <div className="box flex flex-col gap-2">
      {Posts.map((post) => (
        <Post key={uuidv4()} post={post} />
      ))}
    </div>
  );
}
