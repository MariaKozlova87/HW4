

// DZ #4

// 1.

const moment = require('moment');
const OpeningTimes = require('moment-opening-times');
const openingTimes =
{
  sunday:    [ { opens: '09:00', closes: '17:30' } ],
  monday:    [ { opens: '08:00', closes: '11:00' }, { opens: '13:00', closes: '15:00' }, { opens: '17:00', closes: '19:00' } ],
  tuesday:   [ { opens: '09:00', closes: '17:30' } ],
  wednesday: [ { opens: '09:00', closes: '12:00' }, { opens: '14:00', closes: '18:00' } ],
  thursday:  [ { opens: '09:00', closes: '17:00' }, { opens: '18:00', closes: '21:00' } ],
  friday:    [ { opens: '09:00', closes: '17:30' } ],
  saturday:  [ { opens: '09:00', closes: '17:30' } ],
}
 
// a)
// const now = moment();
// const openingTimesMoment = new OpeningTimes(openingTimes, 'Europe/London');
//  const status = openingTimesMoment.getStatus(now);
// console.log(status);

// or 

// b)
const dateToCheck = moment('2019-12-31 23:59:59');
const openingTimesMoment = new OpeningTimes(openingTimes, 'Indian/Christmas');
const status = openingTimesMoment.getStatus(dateToCheck);
console.log(status);





// 2.

const fs = require('fs');
const streamRead = new fs.ReadStream('./hello.txt'); 
streamRead.on('readable', function() {
  let data = streamRead.read();
  console.log(data);
});
 
streamRead.on('end', function(){
    console.log("the end");
});



const streamWrite = new fs.WriteStream('./hello1.txt'); 
streamWrite.on('writable', function() {
let data = streamWrite.write();
  streamWrite.write(data);
  console.log(data);
});


const StreamRead = fs.createReadStream('./hello.txt');
const WriteStream = fs.createReadStream('./hello1.txt');
 
streamRead.pipe(streamWrite);