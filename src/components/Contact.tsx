'use client';

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send. Try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Something went wrong.');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-900/60">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Create Together</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Have a project in mind or just want to say hi? We'd love to hear from you.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 mb-6 text-white"
              required
            />
            <div className="text-center">
              <button
                type="submit"
                className="bg-white text-black font-bold py-3 px-8 rounded-md hover:bg-gray-300 transition-colors duration-300"
              >
                Send Message
              </button>
              {status && <p className="mt-4 text-sm text-gray-300">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

