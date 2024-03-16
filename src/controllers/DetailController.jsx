import React, { useEffect, useState } from "react";
import DetailView from "../views/DetailView";
import { useParams } from "react-router-dom";
import DetailModel from "../models/DetailModel";

const DetailController = () => {
  const [coin, setCoin] = useState(null);
  console.log(coin);
  // 1) url den id yi al
  const { id } = useParams();

  // 2) coinin detay verilerini ve fiyat gecmisini apiden al
  useEffect(() => {
    DetailModel.getCoin(id).then((data) => setCoin(data));
  }, []);

  //classtan ornek al
  const model = new DetailModel(coin);

  return <DetailView model={model} />;
};

export default DetailController;
