import { useLang } from "@/contexts/LanguageContext";

export const Footer = (): React.JSX.Element => {
  const { t } = useLang();

  return (
    <footer id="footer" className="pt-8">
      <div className="border-t border-border" />
      <div className="container mx-auto px-6">
        <div className="pt-8 pb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/BurbanoValentina"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/valentina-burbano-salazar-2473a2327/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
