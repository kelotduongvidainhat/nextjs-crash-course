'use client';
import { useState } from "react";
export default function Friends() {
    const [message, setMessage] = useState("");
    const onClick = async () => {
        const { data } = await makePostRequest();
        setMessage(data.message);
    }
    return <h1>Hey Friends, {message} <button onClick={onClick}>Click me</button></h1>
}

async function makePostRequest() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/halo`, {
        method: "POST",
        body: JSON.stringify({
            name: "Dung",
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const data = await response.json();
    return { data };
}