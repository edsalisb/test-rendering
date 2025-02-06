'use client'

import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
    return (
        <div>
            <ChildComponent prop={{ ...{ color: "red", shade: Math.random() }, }} />
            <ChildComponent prop={{ ...{ color: "blue", shade: Math.random() }, }} />
            <ChildComponent prop={{ ...{ color: "green", shade: Math.random() }, }} />
        </div>
    );
}