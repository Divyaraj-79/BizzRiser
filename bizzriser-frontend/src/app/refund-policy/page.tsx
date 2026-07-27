import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Refund Policy - BizzRiser',
    description: 'Refund Policy for BizzRiser and bizzriser-api services.',
};

export default function RefundPolicyPage() {
    return (
        <div className="flex flex-col flex-1 bg-background pt-32 pb-24">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto prose prose-zinc dark:prose-invert">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Refund Policy</h1>
                    <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>

                <section className="space-y-6 text-muted-foreground">
                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Application is not as described</h2>
                    <p>
                        An application is "not as described" if it is materially different from the application description or preview so be sure to "tell it like it is" when it comes to the features and functionality of items. If it turns out the application is "not as described" we are obligated to refund buyers of that item.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Application doesn't work the way it should</h2>
                    <p>
                        If an application doesn't work the way it should and can't easily be fixed we are obligated to refund buyers of the application. This includes situations where application has a problem that would have stopped a buyer from buying it if they'd known about the problem in the first place. If the application can be fixed, then we do so promptly by updating our application otherwise we are obligated to refund buyers of that application.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Application has a security vulnerability</h2>
                    <p>
                        If an application contains a security vulnerability and can't easily be fixed we are obligated to refund buyers of the application. If the application can be fixed, then we do so promptly by updating our application. If our application contains a security vulnerability that is not patched in an appropriate timeframe then we are obligated to refund buyers of that application.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Application support is promised but not provided</h2>
                    <p>
                        If we promise our buyers application support and we do not provide that support in accordance with the application support policy we are obligated to refund buyers who have purchased support.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">No refund scenario</h2>
                    <p>
                        If our application is materially similar to the description and preview and works the way it should, there is generally no obligation to provide a refund in situations like the following:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Buyer doesn't want it after they've purchase it.</li>
                        <li>The application did not meet the their expectations.</li>
                        <li>Buyer is not satisfied with the current feature availability of the service.</li>
                        <li>Buyer simply change their mind.</li>
                        <li>Buyer bought a service by mistake.</li>
                        <li>Buyer do not have sufficient expertise to use the application.</li>
                        <li>Buyer ask for goodwill.</li>
                        <li>Problems originated from the API providing organization.</li>
                        <li>No refund will be provided after 30 days from the purchase of a service.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Force Refund</h2>
                    <p>
                        We hold the authority to refund buyer purchase by force without any request from buyer end. Force refund will stop app access as well as support access by denying purchase code with immediate action.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Refund Request</h2>
                    <p>
                        If a buyer eligible to get a refund then he/she must open a support ticket.
                    </p>
                </section>
            </div>
        </div>
    );
}
