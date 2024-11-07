const express = require("express");
const app = express();
const cors = require("cors");
const dbConnection = require("./config/dbConfig");
const TaskCard = require("./model/taskSchema");

app.use(cors());

app.use(express.json());
dbConnection();

const data = {
    client: {
        name: "Client Name",
        avatar: "image",
    },
    user: {
        name: "Sadik Istiak",
        avatar: "image",
    },
    content: {
        text: "Lorem ipsum dolor sit amet curn...",
        badge: "1/2",
    },
    actions: [
        {
            type: "icon",
            src: "image",
        },
        {
            type: "icon",
            src: "image",
        },
        {
            type: "badge",
            text: "12+",
        },
        {
            type: "chat",
            text: "15",
        },
        {
            type: "attachment",
            text: "0",
        },
        {
            type: "calendar",
            date: "30-12-2022",
        },
    ],
};

app.post("/upload", async (req, res) => {
    try {
        const newClientCard = new TaskCard(data);
        await newClientCard.save();

        res.status(200).json({
            message: "Data uploaded successfully",
            data: newClientCard,
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

app.get("/upload-data", async (req, res) => {
    try {
        let data = await TaskCard.find();

        res.status(200).json({
            message: "Data get successfully",
            data: data,
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

app.put("/update-attachment/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const taskCard = await TaskCard.findOne({ "actions._id": id });

        if (!taskCard) {
            return res.status(404).json({ message: "Attachment not found" });
        }

        const action = taskCard.actions.find(
            (action) => action._id.toString() === id
        );

        if (!action) {
            return res.status(404).json({ message: "Action not found" });
        }

        const currentCount = parseInt(action.text, 10) || 0;
        const newCount = currentCount + 1;

        const result = await TaskCard.findOneAndUpdate(
            { "actions._id": id },
            { $set: { "actions.$.text": newCount.toString() } },
            { new: true }
        );

        res.status(200).json({
            message: "Attachment count updated successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

app.listen(8000, function () {
    console.log("Server is running");
});
