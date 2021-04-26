import FirstSection from "../common/first-section";
import People from "../common/people"


export default function Home() {
    return (
        <main className="home">
            <FirstSection text="Это сайт о человеке труда." subText="Some text going here..."/>
            <People />
        </main>
    )
}