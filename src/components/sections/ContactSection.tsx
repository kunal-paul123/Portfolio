import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
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

      <form className="bg-surface-elevated p-6 rounded-2xl shadow-card max-w-2xl mx-auto space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold py-3 rounded-lg shadow-md hover:bg-primary/90 transition-colors"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
