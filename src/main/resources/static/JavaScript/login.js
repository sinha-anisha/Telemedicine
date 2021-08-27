window.onload = function () {

    let error_elem = document.getElementById("error_msg");
    
    let form = document.getElementById("form");


   // form.document.getElementById("uname").focus;

    form.onsubmit = function ()
    {

        let letters = /^[a-zA-Z0-9]+$/;

        let email = document.getElementById("uname").value;
        let pass = document.getElementById("pwd").value;


        let username = email.trim();
        let password = pass.trim();

        if (username.length === 0 || password.length === 0)
        {
            error_elem.innerHTML = "<span style='font-size:30px'>Please fill up all fields.</span>";
            //alert("Please fill up all fields.");
            return false;
        }
        else if (!username.match(letters))
        {
            error_elem.innerHTML ="<span style='font-size:30px'>Please enter letters and numbers only.</span>";
            //alert("Please enter letters and numbers only.");
            return false;
        }
        return true;
    }
        let elems = document.getElementsByClassName("form-control");
    for (let i = 0; i < elems.length; i++)
    {
            // remove our error message as long as any 
            // of the input boxes have focus
            elems[i].onfocus = function ()
            {
                error_elem.innerHTML = "";
            }
    }
}