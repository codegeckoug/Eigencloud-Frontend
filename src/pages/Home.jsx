import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import EigenCloud from "../assets/eigencloud.mp4";
import "../styles/Home.css";

export default function BackgroundHero() {
  const [showMore, setShowMore] = useState(false);
  // Inside your component
  const navigate = useNavigate();
  return (
    <div className="page-wrapper">
      {/* Top video section */}
      <div className="video-section">
        <video
          className="background-video"
          autoPlay
          muted
          loop
          playsInline
          poster="videos/desktop_video_bg_ABCEF9-poster-00001.jpg"
        >
          <source src={EigenCloud} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Bottom gradient section */}
      <div className="gradient-section">
        <div className="gradient-content">
          <div className="gradient-title">
            <h2>Imagine a world where Ethereum transforms into the cloud.</h2>
          </div>
          <div className="gradient-text">
            <p>Welcome to :</p>
          </div>
          <div>
            <button
              className="reveal-button"
              onClick={() => navigate("/modules")}
            >
              EigenCloud
            </button>{" "}
          </div>

          {/*
          <>
            <p className="expanded-text">
              Think of EigenCloud as the engine of a next-gen decentralized car.
              <br />
              <br />
              <strong>EigenLayer</strong> is the ignition system — it restakes
              Ethereum to power everything else. <br />
              <strong>EigenDA</strong> stores your data like a high-performance
              fuel tank. <br />
              <strong>EigenCompute</strong> is the turbocharged processor doing
              heavy lifting at blazing speed. <br />
              <strong>EigenVerify</strong> checks everything under the hood to
              make sure it's all running smooth. <br />
              <br />
              Together, these modular parts build a reliable, high-speed,
              decentralized infrastructure that any developer can plug into —
              just like building apps in the cloud, but fully onchain.
            </p>

            <div className="detailed-breakdown">
              <h3>🔧 EigenCloud = The Modular Blockchain Engine</h3>
              <p>
                Just like a car engine powers everything — from acceleration to
                air conditioning —{" "}
                <strong>
                  EigenCloud powers the entire modular blockchain experience
                </strong>
                . It’s a dynamic engine made of several smart parts:
              </p>

              <ul>
                <li>
                  <strong>🛠️ EigenLayer:</strong> The engine block. It lets
                  Ethereum stakers secure new AVSs without rebuilding
                  everything.
                </li>
                <li>
                  <strong>💾 EigenDA:</strong> Like a fuel injector — delivers
                  fast, reliable data access so apps never stall.
                </li>
                <li>
                  <strong>🕵️ EigenVerify:</strong> The dashboard sensor —
                  ensures computations are verified and trusted.
                </li>
                <li>
                  <strong>🧠 EigenCompute:</strong> The AI assistant — lets you
                  do heavy computations off-chain at top speed.
                </li>
              </ul>

              <h3>⚡ What Makes It Special?</h3>
              <ul>
                <li>Modular — upgrade parts anytime.</li>
                <li>Composable — mix and match services like car mods.</li>
                <li>Efficient — save gas and increase speed.</li>
                <li>Ethereum-native — no need to leave home base.</li>
              </ul>

              <p className="wrap-up">
                In this race for better blockchain infrastructure,{" "}
                <strong>EigenCloud is the turbocharged engine</strong> for the
                future.
              </p>
            </div>
          </>
          */}
        </div>
      </div>
    </div>
  );
}
