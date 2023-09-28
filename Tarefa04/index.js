const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

app.use(express.static("public"))

const products = [
    {
        id: "1", 
        nome: "Livro",
        preco: 12.99
    },
    {
        id: "2", 
        nome: "TV",
        preco: 1299.99
    },
    {
        id: "3", 
        nome: "LED",
        preco: 39.99
    }
]

app.get("/", (req, res) => {
    res.render("home", { products })
})

app.get("/product/:id", (req, res) => {
    const product = products[parseInt(req.params.id)-1]

    res.render("product", { product })
})

app.listen(5000, () => {
    console.log(`Aplicação está rodando.`)
})