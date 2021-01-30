var newListItem = document.createElement('ol')

var myList = document.getElementById('my-list')

var newItem = document.createElement('li')
newItem.textContent='ice'

var newItem2 = document.createElement('li')
newItem2.textContent='water'

var newItem3 = document.createElement('li')
newItem3.textContent='fire'

newItem.appendChild(newItem2)
newItem.appendChild(newItem3)
myList.appendChild(newListItem)
newListItem.prepend(newItem)



