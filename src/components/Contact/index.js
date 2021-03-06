import emailjs from "emailjs-com"
import h from "../../helper"
import "../../styles/panel.scss"
import "../../styles/contact.scss"

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(h)

    emailjs.sendForm(h.SID, h.TID, e.target, h.UID)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
  }

  return (
    <section id="contact" className="panel">
      <div className="wrapper">
        <div className="panel_gui">
          <h1>Contact</h1>
          <div id="formContainer">
            <form onSubmit={sendEmail}>
              <div className="formGroup">
                <input type="text" name="name" ></input>
                <label htmlFor="name">Name</label>
              </div>
              <div className="formGroup">
                <input type="text" name="email" />
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input type="text" name="subject" />
                <label htmlFor="subject">Subject</label>
              </div>
              <label htmlFor="message">Message</label>
              <textarea id="" cols="30" rows="10" name="message"></textarea>
              <button type="submit">SEND</button>
            </form>
          </div>
        </div>
        <div
          onClick={() =>
            document.querySelector(".panel.show").classList.remove("show")
          }
          className="close_btn"
        >
          X
        </div>
      </div>
    </section>
  )
}

export default Contact
