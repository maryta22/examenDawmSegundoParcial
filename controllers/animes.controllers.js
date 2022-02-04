const animesModels = require("../collections/animes.models")

exports.obtenerTodo = (req, res, next) => {
    animesModels.find(
        {},
        (error, documentos)=>{
            res.render("index",{pagina : 'index', docs : documentos})
        }
    )
}


exports.obtenerPorID = (req, res, next) => {
    animesModels.find(
        {ID : req.params.id},
        (error, documentos)=>{
            animesModels.find(
                {Type : documentos[0].Type},
                (error, otrosDocumentos)=>{
                    otrosDocumentos.sort(() => Math.random() - 0.5)
                    res.render("anime",{pagina : 'anime', docs : documentos, otrosdocs: otrosDocumentos.slice(0,4)})
                }
            )
        }
    )
}


