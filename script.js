var fruits = ["Banana", "pineapple", "guava", "apple", "pawpaw", "orange", "mango", "pome", "cherry", "watermelon", "tangerine", "lime"]
var randomFruitNumber = Math.floor((
    Math.random()*fruits.length
))
console.log(randomFruitNumber);

function myfunc () {
    var guess = document.getElementById("guess").value;
    var randomFruit = fruits[randomFruitNumber];
    
    if(guess == randomFruit) {
        alert("You are correct");
    }
    else{
        alert("Your guess is wrong." + "The correct guess should be " + randomFruit);
    }
}

myfunc();