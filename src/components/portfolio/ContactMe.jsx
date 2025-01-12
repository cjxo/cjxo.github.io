import styles from "../../styles/components.module.css";

const ContactMe = () => {
  return (
    <section className={styles.category} id="contact-me">
      <h2 className={styles.title}>Contact Me</h2>
      <form className={styles.contactMeForm}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
        <button className={styles.buttonLike}>Submit Message</button>
      </form>
    </section>
  );
};

export default ContactMe;