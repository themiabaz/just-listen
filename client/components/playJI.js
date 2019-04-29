import { useState } from "react";
import jiKeyCalc from "./jiKeyCalc";
import Tone from "tone";

// >> START << Oscillator Functions //
export function playJI() {
  const [inputs] = useState({});
  // takes the form inputs and performs JI calcs
  const jiNotes = new jiKeyCalc(inputs.mel, [
    inputs.tn,
    inputs.ld,
    inputs.br,
    inputs.bs
  ]);

  // create the PolySynth
  const jiChord = new Tone.PolySynth(4, Tone.Synth).toMaster();
  // this puts all four voices in the PolySynth
  const music = [{ time: 0, note: jiNotes.harmony, duration: "1n" }];
  const part = new Tone.Part(function(time, note) {
    //the notes given as the second element in the array
    //will be passed in as the second argument
    jiChord.triggerAttackRelease(note.note, note.duration, Tone.now());
  }, music).start(0);
  Tone.Transport.start();
}
// >> END << Oscillator Functions

// // Equal Temperament Oscillator
// function playET() {
//   const etNotes = [tn, ld, br, bs];
//   const etChord = new Tone.PolySynth(4, Tone.Synth).toMaster();
//   const music = [{ time: 0, note: etNotes, duration: "1n" }];
//   const part = new Tone.Part(function(time, note) {
//     //the notes given as the second element in the array
//     //will be passed in as the second argument
//     etChord.triggerAttackRelease(note.note, note.duration, Tone.now());
//   }, music).start(0);
//   Tone.Transport.start();
// }

export default playJI;
