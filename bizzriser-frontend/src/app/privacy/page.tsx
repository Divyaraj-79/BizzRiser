import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - BizzRiser',
    description: 'Privacy Policy for BizzRiser and bizzriser-api services.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col flex-1 bg-background pt-32 pb-24">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto prose prose-zinc dark:prose-invert">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Privacy Policy</h1>
                    <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>

                <section className="space-y-6 text-muted-foreground">
                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Introduction</h2>
                    <p>
                        Welcome to <strong>https://bizzriser.com</strong>. We understand that privacy online is important to users of our Site, especially when conducting business. This statement governs our privacy policies with respect to those users of the Site ("Visitors") who visit without transacting business and Visitors who register to transact business on the Site and make use of the various services offered by <strong>bizzriser-api</strong> (collectively, "Services") ("Authorized Customers").
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Personally Identifiable Information</h2>
                    <p>
                        Refers to any information that identifies or can be used to identify, contact, or locate the person to whom such information pertains, including, but not limited to, name, address, phone number, email address, IP address, location and browser. Personally Identifiable Information does not include information that is collected anonymously (that is, without identification of the individual user) or demographic information not connected to an identified individual.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What Personally Identifiable Information is collected?</h2>
                    <p>
                        We may collect basic user profile information from all of our Visitors. We collect the following additional information from our Authorized Customers: the name, address, phone number, email address, IP address, location and browser of Authorized Customers, the nature and size of the business, and the nature and size of the advertising inventory that the Authorized Customer intends to purchase.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Google API Limited Use Disclosure</h2>
                    <p>
                        Our application integrates with Google Workspace APIs to enhance user functionality. We confirm that any user data obtained through these APIs is used solely to provide or improve user-facing features that are clearly visible within our app’s user interface. We do not use this data to develop, improve, or train generalized AI or machine learning models.
                    </p>
                    <p>
                        Our use and transfer of information received from Google APIs to any other app will adhere to the Google API Services User Data Policy, including the Limited Use requirements.
                    </p>
                    <p>We also comply with the following policies as applicable:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Limited use of user data requirement (Workspace APIs)</li>
                        <li>Workspace API User Data and Developer Policy</li>
                        <li>Limited Use of User Data (Photos API)</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What organizations are collecting the information?</h2>
                    <p>
                        In addition to our direct collection of information, our third party service vendors (such as credit card companies, clearinghouses and banks) who may provide such services as credit, insurance, and escrow services may collect this information from our Visitors and Authorized Customers. We do not control how these third parties use such information, but we do ask them to disclose how they use personal information provided to them from Visitors and Authorized Customers. Some of these third parties may be intermediaries that act solely as links in the distribution chain, and do not store, retain, or use the information given to them.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How does the Site use Personally Identifiable Information?</h2>
                    <p>
                        We use Personally Identifiable Information to customize the Site, to make appropriate service offerings, and to fulfill buying and selling requests on the Site. We may email Visitors and Authorized Customers about research or purchase and selling opportunities on the Site or information related to the subject matter of the Site. We may also use Personally Identifiable Information to contact Visitors and Authorized Customers in response to specific inquiries, or to provide requested information.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">With whom the information may be shared?</h2>
                    <p>
                        Personally Identifiable Information about Authorized Customers may be shared with other Authorized Customers who wish to evaluate potential transactions with other Authorized Customers. We may share aggregated information about our Visitors, including the demographics of our Visitors and Authorized Customers, with third party vendors.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How is Personally Identifiable Information stored?</h2>
                    <p>
                        Personally Identifiable Information collected by <strong>bizzriser-api</strong> is securely stored and is not accessible to third parties or employees of <strong>BizzRiser</strong> except for use as indicated above.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What choices are available to Visitors regarding collection, use and distribution of the information?</h2>
                    <p>
                        Visitors and Authorized Customers may opt out of receiving unsolicited information from or being contacted by us and/or our vendors and affiliated agencies by responding to emails as instructed, or by contacting us.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Are Cookies Used on the Site?</h2>
                    <p>
                        Cookies are used for a variety of reasons. We use Cookies to obtain information about the preferences of our Visitors and the services they select. We also use Cookies for security purposes to protect our Authorized Customers. For example, if an Authorized Customer is logged on and the site is unused, we will automatically log the Authorized Customer off.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How does this APP use login information?</h2>
                    <p>
                        <strong>bizzriser-api</strong> uses login information, including, but not limited to, IP addresses, ISPs, and browser types, to analyze trends, administer the Site, track a user's movement and use, and gather broad demographic information.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What partners or service providers have access to Personally Identifiable Information from Visitors and/or Authorized Customers on the Site?</h2>
                    <p>
                        <strong>bizzriser-api</strong> has entered into and will continue to enter into partnerships and other affiliations with a number of vendors. Such vendors may have access to certain Personally Identifiable Information on a need to know basis for evaluating Authorized Customers for service eligibility. Our privacy policy does not cover their collection or use of this information. Disclosure of Personally Identifiable Information to comply with law. We will disclose Personally Identifiable Information in order to comply with a court order or subpoena or a request from a law enforcement agency to release information. We will also disclose Personally Identifiable Information when reasonably necessary to protect the safety of our Visitors and Authorized Customers.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How does the Site keep Personally Identifiable Information secure?</h2>
                    <p>
                        All of our employees are familiar with our security policy and practices. The Personally Identifiable Information of our Visitors and Authorized Customers is only accessible to a limited number of qualified employees who are given a password in order to gain access to the information. We audit our security systems and processes on a regular basis. Sensitive information, such as credit card numbers or social security numbers, is protected by encryption protocols, in place to protect information sent over the Internet and we do not store them. While we take commercially reasonable measures to maintain a secure site, electronic communications and databases are subject to errors, tampering and break-ins, and we cannot guarantee or warrant that such events will not take place and we will not be liable to Visitors or Authorized Customers for any such occurrences.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How can Visitors correct any inaccuracies in Personally Identifiable Information?</h2>
                    <p>
                        Visitors and Authorized Customers may contact us to update Personally Identifiable Information about them or to correct any inaccuracies by emailing us.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Can a Visitor delete or deactivate Personally Identifiable Information collected by the Site?</h2>
                    <p>
                        We provide Visitors and Authorized Customers with a mechanism to delete/deactivate Personally Identifiable Information from the Site's database by contacting us. However, because of backups and records of deletions, it may be impossible to delete a Visitor's entry without retaining some residual information. An individual who requests to have Personally Identifiable Information deactivated will have this information functionally deleted, and we will not sell, transfer, or use Personally Identifiable Information relating to that individual in any way moving forward.
                    </p>

                    <div className="bg-muted p-6 rounded-lg mt-8">
                        <h3 className="text-xl font-bold text-foreground mb-4">Contact details to delete or deactivate Personally Identifiable Information:</h3>
                        <ul className="space-y-2">
                            <li><strong>Email:</strong> <a href="mailto:bizzriserbyselten@gmail.com" className="text-bizz-primary hover:underline">bizzriserbyselten@gmail.com</a></li>
                            <li><strong>Address:</strong> 720, RK Empire, Nr. Mavdi Chowk, 150 Ft. Ring Road, Rajkot - 360004</li>
                            <li><strong>Support Desk:</strong> <a href="mailto:bizzriserbyselten@gmail.com" className="text-bizz-primary hover:underline">bizzriserbyselten@gmail.com</a></li>
                        </ul>
                    </div>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What happens if the Privacy Policy Changes?</h2>
                    <p>
                        We will let our Visitors and Authorized Customers know about changes to our privacy policy by posting such changes on the Site. However, if we are changing our privacy policy in a manner that might cause disclosure of Personally Identifiable Information that a Visitor or Authorized Customer has previously requested not be disclosed, we will contact such Visitor or Authorized Customer to allow such Visitor or Authorized Customer to prevent such disclosure.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Links</h2>
                    <p>
                        <strong>https://bizzriser.com</strong> contains links to other web sites. Please note that when you click on one of these links, you are moving to another web site. We encourage you to read the privacy statements of these linked sites as their privacy policies may differ from ours.
                    </p>
                </section>
            </div>
        </div>
    );
}
