import * as mongoose from 'mongoose';

const engphraseSchema = new mongoose.Schema({
  speaker: String,
  phrase: String,
  desc: String
});

const Engphrase = mongoose.model('Engphrase', engphraseSchema);

export default Engphrase;
