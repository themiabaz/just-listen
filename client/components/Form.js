import React from "react";
import Tone from "tone";
import UseForm from "./UseForm";
import jiKeyCalc from "./jiKeyCalc";
import Button from "react-bootstrap/Button";

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
          <input
            type="text"
            name="tn"
            onChange={handleInputChange}
            value={inputs.tn}
            required
          />{" "}
          <label htmlFor="tn">
            <small>tenor</small>
          </label>
        </div>
        <div>
          <input
            type="text"
            name="ld"
            onChange={handleInputChange}
            value={inputs.ld}
            required
          />{" "}
          <label htmlFor="ld">
            <small>lead</small>
          </label>
        </div>
        <div>
          <input
            type="text"
            name="br"
            onChange={handleInputChange}
            value={inputs.br}
            required
          />{" "}
          <label htmlFor="br">
            <small>bari</small>
          </label>
        </div>
        <div>
          <input
            type="text"
            name="bs"
            onChange={handleInputChange}
            value={inputs.bs}
            required
          />{" "}
          <label htmlFor="bs">
            <small>bass</small>
          </label>
        </div>
        <div>
          <input
            type="text"
            name="mel"
            onChange={handleInputChange}
            value={inputs.mel}
            required
          />{" "}
          <label htmlFor="mel">
            <small>melody pitch</small>
          </label>
        </div>
        <button type="submit" id="JI" onClick={playJI}>
          tune!
        </button>
      </form>
      <div>
        <h6>
          <a href="https://docs.google.com/presentation/d/1UkZoLJMo9CVjXerY49RyHtMeVXi2JTcRXiI3iU96xT0/edit?usp=sharing">
            Google Slides Presentation documenting my struggles
          </a>
        </h6>
      </div>
    </div>
  );
}

export default Form;
