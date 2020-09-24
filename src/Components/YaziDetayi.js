import React, { useEffect, useState } from "react";
import axios from "axios";
import YaziYorumlari from "./YaziYorumlari";
import { api } from "../api";
import { Link } from "react-router-dom";
import SilModal from "./SilModal";

const YaziDetayi = (props) => {
  const [yaziDetayi, setYaziDetayi] = useState({});
  const [yorumlar, setYorumlar] = useState([]);
  const { id } = props.match.params;

  const handleCommentSubmit = (yorum) => {
    api()
      .post(`posts/${id}/comments`, yorum)
      .then((response) => {
        setYorumlar([...yorumlar, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .all([
        axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`),
        axios.get(
          `https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`
        ),
      ])
      .then((responses) => {
        setYaziDetayi(responses[0].data);
        setYorumlar(responses[1].data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <React.Fragment>
      <h2>{yaziDetayi.title}</h2>
      <p>{yaziDetayi.created_at}</p>
      <div className="ui buttons">
        <Link to={`/posts/${yaziDetayi.id}/edit`} className="ui blue button">
          Düzenle
        </Link>
        <SilModal yazi={yaziDetayi} push={props.history.push} />
      </div>
      <p>{yaziDetayi.content}</p>
      <YaziYorumlari yorumlar={yorumlar} handleSubmit={handleCommentSubmit} />
    </React.Fragment>
  );
};
export default YaziDetayi;
