export const errorMiddlware = (err, req, res, next) => {
    console.log(err.message);
    res.status(500).send({ success: false, error: err.message ?? "Unknown error" });
};
