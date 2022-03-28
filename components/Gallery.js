import React from "react";
import InfiniteScroll from "react-infinite-scroll-component"; //ready-to-use component to implement infinite scroll
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"; //ready-to-use component for responsive masonry view
import Image from "next/image";
import ModalBox from "./ModalBox";
import { useState } from "react";
import styles from "../styles/Gallery.module.css";

export default function Gallery({ photoList, getMorePhotos }) {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState({});

  //finds specific image on-click to show as modal
  function handleClick(id) {
    const photo = photoList.find((i) => i.id === id);
    setShowModal(true);
    setModalImage(photo);
  }

  return (
    <InfiniteScroll
      className={styles.gallery}
      dataLength={photoList.length}
      next={getMorePhotos}
      hasMore={true}
      loader={<h2>Loading...</h2>}
      endMessage={
        <p>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 200: 2, 768: 3, 1024: 4 }} //sets breakpoints
        className={styles.gallery}
      >
        <Masonry className={styles.masonry}>
          {photoList.map((photo) => (
            <div className={styles.item} key={photo.id}>
              <Image
                className={styles.photo}
                loader={() => photo.urls.thumb}
                unoptimized="true"
                src={photo.urls.thumb}
                alt={photo.alt_description}
                width={300}
                height={300 / (photo.width / photo.height)}
                layout="responsive"
                onClick={() => handleClick(photo.id)}
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>

      <ModalBox
        clickClose={() => setShowModal(false)}
        title={modalImage.alt_description}
        show={showModal}
        modalImage={modalImage}
      />
    </InfiniteScroll>
  );
}
