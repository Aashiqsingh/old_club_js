

function sendEmail() {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var mess = document.getElementById("message").value
    var params = {
        name: name,
        email: email,
        message: mess
    }
    const serviceId = "service_eyhnlv2"
    const templateId = "template_8wdfghr"

    emailjs.send(serviceId,templateId,params).then((res)=>{
        console.log("mail res....",res);
        if(res.status == 200)
        {
            alert("Email sent successfully...");
        }
        
    }).catch((err)=>{
        console.log("mail err....",err);
        
    })
}

