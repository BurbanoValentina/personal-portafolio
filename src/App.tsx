import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar, Footer } from "@/components";
import { Hero, About, Experience, Projects, Testimonials, ProcessAndGrowth, ServicesAndFAQ } from "@/components";

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen overflow-x-hidden">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <ProcessAndGrowth />
            <Testimonials />
            <ServicesAndFAQ />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
