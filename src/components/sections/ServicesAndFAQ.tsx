import { memo } from "react";
import { useLang } from "@/i18n";
import { IconWorldWww, IconDeviceMobile, IconServer, IconDeviceGamepad2 } from "@tabler/icons-react";
import type { Icon } from "@tabler/icons-react";
import { ServiceCard, FAQItem } from "@/components/section-items";

const serviceIcons: Icon[] = [
  IconWorldWww,
  IconDeviceMobile,
  IconServer,
  IconDeviceGamepad2,
];

export const ServicesAndFAQ = memo((): React.JSX.Element => {
  const { t } = useLang();

  return (
    <section id="services" className="py-16 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <span className="text-sm text-primary tracking-widest uppercase">
            {t.services.label}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            {t.services.title1}
            <span className="italic font-normal font-serif text-primary">
              {t.services.titleHighlight}
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Two-column layout: Services (left) + FAQ (right) */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Left — Service Cards */}
          <div className="grid grid-cols-1 gap-5 lg:mt-12 lg:translate-y-2">
            {t.services.items.map((service, idx) => (
              <ServiceCard
                key={idx}
                icon={serviceIcons[idx]}
                index={idx}
                title={service.title}
                description={service.description}
                tags={service.tags}
              />
            ))}
          </div>

          {/* Right — FAQ */}
          <div className="space-y-3">
            <div className="mb-4 animate-fade-in">
              <span className="text-sm text-primary tracking-widest uppercase">
                {t.services.faqLabel}
              </span>
            </div>

            {t.services.faqItems.map((faq, idx) => (
              <FAQItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                defaultOpen={idx === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ServicesAndFAQ.displayName = "ServicesAndFAQ";
