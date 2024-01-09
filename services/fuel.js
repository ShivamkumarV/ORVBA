const firebaseConfig = {
    apiKey: "AIzaSyAp_udDS9nOBYzdQ_oquWUmRibBuwOtYls",
    authDomain: "orvba-4fa2a.firebaseapp.com",
    databaseURL: "https://orvba-4fa2a-default-rtdb.firebaseio.com",
    projectId: "orvba-4fa2a",
    storageBucket: "orvba-4fa2a.appspot.com",
    messagingSenderId: "240447276740",
    appId: "1:240447276740:web:7cf9edd9ab39dbeda6ab91"
  }
  

  firebase.initializeApp(firebaseConfig);
  

  var contactFormDB = firebase.database().ref("fuelform");
  
  document.getElementById("fuelform").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var fullname = getElementVal("fullname");
    var location = getElementVal("location");
    var number = getElementVal("number");
    var fueltype = getElementVal("fueltype");
    var liter = getElementVal("liter");
    var emergency = getElementVal("emergency");
    
  
    saveMessages(fullname, location, number,fueltype,liter,emergency);
  

    document.querySelector(".alert").style.display = "block";
  
  
    
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
  
    document.getElementById("fuelform").reset();
  }
  
  const saveMessages = (fullname, location, number,fueltype,liter,emergency) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      fullname: fullname,
      location: location,
      number: number,
      fueltype:fueltype,
      liter: liter,
      emergency:emergency,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };