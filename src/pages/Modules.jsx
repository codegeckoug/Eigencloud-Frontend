import React, { useState } from "react";
import "../styles/Home.css";
import eigenLogo from "../assets/Eigen_Cloud_Logo.png";

export default function EigenCloudPage() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (component) => {
    setActiveModal(component);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const modalData = {
    EigenLayer: {
      title: "EigenLayer – The Ignition System",
      content: (
        <>
          <p>
            Still have in mind that{" "}
            <strong>EigenCloud is like a car engine</strong> for the
            decentralized world. Now, zoom in deeper — inside that engine,{" "}
            <strong>EigenLayer</strong> is the <em>engine block</em> — the
            solid, central part where all the moving parts connect and get their
            power.
          </p>
          <p>
            EigenLayer is a protocol built on Ethereum that introduces{" "}
            <strong>Restaking</strong>, a powerful new Web3 primitive. It
            creates a “<strong>marketplace for trust</strong>” bringing together
            Restakers (asset holders), Operators (validators), and AVSs
            (Autonomous Verifiable Services) which plays a role to keep
            decentralized services fast, safe, and reliable.
          </p>
          <p>
            With EigenLayer, users can stake assets like native ETH, LSTs, the
            EIGEN token, or any ERC20 token into smart contracts. This restaking
            mechanism extends Ethereum’s battle-tested security to third-party
            services, so builders don’t have to reinvent the wheel just to feel
            safe.
          </p>
          <p>
            EigenLayer doesn’t just provide security — it also solves the
            hardest part of launching in Web3:
            <strong>bootstrapping trust</strong>. It helps new services launch
            with a ready-made network of security, validators, and economic
            incentives, so they can focus on building awesome decentralized
            apps.
          </p>
          <p>
            🚀 <strong>EigenLayer is the ignition block</strong> of our
            EigenCloud car engine. Itfuels innovation, shares Ethereum’s trust,
            and helps new Web3 projects launch faster, stronger, and more
            securely — all while giving restakers and operators new ways to
            earn.
          </p>
        </>
      ),
    },
    EigenDA: {
      title: "EigenDA – The High-Performance Fuel Tank",
      content: (
        <>
          <p>
            If EigenCloud is a car engine of the decentralized world, then
            EigenDA is the fuel tank — smart, efficient, and built for speed.”
          </p>

          <h4>🛢️ What is EigenDA?</h4>
          <p>
            <strong>EigenDA</strong> (Data Availability) is a data availability
            protocol developed by Eigen Labs and built on EigenLayer, live on
            mainnet and Holesky testnet. EigenDA is built from the ground up to
            be optimally scalable and efficient, making it possible to provide
            DA at throughputs and costs that other solutions cannot approach.It
            represents the completion of the Layer 2 scaling roadmap for
            Ethereum.
          </p>

          <h4>🚀 Why is EigenDA special?</h4>
          <ul>
            <li>
              <strong>Extreme scalability:</strong> Extreme scalability: Similar
              to how modern cars utilize turbochargers to enhance speed while
              preserving stability, EigenDA innovatively addresses the
              traditional blockchain “trilemma.” It successfully achieves
              scalability without sacrificing the essential principles of
              decentralization and security.
            </li>
            <li>
              <strong>Data like gas — but smarter:</strong> The central idea of
              the EigenDA architecture is that not every node needs to store all
              of the data secured by the system. Because EigenDA is not a
              blockchain and does not perform tasks, such as VM execution, which
              operate on the semantic content of data,instead of storing full
              data copies on every node, EigenDA uses an advanced method called{" "}
              <em>Reed-Solomon encoding</em> with{" "}
              <strong>KZG cryptographic proofs</strong>. This makes it faster
              and more efficient — like a smart fuel system that gets the most
              mileage out of every byte.
            </li>
          </ul>

          <h4>⚙️ How does it actually work?</h4>
          <ul>
            <li>
              <strong>Dispersers:</strong> These are like precision fuel
              injectors. They encode the data into shards and send them to the
              tank (validator nodes). They also create <em>proofs</em> that the
              data is encoded correctly.
            </li>
            <li>
              <strong>Validator Nodes:</strong> These act like secure,
              intelligent tank compartments. They are responsible for attesting
              to the availability of a blob and making that blob available to
              retrieval nodes (and eventually light nodes).Each node stores a
              unique part of the data (shard), proportional to how much “stake”
              they hold. They ensure data is always available and tamper-proof.
            </li>
            <li>
              <strong>Retrieval Nodes:</strong> These are the pipelines that
              draw the fuel (data) back out, reassembling the original blob from
              the pieces.They collect data shards from the Validator nodes and
              decode them to produce the original data content.
            </li>
            <li>
              <strong>Light Nodes :</strong> Think of them as mini fuel
              indicators. They monitor validators to make sure no one is
              hoarding or hiding the fuel.Light nodes provide observability so
              that Validator nodes cannot withhold data from retrieval nodes
              without this withholding being broadly observable.
            </li>
          </ul>

          <h4>🔐 Ethereum-grade Security</h4>
          <p>
            EigenDA gets its security from <strong>restaked ETH</strong> via
            EigenLayer — meaning it uses Ethereum’s massive economic security.
            Plus, rollups and apps can stake <em>their own tokens</em> to secure
            their data, creating <strong>Custom Quorums</strong>. It’s like each
            car brand (rollup) bringing its own lock and key to protect its fuel
            tank.
          </p>
          <p>
            EigenDA is not controlled by any one leader, so no single mechanic
            (validator) can tamper or censor the data. It’s fully decentralized
            and censorship-resistant by design.
          </p>

          <h4>📊 Performance Breakdown (vs others)</h4>
          <ul>
            <li>
              <strong>Throughput:</strong> Up to <strong>50MB/s</strong> (vs
              1MB/s for competitors like Celestia and EIP-4844)
            </li>
            <li>
              <strong>Latency:</strong> Fast response — around{" "}
              <strong>5–10s</strong>
            </li>
            <li>
              <strong>Download cost per node:</strong> As low as{" "}
              <strong>1MB/s</strong> (compared to 25MB/s or even 1GB/s for
              others!)
            </li>
            <li>
              <strong>Overhead:</strong> Just <strong>8x</strong> vs over{" "}
              <strong>100x</strong> for some competitors — meaning more
              efficient use of space and bandwidth.
            </li>
          </ul>

          <h4>💸 Payment Freedom & Forecasting</h4>
          <p>
            You can pay EigenDA in <strong>ETH</strong>, <strong>EIGEN</strong>,
            or even your own project’s native token — no more being locked into
            one fuel type. And unlike fee-market systems, EigenDA lets you
            reserve bandwidth <strong>at fixed pricing</strong>, making it
            easier to plan ahead.
          </p>

          <h4>🏗️ Fully Customizable</h4>
          <p>
            EigenDA isn’t just a product — it’s an{" "}
            <strong>Actively Validated Service (AVS)</strong>. You can fork,
            customize, and redeploy it to fit your rollup or app’s needs — just
            like choosing different engines and tanks for different car models.
          </p>

          <h4>🎁 Bonus: Liquidity Rewards</h4>
          <p>
            With EigenLayer’s <strong>ULIP program</strong>, stakers can earn
            rewards by helping secure EigenDA. That’s like earning gas points
            while keeping the car running!
          </p>

          <h4>🔚 Final Gear</h4>
          <p>
            EigenDA supercharges the fuel layer of Web3. It ensures data is
            fast, secure, scalable, and accessible — making sure your
            decentralized engine never runs dry or stalls.
          </p>
          <p>
            🔧 <strong>EigenDA is the high-performance fuel tank</strong> of
            EigenCloud — efficient, modular, and built for the road ahead.
          </p>
        </>
      ),
    },

    EigenCompute: {
      title: "EigenCompute – The Electric Battery",
      content: (
        <>
          <p>
            If <strong>EigenCloud is like a car engine</strong> for the
            decentralized world, then <strong>EigenCompute</strong> is the{" "}
            <em>electric battery</em> — it gives you the extra horsepower you
            need when the engine alone isn’t enough. Think turbo-mode for Web3
            apps.
          </p>
          <p>
            EigenCompute is a verifiable compute service enabling you to run
            offchain workloads in containerized environments with onchain
            verifiability. EigenCompute brings the power of decentralized trust
            to execution environments traditionally outside the blockchain. In
            plain terms, <strong>EigenCompute</strong> is a verifiable compute
            service. It lets developers run heavy tasks — like{" "}
            <em>AI inference</em>, <em>game simulations</em>, or{" "}
            <em>real-world data processing</em> — outside the blockchain, but
            with cryptographic guarantees that the results are legit.
          </p>
          <p>
            🚧 Normally, smart contracts can't handle big computations — they’re
            like tiny engines with fuel limits. But EigenCompute steps in when
            your app needs serious muscle: it runs the workload offchain and
            then <strong>proves onchain</strong> that the job was done
            correctly.
          </p>
          <p>
            Here’s how it works:
            <ul>
              <li>
                🧾 Developers submit compute tasks using a simple API: You send
                the job using a simple API
              </li>
              <li>
                ⚙️The task is routed to a decentralized operator network : It’s
                picked up by a decentralized network of operators
              </li>
              <li>
                📦 Operators execute the task and return signed results: They
                run the task inside a secure container
              </li>
              <li>
                ✅ Results are verifiable onchain, backed by slashing
                conditions: They return signed, verifiable results
              </li>
            </ul>
          </p>
          <p>
            🔒 You don’t need to run validators or build custom slashing logic.
            Everything is backed by slashing conditions and verifiability,
            straight out of the box.
          </p>
          <p>
            🕹 Use EigenCompute when your app needs more than what a smart
            contract can handle — whether it's physics engines in games, complex
            math in DeFi, or AI making decisions based on real-world signals.
          </p>
          <p>
            🔋 <strong>EigenCompute is the battery pack</strong> of the
            EigenCloud engine — it gives your decentralized car the extra surge
            of energy it needs to handle the big stuff, without breaking the
            rules of trust, security, or decentralization.
          </p>
          <p>
            🧪 Available in private preview starting Q3 2025 — the future of
            verifiable offchain computing is just getting started.
          </p>
        </>
      ),
    },

    EigenVerify: {
      title: "EigenVerify – The Gear Sensor That Detects Fraud",
      content: (
        <>
          <p>
            Picture <strong>EigenCloud</strong> as a high-performance
            decentralized car. Every part of the engine works in harmony to
            deliver speed, control, and reliability. But even in the smoothest
            drives, things can go wrong — like forcing the car into the wrong
            gear or pushing past safe limits. That’s where{" "}
            <strong>EigenVerify</strong> comes in: it's the <em>gear sensor</em>{" "}
            that monitors execution and detects fraud or invalid behavior.
          </p>

          <p>
            For AVS and rollup builders, writing custom fraud proofs is
            difficult and time consuming. EigenVerify is a set of ready to use
            dispute resolution services that can adjudicate the correctness of
            any AVS execution result in the event of a challenge. It will
            support three modes of dispute resolution: objective (via
            deterministic re-execution), intersubjective (via socially
            agreed-upon rules), and AI-assisted adjudication (for more complex
            or ambiguous cases). All outcomes are ultimately backed by EIGEN
            token forking, ensuring that honest participants can always
            coordinate on a canonical result.
          </p>

          <p>
            ⚙️ EigenVerify supports <strong>three types of verification</strong>
            :
          </p>
          <ul>
            <li>
              <strong>Objective:</strong> Deterministic re-execution — like
              replaying the gear changes and checking every move.
            </li>
            <li>
              <strong>Intersubjective:</strong> Resolution based on shared
              social rules — like a pit crew agreeing on what’s fair based on
              road rules.
            </li>
            <li>
              <strong>AI-assisted:</strong> In complex or gray areas, AI helps
              analyze and resolve edge-case disputes — like a smart co-pilot
              analyzing sensor data.
            </li>
          </ul>

          <p>
            🚧 <strong>Current Status:</strong> EigenVerify is in{" "}
            <em>private preview</em> and still being refined, but here’s how it
            works under the hood:
          </p>
          <ul>
            <li>
              Any AVS can <strong>register with EigenVerify</strong> by meeting
              predefined conditions.
            </li>
            <li>
              During execution, AVSs <strong>post claims</strong> on-chain.
            </li>
            <li>
              If someone challenges a claim, the system{" "}
              <strong>re-executes the task off-chain</strong> via a
              decentralized set of EigenVerify operators.
            </li>
            <li>
              The aggregated result is <strong>posted on-chain</strong>. If it
              differs from the original claim,{" "}
              <strong>slashing is triggered</strong>.
            </li>
            <li>
              Over time, disputes involving{" "}
              <strong>oracle data or AI models</strong> can be handled using
              intersubjective or AI-based resolution modes.
            </li>
            <li>
              If people still disagree with the result, they can{" "}
              <strong>trigger a fork of the EIGEN token</strong>, allowing the
              community to coordinate on a canonical outcome — the ultimate
              social enforcement mechanism.
            </li>
          </ul>

          <p>
            🧪 With EigenVerify, AVSs can stop worrying about building complex
            fraud logic and focus on shipping their products. Think of it as a
            gearbox sensor that watches for performance faults and keeps
            everything driving honestly — with the force of cryptoeconomics and
            social consensus behind every turn.
          </p>
        </>
      ),
    },

    EigenCloudStack: {
      title: "How It All Comes Together – The Full Engine in Motion",
      content: (
        <>
          <p style={{ marginBottom: "1rem" }}>
            The Eigen cloud promises cloud-scale programmability and enhance
            crypto verifiability. If <strong>EigenCloud</strong> is the
            self-driving car engine of Web3, then its four components —{" "}
            <strong>EigenLayer</strong>, <strong>EigenDA</strong>,{" "}
            <strong>EigenCompute</strong>, and <strong>EigenVerify</strong> —
            are the well structured engine parts working together to keep
            everything running fast, smooth, and safe.
          </p>

          <p>
            <strong>EigenLayer</strong> is the ignition system — this is where
            everything starts. It empowers your decentralized app with
            Ethereum’s trust and security through 'restaking'. It's the reason
            the whole machine turns on. For any engine to work smoothly and at a
            faster pace,it needs a fuel source and in this context, the fuel
            source is
            <strong>EigenDA</strong> — the high-performance data availability.
            <br />
            <strong>EigenDA</strong> acts like a turbocharged fuel injector —
            constantly supplying scalable, tamper-proof data to your app at
            blazing speed. It keeps your engine well-fed and running
            smoothly.Now our engine is running, but we need to make sure it’s
            has an interface whre we can build and run our applications, this is
            where <strong>EigenCompute</strong> comes in.
            <br />
            <strong>EigenCompute</strong> is the high-performance engine block —
            handling AI inference, simulations, and offchain workloads with
            precision, while still giving onchain-verifiable results. It gives
            your dApp real muscle under the hood.Now that we have our engine
            running and an interface for it, we need to make sure it’s running
            correctly and safely, this is where <strong>EigenVerify</strong>{" "}
            comes into play.
            <br />
            <strong>EigenVerify</strong> is like your gear sensor and safety
            system. It detects errors, fraud, or misbehavior and kicks in to
            resolve disputes — using replays, consensus, or even AI. All backed
            by the EIGEN token’s powerful forking mechanism.
          </p>

          <p style={{ marginBottom: "1rem" }}>
            Together, these parts form the ultimate modular Web3 stack — making
            it easier than ever to build complex, verifiable applications like
            oracle networks, AI agents, crypto-native games, and scalable DeFi
            systems.
          </p>

          <p style={{ fontWeight: "600", color: "#28e0ae" }}>
            🚗 Think of EigenCloud as the complete Web3 engine — powerful,
            secure, and ready to drive the next generation of unstoppable
            blockchain applications.
          </p>
        </>
      ),
    },
    AVSUseCases: {
      title: "What Can You Build on EigenCloud? – The AVS Possibilities",
      content: (
        <>
          <p style={{ marginBottom: "1rem" }}>
            If EigenCloud is the engine of the decentralized world, then AVSs
            (Autonomous Verifiable Services) are the custom-built cars you
            create using that engine — each one designed for a specific job:
            racing (like DeFi), off-roading (games), autopilot (AI), or delivery
            (oracles). Just like car engines can be tuned with different parts
            for better performance, AVSs are modular, smart services you plug
            into EigenCloud to build powerful, verifiable applications. Think of
            it like this: a car engine powers things like GPS, auto-braking, and
            self-driving features. Similarly, the EigenCloud engine powers AVSs
            — smart, upgradeable modules that let developers build anything from
            real-time data feeds to AI logic, all while keeping trust and
            transparency on-chain.
          </p>

          <p style={{ marginBottom: "1rem" }}>
            Here are just a few types of AVSs developers can build:
          </p>

          <ul style={{ marginBottom: "1rem", paddingLeft: "1.2rem" }}>
            <li>
              <strong>Verifiable Oracles:</strong> Pull offchain data (like
              prices, weather, or sports ) and prove its correctness
              onchain.These power real apps like DeFi platforms and prediction
              markets.
            </li>
            <li>
              <strong>AI Inference Engines:</strong> Run AI models offchain
              (like LLMs or image recognition), then post verifiable results
              onchain.
            </li>
            <li>
              <strong>Crypto Gaming Logic:</strong> Run real-time physics or
              game engines and make results tamper-proof and trustless.
            </li>
            <li>
              <strong>Fraud Proof Systems:</strong> Challenge and validate
              execution on rollups or AVSs — with dispute resolution backed by
              EigenVerify.
            </li>
            <li>
              <strong>Document Validators:</strong> Verify offchain legal
              documents, contracts, or identity data, and make them provable
              onchain.
            </li>
            <li>
              <strong>Liquidation Bots / DeFi Risk Engines:</strong> Offload
              real-time risk analysis and liquidation logic with full audit
              trails.
            </li>
          </ul>

          <p style={{ fontWeight: "600", color: "#28e0ae" }}>
            🌐 AVSs are where imagination meets verification. If you can dream
            it, you can build it — with decentralized trust at every layer.
          </p>
        </>
      ),
    },
    AVSPower: {
      title: "Why This Matters – Building With Superpowers",
      content: (
        <>
          <p style={{ marginBottom: "1rem" }}>
            If you're building a decentralized app or protocol,{" "}
            <strong>EigenCloud</strong> gives you something Web3 has never had
            before — a full-service engine that brings power, speed, and trust
            in one place.
          </p>

          <p style={{ marginBottom: "1rem" }}>
            Before now, building complex dApps meant hacking together multiple
            chains, oracles, computation layers, and slashing logic — with no
            easy way to verify everything was working honestly. It was like
            building a race car from scrap parts, hoping it runs.
          </p>

          <p style={{ marginBottom: "1rem" }}>
            With <strong>AVSs (Autonomous Verifiable Services)</strong>, you can
            now build modular apps that are fast, secure, and fully verifiable —
            without needing to worry about trust assumptions or custom fraud
            systems.
          </p>

          <p style={{ marginBottom: "1rem" }}>
            Whether it’s a DeFi protocol, an AI-powered agent, an onchain game,
            or a real-world asset verifier, <strong>AVSs</strong> give you the
            freedom to focus on building the actual product — while the
            EigenCloud engine handles the trust, compute, data, and verification
            under the hood.
          </p>

          <p style={{ fontWeight: "600", color: "#28e0ae" }}>
            This is why builders are calling it the AWS moment for crypto — Back
            in the early days of the internet (Web2), building apps was tough.
            You had to set up your own servers, worry about security, storage,
            databases — the whole stack. Then AWS (Amazon Web Services) came
            along and changed everything. Suddenly, developers could spin up
            servers, store data, and deploy apps in minutes — no hardware to
            manage, no huge upfront cost. It made building apps faster, cheaper,
            and way more scalable. That’s why AWS became the foundation for so
            many modern tech startups. Now, EigenCloud is doing the same for
            Web3. You no longer need to build complex blockchain infrastructure
            from scratch. Just like AWS gives you tools for storage, compute,
            and networking, EigenCloud gives you modular Web3 tools — trust,
            data availability, compute, and verification — ready to plug in.
            That means developers can build powerful apps — from AI reasoning
            agents and gaming simulations to onchain price feeds and document
            verification — all with cryptographic proof that everything works as
            expected. It’s no longer about “How do I build a blockchain?” It’s
            now: “What can I build with this powerful new engine?”
          </p>
        </>
      ),
    },
    EigenCloudFinal: {
      title: "🔐 Keeping It Honest + Real Apps on EigenCloud",
      content: (
        <>
          <p style={{ marginBottom: "1rem" }}>
            The EIGEN token isn’t just a governance coin — it’s a trust anchor.
            When a dispute arises in any AVS, it’s resolved using one of three
            methods: deterministic re-execution (objective), consensus-based
            judgement (intersubjective), or AI-assisted reasoning.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            But what happens if people still disagree? That’s where the magic
            happens: the EIGEN token can be <strong>forked</strong>. Anyone who
            disagrees with the adjudication outcome can initiate a fork of the
            token, creating a new version of the system that aligns with their
            view. This gives power back to the community and makes cheating
            economically irrational.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            The threat of a fork keeps everyone — operators, AVSs, developers —
            accountable. It’s like a built-in “exit button” for honest
            participants, ensuring the protocol always trends toward integrity.
          </p>

          <h3 style={{ marginTop: "1.5rem", color: "#28e0ae" }}>
            🚀 Real Apps Built with EigenCloud
          </h3>
          <ul style={{ paddingLeft: "1.2rem", marginBottom: "1rem" }}>
            <li>
              <strong>AltLayer</strong> – a rollup launcher AVS that helps
              developers spin up app-specific chains quickly.
            </li>
            <li>
              <strong>Lagrange</strong> – builds zero-knowledge proofs over
              subgraphs of onchain data, enabling zkQueries.
            </li>
            <li>
              <strong>Witness Chain</strong> – a decentralized coordination
              layer for AI agents running on EigenCompute.
            </li>
            <li>
              <strong>Near’s Data Availability Layer</strong> – integrates with
              EigenDA to power scalable rollups.
            </li>
          </ul>

          <p style={{ fontWeight: "600", color: "#28e0ae" }}>
            💡 This combo of cryptoeconomic security + modular services is why
            EigenCloud is unlocking a new frontier in decentralized innovation.
          </p>
        </>
      ),
    },
  };
  return (
    <div className="eigencloud-explainer">
      <div className="eigencloud-header">
        <img src={eigenLogo} />
        <p className="expanded-text">
          — a powerful fusion of modular blockchain services.
        </p>
      </div>

      <p>
        EigenCloud is like a car and every car has a <strong>car engine</strong>
        .In this contex,the eigencloud is like a car engine for the
        decentralized world. It controls and powers every moving part of
        blockchain infrastructure. Think speed, trust, and high performance —
        all under one hood.it is the packaged sellable vision of Eigen
        Layer.Just like AWS(amazon web services)is the cloud computing platform
        for the web2 internet, EigenCloud is the cloud for the decentralized
        web3 world.It is a place where blockchain developers can build modular
        applications that are fast, efficient, and secure.Here,you don't have to
        trust that somebody else is going to run their stuff correctly,but
        instead see and verify for yourself that everything is running smoothly
        and correctly.
      </p>
      <p className="expanded-text">
        The EigenCloud is made up of four key components:
      </p>
      <div className="component-buttons">
        <h3>Click each to learn more:</h3>
        <button
          onClick={() => openModal("EigenLayer")}
          className="read-more-btn"
        >
          EigenLayer
        </button>
        <button onClick={() => openModal("EigenDA")} className="read-more-btn">
          EigenDA
        </button>
        <button
          onClick={() => openModal("EigenCompute")}
          className="read-more-btn"
        >
          EigenCompute
        </button>
        <button
          onClick={() => openModal("EigenVerify")}
          className="read-more-btn"
        >
          EigenVerify
        </button>
      </div>
      <div className="stack-button" style={{ marginTop: "1.5rem" }}>
        <h3>See the full picture:</h3>
        <button
          onClick={() => openModal("EigenCloudStack")}
          className="read-more-btn"
        >
          🔧 How It All Works Together
        </button>
      </div>
      <div className="avs-explanation">
        <p>
          Having understood the eigencloud and its components, let me take you
          through:{" "}
        </p>
        <button
          onClick={() => openModal("AVSUseCases")}
          className="read-more-btn"
        >
          What You Can Build (AVSs)
        </button>
      </div>
      <div className="stack-button" style={{ marginTop: "1.5rem" }}>
        <h3>Now the big question is ready to be answered:</h3>
        <button onClick={() => openModal("AVSPower")} className="read-more-btn">
          🔧 why it matters
        </button>
      </div>
      <div className="stack-button" style={{ marginTop: "1.5rem" }}>
        <p>Before you leave click me:</p>
        <button
          onClick={() => openModal("EigenCloudFinal")}
          className="read-more-btn"
        >
          🔐 Final Thoughts
        </button>
      </div>
      {/* Modal */}
      {activeModal && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{modalData[activeModal].title}</h2>
            <div className="modal-scroll">{modalData[activeModal].content}</div>

            <button onClick={closeModal} className="read-more-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
