function updateClock() {
  const now = new Date();

  document.getElementById("clock").textContent =
    now.toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);

function openWindow() {
  document.getElementById("caseWindow").style.display = "block";
}

function closeWindow() {
  document.getElementById("caseWindow").style.display = "none";
}

function enterOS() {

  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("desktop-screen").style.display = "block";
}

function updateWelcomeClock() {

  document.getElementById("welcomeClock").innerHTML =
    new Date().toLocaleDateString() +
    "<br>" +
    new Date().toLocaleTimeString();
}

updateWelcomeClock();
setInterval(updateWelcomeClock, 1000);

function showLogin() {

  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("login-screen").style.display = "flex";
}

function startInvestigation() {

  const name =
    document.getElementById("detectiveInput").value;

  if(name.trim() === ""){
    alert("Enter Detective Name");
    return;
  }
  document.getElementById("detectiveName").textContent = name;
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("desktop-screen").style.display = "block";
}
function openEvidenceWindow() {
  document.getElementById("evidenceWindow").style.display = "block";
}
function closeEvidenceWindow() {
  document.getElementById("evidenceWindow").style.display = "none";
}

dragElement(
  document.getElementById("evidenceWindow"),
  document.getElementById("evidenceWindowHeader")
);
function dragElement(element, header) {

  let pos1 = 0;
  let pos2 = 0;
  let pos3 = 0;
  let pos4 = 0;

  header.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;

    document.onmouseup = stopDragging;
    document.onmousemove = drag;
  }

  function drag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;

    pos3 = e.clientX;
    pos4 = e.clientY;

    element.style.top =
      (element.offsetTop - pos2) + "px";

    element.style.left =
      (element.offsetLeft - pos1) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(
  document.getElementById("caseWindow"),
  document.getElementById("caseWindowHeader")
);

dragElement(
  document.getElementById("evidenceWindow"),
  document.getElementById("evidenceWindowHeader")
);
function openSuspectWindow() {
  document.getElementById("suspectWindow").style.display = "block";
}

function closeSuspectWindow() {
  document.getElementById("suspectWindow").style.display = "none";
}

dragElement(
  document.getElementById("suspectWindow"),
  document.getElementById("suspectWindowHeader")
);
function openCrimeMapWindow() {
  document.getElementById("crimeMapWindow").style.display = "block";
}

function closeCrimeMapWindow() {
  document.getElementById("crimeMapWindow").style.display = "none";
}

dragElement(
  document.getElementById("crimeMapWindow"),
  document.getElementById("crimeMapWindowHeader")
);