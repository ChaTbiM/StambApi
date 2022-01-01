const { prismaClient } = require("../prismaClient")

const deleteGroup = async (req, res) => {
    const { groupId } = req.params;
    try {
        const deletedGroup = await prismaClient.groups.delete({
            where: {
                id: Number(groupId)
            }
        })
        return res.send(deletedGroup);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { deleteGroup }