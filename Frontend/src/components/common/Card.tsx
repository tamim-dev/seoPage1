import { FC } from "react";
import { ICardProps } from "../../model/Card";

const Card: FC<ICardProps> = ({
    title,
    children,
    progressColor,
}: ICardProps) => {
    return (
        <div className="card">
            <div className="card-heading">
                <div className="card-progress-bar">
                    {progressColor && (
                        <div
                            style={{
                                backgroundColor: progressColor,
                                width: "20px",
                                height: "20px",
                                borderTopLeftRadius:"100%",
                                borderBottomLeftRadius:"100%"
                            }}
                        ></div>
                    )}
                    {title && <h3>{title}</h3>}
                </div>
                <div>0</div>
            </div>
            {children}
        </div>
    );
};

export default Card;
