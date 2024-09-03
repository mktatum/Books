const router = require("express").Router();
const { Router } = require("express");
const Book = require("../models/books");

// Index route
router.get("/", async (req, res) => {
  const allBooks = await Book.find();
  // console.log(allPlaces)
  res.json({ books: allBooks });
});

// Seed route
router.get("/seed", (req, res) => {
  Book.insertMany([
    {
      title: "The Shinobi Initiative",
      description:
        "The reality-bending adventures of a clandestine service agency in the year 2166",
      year: 2014,
      quantity: 10,
      imageURL: "https://imgur.com/LEqsHy5.jpeg",
    },
    {
      title: "Tess the Wonder Dog",
      description: "The tale of a dog who gets super powers",
      year: 2007,
      quantity: 3,
      imageURL: "https://imgur.com/cEJmGKV.jpg",
    },
    {
      title: "The Annals of Arathrae",
      description:
        "This anthology tells the intertwined narratives of six fairy tales.",
      year: 2016,
      quantity: 8,
      imageURL: "https://imgur.com/VGyUtrr.jpeg",
    },
    {
      title: "Wâˆ€RP",
      description:
        "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
      year: 2010,
      quantity: 4,
      imageURL: "https://imgur.com/qYLKtPH.jpeg",
    },
  ])
    .then(
      res.status(200).json({
        message: "Seed successful",
      })
    )
    .catch(
      res.status(400).json({
        message: "Seed unsuccessful",
      })
    );
});

router.put("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const updated = await Book.findByIdAndUpdate(id, req.body, {
      runValidators: true,
    });
    res.json({ book: updated });
  } catch (e) {
    res.status(404).send("No such book exists");
  }
});

// Show route
router.get("/:id", async (req, res) => {
  let ids = req.params.id;
  try {
    const showBook = await Book.findById(ids);
    res.json({ book: showBook });
  } catch (e) {
    res.status(404).send("No such book exists");
  }
});

router.post("/", async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.json({ book: newBook });
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let idOfTheOneImIn = req.params.id;
    await Book.findByIdAndDelete(idOfTheOneImIn);
    res.send("Delete successful");
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = router;

// // make PUT route match POST route (not Place.create)
