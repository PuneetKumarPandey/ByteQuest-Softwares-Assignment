import React, { useEffect, useState } from "react";
import axios from "axios";
import * as styles from "./index.module.css";

const HospitalLandingPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('https://admin.tomedes.com/api/v1/get-reviews?page=1');
        setReviews(response.data.data.slice(4, 6));
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const images = [
    "/oval@2x.png",
    "/oval1@2x.png"
  ];

  return (
    <div className={styles.hospitalLandingPage}>
      <div className={styles.groupParent}>
        <div className={styles.whatOurCustomers}>What Our Customers Say</div>
        {reviews.map((review, index) => (
          <div key={index} className={index === 0 ? styles.reviewLeft : styles.reviewRight}>
            <div className={styles.reviewContainer}>
              <div className={styles.ovalParent}>
                <div className={styles.oval1} />
                <div className={styles.div}>“</div>
              </div>
              <div className={styles.reviewText}>{review.Reviews}</div>
              <div className={styles.reviewerName}>{review.Name}</div>
              <div className={styles.patient}>Patient</div>
              <img className={styles.ovalIcon} alt="" src={images[index]} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalLandingPage;
 