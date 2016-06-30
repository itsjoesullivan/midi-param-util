##MIDI-param-util

Useful for converting a MIDI value (0-127) to a reasonable time value or frequency value (i.e. envelopes or filters).

###Usage

####`getTimeValueFromMIDIParam`

```javascript
var getTimeValueFromMIDIParam = require('midi-param-util').getTimeValueFromMIDIParam;

getTimeValueFromMIDIParam(0);
// 0

getTimeValueFromMIDIParam(1);
// 0.0005

getTimeValueFromMIDIParam(5);
// 0.0125

getTimeValueFromMIDIParam(15);
// 0.1125

getTimeValueFromMIDIParam(32);
// 0.512

getTimeValueFromMIDIParam(64);
// 2.048

getTimeValueFromMIDIParam(64);
// 2.048

getTimeValueFromMIDIParam(100);
// 5

getTimeValueFromMIDIParam(127);
// 8.0645
```

####`getFrequencyValueFromMIDIParam`

```javascript
var getFrequencyValueFromMIDIParam = require('midi-param-util').getFrequencyValueFromMIDIParam;

getFrequencyValueFromMIDIParam(0);
// 8

getFrequencyValueFromMIDIParam(20);
// 21 

getFrequencyValueFromMIDIParam(32);
// 96.87

getFrequencyValueFromMIDIParam(64);
// 1430.045

getFrequencyValueFromMIDIParam(96);
// 7207.10

getFrequencyValueFromMIDIParam(100);
// 8484.05

getFrequencyValueFromMIDIParam(128);
// 22760.73
```
