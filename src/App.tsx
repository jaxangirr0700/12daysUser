import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [katak, setKatak] = useState([
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
  ]);

  // function add(a: number, b: number) {
  //   return a + b;
  // }
  // const noutbook: {
  //   model: string;
  //   ssd: number;
  //   portlari: Object[];
  //   ekran: number;
  // } = {
  //   model: "Mac",
  //   ssd: 512,
  //   portlari: [
  //     {
  //       nomi: "1",
  //       turi: "USB",
  //     },
  //     {
  //       nomi: "2",
  //       turi: "HTMI",
  //     },
  //   ],
  //   ekran: 1000,
  // };

  type dataType = {
    author: {
      name: string;
    };
    deletedAt: null;
    description: null;
    id: number;
    image: string;
    name: string;
    stocks: {
      busy: boolean;
      id: number;
      locationId: number;
    };

    updatedAt: string;
  };

  const [queue, setQueue] = useState(true);
  const [win, setWin] = useState("");
  const [data, setData] = useState<dataType[]>();

  useEffect(() => {
    axios
      .get(`https://library.softly.uz/api/app/books`)
      .then((res) => {
        // console.log(res.data.items);
        setData(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  console.log(data);

  return (
    <>
      <div className="flex items-center justify-center  ">
        <div className="flex flex-col gap-5 font-bold font-mono">
          <button className="text-xl ">
            Win: <span className="text-xl">{win}</span>
          </button>
          <div className="grid grid-cols-3">
            {katak.map((k, i) => {
              return (
                <div
                  onClick={() => {
                    const new_katak = katak.map((kt, ktIndex) => {
                      if (i === ktIndex && kt.value === "") {
                        return { value: queue ? "x" : "o" };
                      }
                      return kt;
                    });

                    setKatak(new_katak);

                    const checkWin = (player: string) => {
                      // Qatorlar
                      if (
                        (new_katak[0].value === player &&
                          new_katak[1].value === player &&
                          new_katak[2].value === player) ||
                        (new_katak[3].value === player &&
                          new_katak[4].value === player &&
                          new_katak[5].value === player) ||
                        (new_katak[6].value === player &&
                          new_katak[7].value === player &&
                          new_katak[8].value === player)
                      ) {
                        return true;
                      }

                      // Ustunlar
                      if (
                        (new_katak[0].value === player &&
                          new_katak[3].value === player &&
                          new_katak[6].value === player) ||
                        (new_katak[1].value === player &&
                          new_katak[4].value === player &&
                          new_katak[7].value === player) ||
                        (new_katak[2].value === player &&
                          new_katak[5].value === player &&
                          new_katak[8].value === player)
                      ) {
                        return true;
                      }

                      // Diagonal
                      if (
                        (new_katak[0].value === player &&
                          new_katak[4].value === player &&
                          new_katak[8].value === player) ||
                        (new_katak[2].value === player &&
                          new_katak[4].value === player &&
                          new_katak[6].value === player)
                      ) {
                        return true;
                      }

                      return false;
                    };

                    if (checkWin("x")) {
                      setWin("x");
                    } else if (checkWin("o")) {
                      setWin("o");
                    }

                    if (katak[i].value === "") {
                      setQueue(!queue);
                    }
                  }}
                  key={i}
                  className={`w-16 h-16  border rounded-md border-slate-500 text-5xl font-bold font-mono select-none ${
                    win ? "pointer-events-none" : ""
                  }`}
                >
                  {k.value}
                </div>
              );
            })}
          </div>
          <button
            className=""
            onClick={() => {
              const new_kataklar = katak.map(() => {
                return {
                  value: "",
                };
              });
              setKatak(new_kataklar);
              setWin("");
            }}
          >
            Refresh
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {data.map((i) => {
          return (
            <div
              key={i.id}
              className="max-w-[150px] h-60 flex items-center flex-col justify-center"
            >
              <p>Id: {i.id}</p>
              <img className="h-35" src={i.image} alt={i.name} />
              <p>
                Yangilangan <span className="font-bold">{i.updatedAt}</span>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
