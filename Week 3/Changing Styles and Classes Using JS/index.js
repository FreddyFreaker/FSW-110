for(var i = 0; i < 5; i++){

    var header = document.getElementById("head2")

    
    
    
    
    var h1 = document.createElement("h2")
    header.prepend(h1)
    
    h1.textContent= "hello world"
    
    }

    document.getElementById('head2').style.fontFamily = "sans-serif"
    document.getElementById('head2').style.color="cornflowerblue"
    document.getElementById('head2').style.fontWeight = "lighter"
    document.getElementById('head2').style.fontSize = '20px'

document.getElementById('head2').classList.add('border')