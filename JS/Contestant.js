class Contestant{
    constructor(){
        this.index = null;
        this.answer = 0;
        this.name = null;
    }

    
    getContestantCount () {
        //refer to gameState location in DB
        var contestantCountRef = database.ref ('contestantCount');
        // listen to gameState changes in DB
        contestantCountRef.on ("value", 
                        function(data){
                            contestantCount = data.val ();
                        }
        );        
    }
    updateContestantCount (count) {
         
        var contestantCountRef = database.ref ("/");
        contestantCountRef.update ({"contestantCount" : count}) ;
    }
    
    updateContestantNameAndAnswer () {
        
        var contestantIndex = "contestants/contestant"+this.index;
        database.ref (contestantIndex).set ({name : this.name, answer : this.answer});
    }
    
    static getContestantInfo (){
        //fetch all Contestants info to global var allContestantss
        var contestantInfoRef = database.ref("contestants")
        contestantInfoRef.on("value", (data)=>{allContestants = data.val ();});


    }
}