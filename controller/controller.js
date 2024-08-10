const test = async (req, res) => {
    return res.send(await db.test())
}