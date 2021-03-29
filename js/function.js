function generateKey() 
{
    var test = document.getElementById("keyword").value;
    var entity  = document.getElementById("entity").value;
    var conc = test+entity
    // -- Convert text to md5
    md5hash = md5(conc);
    var result = md5hash;
    document.getElementById("generated").value = result.substr(22, 10);    
    document.getElementById("result").innerHTML = 'The key is generated' ;
}

function clearText() {
    document.getElementById("keyword").value = '';
    document.getElementById("entity").value = '';
    document.getElementById("generated").value = '';
    document.getElementById("result").innerHTML = '' ;
}