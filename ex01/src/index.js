var myPet = {
    species : "Labrador",
    name : "Max",
    legs : 4,
    friends : ["Maxi", "Jimy"]
};

function myFunction(myObj) {

    return myObj;
    
}

console.log(myFunction(myPet));

module.exports = { myPet, myFunction };

