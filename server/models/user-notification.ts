import * as mongoose from 'mongoose';

const userNotificationSchema = new mongoose.Schema({
  username: String,
  beenRead: Boolean,
  sender: String,
  text: String,
  time: String
});

const UserNotification = mongoose.model('UserNotification', userNotificationSchema);

export default UserNotification;
