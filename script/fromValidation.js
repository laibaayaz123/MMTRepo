function runValidate(form)
{
    if(validateName(form) && validateEmail(form) && validateSubj(form) && validateInfo(form))
    {
        window.alert("Thankyou for submitting your request!");
    }
}

function validateName(form)
{
    var fullname = form.elements["fullName"];
    if (fullname.validity.valueMissing)
    {
        fullname.setCustomValidity("Please enter your Full Name");
        return false;
    }
    else
    {
        fullname.setCustomValidity("");
        return true;
    }
}

function validateEmail(form)
{
    var email = form.elements["email"];
    if (email.validity.valueMissing)
    {
        email.setCustomValidity("Please enter your Email address");
        return false;
    }
    else if (email.validity.patternMismatch)
    {
        email.setCustomValidity("Please enter a valid email address");
        return false;
    }
    else
    {
        email.setCustomValidity("");
        return true;
    }
}

function validateSubj(form)
{
    var subj = form.elements["subject"];
    if (subj.validity.valueMissing)
    {
        subj.setCustomValidity("Please enter a Subject");
        return false;
    }
    else
    {
        subj.setCustomValidity("");
        return true;
    }
}

function validateInfo(form)
{
    var inf = form.elements["info"];
    if (inf.validity.valueMissing)
    {
        inf.setCustomValidity("Please enter your project details");
        return false;
    }
    else
    {
        inf.setCustomValidity("");
        return true;
    }
}