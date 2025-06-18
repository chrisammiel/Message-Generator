// The three important arrays that the random message comes from
const days =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


const timothy = [
    "Fight the good fight of faith, lay hold on eternal life, whereunto thou art also called...", 
   " I have fought a good fight, I have finished my course, I have kept the faith",
   "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.",
   "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind"
];
const proverbs = [
    "The fear of the LORD is the beginning of wisdom: and the knowledge of the holy is understanding.",
    "A soft answer turneth away wrath: but grievous words stir up anger.",
    "But whoso committeth adultery with a woman lacketh understanding: he that doeth it destroyeth his own soul",
    "In all thy ways acknowledge him, and he shall direct thy paths",
    "He that is slow to anger is better than the mighty; and he that ruleth his spirit than he that taketh a city."
];
const mathew = [
    "But I say unto you, That whosoever looketh on a woman to lust after her hath committed adultery with her already in his heart.",
    "Watch and pray, that ye enter not into temptation: the spirit indeed is willing, but the flesh is weak.",
    "Then said Jesus unto his disciples, If any man will come after me, let him deny himself, and take up his cross, and follow me",
    "And if thy right eye offend thee, pluck it out... And if thy right hand offend thee, cut it off..."
];
const hebrews = [
    "Now faith is the substance of things hoped for, the evidence of things not seen",
    "For the word of God is quick, and powerful, and sharper than any two-edged sword...",
    "Follow peace with all men, and holiness, without which no man shall see the Lord.",
    "For ye have need of patience, that, after ye have done the will of God, ye might receive the promise."
];
const revelation = [
    "So then because thou art lukewarm, and neither cold nor hot, I will spue thee out of my mouth.",
    "And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away",
    "Thou art worthy, O Lord, to receive glory and honour and power: for thou hast created all things...",
    " am Alpha and Omega, the beginning and the end, the first and the last.",
    "And he hath on his vesture and on his thigh a name written, KING OF KINGS, AND LORD OF LORDS"
];
const genesis =[
    "I am the Almighty God; walk before me, and be thou perfect",
    "The LORD was with Joseph, and he was a prosperous man; and he was in the house of his master the Egyptian.",
    "But as for you, ye thought evil against me; but God meant it unto good...",
    "In the beginning God created the heaven and the earth."
];
const psalms = [
    "Blessed is the man that walketh not in the counsel of the ungodly... But his delight is in the law of the LORD; and in his law doth he meditate day and night. And he shall be like a tree planted by the rivers of water...",
    "Great is the LORD, and greatly to be praised; and his greatness is unsearchable.",
    "God is our refuge and strength, a very present help in trouble."
];

const books =[ timothy, proverbs,revelation,genesis, mathew, hebrews, psalms ];
//the following program is to choose a random index from an array randomly , 
// it will help us select the day and the verse and even the book randomly

const randomIndexSelector = (array) => {
    
    return array[Math.floor(Math.random()* array.length)];
}


// the following program gives out a verse based on the day
//  it can only choose the program corresponding to the days


const verseGenerator = () => {
   let day = randomIndexSelector(days) 
   
   const bookAllowance = {
    "Monday" : [psalms,genesis, timothy],
    "Tuesday" : [genesis, proverbs, hebrews],
    "Wednesday" : [mathew, proverbs, timothy],
    "Thursday" : [revelation, psalms, mathew],
    "Friday" : [hebrews, revelation, genesis],
    "Satuday" : [psalms, revelation, proverbs],
    "Sunday" : [psalms, mathew, timothy]
}

const dailyAllowedBooks = bookAllowance[day] 

let book;
tries = 0;

do {
    book = randomIndexSelector(books)
}while (!dailyAllowedBooks.includes(book)){
    return `here is a passage to strengthen you today :\n Day : ${day} \n Verse : ${randomIndexSelector(book)}`
}
}

console.log(verseGenerator());