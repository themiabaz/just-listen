import React from "react";
import Tone from "tone";
import UseForm from "./UseForm";
import jiKeyCalc from "./jiKeyCalc";

// >> START << React Hooks Form Component
export function Form() {
  const { inputs, handleInputChange, handleSubmit } = UseForm(playJI);

  // >> START << Oscillator Functions //
  const playJI = () => {
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
  };

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
        tune!
      </button>

      {/* <button type="button" id="ET" onClick={playET}>
        ET
      </button> */}
    </form>
  );
}

export default Form;
