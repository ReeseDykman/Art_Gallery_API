const handleResponse = (data, req, resp) => {
    if (data.length === 0) {
        return resp.status(404).json({ error: `No records found for params ${JSON.stringify(req.params)}` });
    }
    resp.json(data);
}

const handleErrors = (error, resp) => {
    return resp.status(400).json({ message: 'SupaBase Error', error: error.message });
}

module.exports = {
    handleResponse,
    handleErrors
}