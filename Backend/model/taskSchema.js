const mongoose = require("mongoose")

const ActionSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ["icon", "badge", "chat", "attachment", "calendar"],
    },
    src: {
        type: String,
        required: function () {
            return this.type === "icon";
        },
    },
    text: {
        type: String,
        required: function () {
            return ["badge", "chat", "attachment"].includes(this.type);
        },
    },
    date: {
        type: String,
        required: function () {
            return this.type === "calendar";
        },
    },
});

const ContentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    badge: {
        type: String,
        required: true,
    },
});

const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
});

const TaskSchema = new mongoose.Schema(
    {
        client: {
            type: ProfileSchema,
            required: true,
        },
        user: {
            type: ProfileSchema,
            required: true,
        },
        content: {
            type: ContentSchema,
            required: true,
        },
        actions: {
            type: [ActionSchema],
            required: true,
        },
    },
    { timestamps: true }
);

module.exports =  mongoose.model("TaskCard", TaskSchema);
