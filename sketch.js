var api = "https://api.giphy.com/v1/gifs/search?limit=15&offset=0&rating=g&lang=en"
var query
let gifDivs
let mx, my
let selectedImg

function setup() {
  noCanvas()
  searchField = createInput("")
  submit = createButton("submit")
  submit.mousePressed(searched)
}

 function gotData(list){
  giphy = list.data
  // giphy.forEach(element => {
  //   console.log(element)
  // });
  console.log(random(list.data))
  let randomGif = random(list.data)
  gifDivs = createImg(randomGif.images.fixed_width.url)
  // createImg(list.data[0].images.original.url)
  // gifDivs.attribute('draggable','true')
  // gifDivs.mousePressed(selecsetImg)

}

function draw() {
  background(220);

}

function searched(){
  query = "&q="+ searchField.value()
  key = "&api_key=VgXGf84vLhaYTMDgyhFUiuGi18SMYi1T"
  var url = api + key+query
  loadJSON(url, gotData)
}

function moveMe(event) {

  event.preventDefault();
  console.log(event.target.transform);

  selectedImg = event.target;
  console.log(selectedImg)
}

function apply(element) {

  element.style.left = element.transform.translation.x + "px";
  element.style.top = element.transform.translation.y + "px";
}

function dragit(event){

  if (selectedImg) {
    //@TODO : centrer l'image au curseurs
    var x = event.mouseX - selectedImg.width / 2;
    var y = event.mouseY - selectedImg.height / 2;
    // console.log(x,y)
    selectedImg.transform.translation.x = x;
    selectedImg.transform.translation.y = y;
    apply(selectedImg);
}
}

function mouseReleased(){
  // console.log(mouseX,mouseY)
}

function selectImg(event){
  // event.preventDefault();
  // console.log(event.target.transform);

  selectedImg = event.target;
  console.log(selectedImg)
  // gifDivs = select('img')
  // gifDivs.style.border = "thick solid #0000FF"
}