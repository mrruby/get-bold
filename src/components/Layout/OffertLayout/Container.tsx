import React from "react";

interface Props {
    children: React.ReactNode;
    bgColor?: string;
    height?: string;
}

const Container: React.FC<Props> = ({
    children,
    bgColor,
    height,
}) => {
    return (
        <div className={`w-screen ${bgColor} ${height}`}>
            <div className="container mx-auto max-w-7xl">
                {children}
            </div>
        </div>
    );
};

export default Container;
