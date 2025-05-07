let quotesData = [
    
    {
        "quote": "True friends stab you in the front.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Philosophy",
            "People"
        ]
    },
    {
        "quote": "Women are made to be Loved, not understood.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Philosophy",
            "Humor"
        ]
    },
   
    {
        "quote": "Do what you feel in your heart to be right - for you'll be criticized anyway.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom",
            "Advice"
        ]
    },
 
    {
        "quote": "Our lives begin to end the day we become silent about things that matter.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Life"
        ]
    },
    {
        "quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "People",
            "Life"
        ]
    },
    {
        "quote": "Injustice anywhere is a threat to justice everywhere.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Wisdom"
        ]
    },
    {
        "quote": "The time is always right to do what is right.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "Life's most persistent and urgent question is, 'What are you doing for others?",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Life",
            "People"
        ]
    },
]



let index=0;

function generateQuotes(index){

    document.getElementById("quote").innerHTML = `"${quotesData[index].quote}"`;
    document.getElementById("author").innerHTML = `- ${quotesData[index].author}`;
}

function prevIndex(){
    if(index==0){
        index = quotesData.length - 1;

    }else{
        index--;
    }
    generateQuotes(index);
}

function nextIndex(){
    if(index >= quotesData.length - 1){
        index = 0;

    }else{
        index++;
    }
    generateQuotes(index);
}

setInterval(() => {
    nextIndex();
}, 1000);