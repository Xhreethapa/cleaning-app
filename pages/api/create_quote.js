import prisma from "../../lib/prisma"

export default async function handle(req, res) {
    const {fullName, email, phone, bedrooms, bathrooms} = req.body

    const result = await prisma.quote.create({
        data:{
            fullName, email, phone, bedrooms, bathrooms
        }
    })
    res.json(result)
}