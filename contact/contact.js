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
  

  var contactFormDB = firebase.database().ref("contactform");
  
  document.getElementById("contactform").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var firstname = getElementVal("firstname");
    var lastname = getElementVal("lastname");
    var emailid = getElementVal("emailid");
    var subject = getElementVal("subject");

  
    saveMessages(firstname, lastname, emailid,subject);
  

    document.querySelector(".alert").style.display = "block";
    
  
    
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
  
    document.getElementById("contactform").reset();
  }
  
  const saveMessages = (firstname, lastname, emailid,subject) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      firstname: firstname,
      lastname: lastname,
      emailid: emailid,
      subject:subject,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };