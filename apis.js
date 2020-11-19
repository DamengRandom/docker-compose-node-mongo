const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
  try {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
  } catch (error) {
    console.log('Error about fetch posts: ', error);
  }
});

// Add Post
router.post('/', async (req, res) => {
  try {
    const posts = await loadPostsCollection();
    await posts.insertOne({
      description: req.body.description,
      createdAt: new Date()
    });
  
    res.status(201).send();  
  } catch (error) {
    console.log('Error about create post: ', error);
  }
});

// Delete Post
router.delete('/:id', async (req, res) => {
  try {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});

    res.status(200).send();
  } catch(err) {
    console.log('Error about delete post: ', err);
  }
});

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect('mongodb://localhost:27017', {
    useNewUrlParser: true
  });

  return client.db('express_mongo_local').collection('posts');
};

module.exports = router;
