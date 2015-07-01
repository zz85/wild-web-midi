Wild Web Midi
--

Wild Web Midi is [@blurspline](http://twitter.com/blurspline) attempt to run a "wavetable" (sample based) software synthesizer in the browser in JavaScript.

Currently this is archived by running emscripten on the WildMidi project, which uses Gravis Ultrasound patches. Instrument patches from [Freepats](http://freepats.zenvoid.org/) project is used for the demo.

Dependencies
- emscripten
- wildmidi
- freepats

```sh
git clone git@github.com:Mindwerks/wildmidi.git
wget http://freepats.zenvoid.org/freepats-20060219.zip
node make
```

Updates

30 June 2015 - compiled to JS with emscripten to allow running in node.js and browser

TODO
- allow opening of midis from browser
- saving of generated wav from browser
- wav playback from browser
- stream audio to Web Audio API
- pass output through lame or other MP3 encoders for download
- allow custom patches
