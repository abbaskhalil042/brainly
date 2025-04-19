import Button from "./components/ui/Button";
import PlusIcon from "./assets/icons/PlusIcon";
import ShareIcon from "./assets/icons/ShareIcon";

const App = () => {
  return (
    <div>
      <Button
        onClick={() => console.log("hello")}
        variant="secondary"
        size="md"
        text="click on me"
        startIcon={<PlusIcon size={"md"} />}
      />

      <Button
        onClick={() => console.log("hello")}
        variant="secondary"
        size="md"
        text="click on me"
        startIcon={<ShareIcon size={"md"} />}
      />
    </div>
  );
};

export default App;
