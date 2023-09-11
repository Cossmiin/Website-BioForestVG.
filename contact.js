function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get the values entered by the user
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // Construct the email subject and body
    var subject = "Nuevo mensaje de " + name;
    var body = "Nombre: " + name + "\nEmail: " + email + "\nMensaje: " + message;
    
    // Construct the mailto link
    var mailtoLink = "mailto:bioforestvg@gmail.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
    
    // Open the mail client with the mailto link
    window.location.href = mailtoLink;
}
