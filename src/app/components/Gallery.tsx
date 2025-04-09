"use client";

import Image from "next/image";
import styles from "./Gallery.module.css";

export default function Gallery() {
  const photos = [
    {
      src: "/images/gallery-1.jpg",
      alt: "Engagement photo at the beach during sunset",
      width: 800,
      height: 1200,
    },
    {
      src: "/images/gallery-2.jpg",
      alt: "Engagement photo dancing",
      width: 800,
      height: 1200,
    },
    {
      src: "/images/gallery-3.jpg",
      alt: "Engagement photo on steps",
      width: 800,
      height: 1200,
    },
    {
      src: "/images/gallery-4.jpg",
      alt: "Engagement photo close up",
      width: 800,
      height: 1200,
    },
    {
      src: "/images/gallery-5.jpg",
      alt: "Engagement photo",
      width: 800,
      height: 1200,
    },
    {
      src: "/images/gallery-6.jpg",
      alt: "Engagement photo",
      width: 800,
      height: 1200,
    },
  ];

  return (
    <section className={styles.gallery}>
      <div className="container">
        <h2 className={styles.title}>Our Love Story</h2>
        <div className={styles.grid}>
          {photos.map((photo, index) => (
            <div key={index} className={styles.item}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className={styles.image}
                loading={index <= 1 ? "eager" : "lazy"}
                quality={90}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LC0vMjQ0ODQ2NDQxNjU6OkZFRk9QUFBMS1BVV19iZ2JxcXD/2wBDARUXFx4aHh8gIHBwQDQuME5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
