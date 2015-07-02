/*
 * Simple script for running emcc on wildmidi
 * @author zz85 github.com/zz85
 */

var NODEJS = false;

var EMCC = '/usr/lib/emsdk_portable/emscripten/1.30.0/emcc';

var OPTIMIZE_FLAGS = ' -O2';

var includes = [
    'wm_error.c',
    'file_io.c',
    'lock.c',
    'wildmidi_lib.c',
    'reverb.c',
    'gus_pat.c',
    'internal_midi.c',
    'patches.c',
    'f_xmidi.c',
    'f_mus.c',
    'f_hmp.c',
    'f_midi.c',
    'f_hmi.c',
    'sample.c',
    'mus2mid.c',
    'xmi2mid.c',

    // 'wm_tty.c'
].map(function(include) {
	return 'wildmidi/src/' + include;
});

includes.push('src/wildwebmidi.c');

console.log('Includes: ' + includes);

var DEFINES = {};
if (NODEJS) DEFINES.NODEJS = 1;

var FLAGS = OPTIMIZE_FLAGS;

var MEM = 64 * 1024 * 1024; // 64MB
FLAGS += ' -s TOTAL_MEMORY=' + MEM + ' ';
// FLAGS += ' -s ALLOW_MEMORY_GROWTH=1';

if (!NODEJS) FLAGS += ' --preload-file freepats ';

// var DEBUG_FLAGS = '-g';
//  -s DEMANGLE_SUPPORT=1
// FLAGS += ' -s EMTERPRETIFY=1 '

FLAGS += ' --pre-js pre.js --post-js post.js '

var defines = Object.keys(DEFINES).map(function(d) {
	return '-D' + d + '=' + DEFINES[d];
}).join(' ');

var compile_all = EMCC + ' -Isrc -Iwildmidi/include  '
	+ includes.join(' ')
	+ FLAGS + ' ' + defines + ' -o wildwebmidi.js -s EXPORTED_FUNCTIONS="[\'_wildwebmidi\']"' ;


var
	exec = require('child_process').exec,
	child;

function onExec(error, stdout, stderr) {
	if (stdout) console.log('stdout: ' + stdout);
	if (stderr) console.log('stderr: ' + stderr);
	if (error !== null) {
		console.log('exec error: ' + error);
	} else {
		nextJob();
	}
}

function nextJob() {
	if (!jobs.length) {
		console.log('jobs done');
		return;
	}
	var cmd = jobs.shift();
	console.log('running ' + cmd);
	exec(cmd, onExec);
}

var jobs = [
	compile_all
];

nextJob();


