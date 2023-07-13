import "../common/environments-and-constants.mjs";
import express from "express";

const router = express.Router();


import db from "../db/conn.mjs";
import uploadMediaFile from "../helpers/s3MediaStorage.mjs";
import { ObjectId } from "mongodb";
import { usersCollectionName } from "../common/environments-and-constants.mjs";



router.get('/', async (req, res) => {
  console.log('get trip');
  let collection = await db.collection(usersCollectionName);
  let results = await collection.find({})
    .limit(Number(process.env.MONGODB_DEFAULT_MAX_RESULT))
    .toArray();
  res.send(results).status(200);
});

router.put('/', async (req, res) => {
  let collection = await db.collection(usersCollectionName);
  let data = req.body;
  if (!data) { res.send("Invalid data").status(404)};
  const query = { _id: data._id };
  console.log(query);
  const options = { upsert: true };
  let result = await collection.updateOne(query, { $set: data }, options);
  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

router.get('/:id', async (req, res) => {
  let collection = await db.collection(usersCollectionName);
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

router.post('/', async (req, res) => {
  let collection = await db.collection(usersCollectionName);
  let newDocument = req.body;
  newDocument.createdAt = new Date();
  newDocument.updatedAt = new Date();
  newDocument.isDeleted = false;
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

router.patch(`/comment/:id`, async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates = {
    $push: { tags: req.body }
  };

  let collection = await db.collection(usersCollectionName);
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

router.delete('/:id', async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection(usersCollectionName);
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;