//TODO: Create input for Name, Email Address, and Message
//TODO: For Name, Email Address, and Message, if user clicks in box and clicks out without filling in information, produce error saying "X is required". Clear error once user starts entering information
//TODO: Add Regex Validation that checks for valid email input. If not valid input, produce error saying "Enter Valid Email"

import React from 'react';

export default function Contact() {
  return (
  <form>
    <label htmlfor="name">Name:</label>
    <input type="text" id="name" name="name" required/>

    <label htmlfor="email">Email:</label>
    <input type="email" id="email" name="email" required/>

    <label htmlfor="message">Message:</label>
    <textarea id="message" name="message" rows="4" required></textarea>

    <input type="submit" value="Submit"/>
  </form>
  );
}
