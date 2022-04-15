const affirmationContents = [
    "Don't give up 'cause you have friends",
    "Don't give up you're not beaten yet", 
    "Don't give up you can make it good",
    "Your people were wanted for all for your gifts",
    "Your lands are better",
    "Do you remember how others pay attention to you and you just keep walking? Just keep walking.",
    "Your are the Black gold of the sun",
    "When you rest you fight for what is right",
    "Your heart is tired and your mother's heart is tired and your grandmother's heart is tired",
    "Your dna is your mother's dna is your grandmother's dna",
    "You are your mother and grandmother Elizabeth Brown",
    "You are Tilliana Palmer, your great grandmother",
    "You are Rosetta Davy, your ancestor who was enslaved",
    "There can be only you to inspire others like you",
    "Your body is a historical record",
    "Every part of your body has a positive purpose",
    "Lance loves you very much",
    "You belong here",
    "You are loved",
    "You are important",
    "Recycling is your passion. The planet needs YOU",
    "You are okay",
    "You are just fine",
    "You have this new moment for an exciting end",
    "You were never the only one in this state",
    "When you get up the next person will have hope",
    "Your power is unlimited, Mickey",
    "You will trust yourself and your skills",
    "Everything you need to succeed is already within you",
    "You can do anything you set your mind and heart to. Just believe in you, Mickey"
];

const affirmationLineCount = affirmationContents.length;
const keyNum = Math.floor((Math.random() * affirmationLineCount) + 1);
const randAffirmationLine = affirmationContents[keyNum];

document.getElementById("affirmation").innerText = randAffirmationLine;