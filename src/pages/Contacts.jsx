import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null); // Clear any previous errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://my-portfolio-server-3.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="contact-section" id="contact">
      <motion.h2 
        className="section-title"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>
      
      <motion.div 
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <form onSubmit={handleSubmit} className="contact-form">
          <motion.div 
            className="form-group"
            variants={itemVariants}
          >
            <label className="form-label">Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </motion.div>

          <motion.div 
            className="form-group"
            variants={itemVariants}
          >
            <label className="form-label">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </motion.div>

          <motion.div 
            className="form-group"
            variants={itemVariants}
          >
            <label className="form-label">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
            />
          </motion.div>

          <motion.button
            type="submit"
            className="submit-button"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(255, 49, 49, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
        
        <AnimatePresence>
          {error && (
            <motion.div 
              className="error-message"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  type: "spring",
                  damping: 12,
                  stiffness: 100,
                }
              }}
              exit={{ 
                opacity: 0,
                y: -20,
                transition: { duration: 0.3 }
              }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                ❌ {error}
              </motion.span>
            </motion.div>
          )}

          {isSubmitted && (
            <motion.div 
              className="success-message"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  type: "spring",
                  damping: 12,
                  stiffness: 100,
                }
              }}
              exit={{ 
                opacity: 0,
                y: -20,
                transition: { duration: 0.3 }
              }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                ✨ Thanks for contacting! Your message has been sent successfully!
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
