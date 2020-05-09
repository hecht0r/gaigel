module.exports = class Player {
  constructor(socket) {
    this.socket = socket;
    this.hand = [];
    this.wins = 0;            // wird nach team.js übertragen
    this.init();
  }

  init(){
    this.score = 0; 			    // wird nach team.js übertragen
    this.wonCards = [];		    // wird nach team.js übertragen
    this.meldedSuits = [];		// wird nach team.js übertragen
  }

  emit(event, data){
    this.socket.emit(event, data);
  }
}