
const getClassTdGroups = (req, res) => {
    const { groupId } = req.params;
    console.log("req", groupId)
    return res.send("groupId " + groupId)
}

const getClassTpGroups = (req, res) => {
    const groupId = req.params;
    return res.send("tpgroupID", groupId);
}

const createGroup = (req, res) => {
    res.send("new group is created")
}

module.exports = { getClassTdGroups, getClassTpGroups }