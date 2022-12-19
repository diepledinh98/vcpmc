
import React from "react";
import Header from "./components/Header/Header";
import MenuBar from "./components/MenuBar/MenuBar";
import './layout.scss'
type ChildrentType = {
    children: React.ReactNode
}
const DefaultLayout = ({ children }: ChildrentType) => {
    return (
        <div className="wrapper">
            <MenuBar />
            <div className="container">
                <Header />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout