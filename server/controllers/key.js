

const getKeyByName = async (req, res) => {
    const name = req.params.name;


    const secret_key = process.env[name];

    try {

        if (!secret_key) {
            throw new Error("No such key");
        }

        return res.status(200).json({
            success: true,
            secret_key,
        })
    }
    catch (err) {
        return res.status(400).json({
            success: false,
            message: err.message,
        })
    }
}

export {
    getKeyByName,
}
