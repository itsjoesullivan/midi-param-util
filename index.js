module.exports = {
  getTimeValueFromMIDIParam: function getTimeValueFromMIDIParameter(midiValue) {
    return 128 * Math.pow(4, Math.log2(midiValue / 16)) / 1000;
  },
  getFrequencyValueFromMIDIParam: function getTimeValueFromMIDIParameter(midiValue) {
    return 8 + (44100 / 2) * Math.pow(midiValue / 127, 4);
  }
};
