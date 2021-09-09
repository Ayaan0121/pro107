//start classification define
function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    //define sound classifier
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_X-lqwybQ/model.json', modelReady);    
    //change
    document.getElementById("imageChange").src="hear.gif";
    

}

//define fun model ready
function modelReady() {
    classifier.classify(gotResults);
}
//define fun got result fun
function gotResults(error,results) {
}
