import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import session from "express-session";
import "reflect-metadata";
import { connectDatabase } from "./database/database";
import userRoute from "./routes/user.route";
import eventCoopRoute from "./routes/eventCoop.route";
import certificateCoopRoute from "./routes/certificate.route";
import quetionRoute from './routes/quetion.route'
import assessmentRoute from './routes/assessment.route'
import bodyParser from "body-parser";
import activityRoute from './routes/activity.route'
import activityAssessmentRoute from './routes/activityAssessment.route'
import userActivityRoute from './routes/userActivity.route'
import choiceRoute from './routes/choice.route'
import userChoiceRoute from './routes/userChoice.route'
dotenv.config();

const app = express();
const port = 3000;
connectDatabase();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users", userRoute);
app.use("/eventCoop", eventCoopRoute);
app.use("/certificate", certificateCoopRoute);
app.use("/question", quetionRoute)
app.use("/assessment", assessmentRoute)
app.use("/activity", activityRoute)
app.use("/activityAssessment", activityAssessmentRoute)
app.use("/userActivity", userActivityRoute)
app.use("/choice", choiceRoute)
app.use("/userChoice", userChoiceRoute)

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
