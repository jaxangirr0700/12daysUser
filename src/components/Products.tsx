import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useMyStore from "../store/useMyStore";
import { DataType, useMyStoreType } from "../Type";
import Loading from "./Loading";

function Products() {
  const [data, setData] = useState<DataType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const state = useMyStore();
  console.log(state);

  useEffect(() => {
    axios
      .get(`https://nt.softly.uz/api/front/products`)
      .then((res) => {
        setData(res.data);
      })
      .catch((er) => {
        console.error(er);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <Loading />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full p-4">
        {data?.items.map((p) => (
          <div
            key={p.id}
            className="max-w-sm border rounded-xl border-slate-300 hover:scale-105 transition-all 0.5s relative"
          >
            <Card
              hoverable
              cover={
                <Link to={`/product/${p.id}`}>
                  <img
                    alt={p.name}
                    src={p.imageUrl}
                    className="object-cover h-60 w-full"
                  />
                </Link>
              }
            >
              <Card.Meta
                title={p.name}
                description={
                  <>
                    <p>{p.description}</p>
                    <p className="text-lg font-bold">${p.price}</p>
                    <p className="text-gray-800">Stock: {p.stock}</p>
                    <button>Stavatcha</button>
                  </>
                }
              />
            </Card>
            <div className=" absolute right-5 bottom-6">
              <ShoppingCartOutlined
                style={{ width: 40, fontSize: 28 }}
                className="cursor-pointer"
                onClick={() => {
                  // useMyStore.setState({ carts:...car p });
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
