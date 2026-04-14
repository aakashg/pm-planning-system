/**
 * Pricing page copy — all user-facing text for the pricing page.
 * Changes to this file should align with a PLANNING.md in /planning.
 */

export const pricingCopy = {
  headline: "Simple, Transparent Pricing",
  subheadline: "No hidden fees. No surprises. Switch or cancel anytime.",

  cta: {
    primary: "Start Free Trial",
    secondary: "Contact Sales",
    switchPlan: "Switch Plan",
  },

  plans: {
    starter: {
      name: "Starter",
      price: 0,
      period: "forever",
      description: "For individuals getting started",
      cta: "Get Started Free",
    },
    pro: {
      name: "Pro",
      price: 29,
      period: "per month",
      description: "For growing teams that need more",
      cta: "Start Free Trial",
    },
    enterprise: {
      name: "Enterprise",
      price: null,
      period: "custom",
      description: "For organizations with advanced needs",
      cta: "Contact Sales",
    },
  },

  guarantee: "30-day money-back guarantee. No questions asked.",

  faq: [
    {
      question: "Can I switch plans anytime?",
      answer: "Yes. Upgrade or downgrade at any time. Changes take effect on your next billing cycle.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes. Every paid plan includes a 14-day free trial. No credit card required.",
    },
    {
      question: "What happens when my trial ends?",
      answer: "You'll be automatically moved to the Starter plan unless you choose to upgrade.",
    },
  ],

  footer: "Questions? Reach out to our team at support@example.com",
};
