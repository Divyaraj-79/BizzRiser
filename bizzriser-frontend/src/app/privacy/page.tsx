import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - BizzRiser',
    description: 'Learn how BizzRiser collects, uses, and protects your personal data.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-24">
            <div className="container px-4 md:px-6 max-w-3xl mx-auto prose prose-zinc dark:prose-invert">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Privacy Policy</h1>
                    <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>

                <section className="space-y-6 text-muted-foreground">
                    <p>
                        At BizzRiser ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Information We Collect</h2>
                    <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                        <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
                        <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. How We Use Your Data</h2>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                        <li>Where we need to comply with a legal obligation.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. WhatsApp Data Processing</h2>
                    <p>
                        As a Meta Business Partner, we process WhatsApp messages on your behalf. We do not use the content of your conversational data for our own marketing purposes or sell it to third parties. All message processing complies strictly with the official WhatsApp Business API Data Privacy expectations and regional laws like GDPR and CCPA where applicable.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Data Security</h2>
                    <p>
                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Your Legal Rights</h2>
                    <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Request access to your personal data.</li>
                        <li>Request correction of your personal data.</li>
                        <li>Request erasure of your personal data.</li>
                        <li>Object to processing of your personal data.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Contact Us</h2>
                    <p>
                        If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:hello@bizzriser.com" className="text-bizz-primary hover:underline">hello@bizzriser.com</a> or via phone at +91 98799 66997.
                    </p>
                </section>
            </div>
        </div>
    );
}
