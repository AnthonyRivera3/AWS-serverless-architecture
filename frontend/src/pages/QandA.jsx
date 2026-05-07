import "./QandA.css";

function QandA() {
  return (
    <section id="qna" className="qa-page">
      <div className="ice-overlay"></div>

      <div className="brick-wall">
        {Array.from({ length: 48 }).map((_, index) => (
          <div className="brick" key={index}></div>
        ))}
      </div>

      <div className="game-ball"></div>
      <div className="game-paddle"></div>

      <section className="qa-content">
        <p className="qa-label">Q&A Section</p>
        <h1>Questions?</h1>
        <p>We are ready to answer your questions.</p>
      </section>
    </section>
  );
}

export default QandA;