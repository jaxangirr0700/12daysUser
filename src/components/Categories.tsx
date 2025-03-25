import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type CategoriesType = {
  createdAt?: string;
  description?: string;
  id: number;
  name: string;
};

function Categories() {
  const [categories, setCategories] = useState<CategoriesType[] | []>([]);

  useEffect(() => {
    axios
      .get(`https://nt.softly.uz/api/front/categories/`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((er) => {
        console.log(er);
      })
      .finally(() => {});
  }, []);
  return (
    <div>
      <ul className="flex items-center flex-wrap gap-2 justify-between py-4">
        {categories.map((i) => {
          return (
            <li key={i.id}>
              <div className="font-bold text-xl hover:scale-105 border border-gray-300 px-2 py-2 rounded-xl  transition-all  0.5s">
                <Link to={"/"}>{i.name}</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
