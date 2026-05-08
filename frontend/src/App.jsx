import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QandA from "./pages/QandA";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? "app dark-mode" : "app light-mode"}>
      <div className="viewport-deck-decor" aria-hidden="true">
        <div className="viewport-deck-mesh" />
        <div className="viewport-deck-blob viewport-deck-blob--a" />
        <div className="viewport-deck-blob viewport-deck-blob--b" />
        <span className="deck-spark deck-spark--1" />
        <span className="deck-spark deck-spark--2" />
        <span className="deck-spark deck-spark--3" />
        <span className="deck-spark deck-spark--4" />
        <div className="viewport-deck-float viewport-deck-float-1" />
        <div className="viewport-deck-float viewport-deck-float-2" />
        <div className="viewport-deck-float viewport-deck-float-3" />
        <div className="viewport-deck-vignette" />
      </div>

      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      <header className="hero">
        <div className="hero-content">
          <p className="eyebrow">AWS Presentation</p>

          <h1>AWS Serverless Architecture</h1>

          <p>
            A modern cloud architecture that lets developers build and deploy
            applications without managing servers.
          </p>

          <div className="hero-buttons">
            <a href="#overview" className="btn">
              Start Presentation
            </a>

            <a href="#architecture" className="btn secondary-btn">
              View Architecture
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="overview" className="section deck-slide">
          <p className="section-label">Overview</p>
          <h2>What is Serverless Architecture?</h2>

          <p>
            Serverless architecture allows developers to build applications
            without directly managing servers, operating systems, or
            infrastructure. AWS automatically handles scaling, availability, and
            server maintenance.
          </p>

          <p className="slide-callout">
            Many well-known apps and services rely on cloud infrastructure so
            they can handle growth and busy periods—ideas you will recognize from
            everyday apps, even if you have not set up a server yet.
          </p>

          <div className="cards">
            <div className="card">
              <h3>No Server Management</h3>
              <p>
                Developers focus on writing code while AWS manages the servers
                behind the scenes.
              </p>
            </div>

            <div className="card">
              <h3>Automatic Scaling</h3>
              <p>
                Applications can scale up or down depending on user traffic and
                demand.
              </p>
            </div>

            <div className="card">
              <h3>Pay for Usage</h3>
              <p>
                You only pay when your application is being used instead of
                paying for always-running servers.
              </p>
            </div>
          </div>
        </section>

        <section id="architecture" className="section alternate deck-slide">
          <p className="section-label">Architecture</p>
          <h2>How the Architecture Works</h2>

          <p>
            A typical AWS serverless web application uses a frontend, an API
            layer, backend functions, and cloud storage or databases.
          </p>

          <div
            className="arch-diagram"
            role="img"
            aria-label="Request flow: browser to API Gateway, Lambda, then database or storage."
          >
            <div className="arch-diagram__pipeline">
              <div className="arch-node arch-node--client arch-node--d1">
                <span className="arch-node__layer">Client</span>
                <span className="arch-node__title">Frontend</span>
                <span className="arch-node__hint">SPA or static site</span>
              </div>

              <div className="arch-connector arch-connector--d1" aria-hidden>
                <span className="arch-connector__track" />
                <span className="arch-connector__pulse" />
              </div>

              <div className="arch-node arch-node--edge arch-node--d2">
                <span className="arch-node__layer">Edge</span>
                <span className="arch-node__title">API Gateway</span>
                <span className="arch-node__hint">HTTPS · routes · auth</span>
              </div>

              <div className="arch-connector arch-connector--d2" aria-hidden>
                <span className="arch-connector__track" />
                <span className="arch-connector__pulse" />
              </div>

              <div className="arch-node arch-node--compute arch-node--d3">
                <span className="arch-node__layer">Compute</span>
                <span className="arch-node__title">Lambda</span>
                <span className="arch-node__hint">Event-driven handlers</span>
              </div>

              <div className="arch-connector arch-connector--d3" aria-hidden>
                <span className="arch-connector__track" />
                <span className="arch-connector__pulse" />
              </div>

              <div className="arch-node arch-node--data arch-node--d4">
                <span className="arch-node__layer">Data</span>
                <span className="arch-node__title">DynamoDB / S3</span>
                <span className="arch-node__hint">Records & assets</span>
              </div>
            </div>
          </div>

          <p className="section-note">
            Example: A user submits a form on the website. The request goes
            through API Gateway, triggers a Lambda function, and stores the data
            in a database like DynamoDB.
          </p>
        </section>

        <section id="services" className="section deck-slide">
          <p className="section-label">AWS Services</p>
          <h2>Important AWS Services</h2>

          <p className="slide-callout">
            The same kinds of building blocks show up behind products people use
            every day—think streaming, shopping, or ride apps—often mixed with
            other tools, not serverless alone.
          </p>

          <div className="cards">
            <div className="card">
              <h3>AWS Lambda</h3>
              <p>
                Runs backend code only when needed. It is useful for handling
                API requests, processing data, and automating tasks.
              </p>
            </div>

            <div className="card">
              <h3>Amazon API Gateway</h3>
              <p>
                Creates secure API endpoints that connect the frontend website
                to backend Lambda functions.
              </p>
            </div>

            <div className="card">
              <h3>Amazon DynamoDB</h3>
              <p>
                A fast NoSQL database that works well with serverless
                applications.
              </p>
            </div>

            <div className="card">
              <h3>Amazon S3</h3>
              <p>
                Stores static files, images, documents, and can also host static
                websites.
              </p>
            </div>

            <div className="card">
              <h3>AWS IAM</h3>
              <p>
                Controls permissions and security access between AWS services.
              </p>
            </div>

            <div className="card">
              <h3>Amazon CloudWatch</h3>
              <p>
                Helps monitor logs, errors, performance, and application
                activity.
              </p>
            </div>
          </div>
        </section>

        <section id="benefits" className="section alternate deck-slide">
          <p className="section-label">Benefits</p>
          <h2>Why Serverless is Beneficial</h2>

          <div className="benefits-list">
            <div>
              <h3>Server Management</h3>
              <p>
                For starters, AWS manages all the hardware and software. This
                helps developers because they do not have to spend as much time
                managing servers. The maintenance and fixing of servers are
                handled by Amazon, not the developer.
              </p>
            </div>

            <div>
              <h3>Apps Scale Automatically</h3>
              <p>
                Apps on AWS can scale from zero to thousands of requests without
                manual intervention or planning. This helps because instead of a
                developer turning servers on and off, the app responds when a
                request is made.
              </p>
            </div>

            <div>
              <h3>Cost Efficient</h3>
              <p>
                AWS serverless architecture is beneficial cost wise because
                there are no idling fees. Normally, if you are running an app on
                a server, you pay for it to stay up all month. With serverless,
                your app waits to be called, responds when needed, and then goes
                back to waiting for the next request.
              </p>
            </div>

            <div>
              <h3>High Availability</h3>
              <p>
                AWS can help keep applications available by using cloud
                infrastructure across multiple systems and regions. This helps
                reduce downtime if one part of the system has an issue.
              </p>
            </div>

            <div>
              <h3>Improved Developer Productivity</h3>
              <p>
                Because AWS handles much of the infrastructure, developers can
                spend more time working on code and application logic instead of
                server maintenance.
              </p>
            </div>

            <div>
              <h3>All-in-One Cloud Platform</h3>
              <p>
                AWS serverless architecture can provide compute, databases,
                storage, API management, permissions, and monitoring in one
                platform.
              </p>
            </div>
          </div>
        </section>

        <section id="topics" className="section deck-slide">
          <p className="section-label">Cons</p>
          <h2>Where Serverless Falls Short</h2>

          <div className="timeline">
            <div>
              <h3>1. Cold Starts</h3>
              <p>
                Some serverless functions may take longer to respond when they
                have not been used recently.
              </p>
            </div>

            <div>
              <h3>2. Less Control</h3>
              <p>
                Since AWS manages the servers, developers have less direct
                control over the underlying infrastructure.
              </p>
            </div>

            <div>
              <h3>3. Vendor Lock-In</h3>
              <p>
                Apps built heavily around AWS services may be harder to move to
                another cloud provider later.
              </p>
            </div>

            <div>
              <h3>4. Debugging Can Be Harder</h3>
              <p>
                Serverless apps can involve many cloud services, which can make
                testing and debugging more complex.
              </p>
            </div>

            <div>
              <h3>5. Costs Can Grow</h3>
              <p>
                Serverless can be cost efficient, but high traffic or inefficient
                code can still lead to unexpected costs.
              </p>
            </div>
          </div>
        </section>

<section className="section conclusion deck-slide">
  <p className="section-label">End Of Presentation!</p>

  <h2 className="thank-you-title">Thank You!</h2>

  <p className="conclusion-text">
    Thank you for listening to our presentation on AWS Serverless
    Architecture!
  </p>

  <div className="team-cards">
    <div className="team-card">
      <h3>Anthony Rivera</h3>
      <p>Research • Initial Design • Development</p>
    </div>

    <div className="team-card">
      <h3>Jake</h3>
      <p>Research • UI Overhaul • Development</p>
    </div>

    <div className="team-card">
      <h3>Tim Mills ☆</h3>
      <p>Research • Organization / UI Changes • Development </p>
    </div>

  </div>
</section>
      </main>

    {/*<Footer /> */}
      <QandA />
    </div>
  );
}

export default App;
