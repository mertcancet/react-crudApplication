import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { api } from "../api";

const YaziFormu = (props) => {
  const [hata, setHata] = useState("");
  const [yazi, setYazi] = useState({
    title: "",
    content: "",
  });

  const onInputChange = (event) =>
    setYazi({ ...yazi, [event.target.name]: event.target.value });

  const onFormSubmit = (e) => {
    e.preventDefault();
    setHata("");

    if (props.yazi.title) {
      api()
        .put(`/posts/${props.match.params.id}`, yazi)
        .then((response) => {
          props.history.push(`/posts/${props.match.params.id}`);
        })
        .catch((error) => {
          setHata("Baslık ve yazı iceriği zorunludur");
        });
    } else {
      api()
        .post("/posts", yazi)
        .then((response) => {
          props.history.push("/");
        })
        .catch((error) => {
          setHata("Baslık ve Yazi içeriği alanları zounludur");
        });
    }
  };

  useEffect(() => {
    if (props.yazi?.title && props.yazi?.content)
      setYazi({ title: props.yazi.title, content: props.yazi.content });
  }, [props.yazi]);
  return (
    <React.Fragment>
      {hata && (
        <div className="ui error message">
          <div className="header">Hata</div>
          <p>{hata}</p>
        </div>
      )}

      <div className="ui form">
        <div className="field">
          <label>Yazı Baslıgı</label>

          <input
            type="text"
            value={yazi.title}
            name="title"
            onChange={onInputChange}
          />
        </div>
        <div className="field">
          <label>Yazi İçeriği</label>
          <textarea
            value={yazi.content}
            rows="3"
            name="content"
            onChange={onInputChange}
          ></textarea>
        </div>
        <button className="ui primary button" onClick={onFormSubmit}>
          Gönder
        </button>
        <button className="ui button">İptal</button>
      </div>
    </React.Fragment>
  );
};
export default withRouter(YaziFormu);
