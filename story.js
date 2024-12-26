function storyCompletion(){

    let completion = prompt("Sokakta yürürken cebime bırakılmış küçük bir kağıt buldum. Üzerinde yalnızca bir adres vardı. Merakıma yenik düşüp gittim. Adres, terk edilmiş bir eve çıkıyordu. Kapıyı araladım; içeride kimse yoktu. Tam geri dönmek üzereyken arkamdan kapı kendiliğinden kapandı.\n Yarım kalan bu hikayeyi tamamlayın.");

    if(completion) {
        let story = JSON.parse(localStorage.getItem("story")) || [];
        story.push({completion});
        localStorage.setItem("story",JSON.stringify(story));
    }

    let story = JSON.parse(localStorage.getItem("story")) || [];

    if(story.length > 0) {
        let msg = story.map(tale => `Hikaye:Sokakta yürürken cebime bırakılmış küçük bir kağıt buldum. Üzerinde yalnızca bir adres vardı. Merakıma yenik düşüp gittim. Adres, terk edilmiş bir eve çıkıyordu. Kapıyı araladım; içeride kimse yoktu. Tam geri dönmek üzereyken arkamdan kapı kendiliğinden kapandı. ${tale.completion}`);
            alert(msg);
        
    }
}

storyCompletion();