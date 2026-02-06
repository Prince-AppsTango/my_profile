import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formStatus, setFormStatus] = React.useState('idle'); // idle, submitting, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://formsubmit.co/ajax/princekumary271@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(Object.fromEntries(formData))
            });

            if (response.ok) {
                setFormStatus('success');
                e.target.reset();
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            setFormStatus('error');
        }
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Interested in working together? Let's talk about your next project.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                        <p className="text-zinc-400">
                            I am available for freelance work and full-time opportunities.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-zinc-300">
                                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-primary">
                                    <Mail size={20} />
                                </div>
                                <a href="mailto:princekumary271@gmail.com" className="hover:text-primary transition-colors">princekumary271@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-4 text-zinc-300">
                                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-primary">
                                    <Phone size={20} />
                                </div>
                                <a href="tel:+919330955959" className="hover:text-primary transition-colors">+91 9330955959</a>
                            </div>
                            <div className="flex items-center gap-4 text-zinc-300">
                                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-primary">
                                    <MapPin size={20} />
                                </div>
                                <span>Titagarh, India</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-2xl"
                    >
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {/* Hidden Helper for FormSubmit */}
                            <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />
                            <input type="hidden" name="_captcha" value="false" />

                            <div>
                                <label className="block text-sm font-medium text-zinc-400 mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-zinc-400 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-zinc-400 mb-1">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <Button type="submit" className="w-full" disabled={formStatus === 'submitting' || formStatus === 'success'}>
                                {formStatus === 'submitting' ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                                {formStatus === 'idle' && <Send size={18} />}
                            </Button>
                            {formStatus === 'success' && <p className="text-green-400 text-sm text-center">Thanks! I'll get back to you soon.</p>}
                            {formStatus === 'error' && <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
