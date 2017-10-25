import * as mongoose from 'mongoose';

const inboxSchema = new mongoose.Schema({
  tid: String,
  id: String,
  title: String,
  receiverGroup: String,
  postedTime: String,
  reservedTime: String,
  status: String,
  content: String,
  pushNotification: String,
});

const Inbox = mongoose.model('Inbox', inboxSchema);

export default Inbox;
