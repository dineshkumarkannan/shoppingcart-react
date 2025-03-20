import Button from "../../components/button/Button";
import CategoryMenuItem from "../../components/category-menu-item/CategoryMenuItem";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl">Home Page</h1>
      <p className="font-light">Welcome to the Home Page</p>
      <Button width="auto" variant="outline" sentiment="info">
        Click Me!!
      </Button>
      <CategoryMenuItem></CategoryMenuItem>
    </div>
  );
};

export default HomePage;
