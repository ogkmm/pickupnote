import React from 'react'

interface DashBoardProps {
    code: string;
};

const DashBoard: React.FC<DashBoardProps> = ({ code }: DashBoardProps) => {
    return (
        <>
            <div>DashBoard Page.</div>
            <div>{code}</div>
        </>
    );
};

export default DashBoard;