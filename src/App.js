import React from "react";
import './App.css';
import Headlines from './Headlines'
import Author from './Author'

export default function App() {
    return (
        <div className="container-fluid my-5">
            <h3 className="text-center mb-5 ">
               BBC <span>Latest</span> News
                </h3>
            <Headlines/>
            <Author/>
        </div>
    );
}