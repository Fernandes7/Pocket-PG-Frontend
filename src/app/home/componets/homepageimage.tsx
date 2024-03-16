"use client";
import styles from "../home.module.css";
import { motion } from "framer-motion";
export default function HompageImage() {
  return (
    <div className={styles.homepageimagediv}>
      <div>
        <h1>Explore The World of Pocket PG with Feel Like Home</h1>
      </div>
      <div className={styles.glassdiv}>
        <p className={styles.glassdivp}>Welcome to Explore Pocket PG</p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className={styles.imagesinglassdiv}
        >
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/652f603a91415a3d647fc207/Modern-Style-Bedroom/960x0.jpg?format=jpg&width=960"
            alt="imagess"
          />
          <img
            src="https://img.freepik.com/premium-photo/luxury-hotel-rooms-with-panoramic-french-windowai-technology-generated-image_1112-11817.jpg"
            alt="imagess"
          />
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/501595545.jpg?k=e694e5c2a696656d789d5b6934e89c508afc2ceab832c0fa149e4725d4b268a1&o=&hp=1"
            alt="imagess"
          />
        </motion.div>
        <p>When an unknown printer took a galley of type and scrambled it to make a Wonderfull memnory and avesome hostel stays that you never go be forgot</p>
      </div>
    </div>
  );
}
