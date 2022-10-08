for(let i=0;i< 5; i++){
    if(i%3 === 0){
        continue; //takes you back to the nearest loop
    }
    console.log(i);
}

console.log("hi");

//whenever we hit break we come out of the nearest loop //terminates 
for(let i=2;i< 10; i++){
    if(i%5 === 0){
        break; 
    }
    console.log(i);
}