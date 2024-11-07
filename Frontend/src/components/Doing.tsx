import ClientCard from "./common/ClientCard";

const templateData = {
    client: {
        name: "Client Name",
        avatar: "image",
        _id: "",
    },
    user: {
        name: "Sadik Istiak",
        avatar: "image",
        _id: "",
    },
    content: {
        text: "Lorem ipsum dolor sit amet curn...",
        badge: "1/2",
        _id: "",
    },
    actions: [
        {
            type: "icon",
            src: "image",
            _id: "",
        },
        {
            type: "icon",
            src: "image",
            _id: "",
        },
        {
            type: "badge",
            text: "12+",
            _id: "",
        },
        {
            type: "chat",
            text: "15",
            _id: "",
        },
        {
            type: "attachment",
            text: "25",
            _id: "",
        },
        {
            type: "calendar",
            date: "30-12-2022",
            _id: "",
        },
    ],
    _id: "",
    createdAt: "2024-11-07T07:48:35.093Z",
    updatedAt: "2024-11-07T07:48:35.093Z",
    __v: 0,
};

const data = Array(7).fill(templateData);

const Doing = () => {
    return (
        <div className="client-row">
            <ClientCard data={data} />
        </div>
    );
};

export default Doing;
