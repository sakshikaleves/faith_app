// import React from 'react';
// import jsonData from './data/info.json';
// import styles from './CoursePage.module.css';

// const CoursePage = ({ data }) => {
//   const {
//     instructor,
//     course,
//     about_instructor,
//     testimonial,
//   } = data;

//   return (
//     <div className={styles.courseContainer}>
      
//       <div className={styles.instructorCourseSection}>
//       <img
//         src="https://tse3.explicit.bing.net/th?id=OIP.UoFtc3u1M9cJXrvKMZ2ECgHaEX&pid=Api&P=0&h=180" 
//         className={styles.instructorImage}
//       />
// <div className={styles.instructorSection}>
//     <div className={styles.instructorname}>{instructor.name}</div>
//     <div className={styles.coursetitle}>{course.title}</div>
//   </div>
      
//         </div>

// <div className={styles.feeBoxContainer}>
//   <div className={`${styles.feebox} ${styles.differentBackgroundBox}`}>
//     <h4 className={styles.coursefees}>Course Fees</h4>
//     <span>
//       <h1 className={styles.amountbox}>{`${course.fee.amount} ${course.fee.currency}`}</h1>
//     </span>
//     <ul>
//       <li>49 hours course</li>
//       <li>2 live sessions on demand</li>
//       <li>Live QnA with NITYANAND CHARAN DAS</li>
//       <li>WhatsApp community available with 24*7 support</li>
//     </ul>
//     <button className={styles.registerButton}>Register now</button>
//   </div>
// </div>











// <div className={styles.aboutSectionsContainer}>
// <div className={styles.aboutcoursesection}>
//     <h2>About</h2>
//     <p dangerouslySetInnerHTML={{ __html: course.about.html_content }} />
 
 
 
//   </div>

//   <div className={styles.what_to_expect}>
//     <h2>What to expect</h2>
//     <p dangerouslySetInnerHTML={{ __html: course.what_to_expect.html_content }} />
//   </div>

//   <div className="about-course-section">
//     <h2>Key aspects</h2>
//     <p dangerouslySetInnerHTML={{ __html: course.key_topics.html_content }} />
//   </div>
// </div>


//   <div className={styles.aboutinstructorsection}>
//     <h2>About the Instructor</h2>
//     <p dangerouslySetInnerHTML={{ __html: about_instructor.html_content }} />
  
// </div>



//       {/* <div className={styles['styles-instructor-section']}>
       
        
//         <ul className={styles['styles-social-media-list']}>
//           {instructor.social_media.facebook && <li><a href="Facebook URL">Facebook</a></li>}
//           {instructor.social_media.twitter && <li><a href=" Twitter URL ">Twitter</a></li>}
//           {instructor.social_media.youtube && <li><a href=" YouTube URL" >YouTube</a></li>}
//           {instructor.social_media.instagram && <li><a href="Instagram URL ">Instagram</a></li>}
//         </ul>
//       </div> */}

// <div>
      

//       <div className={styles['styles-instructor-section']}>
//         <h2>{instructor.name}</h2>

//         <ul className={styles['styles-social-media-list']}>
//           {instructor.social_media.facebook && (
//             <li>
//               <a href="Facebook URL">
//                 <i className="fab fa-facebook"></i> Facebook
//               </a>
//             </li>
//           )}
//           {instructor.social_media.twitter && (
//             <li>
//               <a href="Twitter URL">
//                 <i className="fab fa-twitter"></i> Twitter
//               </a>
//             </li>
//           )}
//           {instructor.social_media.youtube && (
//             <li>
//               <a href="YouTube URL">
//                 <i className="fab fa-youtube"></i> YouTube
//               </a>
//             </li>
//           )}
//           {instructor.social_media.instagram && (
//             <li>
//               <a href="Instagram URL">
//                 <i className="fab fa-instagram"></i> Instagram
//               </a>
//             </li>
//           )}
//         </ul>
//       </div>



      
//       <div className="testimonial-section">
//         <h2>Testimonial</h2>
//         <blockquote>
//           <p>{testimonial.text}</p>
//           <cite>{testimonial.reviewer_name}, {testimonial.reviewer_designation}</cite>
//         </blockquote>
//       </div>
//     </div>
//   );
// };

// export default CoursePage;


// CoursePage.js

import React from 'react';
import styles from './CoursePage.module.css'; // Make sure to import your local styles

const CoursePage = ({ data }) => {
  const {
    instructor,
    course,
    about_instructor,
    testimonial,
  } = data;

  return (
    <div className={styles.courseContainer}>
      <div className={styles.instructorCourseSection}>
        <img
        
          src="https://i.ytimg.com/vi/ewnx-Qjxpok/maxresdefault.jpg"
          className={styles.instructorImage}
          alt="Instructor"
        />
        <div className={styles.instructorSection}>
          <div className={styles.instructorname}>{instructor.name}</div>
          <div className={styles.coursetitle}>{course.title}</div>
        </div>
      </div>

      <div className={styles.feeBoxContainer}>
        <div className={`${styles.feebox} ${styles.differentBackgroundBox}`}>
          <h4 className={styles.coursefees}>Course Fees</h4>
          <span>
            <h1 className={styles.amountbox}>{`${course.fee.amount} ${course.fee.currency}`}</h1>
          </span>
          <ul>
            <li>49 hours course</li>
            <li>2 live sessions on demand</li>
            <li>Live QnA with NITYANAND CHARAN DAS</li>
            <li>WhatsApp community available with 24*7 support</li>
          </ul>
          <button className={styles.registerButton}>Register now</button>
        </div>
      </div>

      <div className={styles.aboutSectionsContainer}>
        <div className={styles.aboutcoursesection}>
          <h2>About</h2>
          <p dangerouslySetInnerHTML={{ __html: course.about.html_content }} />
        </div>

        <div className={styles.what_to_expect}>
          <h2>What to expect</h2>
          <p dangerouslySetInnerHTML={{ __html: course.what_to_expect.html_content }} />
        </div>

        <div className={styles['about-course-section']}>
          <h2>Key aspects</h2>
          <p dangerouslySetInnerHTML={{ __html: course.key_topics.html_content }} />
        </div>
      </div>

      <div className={styles.aboutinstructorsection}>
        <h2>About the Instructor</h2>
        <p dangerouslySetInnerHTML={{ __html: about_instructor.html_content }} />
      </div>

      <div className={styles['styles-instructor-section']}>
        
        <ul className={styles['styles-social-media-list']}>
          {instructor.social_media.facebook && (
            <li>
              <a href="Facebook URL">
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </li>
          )}
          {instructor.social_media.twitter && (
            <li>
              <a href="Twitter URL">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
          )}
          {instructor.social_media.youtube && (
            <li>
              <a href="YouTube URL">
                <i className="fab fa-youtube"></i> YouTube
              </a>
            </li>
          )}
          {instructor.social_media.instagram && (
            <li>
              <a href="Instagram URL">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
          )}
        </ul>
      </div>
      <div className={styles.testimonialSection}>
  <h2>Testimonial</h2>
  <blockquote>
    <p>{testimonial.text}</p>
    <cite>{testimonial.reviewer_name}, {testimonial.reviewer_designation}</cite>
  </blockquote>
  <a href="#nextSectionId" className={`${styles.scrollIcon} fas fa-chevron-down`}></a>
</div>

</div>
     
  );
};

export default CoursePage;




