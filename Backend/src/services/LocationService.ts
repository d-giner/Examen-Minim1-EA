import { Request, Response } from 'express';
import Location from '../models/Location';

class LocationServices {

    // Obtain all locations
    public async getLocations(req: Request, res: Response) {
        await Location.find().then((data) => {
            res.status(200).json(data);
        }).catch((error) => {
            res.status(500).json(error);
        });
    }

    // Añadir un nuevo estudiante
    public async addNewLocation(req: Request, res: Response) {
        let { name, state, population, latitude, longitude } = req.body;
        console.log('Se ha recibido: ', req.body);
        let newLocation = new Location({ name, state, population, latitude, longitude });
        await newLocation.save().then((data) => {
            res.status(201).json('New location has been added correctly.');
        }).catch((err) => {
            res.status(500).json(err);
        });
    }

    // Update a given location
    public async updateLocation(req: Request, res: Response) {
        let { id, name, state, population, latitude, longitude } = req.body;
        console.log(`A location with ${id} is going to be updated...`);
        console.log(req.body);
        let location = await Location.findById(id);

        if (location) {
            if (name != null && name != '') {
                await Location.updateOne({ _id: location._id }, { name: name }).then((data) => {
                    if (data.nModified == 1) {
                        res.status(201).json('Location has been updated correctly.');
                    }
                    else {
                        res.status(409).json('Error! Not modified due internal problems.');
                    }
                }).catch((err) => {
                    res.status(500).json(err);
                });
            }
            if (state != null && state != '') {
                await Location.updateOne({ _id: location._id }, { state: state }).then((data) => {
                    if (data.nModified == 1) {
                        res.status(201).json('Location has been updated correctly.');
                    }
                    else {
                        res.status(409).json('Error! Not modified due internal problems.');
                    }
                }).catch((err) => {
                    res.status(500).json(err);
                });
            }
            if (population != null && population != '') {
                await Location.updateOne({ _id: location._id }, { population: population }).then((data) => {
                    if (data.nModified == 1) {
                        res.status(201).json('Location has been updated correctly.');
                    }
                    else {
                        res.status(409).json('Error! Not modified due internal problems.');
                    }
                }).catch((err) => {
                    res.status(500).json(err);
                });
            }
            if (latitude != null && latitude != '') {
                await Location.updateOne({ _id: location._id }, { latitude: latitude }).then((data) => {
                    if (data.nModified == 1) {
                        res.status(201).json('Location has been updated correctly.');
                    }
                    else {
                        res.status(409).json('Error! Not modified due internal problems.');
                    }
                }).catch((err) => {
                    res.status(500).json(err);
                });
            }
            if (longitude != null && longitude != '') {
                await Location.updateOne({ _id: location._id }, { longitude: longitude }).then((data) => {
                    if (data.nModified == 1) {
                        res.status(201).json('Location has been updated correctly.');
                    }
                    else {
                        res.status(409).json('Error! Not modified due internal problems.');
                    }
                }).catch((err) => {
                    res.status(500).json(err);
                });
            }
        }
        else {
            res.status(404).json('Error! No entrys for this location.')
        }
    }

    // public async updateLocation(req: Request, res: Response) {
    //     let { id, name, state, population, latitude, longitude } = req.body;
    //     console.log(`${name} is going to be updated...`);
    //     let location = await Location.findById(id);

    //     if (location) {
    //         await Location.updateOne({ _id: location._id }, { name: name, state: state, population: population, latitude: latitude, longitude: longitude }).then((data) => {
    //             if (data.nModified == 1) {
    //                 res.status(201).json('Location has been updated correctly.');
    //             }
    //             else {
    //                 res.status(409).json('Error! Not modified due internal problems.');
    //             }
    //         }).catch((err) => {
    //             res.status(500).json(err);
    //         });;
    //     }
    //     else {
    //         res.status(404).json('Error! No entrys for this location.')
    //     }
    // }
}

export const locationServices = new LocationServices();