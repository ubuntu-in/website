import { History, Target, Users } from "lucide-react";

const iconCircleStyle = {
  display: "inline-flex",
  padding: "0.75rem",
  borderRadius: "50%",
  background: "hsla(15, 90%, 50%, 0.1)",
};

export default function AboutPage() {
  return (
    <>
      <section className="p-strip">
        <div className="row">
          <div className="col-8 col-start-large-3">
            <h1 className="p-heading--1 u-align--center">
              About Ubuntu India LoCo
            </h1>
            <p className="p-heading--5 u-align--center">
              A passionate group of developers, designers, and tech enthusiasts
              dedicated to fostering collaboration and innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="p-strip">
        <div className="row">
          <div className="col-4">
            <div className="p-card--highlighted">
              <div className="u-align--center">
                <div style={iconCircleStyle}>
                  <History size={32} color="#E95420" />
                </div>
                <h3 className="p-card__title">Our History</h3>
              </div>
              <p className="u-align--center">
                Founded in 2009, our community started as a small team on
                Launchpad. After many twists and turns, we&apos;ve been reshaped
                time and again — and now we&apos;re rebooting with a fresh
                beginning, marked by a brand-new UbuCon.
              </p>
            </div>
          </div>

          <div className="col-4">
            <div className="p-card--highlighted">
              <div className="u-align--center">
                <div style={iconCircleStyle}>
                  <Target size={32} color="#E95420" />
                </div>
                <h3 className="p-card__title">Our Mission</h3>
              </div>
              <p className="u-align--center">
                Our mission is to spread awareness and adoption of Ubuntu and
                FOSS across India. We aim to provide a platform for users to get
                help, share knowledge, collaborate and encourage contributions
                from India to the global Ubuntu project.
              </p>
            </div>
          </div>

          <div className="col-4">
            <div className="p-card--highlighted">
              <div className="u-align--center">
                <div style={iconCircleStyle}>
                  <Users size={32} color="#E95420" />
                </div>
                <h3 className="p-card__title">Our Community</h3>
              </div>
              <p className="u-align--center">
                We are a diverse group of individuals from various backgrounds,
                united by our passion for technology. We believe in the power of
                open source and strive to contribute positively to the tech
                landscape through our collective efforts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
