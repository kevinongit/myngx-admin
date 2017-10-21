import * as mongoose from 'mongoose';

const golfclubSchema = new mongoose.Schema({
  golf_type: String,
  company_name: String,
  xcoord: String,
  ycoord: String,
  name: String,
  address: String,
  phone: String,
  uid: String,
  area: String,
  classification: String,
  fee_cart: String,
  fee_caddy: String,
  fee_monday: String,
  fee_weekday: String,
  fee_weekend: String,
  homepage: String,
  map_level: String,
  fee_url: String,
  dcfee_urls: [{type: String}],
  desc: String,
  updated: Date
});

const Golfclub = mongoose.model('Golfclub', golfclubSchema);

const feeInfoSchema = new mongoose.Schema({
    gc_id: String,
    month: String,
    mon_fee: String,
    weekday: String,
    holiday: String
});

const FeeInfo = mongoose.model('FeeInfo', feeInfoSchema);

export default Golfclub;
