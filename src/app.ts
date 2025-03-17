import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import session from "express-session";
import "reflect-metadata";
import { connectDatabase } from "./database/database";
import userRoute from './routes/user.route'
dotenv.config();



const app = express();
const port = 3000;
connectDatabase();

app.use("/api", userRoute)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});



// declare module "express-session" {
//     interface SessionData {
//         views: number;
//     }
// }

// app.use(express.urlencoded({ extended: true }));
// app.use(
//     session({
//         secret: "TOPSECRETWORD",
//         resave: false,
//         saveUninitialized: true,
//         cookie: {
//             maxAge: 10 * 1000,
//         },
//     })
// );


// app.get("/", (req: Request, res: Response) => {
//     if (req.session.views) {
//         req.session.views++;
//     } else {
//         req.session.views = 1;
//     }
//     res.send(`Number of views: ${req.session.views}`);
// });