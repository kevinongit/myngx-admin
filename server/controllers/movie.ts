
import * as fs from 'fs';

const getmovie = require('./build-movie-info');
export default class MovieCtrl {

    handleError(res, code=500) {
        return function (err) {
            res.status(code).send(err);
        };
    }

    getAll = (req, res) => {
        console.log('movie -> getAll');
        getmovie.getRemoteMovieInfo()
          .then(function(list) {
              if (1) {
                  const filename = './boxoffice.json';
                  fs.writeFile(filename, JSON.stringify(list), function(err) {
                      if (err) { console.log('fs err : ' + err); }
                      console.log('file created : ' + filename);
                  })
              }
              res.send(list);
          })
          .catch(this.handleError(res));
    }

    getOneMovie = (req, res) => {
        console.log('movie -> getOne : ' + req.params.id);

        getmovie.getMovieInfoByName(req.params.id)
          .then(function(data) {
              getmovie.prettify2(data);
              res.send(data);
          })
          .catch(this.handleError(res));
    }
}