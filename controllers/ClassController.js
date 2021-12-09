const { prismaClient } = require("../prismaClient")

const getAllActiveClasses = async (req, res) => {
    const currentDate = new Date();
    const currentYear = new Date().getFullYear();
    const currentMonth = currentDate.getMonth();

    let condition;

    if (currentMonth <= 6) {
        condition = "end_year"
    } else {
        condition = "start_year"
    }

    const activeClasses = await prismaClient.classes.findMany({
        where: {
            [condition]: currentYear,
        }
    });

    return res.send(activeClasses)
}

const getAllArchivedClasses = async (req, res) => {
    const currentDate = new Date();
    const currentYear = new Date().getFullYear();
    const currentMonth = currentDate.getMonth();

    let condition;

    if (currentMonth <= 6) {
        condition = "end_year"
    } else {
        condition = "start_year"
    }

    const archivedClasses = await prismaClient.classes.findMany({
        where: {
            [condition]: {
                lt: currentYear
            },
        }
    });

    return res.send(archivedClasses)
}


const getAllClassGroups = async (req, res) => {
    const { classId } = req.params;
    const tdGroups = await prismaClient.groups.findMany({
        where: {
            classId: Number(classId)
        }
    })
    return res.send(tdGroups);
}


module.exports = { getAllActiveClasses, getAllArchivedClasses, getAllClassGroups }