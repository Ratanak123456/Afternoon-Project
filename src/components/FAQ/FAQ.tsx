import { useState } from "react";
// Assuming you have lucide-react installed for Plus/Minus/Mail icons
import { Plus, Minus, Mail } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    // ... Your FAQ data remains the same ...
    {
      category: "Booking & Reservations",
      question: "How do I book a hotel or destination?",
      answer:
        "Browse our destinations or hotels, select your preferred option, choose your dates, and click 'Book Now'. You'll be guided through a simple checkout process where you can review your selection and complete payment securely.",
    },
    {
      category: "Booking & Reservations",
      question: "Can I modify or cancel my reservation?",
      answer:
        "Yes! You can modify or cancel most reservations through your account dashboard. Cancellation policies vary by hotel, so please review the specific terms before booking. Free cancellation is available for many properties up to 24-48 hours before check-in.",
    },
    {
      category: "Booking & Reservations",
      question: "Do I need to create an account to book?",
      answer:
        "While you can browse without an account, creating one allows you to save favorite destinations, track bookings, access exclusive deals, and enjoy a faster checkout process for future trips.",
    },
    {
      category: "Payment & Pricing",
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), debit cards, PayPal, and various digital payment methods. All transactions are secured with industry-standard encryption.",
    },
    {
      category: "Payment & Pricing",
      question: "Are there any hidden fees?",
      answer:
        "No hidden fees! The price you see includes all mandatory charges. Some hotels may charge optional fees for amenities like parking or resort facilities, which will be clearly stated in the booking details.",
    },
    {
      category: "Travel Safety & Support",
      question: "Is 24/7 customer support available?",
      answer:
        "Absolutely! Our dedicated support team is available around the clock via phone, email, or live chat to assist with any questions or concerns before, during, or after your trip.",
    },
    {
      category: "Travel Safety & Support",
      question: "What if there's an emergency during my trip?",
      answer:
        "Contact our 24/7 emergency hotline immediately. We'll work with you and the hotel to resolve the situation quickly. All our partner hotels are vetted for safety standards and have emergency protocols in place.",
    },
    {
      category: "Account & Profile",
      question: "How do I update my profile information?",
      answer:
        "Log into your account, navigate to 'Profile Settings', and you can update your personal information, contact details, password, and communication preferences at any time.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // Translated bg-background to var(--color-bg)
    <div
      className="w-full py-12 sm:py-16 bg-[var(--color-bg)] transition-colors duration-300"
      data-testid="section-faq"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2
            // Translated text-foreground to var(--color-text)
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-3 sm:mb-4 tracking-tight"
            data-testid="text-faq-title"
          >
            Frequently Asked Questions
          </h2>
          {/* Translated text-muted-foreground to var(--color-subtext) */}
          <p className="text-base sm:text-lg md:text-xl text-[var(--color-subtext)] max-w-3xl mx-auto">
            Quick answers to common questions about booking, payments, and
            support
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`
                  rounded-xl border transition-all duration-300
                  ${
                    isOpen
                      ? // Kept primary colors, these map correctly
                        "bg-[var(--color-primary)]/10 border-[var(--color-primary)]/30"
                      : // Translated bg-card to var(--color-card) and border-card-border to var(--color-border)
                        "bg-[var(--color-card)] border-[var(--color-border)] hover:shadow-md"
                  }
                `}
                data-testid={`card-faq-${index}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 py-4 flex items-start justify-between gap-4 text-left"
                  data-testid={`button-faq-toggle-${index}`}
                >
                  <div className="flex-1">
                    {/* Kept text-primary */}
                    <div className="text-xs font-semibold text-[var(--color-primary)] mb-1 uppercase tracking-wide">
                      {faq.category}
                    </div>
                    {/* Translated text-card-foreground to var(--color-text) */}
                    <div
                      className="text-sm sm:text-base md:text-lg font-semibold text-[var(--color-text)]"
                      data-testid={`text-faq-question-${index}`}
                    >
                      {faq.question}
                    </div>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    {isOpen ? (
                      <Minus
                        // Kept text-primary
                        className="w-5 h-5 text-[var(--color-primary)]"
                        data-testid={`icon-faq-minus-${index}`}
                      />
                    ) : (
                      <Plus
                        // Kept text-primary
                        className="w-5 h-5 text-[var(--color-primary)]"
                        data-testid={`icon-faq-plus-${index}`}
                      />
                    )}
                  </div>
                </button>

                <div
                  className={`
                    overflow-hidden transition-all duration-300
                    ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  {/* Translated border-border/50 to var(--color-border) */}
                  <div className="px-4 sm:px-6 pb-4 pt-2 border-t border-[var(--color-border)]/50">
                    {/* Translated text-muted-foreground to var(--color-subtext) */}
                    <p
                      className="text-sm sm:text-base text-[var(--color-subtext)] leading-relaxed"
                      data-testid={`text-faq-answer-${index}`}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Translated bg-card to var(--color-card) */}
        <div className="mt-8 sm:mt-12 text-center bg-[var(--color-card)] rounded-2xl p-6 sm:p-8 border border-[var(--color-border)]">
          <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-primary)] mx-auto mb-4" />
          {/* Translated text-card-foreground to var(--color-text) */}
          <h3 className="text-xl sm:text-2xl font-semibold text-[var(--color-text)] mb-3">
            Still have questions?
          </h3>
          {/* Translated text-muted-foreground to var(--color-subtext) */}
          <p className="text-sm sm:text-base text-[var(--color-subtext)] mb-6">
            Our team is here to help you plan the perfect trip
          </p>
          <button
            // Kept text-primary and border-primary
            className="border-2 text-[var(--color-primary)] border-[var(--color-primary)] px-6 py-3 rounded-xl font-semibold hover:bg-[var(--color-primary)]/10 transition-all duration-300"
            onClick={() => console.log("Contact support clicked")}
            data-testid="button-contact-support"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
