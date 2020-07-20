//feetToMile
function feetToMile(feet){
    var Mile = feet * 0.00018939;
    return Mile;
}    
     var result = feetToMile(1000);
     console.log(result);


//woodCalculator
function woodCalculator(bed, chair, table){
    var bedCount = bed * 5;
    var chairCount = chair * 3;
    var tableCount = table * 4;
    var totalWood = bedCount + chairCount + tableCount;
    return totalWood;
}
     var woodResult = woodCalculator(100, 100, 100);
     console.log(woodResult);


//brickCalculator


//tinyFriend
     function biggestName(name){
     var largest = name[0];
     for (var i = 0; i < name.length; i++);{
         var currentName = name[i];
         if (currentName < largest) {
             largest = currentName;
         } 
        }
        return largest;
    }
         var largestName = biggestName(["salam", "kalam", "jubaer", "emon"]);
         console.log(largestName);