import Button from "../../components/button/Button";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl">Home Page</h1>
      <p className="font-light">Welcome to the Home Page</p>
      <Button width="auto" variant="outline" sentiment="info">
        Click Me!!
      </Button>
    </div>
  );
};

export default HomePage;
