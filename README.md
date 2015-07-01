Wild Web Midi
--

Wild Web Midi is [@blurspline](http://twitter.com/blurspline) attempt to run a "wavetable" (sample based) software synthesizer in the browser in JavaScript.

### See [http://zz85.github.io/wild-web-midi/](Demo)


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
- 2 July 2015 - update index and added sample midi files
- 1 July 2015 - built for the browser. allow wav playback and download after conversion.
- 30 June 2015 - compiled to JS with emscripten to allow running in node.js and browser

TODO
- allow opening of midis from browser (DONE)
- saving of generated wav from browser (DONE)
- wav playback from browser (DONE)
- stream audio to Web Audio API
- pass output through lame or other MP3 encoders for download
- allow custom patches
