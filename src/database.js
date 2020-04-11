import mongoose from "mongoose";

export async function connect() {
  try {
    await
      mongoose.set('useFindAndModify', false);
      mongoose.connect('mongodb+srv://nabucodonosor:Hola123@nabucodonosoru-yjbym.mongodb.net/test?retryWrites=true&w=majority', {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('>>> DB is conected up');
  } catch (e) {
    console.log('Something goes wrong!');
    console.log(e);
  }
}