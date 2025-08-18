export default function DonatePage() {
  return (
    <div className="p-strip is-shallow">
      <div className="row">
        <section className="col-12 u-align-text--center">
          <h1 className="p-heading--2">Support Ubuntu India</h1>
          <p className="u-text--muted u-sv2">
            Your contributions help us organize events, maintain our
            infrastructure, and promote open-source in India. Every little bit
            helps!
          </p>
        </section>
      </div>

      <div className="row u-equal-height u-align--center">
        {/* One-time Donation */}
        <div className="col-4">
          <div className="p-card">
            <div className="p-card__content u-align--center">
              <i className="p-icon--credit-card u-sv2"></i>
              <h3 className="p-card__title">One-time Donation</h3>
              <p className="u-text--muted">
                Make a single contribution through our secure payment partner.
              </p>
              <br/>
              <button className="p-button is-disabled u-no-margin--top">
                Donate
              </button>
            </div>
          </div>
        </div>

        {/* GitHub Sponsors */}
        <div className="col-4">
          <div className="p-card is-highlighted">
            <div className="p-card__content u-align--center">
              <i className="p-icon--github u-sv2"></i>
              <h3 className="p-card__title">GitHub Sponsors</h3>
              <p className="u-text--muted">
                Support us with a recurring monthly donation on GitHub.
              </p>
              <br></br>
              <a
                href="https://github.com/sponsors/ubuntu-in"
                target="_blank"
                rel="noopener noreferrer"
                className="p-button u-no-margin--top"
              >
                Sponsor on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Volunteer */}
        <div className="col-4">
          <div className="p-card">
            <div className="p-card__content u-align--center">
              <i className="p-icon--user-group u-sv2"></i>
              <h3 className="p-card__title">Volunteer</h3>
              <p className="u-text--muted">
                Your time and skills are invaluable. Join us and contribute to
                the community.
              </p>
              <a href="/contact" className="p-button u-no-margin--top">
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 u-align--center u-sv3">
          <p className="u-text--muted">
            Please note: We are a community group and donations are not
            tax-deductible.
          </p>
        </div>
      </div>
    </div>
  );
}
