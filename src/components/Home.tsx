import Banner from "./Banner";
import Categories from "./Categories";
import Products from "./Products";

function HomePage() {
  return (
    <div className="max-w-[1440px] m-auto">
      <Categories />
      <Banner />
      <Products />
    </div>
  );
}

export default HomePage;
