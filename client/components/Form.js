import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import * as Interval from "tonal-interval";
import * as Distance from "tonal-distance";
import { Note } from "tonal";
import Tone from "tone";
import useForm from "./CustomHooks";

// >>START<< JI Key Calc
class jiKey {
  constructor(pitch, arr) {
    this.base = Note.freq(pitch);
    this["1P"] = this.base * 1 / 1;
    this["1A"] = this.base * 25 / 24;
    this["2d"] = this.base * 128 / 125;
    this["2m"] = this.base * 17 / 16;
    this["2M"] = this.base * 9 / 8;
    this["2A"] = this.base * 75 / 64;
    this["3d"] = this.base * 256 / 225;
    this["3m"] = this.base * 6 / 5;
    this["3M"] = this.base * 5 / 4;
    this["3A"] = this.base * 125 / 96;
    this["4d"] = this.base * 32 / 25;
    this["4P"] = this.base * 4 / 3;
    this["4A"] = this.base * 45 / 32;
    this["5d"] = this.base * 64 / 45;
    this["5P"] = this.base * 3 / 2;
    this["5A"] = this.base * 25 / 16;
    this["6d"] = this.base * 192 / 125;
    this["6m"] = this.base * 8 / 5;
    this["6M"] = this.base * 5 / 3;
    this["6A"] = this.base * 225 / 128;
    this["7d"] = this.base * 128 / 75;
    this["7m"] = this.base * 9 / 5;
    this["7M"] = this.base * 16 / 15;
    this["8d"] = this.base * 48 / 25;
    this["8P"] = this.base * 2 / 1;
    this.harmony = arr.map(voice => {
      let int = Distance.interval(pitch, voice);
      if (int.charAt(0) === "-") {
        int = Interval.invert(int.slice(1));
        voice = this[int] / 2;
      } else {
        voice = this[int];
      }
      return voice;
    });
  }
}
// >> END << JI Key Calc

// >> START << React Hooks Form Component
function Form() {
  const { inputs, handleInputChange, handleSubmit } = useForm(playJI);

  // >> START << Oscillator Functions //
  const playJI = () => {
    const jiNotes = new jiKey(inputs.mel, [
      inputs.tn,
      inputs.ld,
      inputs.br,
      inputs.bs
    ]);
    const jiChord = new Tone.PolySynth(4, Tone.Synth).toMaster();
    const music = [{ time: 0, note: jiNotes.harmony, duration: "1n" }];
    const part = new Tone.Part(function(time, note) {
      //the notes given as the second element in the array
      //will be passed in as the second argument
      jiChord.triggerAttackRelease(note.note, note.duration, Tone.now());
    }, music).start(0);
    Tone.Transport.start();
  };

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
  // >> END << Oscillator Functions

  // >> START << Side Effects
  // useEffect(() => {
  //   document.title = oogabooga;
  // });
  // >> END << Side Effects

  // >> RENDER COMPONENT <<
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="tn">
          <small>tenor</small>
        </label>
        <input
          type="text"
          name="tn"
          onChange={handleInputChange}
          value={inputs.tn}
          required
        />
      </div>
      <div>
        <label htmlFor="ld">
          <small>lead</small>
        </label>{" "}
        <input
          type="text"
          name="ld"
          onChange={handleInputChange}
          value={inputs.ld}
          required
        />
      </div>
      <div>
        <label htmlFor="br">
          <small>bari</small>
        </label>
        <input
          type="text"
          name="br"
          onChange={handleInputChange}
          value={inputs.br}
          required
        />
      </div>
      <div>
        <label htmlFor="bs">
          <small>bass</small>
        </label>
        <input
          type="text"
          name="bs"
          onChange={handleInputChange}
          value={inputs.bs}
          required
        />
      </div>
      <div>
        <label htmlFor="mel">
          <small>melody pitch</small>
        </label>
        <input
          type="text"
          name="mel"
          onChange={handleInputChange}
          value={inputs.mel}
          required
        />
      </div>

      {/* <button type="submit">Submit</button> */}

      <button type="submit" id="JI" onClick={playJI}>
        JI = submit
      </button>

      {/* <button type="button" id="ET" onClick={playET}>
        ET
      </button> */}
    </form>
  );
}

export default Form;
