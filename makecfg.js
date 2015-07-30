console.log('bank 0\n');

file = '002_Electric_Grand_Piano'; //
file = '004_Electric_Piano_1_Rhodes';
file = '005_Electric_Piano_2_Chorused_Yamaha_DX';
file = '006_Harpsichord'; // good

file = '016_Hammond_Organ'; // good
// file = '019_Church_Organ'; // good

file = '001_Acoustic_Brite_Piano';
file = '000_Acoustic_Grand_Piano'; // ok


for (i=0;i<127;i++) console.log(i + ' Tone_000/' + file + '.pat amp=120 pan=center')
// for (i=0;i<127;i++) console.log(i + ' Tone_000/' + file + '.pat')
