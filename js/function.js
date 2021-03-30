function convertPassword(x) {
    // start at 22 because the password will have a lenght of 10 letters
    var finalWord = '';
    for (let step = 22; step < x.length; step++) {
        const element = x.charAt(step);
        var word = '';
        // added key letters to complete passwords restrictions
        switch (step) {
            case 22:
                word = '#';
                break;
            case 24:
                word = 'F';
                break;
            case 31:
                word = '%';
                break;                
            default:
                word = x.charAt(step);
                break;
        }
        finalWord = finalWord + word;
    }
    return finalWord;
}

function generateKey() 
{
    var test = document.getElementById("keyword").value;
    var entity  = document.getElementById("entity").value;
    var conc = test+entity
    // -- Convert text to md5
    md5hash = md5(conc);
    var result = convertPassword(md5hash);
    document.getElementById("generated").value = result;  
    document.getElementById("result").innerHTML = 'The key was generated' ;
}

function clearText() {
    document.getElementById("keyword").value = '';
    document.getElementById("entity").value = '';
    document.getElementById("generated").value = '';
    document.getElementById("result").innerHTML = '' ;
}

