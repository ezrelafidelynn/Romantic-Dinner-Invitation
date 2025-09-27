import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [showHeart, setShowHeart] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [response, setResponse] = useState("");

  // Show heart animation after component mounts
  useEffect(() => {
    setTimeout(() => setShowHeart(true), 1000);
  }, []);

  const handleResponse = (answer) => {
    setResponse(answer);
    setAnswered(true);
  };

  const resetInvitation = () => {
    setAnswered(false);
    setResponse("");
  };

  return (
    <div className="App">
      <div className="invitation-container">
        {/* Floating hearts animation */}
        <div className="floating-hearts">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`heart heart-${i + 1}`}>
              💕
            </div>
          ))}
        </div>

        {!answered ? (
          <div className="invitation-card">
            <div className="header">
              <h1 className="title">
                <span className="sparkle">✨</span>
                My Dearest Love
                <span className="sparkle">✨</span>
              </h1>
            </div>

            <div className="content">
              <div className="date-highlight">
                <div className="calendar-icon">📅</div>
                <div className="date-text">
                  <h2>November 15th, 2025</h2>
                  <p>A special Saturday evening</p>
                </div>
              </div>

              <div className="message">
                <p className="romantic-text">
                  Would you like to join me for a romantic dinner? 🌹
                </p>
                <p className="sub-text">
                  Just you, me, candlelight, and our favorite food... Let's make
                  this evening magical! 💫
                </p>
              </div>

              <div className="dinner-details">
                <div className="detail-item">
                  <span className="icon">🕖</span>
                  <span>7:00 PM</span>
                </div>
                <div className="detail-item">
                  <span className="icon">🍽️</span>
                  <span>Candlelit Dinner</span>
                </div>
                <div className="detail-item">
                  <span className="icon">🎵</span>
                  <span>Soft Music</span>
                </div>
              </div>

              {showHeart && <div className="pulsing-heart">💖</div>}

              <div className="buttons">
                <button
                  className="yes-button"
                  onClick={() => handleResponse("yes")}
                >
                  Yes, I'd love to! 💕
                </button>
                <button
                  className="maybe-button"
                  onClick={() => handleResponse("maybe")}
                >
                  Let me think... 🤔
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="response-card">
            {response === "yes" ? (
              <div className="happy-response">
                <h1>🎉 Yay! 🎉</h1>
                <p className="celebration-text">
                  I can't wait for our romantic evening! It's going to be
                  absolutely perfect! 💕
                </p>
                <div className="countdown">
                  <p>See you on November 15th, 2025! 🥰</p>
                </div>
                <div className="excitement-hearts">
                  {[...Array(12)].map((_, i) => (
                    <span
                      key={i}
                      className={`celebration-heart heart-anim-${i}`}
                    >
                      {["💕", "💖", "💗", "💝"][i % 4]}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="maybe-response">
                <h1>🥺 Aww...</h1>
                <p className="pleading-text">
                  Take all the time you need, but I really hope you'll say yes!
                  I have something special planned just for us... 💕
                </p>
                <button className="reconsider-button" onClick={resetInvitation}>
                  Let me reconsider... 💭
                </button>
              </div>
            )}
          </div>
        )}

        <div className="signature">
          <p>With all my love,</p>
          <p className="your-name">Your Loving Partner 💕</p>
        </div>
      </div>
    </div>
  );
}

export default App;
