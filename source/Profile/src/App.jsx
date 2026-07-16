import React from "react";

function SkillBar({ title, value }) {
  return (
    <div className="skill-item">
      <div className="skill-head">
        <span>{title}</span>
        <span>{value}%</span>
      </div>

      <div className="progress">
        <span style={{ width: `${value}%` }}></span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="nav-container">

          <div className="logo">
            Gopu<span className="gradient">.</span>
          </div>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="container hero-content">

          <div>

            <h1>
              Hi,
              <br />
              I'm
              <span className="gradient"> Gopu Gireesh</span>
            </h1>

            <h2>
              Cybersecurity &
              <br />
              Full Stack Developer
            </h2>

            <p>

              Computer Science student passionate about
              Cybersecurity, Penetration Testing,
              Full Stack Web Development and Blockchain.

              Experienced in React.js,
              Node.js,
              Express.js,
              Flutter,
              PostgreSQL and Digital Forensics.

            </p>

            <div className="hero-buttons">

              <a
                href="/profile/resume.pdf"
                download
                className="btn primary"
                >
                Download Resume
              </a>

              <a href="#contact" className="btn secondary">
                Contact Me
              </a>

            </div>

          </div>

          <div className="profile-card">

            <h1>🛡️</h1>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section id="about">

        <div className="container">

          <h2 className="title">
            About <span className="gradient">Me</span>
          </h2>

          <div className="glass about-card">

            <p>

              I am currently pursuing my Bachelor's degree in
              Computer Science and Engineering at
              Cochin University of Science and Technology (CUSAT).

              My primary interests are Cybersecurity,
              Ethical Hacking,
              Digital Forensics,
              Penetration Testing,
              and Full Stack Development.

              I enjoy solving real-world security problems,
              building modern web applications,
              and continuously learning new technologies.

            </p>

          </div>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section id="skills">

        <div className="container">

          <h2 className="title">
            Technical <span className="gradient">Skills</span>
          </h2>

          <div className="skills-grid">

            <div className="glass skill-card">

              <h3>Programming</h3>

              <SkillBar title="Python" value={92} />
              <SkillBar title="JavaScript" value={90} />
              <SkillBar title="Java" value={84} />
              <SkillBar title="C / C++" value={80} />
              <SkillBar title="SQL" value={85} />

            </div>

            <div className="glass skill-card">

              <h3>Frameworks</h3>

              <SkillBar title="React.js" value={90} />
              <SkillBar title="Node.js" value={88} />
              <SkillBar title="Express.js" value={86} />
              <SkillBar title="Flutter" value={83} />

            </div>

            <div className="glass skill-card">

              <h3>Cybersecurity</h3>

              <SkillBar title="Penetration Testing" value={90} />
              <SkillBar title="Digital Forensics" value={87} />
              <SkillBar title="OWASP" value={84} />
              <SkillBar title="Threat Detection" value={82} />
              <SkillBar title="Linux" value={88} />

            </div>

          </div>

        </div>

      </section>
      
      {/* ================= EXPERIENCE ================= */}

      <section id="experience">

        <div className="container">

          <h2 className="title">
            Work <span className="gradient">Experience</span>
          </h2>

          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-content">

                <h3>Cybersecurity Intern</h3>

                <h4>Kerala Police</h4>

                <p>

                  • Analyzed suspicious network traffic during
                  cybersecurity investigations.

                </p>

                <p>

                  • Evaluated software vulnerabilities and
                  documented mitigation strategies.

                </p>

                <p>

                  • Assisted digital forensic investigations
                  and identified malicious activities.

                </p>

              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-content">

                <h3>Flutter App Development Intern</h3>

                <h4>Nest Company</h4>

                <p>

                  • Built reusable Flutter UI components.

                </p>

                <p>

                  • Converted Figma designs into responsive
                  mobile interfaces.

                </p>

                <p>

                  • Improved application usability through
                  collaborative development.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects">

        <div className="container">

          <h2 className="title">

            Featured <span className="gradient">Projects</span>

          </h2>

          <div className="project-grid">

            <div className="project-card">

              <h3>

                Blockchain Question Paper
                Security Platform

              </h3>

              <p>

                Developed a blockchain-based document
                security platform using Ethereum smart
                contracts, JWT Authentication,
                Role-Based Access Control,
                Node.js and Express.js.

              </p>

              <div className="project-tags">

                <span className="tag">Ethereum</span>
                <span className="tag">Node.js</span>
                <span className="tag">Express</span>
                <span className="tag">JWT</span>

              </div>

            </div>

            <div className="project-card">

              <h3>

                Employment Management System

              </h3>

              <p>

                Built using Python & Django with
                authentication, employee approval,
                CRUD operations, search,
                Django ORM and SQLite.

              </p>

              <div className="project-tags">

                <span className="tag">Python</span>
                <span className="tag">Django</span>
                <span className="tag">SQLite</span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= EDUCATION ================= */}

      <section>

        <div className="container">

          <h2 className="title">

            <span className="gradient">

              Education

            </span>

          </h2>

          <div className="glass education-card">

            <h3>

              B.Tech Computer Science &
              Engineering

            </h3>

            <p>

              Cochin University of Science and
              Technology (CUSAT)

            </p>

            <p>

              2023 – 2027

            </p>

          </div>

          <div className="glass education-card">

            <h3>

              Higher Secondary

            </h3>

            <p>

              NSS HSS Chathannoor

            </p>

            <p>

              2021 – 2023

            </p>

          </div>

        </div>

      </section>

      {/* ================= CERTIFICATION ================= */}

      <section>

        <div className="container">

          <h2 className="title">

            <span className="gradient">

              Certification

            </span>

          </h2>

          <div className="glass cert-card">

            <h3>

              Junior Penetration Tester

            </h3>

            <p>

              TryHackMe Learning Path

            </p>

          </div>

        </div>

      </section>
      
            {/* ================= CONTACT ================= */}

      <section id="contact">

        <div className="container">

          <h2 className="title">
            Contact <span className="gradient">Me</span>
          </h2>

          <div className="contact-grid">

            <div className="glass contact-card">
              <h3>📧 Email</h3>
              <a href="mailto:gopugireesh660@gmail.com">
                gopugireesh660@gmail.com
              </a>
            </div>

            <div className="glass contact-card">
              <h3>📱 Phone</h3>
              <a href="tel:+918075613168">
                 +91 8075613168
              </a>
            </div>

            <div className="glass contact-card">
              <h3>📍 Location</h3>
              <p>Kochi, Kerala, India</p>
            </div>

          </div>

          <div
            style={{
              marginTop: "50px",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >

            <a
              href="https://github.com/Gopu-Gireesh"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn primary">
                GitHub
              </button>
            </a>

            <a
              href="https://www.linkedin.com/in/gopu-gireesh?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn secondary">
                LinkedIn
              </button>
            </a>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <h3
          style={{
            color: "#00e5ff",
            marginBottom: "10px",
          }}
        >
          Gopu Gireesh
        </h3>

        <p>

          Cybersecurity • Full Stack Development • Blockchain

        </p>

        <br />

        <p>

          © 2026 Gopu Gireesh.
          Built with React ❤️

        </p>

      </footer>

    </>
  );
}