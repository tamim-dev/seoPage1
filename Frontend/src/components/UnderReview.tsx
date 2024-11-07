import ClientCard from "./common/ClientCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { IDataItem } from "../model/Dataitem";

const UnderReview = () => {
    const [data, setData] = useState<IDataItem[]>([]);
    useEffect(() => {
        axios
            .get("https://seopage1-t8rr.onrender.com/upload-data")
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
