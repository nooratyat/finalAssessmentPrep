//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality

	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to pass all your class students one by one ? think of a way to pass them in your function
	*/
// write your code here ...

function student(name,age,education,nationality){
	//if we want make array of all student make push here after return
	return {name:name
		age:age
		education:education
		nationality

	}
}
var student1=student("aya",22,"engineering","iraqi")
var student2=student("dania",24,"engineering","jordanian")
var arrofstudent=[student1,student2]
function showFriend(student){
	return student.name +"with the age of  "+student.age+ "and with  "+student.education
}

function avergeStudents(){
	var sum =0
	each(arrofstudent,function(ele){
		sum=sum+ele.age
	})
	return sum/arrofstudent.length
}


/*
 b-create a function called rangeSquared in which it will accept two parameters, and will output the squared numbers between these two parameter if the number is even 
	in order to square the numbers create a function called square and call it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,36,64,100];
	*/
// write your code here ...

function range(x, y) {
	var acc = [];
	for (var i = start; i < end; i++) {
		acc.push(i);
	}
	return acc;
} 

function square(n){
	return n*n
} 

function rangeSquared(n){
	var x=range(0,n+1)
	var y=[]
	each(x,function(ele,i){
		if(ele%2===0){
			y.push(square(ele))

		}
	})
	return y

}


/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
	*/

// write your code here ....

function leader(arr){
	var y =[]
	each(arr,function(ele,i){
		y.push(Math.max(ele,ele[i+1]))
	})
	return y 
}
