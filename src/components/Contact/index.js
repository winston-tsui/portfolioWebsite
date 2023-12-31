import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6ypvot7',
        'template_3gy1nsq',
        refForm.current,
        'v81FKAInDV72ce1RX'
      )
      .then(
        () => {
          alert(
            'Your message was sucessfully sent! Thank you for reaching out--I will get back to you shortly.'
          );
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again.');
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Whether you have a question, want to collaborate, or just want to
            say hello, I'd love to hear from you! Feel free to reach out using
            the contact form below or directly via email. I'm looking forward to
            connecting and discussing how we can work together or simply have a
            great conversation.
            <br />
            <br />
            via email: witsui@syr.edu
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Winston Tsui
          <br />
          United States
          <br />
          New York City
          <br />
          <span>witsui@syr.edu</span>
        </div>
        <div className="map-wrap">
          <MapContainer center = {[40.7128, -74.0080]} zoom = {12}>
            <TileLayer url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position = {[40.7128, -74.00045]}>
              <Popup>Winston lives here, come over for a cup of coffee :) </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
