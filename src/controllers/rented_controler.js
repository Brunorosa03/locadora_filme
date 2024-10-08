import rented from "../models/rented_model.js";

export const store = async (req, res) => {
    try {
        const rented = await rented.create({
            rented_by: req.body.rented_by,
            movie_rented: req.body.movie_rented,
            rent_date: req.body.rent_date,
            return_date: req.body.return_date,
        });
            res.status(201).json(rented);
        } catch (error) {
            res.status(400).send(error);
        }
};

export const index = async (req, res) => {
    try {
        const content = await rented.find(req.query).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const show = async (req, res) => {
    try {
        const content = await rented.findById(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const update = async (req, res) => {
    try {
        const content = await rented.findByIdAndUpdate(
        req.params.id,
        {
            rented_by: req.body.rented_by,
            movie_rented: req.body.movie_rented,
            rent_date: req.body.rent_date,
            return_date: req.body.return_date,
        },
        { new: true, runValidators: true }
    ).exec();

    if(!rented){
        return res.status(404).send("Rented not found");
    }
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const destroy = async (req, res) => {
    try {
        const content = await rented.findByIdAndDelete(req.params.id).exec();

        if(!rented){
            return res.status(404).json({error: "Rented not found"});
        }
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};