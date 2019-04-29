import React, { useState } from "react";
import Tone from "tone";
import jiKey from "./keyCreator";
import { Form } from "./Form";

const { tn, ld, br, bs, mel } = Form("");

// JI chord //
function playJI() {
  const jiNotes = new jiKey(mel, [tn, ld, br, bs]);
  const jiChord = new Tone.PolySynth(4, Tone.Synth).toMaster();
  const music = [{ time: 0, note: jiNotes.harmony, duration: "1n" }];
  const part = new Tone.Part(function(time, note) {
    //the notes given as the second element in the array
    //will be passed in as the second argument
    jiChord.triggerAttackRelease(note.note, note.duration, Tone.now());
  }, music).start(0);
  Tone.Transport.start();
}

function playET() {
  const etNotes = [tn, ld, br, bs];
  const etChord = new Tone.PolySynth(4, Tone.Synth).toMaster();
  const music = [{ time: 0, note: etNotes, duration: "1n" }];
  const part = new Tone.Part(function(time, note) {
    //the notes given as the second element in the array
    //will be passed in as the second argument
    etChord.triggerAttackRelease(note.note, note.duration, Tone.now());
  }, music).start(0);
  Tone.Transport.start();
}

// component
const Oscillator = () => {
  return (
    <div>
      <h1>just listen</h1>
      <button type="button" id="JI" onClick={playJI}>
        JI
      </button>
      <button type="button" id="ET" onClick={playET}>
        ET
      </button>
    </div>
  );
};

export default Oscillator;
