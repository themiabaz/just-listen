import * as Interval from "tonal-interval";
import * as Distance from "tonal-distance";
import { Note } from "tonal";

// >>START<< JI Key Calc
export class jiKeyCalc {
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

export default jiKeyCalc;
