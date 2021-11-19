const Solicitud = require('../models/Solicitud.model');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.list = (req, res) => {
  Solicitud.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json(data);
  })
}

exports.create = (req, res) => {
  const solicitud = new Solicitud(req.body)
  solicitud.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      })
    }
    res.json({data});
  })
}

exports.remove = (req, res) => {
  let solicitud = req.solicitud
  solicitud.remove((err, data) => {
    if(err) {
      return res.status(400).json({
        error: errorHandler(err)
      })
    }
    res.json({
      message: "Solicitud borrada con éxito"
    })
  })
}

exports.solicitudById = (req, res, next, id) => {
  Solicitud.findById(id).exec((err, solicitud) => {
    if (err || !solicitud) {
      return res.status(400).json({
        error: "Solicitud no existente"
      });
    }
    req.solicitud = solicitud;
    next();
  })
}