import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="p-strip--main u-pv4">
      {/* Hero Section */}
      <section className="row u-align--center u-mb6">
        <div className="col-12 u-align--center">
          <h1 className="p-heading--1 u-mb2">Get In Touch</h1>
          <p className="u-text--muted u-align-text--center u-sv2 max-w-4xl u-mx-auto">
            Have questions or want to get involved? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="row u-gap4">
        {/* Contact Form */}
        <div className="col-12@sm col-7@md">
          <div className="p-card u-pv4 u-ph4 u-radius u-shadow u-bg-card u-mb4">
            <h2 className="p-heading--2 u-mb4">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>

        {/* Other Ways to Connect */}
        <div className="col-12@sm col-5@md u-space-y4">
          <h2 className="p-heading--2 u-mb2">Other ways to connect</h2>
          <p className="u-text--muted u-mb2">
            For general inquiries, you can reach out through our social channels or mailing lists. Please note that we are a volunteer-run community, so response times may vary.
          </p>

          {/* Email */}
          <div className="u-flex u-items-start u-gap2">
            <i className="p-icon--email"></i>
            <div>
              <h3 className="p-heading--3 u-no-margin--bottom">Email</h3>
              <p className="u-text--muted">
                <a href="mailto:bhavi@ubuntu.com" className="p-link--soft">
                  bhavi@ubuntu.com
                </a>
              </p>
              <p className="u-text--small u-text--muted">For official inquiries</p>
            </div>
          </div>

          {/* Community Channels */}
          <div className="u-flex u-items-start u-gap2">
            <i className="p-icon--comments"></i>
            <div>
              <h3 className="p-heading--3 u-no-margin--bottom">Community Channels</h3>
              <div className="u-text--muted">
                Join our channels for discussions and updates:
                <ul>
                  <li><a href="https://t.me/+JVHnQ5HsjCg2YWY1">Telegram</a></li>
                  <li><a href="https://matrix.to/#/#ubuntu-india:ubuntu.com">Matrix</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
