import styles from "../../styles/components.module.css";

const ContactMe = () => {
  return (
    <section className={styles.category} id="contact-me">
      <h2 className={styles.title}>Contact Me</h2>
      <form action="https://api.web3forms.com/submit" method="POST" className={styles.contactMeForm}>
        <input type="hidden" name="access_key" value="4c9c7686-1395-424b-aa72-3d94477e584b" />
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" rows="6" placeholder="Your Message" required></textarea>

        <button type="submit" className={styles.buttonLike}>Submit Message</button>
      </form>
    </section>
  );
};

export default ContactMe;
