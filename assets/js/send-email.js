console.log("send email script");
var postmark = require("postmark");
var fs = require('fs');

// Send an email:
var client = new postmark.Client("2a1c571a-e3ae-4ca7-a64a-1ee5e58ebae9");
document.querySelector(".btn.btn-primary").addEventListener("click", (event) => {
    debugger;
    console.log("envoi mail 1");
    client.sendEmail({
    "From": "sender@example.com", 
    "To": "recipient@example.us", 
    "Subject": "Test", 
    "TextBody": "Test Message",
    "Attachments": [{
      "Content": fs.readFileSync("./unicorns.jpg").toString('base64'),
      "Name": "PrettyUnicorn.jpg",
      "ContentType": "image/jpeg"
    }]
}, function(error, result) {
    if(error) {
        console.error("Unable to send via postmark: " + error.message);
        return;
    }
    console.info("Sent to postmark for delivery")
});

});




