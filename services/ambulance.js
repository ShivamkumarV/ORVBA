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
  

  var contactFormDB = firebase.database().ref("ambulancefrom");
  
+  document.getElementById("ambulancefrom").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var location = getElementVal("location");
    var number = getElementVal("number");
    var hospital = getElementVal("hospital");
    var Emergency = getElementVal("Emergency");
  
    saveMessages(name, location, number,hospital,Emergency);
  

    document.querySelector(".alert").style.display = "block";
  
  
    
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    document.getElementById('ambulancefrom').reset();
  }
  
  const saveMessages = (name, location, number,hospital,Emergency) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      location: location,
      number: number,
      hospital:hospital,
      Emergency:Emergency,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };