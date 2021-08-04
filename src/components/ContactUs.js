import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import './ContactUs.css';
export default function ContactUs () {

  const account = {
    // serviceID: "service_mwlehg6",
    // userID: "user_z0WUFF9xpZY2cCEGeexHg",
    // templateID: "template_7mdq8bp"
    serviceID: "",
    userID: "",
    templateID: ""
  }
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  })
  const [showModal, setShowModal] = useState(false)


  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
    console.log(e.target)
    console.log(form)
  }

  function sendEmail (e) {
    e.preventDefault();
    console.log(e.target.value)

    emailjs.sendForm(account.serviceID, account.templateID, e.target, account.userID)
      .then((result) => {
        console.log(result.text);
        if (result.text === 'OK') {
          setShowModal(true)
          setTimeout(() => {
            setShowModal(false)
          }, 3000);
        }
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <div>

      {
        showModal && <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
          <p class="font-bold">Thank you very much{form.name}</p>
          <p class="text-sm">We will contact you soon.</p>
        </div>
      }
      <p class="text-2xl font-semibold text-center p-6 space-y-4"> Infom us you are interested </p>

      <form className="contact-form" onSubmit={sendEmail}>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div id="_name" class="w-1/3 md:w-1/2 sm:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="name">
             Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 
               leading-tight focus:outline-none focus:bg-white"type="text" placeholder="Name" required
              id="name"
              name="name"
              onChange={updateForm}
              value={form.name} />
          </div>
          <div id="_email"class="w-1/3 md:w-1/2 sm:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700  text-xs font-bold mb-2" for="grid-email" >
              Email
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 
              leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email" type="email" placeholder="Email" required
              name="email"
              onChange={updateForm}
              value={form.email} />
          </div>
          <div id="_phone" class="w-1/3 md:w-1/2 sm:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-phone" >
              Phone
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 
              leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="phone" type="tel" placeholder="Phone" required
              name="phone"
              onChange={updateForm}
              value={form.phone} />
          </div>
          <div className="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-phone" >
              Comments
            </label>
            <textarea class="w-full px-3 py-2 text-black border border-gray-400 rounded-lg focus:outline-none" rows="4"
              id="message" type="tel" placeholder="Comments"
              name="message"
              onChange={updateForm}
              value={form.message}></textarea>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
