import * as mongoose from 'mongoose';

const userMessageSchema = new mongoose.Schema({
  username: String,
  beenRead: Boolean,
  sender: String,
  text: String,
  time: String
});

const UserMessage = mongoose.model('UserMessage', userMessageSchema);

export default UserMessage;
