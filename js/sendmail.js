

function sendMail(isForm){

isBody = "";
recipient = "lekhanhduyduy1201@gmail.com";
isSubject = "Form Data";
isBody = "Name: " + isForm.yourname.value +" --- ";
isBody += "Email: " + isForm.email.value +" --- ";
isBody += "Message: " + isForm.message.value +" --- ";
document.forms.sentMessage.action = "mailto:"+recipient+"?&subject="+isSubject+"&body="+isBody;

}
