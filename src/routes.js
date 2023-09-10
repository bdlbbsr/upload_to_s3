import express from 'express';
import { handleUploadMiddleware } from './api/uploads/uploadSetup.js';
import api_uploadFiles from "./api/uploads/api_uploadFiles.js";
import api_deleteFiles from './api/uploads/api_deleteFiles.js';
import api_ListFiles from './api/uploads/api_listFiles.js';

    const router = express.Router();
    
    router.get('/ping', (req, res) => {
        res.send('pong');
    });

    // Accept maximum 5 files
    router.post('/upload',
        handleUploadMiddleware.array('input_files', 5), 
        api_uploadFiles
    );

    router.delete('/remove', api_deleteFiles);
    router.get('/list', api_ListFiles);


export default router;
