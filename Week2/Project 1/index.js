var x = document.createElement("nav")
document.body.appendChild(x)

var anchorElmnt = document.createElement("a")
anchorElmnt.setAttribute("href", "/html")
var txt1= document.createTextNode("Home")
anchorElmnt.appendChild(txt1)

x.appendChild(anchorElmnt)

var anchorElmnt2 = document.createElement("a")
anchorElmnt2.setAttribute("href", "/html")
var txt2= document.createTextNode(" Contact")
anchorElmnt2.appendChild(txt2)
x.appendChild(anchorElmnt2)

var anchorElmnt3 = document.createElement("a")
anchorElmnt3.setAttribute("href", "/html")
var txt3= document.createTextNode(" Media")
anchorElmnt3.appendChild(txt3)
x.appendChild(anchorElmnt3)

var h1 = document.createElement("h1")
document.body.appendChild(h1)

var head = document.createTextNode("Why is bread so good?")
h1.appendChild(head)

var p = document.createElement("p")
document.body.appendChild(p)

var paragraph = document.createTextNode("Bread is pretty good there is no denying that, it tastes good and smells great when fresh")
p.appendChild(paragraph)

var ol = document.createElement("ol")
ol.textContent="top bread"
document.body.appendChild(ol)


var li = document.createElement("li")
li.textContent="White bread"
ol.appendChild(li)


var li2 = document.createElement("li")
li2.textContent="Banana bread"
ol.appendChild(li2)

var li3 = document.createElement("li")
li3.textContent="Cinamon & brownsugar bread"
ol.appendChild(li3)

var li4 = document.createElement("li")
li4.textContent="French toast"
ol.appendChild(li4)

var footer = document.createElement("footer")
document.body.appendChild(footer)

var endp = document.createElement("p")
footer.appendChild(endp)
endp.textContent="end of bread"


