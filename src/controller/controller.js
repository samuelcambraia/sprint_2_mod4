const controleUser = (app, banco) => {
    
    app.post('/create', (req, res) => {
        const body = req.body
        
        try {
            if (body.tip.length != 0) {
                banco.tips.push(body.tip)
                res.json({
                    msg: "realizado com sucesso",
                    error: false
                })
           
           
            } else {
                
                
                          throw new Error("Vazio")
            }
        } catch (error) {
            res.json({
                msg: error.message,
                error: true
            })
        }
    })


    app.get('/tips', (req, res) => {
        res.json({
            "tips": banco.tips[parseInt(Math.random() * banco.tips.length)]
        })
    })
}



export default controleUser