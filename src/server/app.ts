import express from "express";
import helmet from "helmet";

const app: express.Express = express();

const clientRootPath = "dist/templates";
app.use(express.static(clientRootPath));
app.use(helmet());
app.get("*", (req, res) => {
    res.sendFile("index.html", { root: clientRootPath });
});

app.listen(3000, () => {
    console.log();
});

export default app;
