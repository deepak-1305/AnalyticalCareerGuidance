function startVoice(){
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";

  recognition.onresult = function(event){
    const text = event.results[0][0].transcript;
    speak("You said " + text);
  };

  recognition.start();
}

function speak(text){
  const msg = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(msg);
}
