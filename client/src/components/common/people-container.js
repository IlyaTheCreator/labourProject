import Person from "./person"

import mockData from "../../assets/mocks/mock-data"


export default function PeopleContainer() {
    console.log(mockData)

    return (
        <div className="people-container">
            {
                mockData.map((person, index) => (
                    <Person 
                        key={index}
                        name={person.name}
                        nomination={person.nomination}
                        bio={person.bio}
                        videoLink={person.videoLink}
                        previewImage={person.previewImage}
                    />
                ))
            }
        </div>
    )
}