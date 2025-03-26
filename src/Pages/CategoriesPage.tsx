import { useEffect } from "react";
import Categories from "../components/Categories";
import axios from "axios";
import { useParams } from "react-router-dom";

function CategoriesPage() {
  const params = useParams();
  console.log(params);

  useEffect(() => {
    axios
      .get(`https://nt.softly.uz/api/front/categories/${params.id}`)
      .then((res) => {
        console.log(res);
      });
  }, []);
  return (
    <div className="max-w-[1440px] m-auto ">
      <h1 className="text-2xl font-bold">CategoriesPage</h1>
      <Categories />
    </div>
  );
}

export default CategoriesPage;
