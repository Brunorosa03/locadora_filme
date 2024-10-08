import Movie from "../models/movie_model.js";

export const store = async (req, res) => {
    try {
        const movie = await Movie.create({
            name: req.body.name,
            release_date: req.body.release_date,
            director: req.body.director,
            classification: req.body.classification
        });
            res.status(201).json(movie);
        } catch (error) {
            res.status(400).send(error);
        }
};

export const index = async (req, res) => {
    try {
        const content = await movie.find(req.query).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const show = async (req, res) => {
    try {
        const content = await movie.findById(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const update = async (req, res) => {
    try {
        const content = await movie.findByIdAndUpdate(
            req.params.id,
            req.body
        ).exec();
        res.json(content);
    } catch (error) {
    res.status(400).send(error);
    }
};

export const destroy = async (req, res) => {
    try {
        const content = await movie.findByIdAndDelete(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};