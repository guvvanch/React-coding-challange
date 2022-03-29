import { useState } from "react";
import styles from "../styles/Home.module.css";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import { fetchPhotos } from "./api/fetchPhotos";

//server-side rendering. Can be slow and expensive depending on app.
//It's also possible to use client-side rendering
export const getServerSideProps = async () => {
  const photos = await fetchPhotos();
  return {
    props: { photos },
  };
};

export default function Home({ photos }) {
  const [photoList, setPhotoList] = useState(photos);

  //fetches 15 more images upon scrolling
  const getMorePhotos = async () => {
    const newPhotos = await fetchPhotos();
    setPhotoList((prev) => [...prev, ...newPhotos]); //store all fetched images in photoList state
  };

  return (
    <div className={styles.container}>
      <Header />
      <Gallery photoList={photoList} getMorePhotos={getMorePhotos} />
    </div>
  );
}
