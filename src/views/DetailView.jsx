import millify from "millify";
import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";

const DetailView = ({ model }) => {
  if (!model || !model.coin || !model.coin.detail) {
    return <p>...</p>;
  }

  return (
    <div className="overflow-x-hidden">
      <h3 className="text-center ">
        <span className="me-3 fs-4 font-bold">{model.coin?.detail.symbol}</span>
        <span className="fs-2 text-warning">{model.coin?.detail.name}</span>
      </h3>

      <div className="row justify-content-center">
        <section className="col-md-5 d-flex flex-column gap-5 p-5 p-md-4">
          {model?.infoFields.map((item, i) => (
            <div
              className="text-dark bg-white w-100 rounded text-center p-2"
              key={i}
            >
              <span>{item.icon}</span>
              <h4>{item.label}</h4>
              {item.value ? millify(item.value) : "..."}
            </div>
          ))}
        </section>

        <section className="col-md-5 d-flex flex-column gap-5 p-5 p-md-4">
          <Line data={model?.graphicData} />
          <Bar data={model?.graphicData} />
        </section>
      </div>
    </div>
  );
};

export default DetailView;
