import express from 'express';
import cors from 'cors';
 
import helmet from 'helmet';
import router from "./routes.js";

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.disable('x-powered-by');
app.use('/', router);


const PORT = process.env.PORT;

app.listen(PORT || 1337, () => console.log(`main-server listening on port: ${PORT}`));