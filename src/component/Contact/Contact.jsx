import React, { useRef } from 'react';
import './Contact.css';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsChatRightTextFill, BsTelegram } from "react-icons/bs";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_w2x9nlf', 'template_8j7h3in', form.current, 'Zzk-PPbjeY6j2WdvR')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        //   Swal.fire('Sending Process Completed')
        Swal.fire({
            // position: 'top-end',
            icon: 'success',
            title: 'Sending Process Completed',
            showConfirmButton: false,
            timer: 1500
          })
      };

    return (
        <div className='py-10' id='contact'>
            <h2 className='heading font-bold'>Contact <span className='text-[--main-color]'>Me</span></h2>
            <div className='py-3 md:flex items-center px-2 md:mx-36 gap-40'>
                <div className='contact-form-container'>
                    <form ref={form} onSubmit={sendEmail} className='contact_form'>
                        <div className='input_group'>
                            <p><FaUser></FaUser></p>
                            <input type="text" name="user_name" placeholder='Your Name' className='input_text' id="" />
                        </div>
                        <div className='input_group'>
                            <p><MdEmail></MdEmail></p>
                            <input type="email" name='user_email' placeholder='Your Email' className='input_text' />
                        </div>
                        <div className='input_group'>
                            <p> <BsChatRightTextFill></BsChatRightTextFill></p>
                            <textarea name="message" id="message" placeholder='Type Your Messege' className='input_text'></textarea>
                        </div>
                        <div className='submit-button'>
                            <input type="submit" value="Send" />
                        </div>
                    </form>

                </div>
                <div className='text-[--text-color] mt-10'>
                    <div className='infos'>
                        <div className='mb-5'>
                            <h2 className='font-semibold text-lg mt-2 info'>Email:</h2>
                            <h2 className='text-lg'>mohammadshahansha111@gmail.com</h2>
                        </div>
                        <div className='mb-5'>
                            <h2 className='font-semibold text-lg mt-2 info'>Phone:</h2>
                            <h2 className='text-lg'>+880 1725915331</h2>

                        </div>
                        <div className='mb-5'>
                            <h2 className='font-semibold text-lg mt-2 info'>WhatsApp & Telegram</h2>
                            <h2 className='text-lg'>+880 1740252019</h2>

                        </div>
                        <div className='info'>
                            <h2 className='font-semibold text-lg mt-2 info'>Address</h2>
                            <h2 className='text-lg'>Dhaka, Bangladesh</h2>

                        </div>
                        <div className='socials mx-auto md:ms-0'>
                            <a href="https://www.facebook.com/profile.php?id=100083540903880&mibextid=ZbWKwL"><BsFacebook></BsFacebook></a>
                            <a href="https://github.com/MohammadShahansha"><BsGithub></BsGithub></a>
                            <a href="https://www.linkedin.com/in/md-shahansha-mia-aa14aa284/"><BsLinkedin></BsLinkedin></a>
                            {/* <a href="#"><BsTelegram></BsTelegram></a> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;