var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for (var i = 0; i < topics.length; i++) {
        console.log(topics[i]);
    }
}

function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("Lets's study HTML!");
    }  
    else if (randomTopic === 'CSS') {
        console.log("Lets's study CSS!");
    }
    else if (randomTopic === 'Git') {
        console.log("Let's stydy Git");
    }
    else if (randomTopic === 'Javascript') {
        console.log("Let's study JavaScript!");
    }
    else {
        console.log('Please try again');
    }
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topics should we study first?');
selectTopic();