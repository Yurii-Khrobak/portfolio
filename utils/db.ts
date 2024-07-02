import mongoose from 'mongoose';

const connect = async() => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Success mongoDB connect.')
  } catch (e) {
    console.log(e.message);
  }
}

export default connect;
