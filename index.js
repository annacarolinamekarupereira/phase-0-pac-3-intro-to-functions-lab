function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    return console.log(string.toUpperCase());
}

function logWhisper(string) {
    return console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {

    if (string === string.toLowerCase()) {
        string = "I can't hear you!"
        return string;
    }else if(string === string.toUpperCase()){
        string = "YES INDEED!";
        return string
    }else if(string === "I love you, Grandma."){
        string = "I love you, too.";
        return string;
    }
} 