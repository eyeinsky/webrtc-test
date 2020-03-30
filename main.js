console.log('hej');

var socket = io();


const getStream = async (constraints) => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    console.log('Got MediaStream:', stream);
  } catch(error) {
    console.error('Error accessing media devices.', error);
  }
}

const l = (label, object) => console.log(label, object);

window.addEventListener('load', async (ev) => {
  console.log('load event');

  const constraints = {'video':true,'audio':true};
  const stream = await navigator.mediaDevices.getUserMedia(constraints);

  l(stream.getSettings());
  // document.querySelector('video#local').srcObject = stream;

});


// Connected devices

const getConnectedDevices = async (predicate) => {
  const devices = await navigator.mediaDevices.enumerateDevices();
  return devices.filter(d => predicate(d.kind));
};


navigator.mediaDevices.addEventListener('devicechange', async event => {
  const newList = await getConnectedDevices(k => true);
  // do something
});
