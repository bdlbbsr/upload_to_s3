 

const api_uploadFiles = (req, res) => {
    
    res.status(200);
    return res.json({
        msg: "Uploaded!", 
        files: req.files
    });
}

export default api_uploadFiles;