import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Education & Certification</h2>
      
      {/* Flex container with adjusted minimal gap */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>B.Sc in CSE</h3>
              <p>United International University</p>
              <p>Result: 3.14 / 4.00</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>College</h3>
              <p>Dhaka Imperial College</p>
              <p>Result: 5.00 / 5.00</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>School</h3>
              <p>Motijheel Model School and College</p>
              <p>Result: 5.00 / 5.00</p>
            </div>
          </li>
        </ul>
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning Specialization</h3>
              <p>Coursera</p>
              <button 
               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded mt-2 text-lg"
               onClick={() => window.open('https://coursera.org/share/770c4a6ca79149b5d54e3a5517ecb5c0', '_blank')}
               >
              Certificate
             </button>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Big Data & Python</h3>
              <p>CDIP</p>
              
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Laravel & React </h3>
              <p>CDIP</p>
              
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};



