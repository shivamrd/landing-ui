import { useState } from "react";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "How is ADE different from OCR + LLM approaches?",
    answer:
      "Most OCR + LLM stacks treat documents as plain text, then ask an LLM to guess structure. ADE preserves layout, tables, and headings with visual grounding and traceability.",
  },
  {
    question: "What document types does ADE support?",
    answer:
      "ADE supports PDFs, scans, invoices, contracts, financial reports, tables, and complex multi-column enterprise documents.",
  },
  {
    question: "What about data privacy and security?",
    answer:
      "Enterprise-grade governance with auditability, deployment flexibility, and secure processing.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Flexible subscription plans based on usage and document volume. Contact us for details.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="row align-items-start">
          {/* LEFT SIDE */}
          <div className="col-lg-5 faq-left">
            <div className="faq-small">
              <span className="faq-icon-symbol"></span>
              FAQs
            </div>

            <h2 className="faq-heading">
              Questions, <span className="gradient-word">answered.</span>
            </h2>

            <p className="faq-desc">
              Didn’t spot what you needed? Contact us, we’re happy to help.
            </p>

            <Link to="/contact-us" className="contact-btn">
              Contact us →
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-7 faq-right">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq-box ${open === index ? "active" : ""}`}
                onClick={() => toggle(index)}
              >
                <div className="faq-title-row">
                  <span>{item.question}</span>
                  <span className="faq-icon">{open === index ? "−" : "+"}</span>
                </div>

                <div className={`faq-content ${open === index ? "show" : ""}`}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
