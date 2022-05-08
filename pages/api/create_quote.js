import prisma from "../../lib/prisma"

export default async function handle(req, res) {
    const { fullName, email, phone, bedrooms, bathrooms, balcony,
        separateToilet,
        studyRoom,
        wallWash,
        fridge,
        garage,
        blinds,
        steamLiving,
        steamBedroom,
        steamHallway,
        steamStairs } = req.body

    const result = await prisma.quote.create({
        data: {
            fullName,
            email,
            phone,
            bedrooms,
            bathrooms,
            balcony,
            separateToilet,
            studyRoom,
            wallWash,
            fridge,
            garage,
            blinds,
            steamLiving,
            steamBedroom,
            steamHallway,
            steamStairs
        }
    })
    res.json(result)
}