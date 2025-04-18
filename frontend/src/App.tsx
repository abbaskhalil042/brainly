import Button from "./components/ui/Button";
import PlusIcon from "./assets/icons/PlusIcon";

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
    </div>
  );
};

export default App;
