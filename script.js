var createPolitician = function(name, partyColor){
    var politician = {};
    politician.name = name;
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = partyColor;
    politician.addTotalVotes = function(){
      this.totalVotes = 0;
      for (var i = 0; i < this.electionResults.length; i++)
      {
      this.totalVotes = this.totalVotes + this.electionResults[i];
      }
    };
    
    return politician;
  };
  
  var nanny = createPolitician("Nanny McPhee", [132, 17, 11]);
  var mary = createPolitician("Mary Poppins", [245, 141, 136]);

  nanny.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2]
  mary.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1]
  
  nanny.electionResults[9] = 1;
  mary.electionResults[9] = 28;
  
  nanny.electionResults[4] = 17;
  mary.electionResults[4] = 38;

  nanny.electionResults[43] = 11;
  mary.electionResults[43] = 27;
  
  var setStateResults = function(state){ 
    theStates[state].winner = null;
    
    if (nanny.electionResults[state] > mary.electionResults[state]) {
      theStates[state].winner = nanny;
    } else if (mary.electionResults[state] > nanny.electionResults[state]) {
      theStates[state].winner = mary;
    }
      
  var stateWinner = theStates[state].winner;
    if (stateWinner !== null) {
      theStates[state].rgbColor = stateWinner.partyColor;
    } else {
      theStates[state].rgbColor = [11, 32, 57];
    }
    
  var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0].children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0];
  var abbrev = header.children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];
  var winnersName = body.children[2].children[1];
  
  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";
  candidate1Name.innerText = nanny.name;
  candidate2Name.innerText = mary.name;
  candidate1Results.innerText = nanny.electionResults[state];
  candidate2Results.innerText = mary.electionResults[state];
    
  if (theStates[state].winner === null) {
    winnersName.innerText = "DRAW";
  } else {
    winnersName.innerText = theStates[state].winner.name;
  }
  
  };

nanny.addTotalVotes();
mary.addTotalVotes();
    
var winner = "";
  if (nanny.totalVotes > mary.totalVotes) {
    winner = nanny.name;
  } else if (nanny.totalVotes < mary.totalVotes) {
    winner = mary.name;
  } else {
    winner = "DRAW"
  }
    
console.log(nanny.totalVotes);
console.log(mary.totalVotes);
    
var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = nanny.name;
row.children[1].innerText = nanny.totalVotes;
row.children[2].innerText = mary.name;
row.children[3].innerText = mary.totalVotes;
row.children[5].innerText = winner;

console.log("The winner is " + winner + ".");