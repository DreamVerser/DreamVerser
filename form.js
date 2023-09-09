function isValidLink(link) {
  var linkRegex = /^https:\/\/imgur\.com\//;
  return linkRegex.test(link);
}

function sendMail() {
  var name = document.getElementById("name").value;
  var forum = document.getElementById("forum").value;
  var link = document.getElementById("link").value;
  var message = document.getElementById("message").value;
  var sentCheckbox = document.getElementById("sent-checkbox");
  var conditionCheckbox = document.getElementById("condition-checkbox");

  if (!name || !message || !link || !forum || !sentCheckbox.checked || !conditionCheckbox.checked) {
    alert("Please fill out all fields");
    return;
  }

  if (!isValidLink(link)) {
    alert("Please provide a valid Imgur Link and make sure we can view your drive link!");
    return;
  }

  var params = {
    name: name,
    forum: forum,
    link: link,
    message: message,
  };

  const serviceID = "service_p73okba";
  const templateID = "template_eoi87hi";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("forum").value = "";
      document.getElementById("link").value = "";
      document.getElementById("message").value = "";
      sentCheckbox.checked = false; // Reset the checkbox
      conditionCheckbox.checked = false;
      console.log(res);
      alert("DreamVerser has successfully received your message.");
      setTimeout(() => {
        window.location.reload(); // Refresh the page
      }, 3000); // 3000 milliseconds = 3 seconds
    })
    .catch((err) => console.log(err));
}
