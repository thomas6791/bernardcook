const serverToken = "2a1c571a-e3ae-4ca7-a64a-1ee5e58ebae9" //API Key
let postmark = require("postmark")
let client = new postmark.ServerClient(serverToken);

exports.handler = (event, context, callback) => {
client.sendEmail(
    {
        From: "contact@bernardcook.fr", //Deine Emailadresse
        To: "contact@bernardcook.fr", //Ziel Emailadresse
        Subject: "test email",
        HtmlBody: "test",
        TextBody: "test"
    }
).then(response => {
    console.log(response.To);
    console.log(response.SubmittedAt);
    console.log(response.Message);
    console.log(response.MessageID);
    console.log(response.ErrorCode);
});
}