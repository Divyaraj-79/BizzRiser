import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service - BizzRiser',
    description: 'Read the terms and conditions for using BizzRiser services.',
};

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-24">
            <div className="container px-4 md:px-6 max-w-3xl mx-auto prose prose-zinc dark:prose-invert">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Terms of Service</h1>
                    <p className="text-muted-foreground">Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>

                <section className="space-y-6 text-muted-foreground">
                    <p>
                        Welcome to BizzRiser. These Terms of Service ("Terms") govern your access to and use of BizzRiser's website, products, and services ("Services"). Please read these Terms carefully before using our Services.
                    </p>

                    <p>
                        By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use our Services.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Use of Services</h2>
                    <p>
                        You must use our Services in compliance with these Terms, applicable laws, and any policies or guidelines we make available to you. Specifically, when using our WhatsApp integration features:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>You agree to comply with the official WhatsApp Business Commerce and Messaging policies.</li>
                        <li>You will not use the Service to send unsolicited SPAM or broadcast to users without explicit prior opt-in consent.</li>
                        <li>You will not host, distribute, or otherwise link to malicious software, deceptive content, or prohibited items as outlined by Meta.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Account Registration</h2>
                    <p>
                        To use certain features of our Services, you may be required to register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Fees and Payment</h2>
                    <p>
                        Some features of our Services require payment of fees. You agree to pay all applicable fees in connection with your use of the Services. We reserve the right to change our pricing upon reasonable notice to you. Monthly or Annual subscription fees are non-refundable except as required by law or explicitly stated otherwise.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Intellectual Property</h2>
                    <p>
                        The Services and their original content, features, and functionality are and will remain the exclusive property of BizzRiser and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of BizzRiser.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Termination</h2>
                    <p>
                        We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms entirely, or specifically violate the WhatsApp API acceptable use protocols. Quality rating drops from Meta causing number bans are your responsibility.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Limitation of Liability</h2>
                    <p>
                        In no event shall BizzRiser, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Services.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Contact Information</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at: <a href="mailto:hello@bizzriser.com" className="text-bizz-primary hover:underline">hello@bizzriser.com</a> or via phone at +91 98799 66997.
                    </p>
                </section>
            </div>
        </div>
    );
}
