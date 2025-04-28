function Contact() {
  return (
    <>



      {/* Second Container-Fluid: Additional Info / Address / Map etc */}
      <div className="container-fluid p-0">
        <div className="contact-img"></div>
        <img src="src/assets/contact-banner.jpg" alt="Contact Us" className="img-fluid" />

      </div>


      {/* First Container: The Form */}
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-padding">
              <h2>Contact Us</h2>
              <p>We are here to help you with your queries and feedback! 💬</p>

              <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid p-0">


        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d119696.54373966083!2d72.944886!3d20.361563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0ce67622df2a5%3A0x68a78016ded3b6f8!2sVICO%20FORGE%20PVT%20LTD!5e0!3m2!1sen!2sus!4v1744364042477!5m2!1sen!2sus"
          width="100%"
          height="390"
         
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

      </div>



    </>
  );
}

export default Contact;
