import Golfclub from '../models/golfclub';
import BaseCtrl from './base';

import * as _ from 'lodash';

export default class GolfclubCtrl extends BaseCtrl {
  model = Golfclub;
  fields = ["name", "homepage", "phone", "address", "golf_type", "fee_url"];
  fieldsString = _.reduce(this.fields, (nString, fname: string) => {
    return nString === "" ? fname : nString + " " + fname;
  }, "");
  getFee = (req, res) => {
    // this.model.findOne({ _id: req.params.id }, (err, obj) => {
    //   if (err) { return console.error(err); }
    //   res.json(obj);
    // });

    this.model.aggregate([
        {
            $lookup:
             {
                 from: "feeInfo",
                 localField: "uid",
                 foreignField: "gc_id",
                 as: "gcfeeinfo"
             }
        }
    ]).exec(function(err, results) {
        if (err) { console.error(err); }
        res.json(results);
    });
  }

  getGolfclubList = (req, res) => {
      let query = this.model.find({});
      let result = {};

      result["columnNames"] = this.fields;
      console.log('fieldsString = ' + this.fieldsString);
      query.select(this.fieldsString).limit(10);
      query.exec(function(err, list) {
          if (err) return res.json(err);
          result["listRows"] = _.slice(list, 0, list.length-3);
          result["detailRows"] = _.slice(list, list.length -3, list.length);
          console.log('result : ' + JSON.stringify(result));
          return res.json(list);
      })
  }

  getById = (req, res) => {
    console.log('param : ' + req.params.id);
    this.model.findOne({ _id: req.params.id }, this.fieldsString, (err, obj) => {
      if (err) { return console.error(err); }
      res.json(obj);
    });
  }
}
