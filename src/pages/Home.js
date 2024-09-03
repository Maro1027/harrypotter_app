import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { getData } from "../utils/api";
import SearchForm from "../components/SearchForm";
import { useDispatch, useSelector } from "react-redux";
import { setPerson } from "../redux/personSlice";

const Home = () => {
  const initialUrl = "https://potterapi-fedeperin.vercel.app/en/characters";
  const [loading, setLoading] = useState(true);
  // 元データ用
  // const [data, setData] = useState([]);

  // フィルタリングデータ用
  const [selectData, setSelectData] = useState([]);
  const buttonAry = ["All", "Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
  const [isActive, setIsActive] = useState(0);
  const [inputVal, setInputVal] = useState("");

  // 元データはReduxで管理
  const dispatch = useDispatch();
  const persons = useSelector((state) => state.persons.value);

  useEffect(() => {
    if (!persons) {
      const fetchData = async () => {
        // APIからデータ取得
        let res = await getData(initialUrl);
        // 元データの格納
        // setData(res);

        // フィルタリングデータ用の格納
        setSelectData(res);

        // グローバルに取得データを保存
        dispatch(setPerson(res));

        // データ取得の場合、ローディング終了
        setLoading(false);
      };
      fetchData();
    } else {
      setSelectData(persons);
      setLoading(false);
    }
  }, [dispatch, persons]);

  useEffect(() => {
    // ボタンが切り替わるたびに発火
    // データの更新
    let newData = persons;
    if (isActive !== 0) {
      newData = persons.filter((d) => d.hogwartsHouse === buttonAry[isActive]);
    }
    setSelectData(newData);

    // 検索窓を空にする
    setInputVal("");

    // eslint-disable-next-line
  }, [isActive]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="search buttons">
            <p className="search_title">Filter by house</p>
            {buttonAry.map((button, index) => (
              <Button
                key={button}
                text={button}
                data={persons}
                setSelectData={setSelectData}
                isActive={isActive}
                index={index}
                setIsActive={setIsActive}
              />
            ))}
          </div>
          <div className="search">
            <p className="search_title">Filter by person name</p>
            <SearchForm
              data={persons}
              setSelectData={setSelectData}
              inputVal={inputVal}
              setInputVal={setInputVal}
              isActive={isActive}
              buttonAry={buttonAry}
            />
          </div>

          <div className="card_container">
            {selectData.length === 0 ? ( //
              <h2 className="nodata">条件に合致するデータがありません。</h2>
            ) : (
              selectData.map((detail) => (
                <Card
                  key={detail.index}
                  person={detail}
                />
              ))
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
