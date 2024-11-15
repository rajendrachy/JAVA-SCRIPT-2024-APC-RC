const user = { 
    firstName : "Adarsh",
    lastName : "Singh", // last-Name -->> not possible and not possible to access with a dot(.) notation -->>> Error

    pata : { // Nasted Object
       city : 'Banglore' ,
       pincode : '9485774',
       state : 'Karnataka',


       moreDetails : {
        population : 9388477484848,
        area : '787 sq km',
       },
    },
    age : 15,
    isGraduate : false,
} 
firstName = "Rc";
console.log(user["firstName"]);

console.log(user.pata.moreDetails['area']); 



