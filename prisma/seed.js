const { prismaClient } = require("../prismaClient");

const classesData = [
    {
        specialty: "informatique",
        module: "analyse",
        grade: 1,
        start_year: 2020,
        end_year: 2021
    },
    {
        specialty: "informatique",
        module: "analyse",
        grade: 1,
        start_year: 2021,
        end_year: 2022,
    },
    {
        specialty: "informatique",
        module: "analyse",
        grade: 1,
        start_year: 2019,
        end_year: 2020
    },
    {
        specialty: "math",
        module: "analyse",
        grade: 3,
        start_year: 2020,
        end_year: 2021
    }
]

const groupsData = [
    {
        type: "TD",
        number: 1,
    },
    {
        type: "TD",
        number: 2,
    },
    {
        type: "TD",
        number: 5,
    },
    {
        type: "TP",
        number: 5,
    }
]

const seedClasses = async () => {
    for (const classData of classesData) {
        if (classData.end_year === 2022) {
            const classModel = await prismaClient.classes.create({
                data: {
                    ...classData,
                    groups: {
                        create: [...groupsData]
                    }
                },
            })
            console.log(`Created class with id: ${classModel.id}`)
        } else {
            const classModel = await prismaClient.classes.create({
                data: classData,
            })
            console.log(`Created class with id: ${classModel.id}`)
        }
    }
}

const seedGroups = async () => {

    await prismaClient.groups.createMany({
        data: groupsData
    })
    // for (const groupData of groupsData) {
    //     const groupModel = await prismaClient.groups.create({
    //         data: groupData,
    //     })
    //     console.log(`Created group with id: ${groupsData.id}`)
    // }
}

async function main() {
    console.log(`Start seeding ...`);
    await seedClasses();
    // await seedGroups();
    console.log(`Seeding finished.`)
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prismaClient.$disconnect()
    })

