import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="p-strip--main u-pv4">
      {/* Hero Section */}
      <div className="row u-align--center mb-8">
        <section className="col-12 u-align--center">
          <h1 className="p-heading--1">About Ubuntu India</h1>
          <p className="u-text--muted u-align-text--center u-sv2 max-w-4xl u-mx-auto">
            We are a passionate community of Ubuntu users, developers, and
            enthusiasts from all across India, united by our love for open-source
            software.
          </p>
        </section>
      </div>

      {/* Story Section */}
      <div className="row row--v-gap u-align--center mb-8">
        <div className="col-6@md col-12@sm">
          <h2 className="p-heading--2">Our Story</h2>
          <p className="u-text--muted u-align-text--center mb-2">
            The Ubuntu India community is one of the many LoCo (Local Community)
            teams officially recognized by Canonical. Our journey began with a
            simple goal: to promote and support Ubuntu and the philosophy of
            open-source software throughout India.
          </p>
          <p className="u-text--muted u-align-text--center">
            Over the years, we've grown into a vibrant network that organizes
            meetups, release parties, workshops, and contributes to the Ubuntu
            project in various ways. We believe in the power of collaboration
            and strive to create a welcoming environment for everyone, from
            seasoned developers to curious newcomers.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="row row--gap u-align--center u-pv4">
        <section className="col-12 u-align--center mb-6">
          <h2 className="p-heading--2">Our Mission</h2>
        </section>

        <div className="col-4">
          <div className="p-card u-text--center u-pv3 u-ph2 hover:shadow">
            <i className="p-icon--units"></i>
            <h3 className="p-heading--3">Promote</h3>
            <p className="u-text--muted u-align-text--center">
              To spread awareness and adoption of Ubuntu and FOSS across India.
            </p>
            <p></p>
          </div>
        </div>

        <div className="col-4">
          <div className="p-card u-text--center u-pv3 u-ph2 hover:shadow">
            <i className="p-icon--user-group"></i>
            <h3 className="p-heading--3">Support</h3>
            <p className="u-text--muted u-align-text--center">
              To provide a platform for users to get help, share knowledge, and collaborate.
            </p>
          </div>
        </div>

        <div className="col-4">
          <div className="p-card u-text--center u-pv3 u-ph2 hover:shadow">
            <i className="p-icon--fork"></i>
            <h3 className="p-heading--3">Contribute</h3>
            <p className="u-text--muted u-align-text--center">
              To encourage contributions from India to the global Ubuntu project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
