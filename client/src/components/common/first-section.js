export default function FirstSection({ text, subText }) {
    return (
        <section className="first-section">
            <div className="container">
                <div className="content">
                    <h1>{text}</h1>
                    <p>{subText}</p>
                </div>
            </div>
        </section>
    )
}