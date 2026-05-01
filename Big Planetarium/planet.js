function planetFact(){

const facts=[

"Mercury has the shortest year in the Solar System.",
"Venus rotates backwards compared to most planets.",
"Earth is the only known planet with life.",
"Mars has the tallest volcano in the Solar System.",
"Jupiter has the strongest gravity.",
"Saturn has over 140 moons.",
"Uranus rotates on its side.",
"Neptune has winds faster than any planet."

];

const random=Math.floor(Math.random()*facts.length);

document.getElementById("factBox").innerText=facts[random];

}