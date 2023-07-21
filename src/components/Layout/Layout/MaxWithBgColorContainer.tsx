import React from "react";

interface Props {
    children: any;
    bgColor?: string;
}

const MaxWithBgColorContainer: React.FC<Props> = ({
    children,
    bgColor = "transparent",
}) => {
    return (
        <div className={`w-screen ${bgColor}`}>
            <div className="container mx-auto max-w-7xl">
                {children}
            </div>
        </div>
    );
};

export default MaxWithBgColorContainer;
