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
    const groups = await prismaClient.groups.findMany({
        where: {
            classId: Number(classId)
        }
    })

    return res.send(groups);
}

const createEmptyClass = async (req, res) => {
    const { module, specialty, grade } = req.body;
    let start_year, end_year;

    const currentDate = new Date();
    const currentYear = new Date().getFullYear();
    const currentMonth = currentDate.getMonth();

    if (currentMonth <= 6) {
        condition = "end_year"
    } else {
        condition = "start_year"
    }

    if (condition === "end_year") {
        end_year = currentYear;
        start_year = currentYear - 1;
    } else if (condition === "start_year") {
        start_year = currentYear;
        end_year = currentYear + 1;
    }

    const createdClass = await prismaClient.classes.create({
        data: {
            module,
            specialty,
            grade: Number(grade),
            start_year,
            end_year,
        }
    })


    res.send(createdClass);
}

const deleteClass = async (req, res) => {
    const { classId } = req.params;
    const id = Number(classId);
    try {
        const deletedClass = await prismaClient.classes.delete({
            where: {
                id
            }
        })
        return res.send(deletedClass);
    } catch (error) {
        console.log(error);
        return res.send(error);
    }

}

const updateClass = async (req, res) => {
    const { id, module, specialty, grade } = req.body;
    try {
        const updatedClass = await prismaClient.classes.update({
            where: {
                id: Number(id)
            },
            data: {
                module,
                specialty,
                grade:Number(grade),
            }
        })
        return res.send(updatedClass);
    } catch (error) {
        console.log(error);
        return res.send(error);
    }

}

module.exports = { getAllActiveClasses, getAllArchivedClasses, createEmptyClass, getAllClassGroups, deleteClass, updateClass }