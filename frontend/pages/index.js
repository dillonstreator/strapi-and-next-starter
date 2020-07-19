import React from "react";
import { getQuotes } from "../lib/api";

const Quote = ({ author, text }) => (
    <div
        style={{
            display: "flex",
            flexDirection: "column",
            padding: "15px 30px",
            borderRadius: 5,
            boxShadow: "0px 3px 8px 0px rgba(0,0,0,.15)",
        }}
    >
        <p style={{ margin: 0, marginBottom: 10 }}>{text}</p>
        <span style={{ textAlign: "right", fontSize: 12, color: "#AAA" }}>
            {author}
        </span>
    </div>
);

const Home = ({ quotes }) => {
    return (
        <>
            <h1>Home</h1>
            {Array.isArray(quotes) && quotes.length > 0 && (
                <>
                    <h2>Funny movie quotes... (these were pulled from api)</h2>
                    <ul style={{ padding: 0, listStyle: "none" }}>
                        {quotes.map((quote) => (
                            <li key={`${quote.text}${quote.author}`}>
                                <Quote {...quote} />
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
};

Home.getInitialProps = async (ctx) => {
    const quotes = await getQuotes();

    return { quotes };
};

export default Home;
