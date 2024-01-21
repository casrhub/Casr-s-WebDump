async function getQuote(){
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes') 
    return res.json()
}

export default async function QuoteDisplay() {
    const bbquotes = await getQuote();
    if (!bbquotes || bbquotes.length === 0) {
        return <main><p>Loading...</p></main>;
    }

    // Since the API returns an array, you need to access the first element.
    const bbquote = bbquotes[0];

    return (
        <main>
            <p>{bbquote.quote} - {bbquote.author}</p>
            
        </main>
    );
}


