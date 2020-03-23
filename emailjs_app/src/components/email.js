import React from 'react';
import emailjs from 'emailjs-com';


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_x4NmOJGo', e.target, 'user_h1q4ahlj07d5H9P3sTAry')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  var template_params = {
    "reply_to": "reply_to_value",
    "from_name": "from_name_value",
    "to_name": "to_name_value",
    "message_html": "message_html_value"
 }
 
 var service_id = "default_service";
 var template_id = "template_x4NmOJGo";
 emailjs.send(service_id, template_id, template_params);

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}