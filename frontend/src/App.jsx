//CSC 490 Project

import { useState } from "react";
import Navbar from "./components/Navbar";
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
            Think of it like a line: <strong>what you tap in the browser</strong>{" "}
            → <strong>the cloud’s front desk</strong> (public web address that
            accepts secure requests) → <strong>the code that does the work</strong>{" "}
            → <strong>where stuff is saved</strong>.
          </p>

          <div
            className="arch-diagram"
            role="img"
            aria-label="Flow: browser, then API Gateway as the public entry for HTTPS requests, then Lambda code, then database or file storage."
          >
            <div className="arch-diagram__pipeline">
              <div className="arch-node arch-node--client arch-node--d1">
                <span className="arch-node__layer">You</span>
                <span className="arch-node__title">Website or app</span>
                <span className="arch-node__hint">Screen you’re on... clicks or taps</span>
              </div>

              <div className="arch-connector arch-connector--d1" aria-hidden>
                <span className="arch-connector__track" />
                <span className="arch-connector__pulse" />
              </div>

              <div className="arch-node arch-node--edge arch-node--d2">
                <span className="arch-node__layer">Cloud front desk</span>
                <span className="arch-node__title">API Gateway</span>
                <span className="arch-node__hint">
                  Your public HTTPS entry: sorts requests, can verify callers
                </span>
              </div>

              <div className="arch-connector arch-connector--d2" aria-hidden>
                <span className="arch-connector__track" />
                <span className="arch-connector__pulse" />
              </div>

              <div className="arch-node arch-node--compute arch-node--d3">
                <span className="arch-node__layer">Where the work runs</span>
                <span className="arch-node__title">Lambda</span>
                <span className="arch-node__hint">
                  Your backend code—runs when a request needs it
                </span>
              </div>

              <div className="arch-connector arch-connector--d3" aria-hidden>
                <span className="arch-connector__track" />
                <span className="arch-connector__pulse" />
              </div>

              <div className="arch-node arch-node--data arch-node--d4">
                <span className="arch-node__layer">Saved somewhere</span>
                <span className="arch-node__title">DynamoDB / S3</span>
                <span className="arch-node__hint">
                  Database rows, files, photos—whatever the app stores
                </span>
              </div>
            </div>
          </div>

          <p className="section-note">
            Example: someone hits “Submit.” The browser sends an encrypted
            request to <strong>API Gateway,</strong> {" "}
             who hands off to{" "}
            <strong>Lambda</strong> to run your logic, then data lands in{" "}
            <strong>DynamoDB</strong> or files in <strong>S3</strong>.
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

        <section
          id="compare-scaling"
          className="section alternate deck-slide"
        >
          <p className="section-label">Compare</p>
          <h2>Busy traffic: where does the work go?</h2>

          <p>
            When everyone hits your app at once, a fixed-size deployment can
            max out CPU and memory. With
            serverless compute, the platform adds{" "}
            <strong>parallel workers</strong> as demand grows (within
            cost limits).
          </p>

          <div className="compare-diptych">
            <article className="compare-pane compare-pane--trad">
              <h3 className="compare-pane__title">Traditional fixed capacity</h3>
              <p className="compare-pane__tag">
                A known set of servers (or VMs) always running
              </p>

              <div
                className="cmp cmp--overload"
                role="img"
                aria-label="Animated diagram: many requests pile onto one server with CPU maxed and a backlog."
              >
                <div className="cmp-overload__burst" aria-hidden>
                  <span className="cmp-req" />
                  <span className="cmp-req" />
                  <span className="cmp-req" />
                  <span className="cmp-req" />
                  <span className="cmp-req" />
                  <span className="cmp-req" />
                  <span className="cmp-req" />
                  <span className="cmp-req" />
                </div>
                <div className="cmp-overload__host" aria-hidden>
                  <span className="cmp-overload__label">Server / VM</span>
                  <div className="cmp-overload__gauge" title="CPU pegged">
                    <div className="cmp-overload__gauge-fill" />
                  </div>
                  <span className="cmp-overload__badge">Hot · backlog</span>
                </div>
              </div>

              <p className="compare-pane__foot">
                One box can only finish so many jobs per second. Extra traffic
                waits behind that ceiling.
              </p>
            </article>

            <article className="compare-pane compare-pane--srv">
              <h3 className="compare-pane__title">Serverless (e.g. Lambda)</h3>
              <p className="compare-pane__tag">
                Many concurrent lightweight executions spread across AWS infrastructure
              </p>

              <div
                className="cmp cmp--fanout"
                role="img"
                aria-label="Animated diagram: traffic splits into multiple parallel worker units."
              >
                <div className="cmp-fanout__ingress" aria-hidden>
                  <span>Incoming load</span>
                </div>
                <div className="cmp-fanout__trunk" aria-hidden />
                <div className="cmp-fanout__workers" aria-hidden>
                  <span className="cmp-worker" />
                  <span className="cmp-worker" />
                  <span className="cmp-worker" />
                  <span className="cmp-worker" />
                  <span className="cmp-worker" />
                </div>
                <p className="cmp-fanout__hint">
                  More load → more parallel handlers (pooling & limits apply)
                </p>
              </div>

              <p className="compare-pane__foot">
                AWS starts and runs enough executions to keep up—think{" "}
                <strong>many register lanes opening</strong>
                {", not one cashier choking on the whole line."}
              </p>
            </article>
          </div>

          <p className="section-note">
            Nuance: Lambda reuses “execution environments,” so it is not literally
            a brand-new machine for every single request forever. The takeaway is
            parallel scale-out vs. one fixed, overloaded box.
          </p>
        </section>

        <section className="section alternate deck-slide">
          <p className="section-label">Real world</p>
          <h2>The viral post spike</h2>

          <p>
            Everyone gets this pattern: a video or post that is quiet one day
            can explode overnight—feeds, comments, likes, and API calls all hit
            at once.
          </p>

          <div
            className="viral-story"
            role="img"
            aria-label="Diagram: one post triggers a burst of traffic; many parallel workers handle it, then activity calms."
          >
            <div className="viral-story__flow">
              <div className="viral-post" aria-hidden>
                <span className="viral-post__icon" />
                <span className="viral-post__cap">One upload</span>
              </div>

              <div className="viral-burst" aria-hidden>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                  <span
                    key={deg}
                    className="viral-burst__ray"
                    style={{ "--viral-rot": `${deg}deg` }}
                  >
                    <span className="viral-burst__dot" />
                  </span>
                ))}
              </div>

              <div className="viral-scale" aria-hidden>
                <div className="viral-scale__label">Traffic hits every action</div>
                <div className="viral-scale__grid">
                  {Array.from({ length: 12 }, (_, i) => (
                    <span key={i} className="viral-scale__cell" />
                  ))}
                </div>
                <p className="viral-scale__hint">
                  Comments · likes · feed refresh · metadata · notifications…
                </p>
              </div>
            </div>

            <p className="viral-story__outro">
              When hype fades, parallel work tapers off and you are not paying to keep a huge idle stack “just in case” that video blows up.
            </p>
          </div>

          <div className="viral-split">
            <div className="viral-split__panel viral-split__panel--pain">
              <h3 className="viral-split__head">Traditional backend</h3>
              <ul className="viral-split__list">
                <li>Fixed pools of servers can max out on surprise traffic</li>
                <li>
                  Teams must guess capacity—or buy spare boxes that sit quiet
                  most days
                </li>
                <li>
                  Under-provision → queues, timeouts, or a bad day for users
                </li>
              </ul>
            </div>
            <div className="viral-split__panel viral-split__panel--win">
              <h3 className="viral-split__head">Why Lambda-style serverless fits</h3>
              <ul className="viral-split__list">
                <li>
                  Each tiny job (API call, worker task) can run as its own
                  execution—parallel by default
                </li>
                <li>
                  AWS ramps concurrent executions under the hood (within
                  service limits)
                </li>
                <li>Load drops → you are not holding a stadium open for three fans</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="compare-idle" className="section deck-slide">
          <p className="section-label">Compare</p>
          <h2>Always-on restaurant vs. on-demand kitchen</h2>

          <p>
            When traffic is low, traditional servers still cost money to keep up and ready.
            With serverless, you only pay for the compute you use, which can be spun up on demand.
          </p>

          <div className="compare-diptych">
            <article className="compare-pane compare-pane--diner compare-pane--trad">
              <h3 className="compare-pane__title">Traditional always-on hosting</h3>
              <p className="compare-pane__tag">The dining room stays open</p>

              <div
                className="cmp cmp-diner cmp-diner--always"
                role="img"
                aria-label="Diagram: restaurant always open with costs running even when empty."
              >
                <div className="diner-shell" aria-hidden>
                  <div className="diner-roof" />
                  <div className="diner-body">
                    <div className="diner-open-badge">Always open</div>
                    <div className="diner-kitchen diner-kitchen--live">
                      <span className="diner-fire" />
                      Kitchen · grills hot
                    </div>
                    <div className="diner-meter">
                      Rent · payroll · power
                      <span className="diner-ticker" />
                    </div>
                    <p className="diner-caption">
                      Empty tables—still paying to keep the lights on.
                    </p>
                  </div>
                </div>
              </div>

              <p className="compare-pane__foot">
                You cover capacity that might sit idle: the lease and staff
                don’t disappear at quiet hours.
              </p>
            </article>

            <article className="compare-pane compare-pane--diner compare-pane--srv">
              <h3 className="compare-pane__title">Serverless-style usage</h3>
              <p className="compare-pane__tag">Open when there is an order</p>

              <div
                className="cmp cmp-diner cmp-diner--event"
                role="img"
                aria-label="Diagram: restaurant dark until a customer arrives, short burst of cooking, then quiet again."
              >
                <div className="diner-shell diner-shell--dim" aria-hidden>
                  <div className="diner-roof diner-roof--dim" />
                  <div className="diner-body">
                    <div className="diner-zzz">Mostly quiet</div>
                    <div className="diner-order-rail">
                      <span className="diner-guest">Order in</span>
                      <span className="diner-arrow">⇢</span>
                      <span className="diner-flash">Cook · respond</span>
                      <span className="diner-arrow">⇢</span>
                      <span className="diner-done">Done · idle</span>
                    </div>
                    <p className="diner-caption diner-caption--srv">
                      No steady “keep the kitchen hot bill for empty
                      compute—you pay when work runs (storage & networking still
                      exist in real life).
                    </p>
                  </div>
                </div>
              </div>

              <p className="compare-pane__foot">
                A request is like a ticket printing: the line cooks only for
                orders, then the room can go dark again until the next guest.
              </p>
            </article>
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

        <section id="conclusion" className="section conclusion deck-slide">
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
              <p>Research • Organization / UI Changes • Development</p>
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
