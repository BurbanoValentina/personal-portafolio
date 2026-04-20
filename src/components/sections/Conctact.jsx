import {Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = [

{
    icon: Mail,
    label: "Email",
    value: "pedro@example.com",
    href: "mailto:pedro@example.com",

},
{
    icon: Phone,
    label: "Phone",
    value: "+57 (333) 123-4567",
    href: "tel: +573331234567",
},
{
    icon: MapPin,
    label: "Location",
    value: "Colombia, CO",
    href: "#",
},
];


export const Contact =() => {
    return 
    <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3x1">
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl">
    </div>
    <div className="container mx-auto px-6 relative z-10"></div>
    </div>
    </div>
    
    <div className="containe mx-auto px-6 relative z-10"></div>
    {/* Section Header */}
    <div className="text-center max-w-3x1 mx-auto mb-16"><span className="text-secondary-foreground text-sm font-medium transition-discrete">
        Get In Touch
        </span>
        <h2 className="text-4x1 md:text-5xl font-bold mt-4 mb-6 animate-faded">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
            something great.    
            </span>
        </h2>
        <p className="text-muted-foreground animate-fade-in animate-delay">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together. 
        </p>
        </div>   

        <div className="grid lg:grid-cols-2 gap-12 max-w-5x1 mx-auto">
            <div className="glass p-8 rounded-3x1 border border-primary/30 animate-fade-in animation-delay-300">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm ">Name</label>
                        <input id="name" />
                    </div>

                    <div>
                        <label>Email</label>
                        <input/>
                    </div>

                    <div>
                        <label>Message</label>
                        <input/>
                    </div>
                </form>
            </div>
        </div> 
    </section>
}