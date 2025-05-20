import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section style={{ padding: '2rem' }}>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <input type="text" name="name" placeholder="Name" required />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <textarea name="message" placeholder="Message" rows="5" required />
        </div>
        <button type="submit">Send</button>
      </form>
      {submitted && <p style={{ color: 'green' }}>Message sent!</p>}
    </section>
  );
}