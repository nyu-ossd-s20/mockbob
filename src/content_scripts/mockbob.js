(function () {
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;
  browser.runtime.onMessage.addListener((message) => {
    let message_text=message.command.toString();
    if (message_text == "refresh"){
      location.reload();
    }
    else{
      mocker('p',message_text);
      mocker('a',message_text);
      mocker('h1',message_text);
      mocker('h2',message_text);
      mocker('h3',message_text);
      mocker('h4',message_text);
      mocker('h5',message_text);
      img_flipper();
    }


  });

})();

function mocker(tag, text) {
  var all_p_tags = document.getElementsByTagName(tag);
  if (text === "") {
    for (let i = 0; i < all_p_tags.length; i++) {
      if (all_p_tags[i].innerHTML.indexOf('NYU') != -1 || all_p_tags[i].innerHTML.indexOf('New York University') != -1) {
        let array_of_chars = all_p_tags[i].innerHTML.split('');
        for (var j = 0; j < array_of_chars.length; j++) {
          if (array_of_chars[j] == '\xa0') {
            array_of_chars[j] = array_of_chars[j];
          } else if (Math.random() > 0.75) {
            array_of_chars[j] = array_of_chars[j].toUpperCase();
          } else {
            array_of_chars[j] = array_of_chars[j].toLowerCase();
          }
        }
        all_p_tags[i].innerHTML = array_of_chars.join('');
      }
    }
  }
  else{
    for (let i = 0; i < all_p_tags.length; i++) {
      if (all_p_tags[i].innerHTML.toUpperCase().indexOf(text.toUpperCase()) != -1) {
        all_p_tags[i].style.fontFamily = "Impact";
        all_p_tags[i].style.color = "White";

        all_p_tags[i].style.textShadow = "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black";
       
        let array_of_chars = all_p_tags[i].innerHTML.split('');
        for (var j = 0; j < array_of_chars.length; j++) {
          if (array_of_chars[j] == '\xa0') {
            array_of_chars[j] = array_of_chars[j];
          } else if (Math.random() > 0.75) {
            array_of_chars[j] = array_of_chars[j].toUpperCase();
          } else {
            array_of_chars[j] = array_of_chars[j].toLowerCase();
          }
        }
        all_p_tags[i].innerHTML = array_of_chars.join('');
      }
    }
  }
}

function img_flipper() {
  var sheet = document.styleSheets[0];
  sheet.insertRule("img { filter:saturate(10) contrast(300%) blur(2px);}");

}
