import express from 'express'
import ProductRouter from './Routers/products.router.js'
import CartRouter from './routers/carts.router.js'

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.listen(8080, () => {
    console.log('Escuchando Port 8080')
})

app.use(express.Router())
app.use("/api",ProductRouter)
app.use("/api",CartRouter)
