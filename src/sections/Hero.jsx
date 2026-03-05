import { useMemo } from "react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {

    // Generate dots only once
    const dots = useMemo(() => {
        return [...Array(30)].map(() => ({
            left: 'Math.random() * 100',
            top: 'Math.random() * 100',
            duration: '15 + Math.random() * 20',
            delay: 'Math.random() * 5',
        }));
    }, []);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="/hero-bg.jpg"
                    alt="Hero image"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* Green dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {dots.map((dot, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: `${dot.left}%`,
                            top: `${dot.top}%`,
                            animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
                            animationDelay: `${dot.delay}s`,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column */}
                    <div className="space-y-8">

                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                                Software Engineer • Full Stack
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animate-delay-100">
                                Crafting <span className="text-primary glow-text">digital</span>
                                <br />
                                experiences with
                                <br />
                                <span className="italic font-normal text-white">
                                    precision
                                </span>
                            </h1>

                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-200">
                                Hi, I'm Valentina Burbano — a Software Engineering student specializing in Full Stack development.
                                I design and build modern, scalable, and efficient web applications using technologies,
                                databases, and delivering user-centered solutions with strong attention to detail.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-4">
                            <Button size="lg">
                                Contact Me <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>

                            <AnimatedBorderButton />
                        </div>

                    </div>

                    {/* Right Column (image / illustration later) */}
                    <div></div>

                </div>
            </div>

        </section>
    );
};