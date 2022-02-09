Papa.parse('./cards.csv', {
    header: false,
    download: true,
    dynamicTyping: true,
    complete: function(results) {
      data = results.data;
      example(data)
    }
  });

var targetDiv = document.getElementById("resume")

function resume_container_mover(page){
  pixel = page * -100
  document.getElementsByClassName("active")[0].classList.remove("active")
  document.getElementsByClassName("pagination-circle")[page].classList.add("active")
  document.getElementById("resume").style.transform = "translate($pixel%)".replace("$pixel",pixel)
}

function example(uArray){
  for (let i = 1; i < uArray.length; i++) {
    var targetID = uArray[i][0]
    var title = uArray[i][1]
    var link = uArray[i][2]
    var subtitle_1 = uArray[i][3]
    var subtitle_2 = uArray[i][4]
    var paragraphs = uArray[i].slice(5)  
      
    card = document.createElement('div')
    card.classList.add("resume-card")
    
    if(link == null){
      // paragraph with card title classname
      let title_element = document.createElement('p')
      title_element.innerHTML = title
      title_element.classList.add("card-title")
      card.appendChild(title_element)
    }
    else{
      // anchor with card title classname
      let title_element = document.createElement('a')
      title_element.href = link
      title_element.innerHTML = title
      title_element.classList.add("card-title")
      card.appendChild(title_element)
    }

    subtitle_1_element = document.createElement("p")
    subtitle_1_element.classList.add('card-subtitle')
    subtitle_1_element.innerHTML = subtitle_1
    subtitle_2_element = document.createElement("p")
    subtitle_2_element.classList.add('card-subtitle')
    subtitle_2_element.innerHTML = subtitle_2

    card.appendChild(subtitle_1_element)
    card.appendChild(subtitle_2_element)
    card.appendChild(document.createElement('br'))
    
    for(let j = 0; j <paragraphs.length; j++){
      if (paragraphs[j] != null){
        let paragraph_element = document.createElement('p')
        paragraph_element.innerHTML = paragraphs[j]
        paragraph_element.classList.add('card-text')
        card.appendChild(paragraph_element)
      }

    }

    
    document.getElementById(targetID).getElementsByClassName("card-container")[0].appendChild(card)

        
      }
}