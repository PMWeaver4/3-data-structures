let stateMachine = {
    state: "liquid",
    emoji: "💧",
    transitions:{
        liquid: {
            vaporize(){
                this.state = "gas";
                this.emoji = "☁️";
            },
            freeze(){
                this.state = "solid";
                this.emoji = "🪨";
            }
        },
        solid: {
            melt(){
                this.state = "liquid";
                this.emoji = "💧";
            }
        },
        gas: {
            condense(){
                this.state = "liquid";
                this.emoji = "💧";
            },
        },

    },
    dispatcher(actionName){
        const action = this.transitions[this.state][actionName];
        if (action){
            let previous = this.state;
            console.log(`${actionName} on ${this.state}`);
        } else {
            console.log("Invalid action");
            console.log(`You cannot ${actionName} a ${this.state}`);
        }
    },
};
const myUniqueObject = Object.create(stateMachine);
myUniqueObject.dispatcher("melt");