
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let d = today.getDate();
  let mn = today.getMonth();
  let y = today.getFullYear();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('cc').innerHTML =  h + ":" + m + ":" + s;
  document.getElementById('cd').innerHTML =  y + ":" + mn + ":" + d;

  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
 
