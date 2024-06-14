import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com'; 

export const ContactUs = () => {
  const form = useRef(null);
  const [isSent, setIsSent] = useState(false); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nsp3u5s', 'template_jnkmt7d', form.current, 'HMdftBLBVTWAJHMHI')
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSent(true); 
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact" className="max-w-[1200px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-white">Contacts</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2 pl-2">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300 text-black font-bold"
              type="text"
              name="user_name"
              placeholder="What Should I Call You?"
              aria-label="Name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2 pl-2">Email</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300 text-black font-bold"
              type="email"
              name="user_email"
              placeholder="Where Can I Reach You?"
              aria-label="Email"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2 pl-2">Message</label>
          <textarea
            name="message"
            rows="10"
            className="border-2 rounded-lg p-3 flex border-gray-300 text-black font-bold"
            placeholder="Feel free to drop me a message! I'd love to hear from you."
            aria-label="Message"
          ></textarea>
        </div>
        <button className="bg-[#041776] text-gray-100 w-full p-4 mt-4 rounded-lg">
          Send
        </button>
      </form>
      {isSent && (
        <p className="text-green-500 font-bold text-center mt-4">Message sent successfully!</p>
      )}
    </div>
  );
};

export default ContactUs;




