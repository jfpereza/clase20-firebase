import mongoose from "mongoose";
// -----------------connection-------------------//
mongoose.connect('mongodb://localhost:27017/CODERHOUSE')

const Cat = mongoose.model('products', { name: String });

const kitty = new Cat({ name: 'rambo2' });
kitty.save().then(() => console.log('guardado'));


