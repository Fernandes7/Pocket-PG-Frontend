import styles from "../home.module.css";

export default function MapRating({ rating }) {
  const stars = [];
  let goldStarRate = Math.round(rating);
  if(goldStarRate>5)
  goldStarRate=5
  const whiteStarRate = 5 - goldStarRate;

  for (let i = 0; i < goldStarRate; i++) {
    stars.push(<img src="https://cdn-icons-png.flaticon.com/128/3498/3498220.png" alt="star" className={styles.star} />);
  }

  for (let i = 0; i < whiteStarRate; i++) {
    stars.push(<img src="https://cdn-icons-png.flaticon.com/128/11450/11450176.png" alt="star" className={styles.star} />);
  }

  return (
    <div className={styles.ratingdivinmap}>
      <p>Rating</p>
      <div>{stars}</div>
    </div>
  );
}
