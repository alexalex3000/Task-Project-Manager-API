import app from "./app";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 3000;
async function startServer() {
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
}
startServer();
