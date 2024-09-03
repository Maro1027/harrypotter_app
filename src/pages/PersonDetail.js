import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import PersonDetailCard from "../components/PersonDetailCard";

const PersonDetail = () => {
  const persons = useSelector((state) => state.persons.value);
  const navigate = useNavigate();
  const { name } = useParams();
  const [personDetail, setPersonDetail] = useState();

  useEffect(() => {
    if (!persons) {
      console.log("トップに戻る");
      navigate("/");
    } else {
      setPersonDetail(persons.filter((d) => d.fullName.replace(/\s+/g, "") === name));
    }
  }, [navigate, persons, name]);

  return (
    <>
      {personDetail &&
        personDetail.map((person) => (
          <PersonDetailCard
            key={person.index}
            person={person}
          />
        ))}

      <p className="button_return">
        <Link onClick={() => navigate(-1)}>戻る</Link>
      </p>
    </>
  );
};

export default PersonDetail;
