import { catsData } from "./data.js";

const emotionRadios = document.getElementById('emotion-radios');
const getImageBtn = document.querySelector('#get-image-btn');
const gifsOnlyOption = document.querySelector('#gifs-only-option');

emotionRadios.addEventListener('change', highlightCheckedOption)

getImageBtn.addEventListener('click', getMatchingCatsArray)

function highlightCheckedOption(e){
    
    const radios = document.getElementsByClassName('radio');
    
    for(let radio of radios){
        radio.classList.remove('highlight');
    }
    
    document.getElementById(e.target.id).parentElement.classList.add('highlight');
}

function getMatchingCatsArray(){   
    
    if(document.querySelector('input[type="radio"]:checked')){
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value;
        const isGif = gifsOnlyOption.checked;

        const matchingCatsArray = catsData.filter((cats) => {
            return cats.emotionTags.includes(selectedEmotion)
        })

        console.log(matchingCatsArray);
    }
}

function getEmotionsArray(cats){
    const emotionArray = [];
    for(let cat of cats){
        for(let emotion of cat.emotionTags){
            if(!emotionArray.includes(emotion)){                             
                emotionArray.push(emotion)
            }
        }
    }
    return emotionArray;
}

function renderEmotionsRadios(cats) {
    
    let radioItems = "";
    const emotions = getEmotionsArray(cats);
    for(let emotion of emotions){       
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input 
                type="radio"
                id="${emotion}"
                value="${emotion}"
                name="emotions"
            ></input>
        </div>        
        `
    }

    emotionRadios.innerHTML = radioItems;
}


renderEmotionsRadios(catsData)