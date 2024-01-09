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
  

  var contactFormDB = firebase.database().ref("hotelform");
  
  document.getElementById("hotelform").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var fullname = getElementVal("fullname");
    var idproof = getElementVal("idproof");
    var number = getElementVal("number");
    var bedroom = getElementVal("bedroom");
    var days = getElementVal("days");

  
    saveMessages(fullname, idproof, number,bedroom,days);
  

    document.querySelector(".alert").style.display = "block";
    
    
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
  
    document.getElementById("hotelform").reset();
  }
  
  const saveMessages = (fullname, idproof, number,bedroom,days) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      fullname: fullname,
      idproof: idproof,
      number: number,
      bedroom:bedroom,
      days: days,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };