import ClientCard from "./common/ClientCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { IDataItem } from "../model/Dataitem";

const UnderReview = () => {
    const [data, setData] = useState<IDataItem[]>([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/upload-data")
            .then((response) => {
                setData(response.data.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    return <ClientCard data={data} />;
};

export default UnderReview;
