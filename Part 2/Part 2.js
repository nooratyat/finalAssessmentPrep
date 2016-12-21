//=============================================================================
/*                                  Part 2                                   */
//=============================================================================
 /*

  Hint: write the function in question (b, c, d) outside the Player scope 

  Note : do not use (for, while, recursion) but you allowed to use the High order function
    like (.map, .each, .filter, .reduce,.....) if you don't know how to use it just Google it 
 
 today we will create a football team using what we learn,

 	a - we need to create the players using OOP the player declaration
    should take the name of the player  	==> var player1 = Player("jony")

  b - after that we need function to add the other info for the player with addInfo function
		==> player1.addInfo(age, position, level, availability );

	c- and create another function to increase the the level for the player by n value 
		==> player1.increaseLevel(4); 

	d - we need another function to check if the player is available or not it should return true or false
		==> player1.isAvailable();  true / false

	e - then we need to create 4 players and add the info for them and put them inside the arrayOfPlayers

	f - write function to iterate over the all players to decrease the level for the player if age larger the 30

  g - sort the players in the arrayOfPlayers by the key
		sortPalyerBy(arrayOfPlayers, "age");
		sortPalyerBy(arrayOfPlayers, "name");
		*/

//writ your code here .....
var arrayOfPlayers=[]
function player(init){
	var player1={}
	Player1.init=name
	Player1.addinfo=addinfo
	Player1.increase=increase
	Player1.available=available
	Player1.decrease=decrease
	return player1;
}

//var players=function(name){
//	Player1=name
//}
var addinfo=function(name,age,position,level,availability){
	return arrayOfPlayers.push({
		this.name:this.name
		age:age
		position:position
		level:level
		availability:availability
	})
}

var increase=function(n){
	each(arrayOfPlayers,function(ele){
		ele.level=ele[level]+n
 	/// for one player -- this.name.level=this.name.level+n
 })
	return ele
}

var available=function(player){
	each(arrayOfPlayers,function(ele){
		if(ele.isAvailable){
			return true
		} return false    
	})
}

var player1=addinfo("mm",22,"main",1,true)
var player2=addinfo("ss",30,"d",2,true)
var player3=addinfo("pp",22,"s",3,false)
var player4=addinfo("wm",25,"main",4,false)
arrayOfPlayers=[player1,player2,player3,player4]

var decrease=function(n){
	each(arrayOfPlayers,function(ele){
		if(ele.age>30){
			ele.level=ele.level-n
		}
	})
}
var sortPalyerBy(arrayOfPlayers,key){
	//var ele.key=
	//each(arrayOfPlayers,function(ele,key){
		return arrayOfPlayers.sort(key,function(a, b)
	//})


	}