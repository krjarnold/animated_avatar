mySVG = document.querySelector('.svgContainer')
document.addEventListener("DOMContentLoaded", function(event) {
  var openEyes = document.getElementById("openEyes")
  var closedEyes = document.getElementById("closedEyes")
  var eye1 = document.getElementById("eye1")
  var eye2 = document.getElementById("eye2")
  var closedEye1 = document.getElementById("closedEye1")
  var closedEye2 = document.getElementById("closedEye2")
  var mask = document.getElementById("mask")
  var bowtie = document.getElementById("bowtie")
  var email = document.querySelector('.email')
  var password = document.querySelector('.password')
  var login = document.getElementById("login")


  var i = 358
  email.addEventListener('keydown', function (e) {

    event.preventDefault();
    eyesOpen()
    if (i > 362) {
      i = 362;
    } else if (i < 358) {
      i = 358
    }
    var skew = `skewX(${i})`
    openEyes.setAttribute("transform", skew)

    if (e.key === "@") {
      closedEyes.setAttribute("transform", skew)
      winkingEyes()
    }

    if (e.key === ".") {
      closedEyes.setAttribute("transform", skew)
      eyesClosed()
    }

    if (e.key === "Backspace") {
      var deleteSkew = `skewX(${i - 0.25})`
      console.log(deleteSkew)
      openEyes.setAttribute("transform", deleteSkew)
      i -= 0.5;
    }
    i += 0.25;
  })

  password.addEventListener('keydown', function (e) {
    eyesClosed()
    showMask()
  })

  password.addEventListener("focus", function(e){
    showMask()
    slideMaskOn()
  })

  password.addEventListener("focusout", function(e){
    liftOffMask()
  })

  document.getElementById("login").addEventListener("click", function(e){
    stopSpinBowtie()
  })

  login.addEventListener("focus", function(e){
    resetEyesCenter()
    eyesOpen()
    setTimeout(spinBowtie, 200)
  })

  login.addEventListener("mouseenter", function(e){
    resetEyesCenter()
    eyesOpen()
    liftOffMask()
    setTimeout(spinBowtie, 200)
  })

  login.addEventListener("focusout", function(e){
    stopSpinBowtie()
  })

  login.addEventListener("mouseleave", function(e){
    stopSpinBowtie()
  })

  function eyesOpen() {
    eye1.setAttribute("display", "inherit")
    eye2.setAttribute("display", "inherit")
    closedEye1.setAttribute("display", "none")
    closedEye2.setAttribute("display", "none")
  }

  function eyesClosed() {
    eye1.setAttribute("display", "none")
    eye2.setAttribute("display", "none")
    closedEye1.setAttribute("display", "inherit")
    closedEye2.setAttribute("display", "inherit")
  }

  function winkingEyes() {
    eye1.setAttribute("display", "none")
    closedEye1.setAttribute("display", "inherit")
  }

  function resetEyesCenter() {
    openEyes.setAttribute("transform", "skewX(0)")
    closedEyes.setAttribute("transform", "skewX(0)")
  }

  function showMask() {
    mask.setAttribute("display", "inherit")
  }

  function slideMaskOn() {
    mask.classList.add("slidingdown")
  }

  function liftOffMask() {
    mask.classList.remove("slidingdown")
    mask.classList.add("slidingup")
    setTimeout(dissapearMask, 100)
  }

  function dissapearMask() {
    mask.classList.remove("slidingup")
    mask.setAttribute("display", "none")
  }

  function spinBowtie() {
    bowtie.classList.add("spinning")
  }

  function stopSpinBowtie() {
    bowtie.classList.remove("spinning")
  }
});
