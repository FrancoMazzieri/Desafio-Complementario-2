import { connect } from "mongoose"

const URL = 'mongodb+srv://frank1:MAz0pYwbr7cfagZq@cluster0.60riapt.mongodb.net/ecommerce2?retryWrites=true&w=majority'

const dbConnection = async () => {
    return await connect(URL, err => {
        if (err) {
            console.log('No se puede conectar mongodb: ', err)
            process.exit()
        }
        console.log('DB conectada ')
    })
}

export default dbConnection