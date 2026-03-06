import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cookie Policy - BizzRiser',
    description: 'Information about how BizzRiser uses cookies on our website.',
};

export default function CookiePolicyPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-24">
            <div className="container px-4 md:px-6 max-w-3xl mx-auto prose prose-zinc dark:prose-invert">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Cookie Policy</h1>
                    <p className="text-muted-foreground">Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>

                <section className="space-y-6 text-muted-foreground">
                    <p>
                        This Cookie Policy explains how BizzRiser uses cookies and similar technologies to recognize you when you visit our website and use our platform. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. What are cookies?</h2>
                    <p>
                        Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Why do we use cookies?</h2>
                    <p>
                        We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Websites to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Websites for advertising, analytics and other purposes.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Types of Cookies We Use</h2>
                    <ul className="list-disc pl-6 space-y-4">
                        <li>
                            <strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our Websites and to use some of its features, such as access to the secure application dashboard area.
                        </li>
                        <li>
                            <strong>Performance and Functionality Cookies:</strong> These cookies are used to enhance the performance and functionality of our Websites but are non-essential to their use. However, without these cookies, certain functionality (like remembering your theme preferences) may become unavailable.
                        </li>
                        <li>
                            <strong>Analytics and Customization Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Websites are being used or how effective our marketing campaigns are, or to help us customize our Websites for you.
                        </li>
                        <li>
                            <strong>Advertising Cookies:</strong> These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. How can I control cookies?</h2>
                    <p>
                        You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager or directly through your web browser controls. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Updates to this Policy</h2>
                    <p>
                        We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Contact Us</h2>
                    <p>
                        If you have any questions about our use of cookies or other technologies, please email us at: <a href="mailto:privacy@bizzriser.com" className="text-bizz-primary hover:underline">privacy@bizzriser.com</a>.
                    </p>
                </section>
            </div>
        </div>
    );
}
