import { useState } from "react";
import styles from "../styles/Home.module.css";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import { fetchPhotos } from "./api/fetchPhotos";
import SearchBar from "../components/SearchBar";

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
  const [searchTerm, setSearchTerm] = useState("");

  //fetches more images upon scrolling
  const getMorePhotos = async (page) => {
    const newPhotos = await fetchPhotos(page, searchTerm);
    setPhotoList((prev) => [...prev, ...newPhotos]); //store all fetched images in photoList state
  };

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const search = async (e) => {
    e.preventDefault();
    let searchResult = await fetchPhotos(1, searchTerm);
    setPhotoList(searchResult);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
        <SearchBar
          search={search}
          searchTerm={searchTerm}
          handleInput={handleInput}
        />
      </div>
      <Gallery photoList={photoList} getMorePhotos={getMorePhotos} />
    </div>
  );
}
