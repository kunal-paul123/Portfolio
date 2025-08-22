import { Mail } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const service_id = import.meta.env.VITE_SERVICE_ID;
  const template_id = import.meta.env.VITE_TEMPLATE_ID;
  const public_key = import.meta.env.VITE_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs.send(service_id, template_id, formData, public_key).then(
      () => {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setLoading(false); //
      },
      (error) => {
        console.error(error);
        setStatus("❌ Failed to send message.");
        setLoading(false);
      }
    );
  };

  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <div className="text-center mb-10">
        <Mail className="mx-auto mb-4 w-10 h-10 text-primary" />
        <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-2">
          Contact Me
        </h1>
        <p className="text-lg text-text-secondary">
          Reach out to me over email or fill up this contact form. I will get
          back to you ASAP.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-surface-elevated p-6 rounded-2xl shadow-card max-w-2xl mx-auto space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        ></textarea>

        <button
          type="submit"
          disabled={loading} // ✅ Disable while loading
          className={`w-full font-semibold py-3 rounded-lg shadow-md transition-colors ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-primary text-white hover:bg-primary/90"
          }`}
        >
          {loading ? "Sending..." : "Submit"} {/* ✅ Show loading text */}
        </button>

        {status && <p className="text-center mt-3 text-sm">{status}</p>}
      </form>
    </section>
  );
};

export default ContactSection;
