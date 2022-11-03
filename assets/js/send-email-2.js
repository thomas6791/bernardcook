const serverToken = "2a1c571a-e3ae-4ca7-a64a-1ee5e58ebae9" //API Key
let postmark = require("postmark");
let client = new postmark.ServerClient(serverToken);

client.sendEmail(
    {
        From: "contact@bernardcook.fr", //Deine Emailadresse
        To: "hunckler.thomas@hotmail.fr", //Ziel Emailadresse
        Subject: "Votre commande à retirer chez Bernard Cook",
        HtmlBody: "<p>Votre commande a bien été prise en compte.</br>Date de prise de commande :</br>Coordonnées :</br>Nom : </br>Prénom : </br>Email : </br>Commande de :</br>A retirer le :</p>",
        TextBody: "test"
    }
).then(response => {
    console.log(response.To);
    console.log(response.SubmittedAt);
    console.log(response.Message);
    console.log(response.MessageID);
    console.log(response.ErrorCode);
});