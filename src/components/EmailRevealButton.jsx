import { useEffect } from 'react';

const EmailRevealButton = () => {
  useEffect(() => {
    const button = document.getElementById('reveal-email-button');
    if (button) {
      button.addEventListener('click', handleClick);
      return () => button.removeEventListener('click', handleClick);
    }
  }, []);

  const handleClick = (event) => {
    const button = event.currentTarget;
    const encodedEmail = button.getAttribute('data-email');
    if (encodedEmail) {
      const decodedEmail = decodeEmail(encodedEmail);
      setTimeout(() => {
        button.textContent = decodedEmail;
      }, 1000); // 1 second delay
    }
  };

  const encodeEmail = (email) => {
    let encoded = '';
    for (let i = 0; i < email.length; i++) {
      encoded += String.fromCharCode(email.charCodeAt(i) + 1);
    }
    return encoded;
  };

  const decodeEmail = (encodedEmail) => {
    let decoded = '';
    for (let i = 0; i < encodedEmail.length; i++) {
      decoded += String.fromCharCode(encodedEmail.charCodeAt(i) - 1);
    }
    return decoded;
  };

  const email = 'jrad.seo@gmail.com'; // Replace with your email address
  const encodedEmail = encodeEmail(email);

  return (
    <button className="mt-1 text-green-700 dark:text-green-300 reveal-email" id="reveal-email-button" data-email={encodedEmail}>
      Click to 👀
    </button>
  );
};

export default EmailRevealButton;
