import "./App.css";
import Card from "./components/common/Card";
import Completed from "./components/Completed";
import Doing from "./components/Doing";
import Incomplete from "./components/Incomplete";
import Todo from "./components/Todo";
import UnderReview from "./components/UnderReview";

function App() {
    return (
        <div className="box">
            <Card title="Under Review(Dynamic Attachment)">
                <UnderReview />
            </Card>
            <Card title="Incomplete(static Attachment)" progressColor="#d21010">
                <Incomplete />
            </Card>
            <Card title="To Do(static Attachment)" progressColor="#00b5ff">
                <Todo />
            </Card>
            <Card title="Doing(static Attachment)" progressColor="#ffe700">
                <Doing />
            </Card>
            <Card title="Completed(static Attachment)">
                <Completed />
            </Card>
        </div>
    );
}

export default App;
