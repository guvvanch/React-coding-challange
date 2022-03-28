import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import styles from "../styles/ModalImage.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function ModalImage({ modalImage }) {
  return (
    <Card>
      <Image
        loader={() => modalImage.urls.full}
        unoptimized="true"
        key={modalImage.id}
        src={modalImage.urls.full}
        alt={modalImage.alt_description}
        width={modalImage.width}
        height={modalImage.height}
        layout="responsive"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {modalImage.alt_description
            ? modalImage.alt_description
            : "You name the photo!"}
        </Typography>
        <div className={styles.modalCard}>
          <Typography variant="body2" color="text.secondary">
            By {modalImage.user.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={styles.likes}
          >
            <FavoriteBorderIcon fontSize="small" /> {modalImage.likes}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
