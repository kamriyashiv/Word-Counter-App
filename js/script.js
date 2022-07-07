

function WordCount(CharecterText){
    NoWord=0;
    if(CharecterText===""){
        alert("Enter Something Here..");
    }
    else{
        for(var i=0; i<CharecterText.length;i++){
            CountCharecter=CharecterText[i];
            
            if(CountCharecter===" "){
                NoWord +=1;
            }        
        }
        NoWord +=1;
        var AddResult=document.getElementById("AddResult");
        AddResult.innerHTML+=`
            <span>Word : </span>
            <span>${NoWord}</span>
        `;
    }
    
}