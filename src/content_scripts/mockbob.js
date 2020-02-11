(function() {
    if (window.hasRun) {
      return;
    }
    window.hasRun = true;
    browser.runtime.onMessage.addListener((message) => {
      mocker('p');
      mocker('a');
      mocker('h1');
      mocker('h2');
      mocker('h3');
      mocker('h4');
      mocker('h5');
      img_flipper();

    });
  
  })();

function mocker(tag){
  var all_p_tags = document.getElementsByTagName(tag);
  for (let i = 0; i < all_p_tags.length; i++) {
    if(all_p_tags[i].innerHTML.indexOf('NYU') != -1 || all_p_tags[i].innerHTML.indexOf('New York University') != -1){
      // console.log(all_p_tags[i].innerHTML);
      let array_of_chars  = all_p_tags[i].innerHTML.split('');
      for (var j = 0; j < array_of_chars.length; j++) {
        // console.log( all_p_tags[i].innerHTML.charAt(j));
        if  ( array_of_chars[j] =='\xa0'){
          //do nothing
          array_of_chars[j]=array_of_chars[j];

        }
        else if (Math.random() > 0.75){
          array_of_chars[j] = array_of_chars[j].toUpperCase();
        }
        else{
          array_of_chars[j] = array_of_chars[j].toLowerCase();
        }
      }
      all_p_tags[i].innerHTML = array_of_chars.join('');
    }
  }
}
function img_flipper(){
  var sheet = document.styleSheets[0];
  sheet.insertRule("img { filter:saturate(10) contrast(300%) blur(2px);}");

}