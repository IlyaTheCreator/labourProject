export default function Person({ name, bio, nomination, videoLink, previewImage}) {
    return (
        <div className="person">
            <h2>{name}</h2>
            <p>Номинация: {nomination}</p>
            <img src={previewImage} />
        </div>
    )
}