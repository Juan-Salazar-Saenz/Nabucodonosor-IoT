import { tasks } from "./sample";
import Movement from "./models/movement";
import GraphQLDateTime from "graphql-type-datetime";

const {Board, Led} = require('johnny-five');

export const resolvers = {
  DateTime: GraphQLDateTime,
  Query: {
    async Movements() {
      const movements = await Movement.find();
      return movements;
    }
  },
  Mutation: {
    async createMovement() {
      const newMovement = new Movement({ status: 'Arriba' });
      await newMovement.save();
      Prueba();
      return newMovement;
    }
    
  }
}

function Prueba (){
  
  let myBoard, myLed ,myLed1 ,myLed2 ,myLed3 

  myBoard = new Board({ port: "COM5" });

  myBoard.on('ready', function(){
    myLed = new Led(11);
    myLed1 = new Led(10);
    myLed2 = new Led(9);
    myLed3 = new Led(8);
    myLed.strobe(500);
    myLed1.strobe(600);
    myLed2.strobe(700);
    myLed3.strobe(800);
  //  myLed.stop().off();
  //  myLed1.stop().off();
  //  myLed2.stop().off();
  //  myLed3.stop().off();
  });

  myBoard.on('error', function (err) {
      console.log(err);
  })

  myBoard.wait(6000, () => {
    myLed.stop().off();
    myLed1.stop().off();
    myLed2.stop().off();
    myLed3.stop().off();
    myLed.on();
    myLed1.on();
    myLed2.on();
    myLed3.on();
  });
}
