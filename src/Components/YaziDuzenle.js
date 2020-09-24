import React, { useEffect, useState } from "react";
import { api } from "../api";
import YaziFormu from "./YaziFormu";

const YaziDüzenle = (props) => {
  const { id } = props.match.params;
  const [yazi, setYazi] = useState({});
  useEffect(() => {
    api()
      .get(`/posts/${id}`)
      .then((response) => {
        setYazi({ title: response.data.title, content: response.data.content });
      });
  }, []);

  return (
    <div>
      <h1>Yazi Düzenleme Formu</h1>
      <YaziFormu yazi={yazi} />
    </div>
  );
};
export default YaziDüzenle;
