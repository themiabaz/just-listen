import React from "react";

// >> START << React Hooks Form Component
function Home() {
  return (
    <div id="container">
      <div align="center">
        <h1>just listen</h1>
        <p>
          enter pitches below, then press 'tune' to hear it in just intonation!
        </p>
        <p>
          <em>(calculations are available in the console)</em>
          <em>(you'll need to refresh the page every time, sorry)</em>
        </p>
      </div>
      <div>
        <p>try:</p>
        <ul>
          <li>E5-C5-G4-C4 (CM)</li>
          <li>C5-Gb4-Ab4-Eb4 (AbM7) </li>
          <li>Bb4-G4-E4-C#4 (C#d7)</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
