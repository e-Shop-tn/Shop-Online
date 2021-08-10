

const carrosel = $('#carouselExampleControls')
// 
let GalaxyA = [{img:'e-commerce.jpg', price : '3000$', color : 'red', type : 'galaxyA31'},
{img:'online-1617947180.jpg', price : '1500$', color : 'blue', type : 'galaxyA51'},
{img:'e-commerce.jpg', price : '2400$', color : 'whit', type : 'galaxyA21'}
]

let GalaxyS = [{img:'e-commerce.jpg', price : '1000$', color : 'red', type : 'galaxyb31'},
{img:'online-1617947180.jpg', price : '1800$', color : 'blue', type : 'galaxyb51'},
{img:'e-commerce.jpg', price : '240$', color : 'white', type : 'galaxyb21'}
]

let GalaxyFold = [{img:'e-commerce.jpg', price : '1200$', color : 'green', type : 'galaxyc31'},
{img:'online-1617947180.jpg', price : '1350$', color : 'blue', type : 'galaxyc51'},
{img:'e-commerce.jpg', price : '650$', color : 'whit', type : 'galaxyc21'}
]


let GalaxyTabA = []

let GalaxyTabS = []


let countA = 0
let countB = 0
let countC = 0


let addCard = function(obj){
    let type = $('<h5 class="card-title">' + obj.type + '</h5>')
    let color = $('<p class="card-text">color:'+  obj.color  + '</p>')
    let price = $('<p class="card-text">price:' + obj.price + '</p>')
    let cardBody = $('<div class="card-body"></div>')
    cardBody[0].appendChild(type[0])
    cardBody[0].appendChild(color[0])
    cardBody[0].appendChild(price[0])
    let img = $('<img src="img/' + obj.img  + '" class="card-img-top" alt="...">')
    let container = $('<div class="card card0" style="width: 18rem;"></div>')
    container[0].appendChild(img[0])
    container[0].appendChild(cardBody[0])
    // $('.cont')[0].appendChild(container[0])
    return container
}


$('#A').click(function(){
    let arr = GalaxyA
    if(countA !== arr.length){
      for(var i=0; i< arr.length; i++ ){
        var div = addCard(arr[i])
        $('#GalaxyA')[0].appendChild(div[0])
        countA++
      }
    }
    $('#GalaxyB').hide()
    $('#GalaxyC').hide()
    $('#GalaxyA').show()
    carrosel.hide()
})


$('#B').click(function(){
    let arr = GalaxyS
    if(countB !== arr.length){
        for(var i=0; i< arr.length; i++ ){
          var div = addCard(arr[i])
          $('#GalaxyB')[0].appendChild(div[0])
          countB++
        }
    }       
    $('#GalaxyA').hide()
    $('#GalaxyC').hide()
    $('#GalaxyB').show()
    carrosel.hide()
})


$('#C').click(function(){
    let arr = GalaxyFold
    if(countC !== arr.length){
        for(var i=0; i< arr.length; i++ ){
          var div = addCard(arr[i])
          $('#GalaxyC')[0].appendChild(div[0])
          countC++
        }
    }      
    $('#GalaxyA').hide()
    $('#GalaxyB').hide()
    $('#GalaxyC').show()
    carrosel.hide()
})



let arrayFiltered = function(){
  var allPhones = [...GalaxyA,...GalaxyB,...GalaxyC]
  var allTab= [...GalaxyTabA,...GalaxyTabS]
  var all = [...allPhones, ...allTab]
  var selectedValue
  var filterArray
  var category
 
  
  if(document.getElementById('SmartPhones').checked){
     category = allPhones
      $('#phone').removeClass('hide')
      if(document.getElementById('GalaxyA').checked){
        category = GalaxyA
     }
   
     else if(document.getElementById('GalaxyB').checked){
        category = GalaxyS
     }
     else if(document.getElementById('GalaxyFold').checked){
        category = GalaxyFold
     }

  }
  else if(document.getElementById('Tablets').checked){
       category = allTab
      $('#Tab').removeClass('hide')
      if(document.getElementById('GalaxyTabA').checked){
        category = GalaxyTabA
       }
     else if(document.getElementById('GalaxyTabS').checked){
        category = GalaxyATabS
       }
  }
  else{
     category = all
  }

  

  if(document.getElementById('red').checked) {
    selectedValue = 'red' 
  }
  else if(document.getElementById('blue').checked) {
    selectedValue = 'blue'
  }
  else if(document.getElementById('white').checked) { 
    selectedValue = 'white' 
  }




  if(selectedValue){      
    let arrayColor = all.filter(phone => phone.color === selectedValue)
  }
  else{
    let arrayColor = all 
  }

}






