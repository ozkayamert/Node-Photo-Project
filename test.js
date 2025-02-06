const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/photo-test-db');

const PhotoSchema = new Schema({
    title: String,
    description: String
});

const Photo = mongoose.model('Photo', PhotoSchema);

/*
Photo.create({
    title: "Photo 2",
    description: "Description 2"
});
*/

/*
Photo.find({})
    .then(data => console.log(data))
    .catch(err => console.error(err));
*/

const id = '67a4b634b00b808e2a14378b';

/*
const update = {
    title: 'Photo Title 1 Updated',
    description: 'Photo Description 1 updated',
};

const updatePhoto = async () => {
    try {
        const updatedPhoto = await Photo.findByIdAndUpdate(id, update, { new: true });

        if (!updatedPhoto) {
            console.log('Photo not found!');
            return;
        }

        console.log('Updated Photo:', updatedPhoto);
    } catch (error) {
        console.error('Error:', error);
    }
};

updatePhoto();
*/

const deletePhoto = async () => {
    try {
        const deletedPhoto = await Photo.findByIdAndDelete(id);

        if (!deletedPhoto) {
            console.log('Photo does not exist or deleted!');
            return;
        }

        console.log('Deleted Photo:', deletedPhoto);
    } catch (error) {
        console.error('Error:', error);
    }
};

deletePhoto();