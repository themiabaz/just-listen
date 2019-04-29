import React from "react";
import Tone from "tone";
import UseForm from "./UseForm";
import jiKeyCalc from "./jiKeyCalc";

// export let keyData = {}; // see line 22

// >> START << React Hooks Form Component
export function Form() {
  const { inputs, handleInputChange, handleSubmit } = UseForm(playJI);

  // >> START << Oscillator Function //
  const playJI = () => {
    // takes the form inputs and performs JI calcs
    const jiNotes = new jiKeyCalc(inputs.mel, [
      inputs.tn,
      inputs.ld,
      inputs.br,
      inputs.bs
    ]);

    // poor attempt to use closure when useState wasn't lining up to pass some of the post-calculated form data to another component
    // keyData = { mel: jiNotes.base, chord: [jiNotes.harmony] };

    // create the PolySynth
    const jiChord = new Tone.PolySynth(4, Tone.Synth).toMaster();
    // this puts all four voices in the PolySynth
    const music = [{ time: 0, note: jiNotes.harmony, duration: "1n" }];
    const part = new Tone.Part(function(time, note) {
      jiChord.triggerAttackRelease(note.note, note.duration, Tone.now());
    }, music).start(0);
    // Wow, these console.log()s straight up broke the program.
    // I tried putting them right under the jiNotes calculation; also broke. This is probably something I don't understand about React Hooks.
    // console.log(
    //   `original frequencies! Tenor: `,
    //   Tone.freq(inputs.tn),
    //   `, lead: `,
    //   Tone.freq(inputs.ld),
    //   `, baritone: `,
    //   Tone.freq(inputs.br),
    //   `bass: `,
    //   Tone.freq(inputs.bs)
    // );

    // console.log(
    //   `new frequencies! Tenor: `,
    //   Tone.freq(jiNotes.harmony[0]),
    //   `, lead: `,
    //   Tone.freq(jiNotes.harmony[0]),
    //   `, baritone: `,
    //   Tone.freq(jiNotes.harmony[0]),
    //   `bass: `,
    //   Tone.freq(jiNotes.harmony[0])
    // );
    Tone.Transport.start();
  };
  // >> END << Oscillator Function //

  // >> START << Side Effects //
  // side effects takes the place of componentDidMount, willMount, willUnmount. GENIUS
  // useEffect(() => { // placeholder
  //   return something
  // });
  // >> END << Side Effects

  // >> RENDER COMPONENT << //
  return (
    <div>
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
        <button type="submit" id="JI" onClick={playJI}>
          tune!
        </button>
      </form>
    </div>
  );
}

export default Form;
