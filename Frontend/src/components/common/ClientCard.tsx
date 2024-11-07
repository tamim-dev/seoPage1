import { FC, useState } from "react";
import { FaLayerGroup } from "react-icons/fa6";
import { IoPricetag } from "react-icons/io5";
import { RiAttachment2, RiWechatLine } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";
import { IDataItem } from "../../model/Dataitem";
import axios from "axios";

import profile from "../../assets/images/images.jpeg";

interface IDataItemProps {
    data: IDataItem[];
}

const ClientCard: FC<IDataItemProps> = ({ data }) => {
    let [count, setCount] = useState<number>(0);
    let [attachmentId, setAttachmentId] = useState<string>();

    const handleFile = async (
        e: React.ChangeEvent<HTMLInputElement>,
        item: IDataItem
    ) => {
        const file = e.target.files?.[0];

        if (file) {
            const attachment = item.actions.find(
                (action) => action.type === "attachment"
            );
            if (attachment && attachment._id) {
                setAttachmentId(attachment._id);
                try {
                    await axios.put(
                        `https://seopage1-t8rr.onrender.com/update-attachment/${attachment._id}`
                    );
                    setCount(count + 1);
                } catch (error) {
                    console.error("Error updating attachment count:", error);
                }
            }
        }
    };

    return (
        <div className="client-row">
            {data.map((item, index) => (
                <div className="client-card" key={item._id || index}>
                    <div className="client-profile-box">
                        <div className="client-profile">
                            <img
                                className="client-img"
                                src={profile}
                                alt="Client Avatar"
                            />
                            <p>{item.client.name}</p>
                        </div>
                        <div className="client-profile">
                            <img
                                className="client-img"
                                src={profile}
                                alt="User Avatar"
                            />
                            <p>{item.user.name}</p>
                        </div>
                    </div>
                    <div className="client-card-des">
                        <p>
                            <span>
                                <FaLayerGroup />
                            </span>{" "}
                            {item.content.text}
                        </p>
                        <div className="client-card-tag">
                            <IoPricetag /> {item.content.badge}
                        </div>
                    </div>
                    <div className="client-card-bottom">
                        {item.actions.map((action, actionIndex) => (
                            <div key={actionIndex} className="flex-item-center">
                                {action.type === "icon" && (
                                    <img
                                        className="client-img"
                                        src={profile}
                                        alt="Action Icon"
                                    />
                                )}
                                {action.type === "badge" && (
                                    <div className="client-count">
                                        {action.text}
                                    </div>
                                )}
                                {action.type === "chat" && (
                                    <>
                                        <RiWechatLine /> {action.text}
                                    </>
                                )}
                                {action.type === "attachment" && (
                                    <label style={{ cursor: "pointer" }}>
                                        <input
                                            onChange={(e) =>
                                                handleFile(e, item)
                                            }
                                            hidden
                                            type="file"
                                        />
                                        <RiAttachment2 />{" "}
                                        {attachmentId === action._id
                                            ? Number(action.text) + count
                                            : action.text}
                                    </label>
                                )}
                                {action.type === "calendar" && (
                                    <>
                                        <MdOutlineDateRange /> {action.date}
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ClientCard;
