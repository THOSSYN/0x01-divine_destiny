import Body from "../components/Body";
import Views from "../components/Seachbar";

export default function HomePage() {
    return (
        <div className="search-container">
            <Views />
            <div className="content">
                <Body />
            </div>
        </div>
    );
}