import React from "react";
import { FaBitcoin } from "react-icons/fa6";
import CardView from "./CardView";
import millify from "millify";
import { useNavigate } from "react-router-dom";

const MainView = ({ coins, setPage }) => {
  const navigate = useNavigate();

  return (
    <div className="container-xl  mt-5">
      <h4 className="d-flex align-items-center gap-3">
        <FaBitcoin /> <span>Hoş Geldiniz, Coin Listesi</span>
      </h4>
      <p>
        Coin Listesi, dÜnya genelindeki kripto para birimlerini ve dijital
        varlıkları takip etmek için mükemmel bir kaynaktır
      </p>
      <div className="d-flex gap-3 justify-content-around my-5 ">
        {coins.slice(0, 3).map((data) => (
          <CardView key={data.id} data={data} />
        ))}
      </div>
      <table className="table table-striped table-dark table-hover table-responsive mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">coin</th>
            <th scope="col">fiyat</th>
            <th scope="col">market Hacmi</th>
            <th scope="col">islem Hacmi</th>
            <th scope="col">%degisim (24s)</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr
              onClick={() => {
                navigate(`/coin/${coin.id} `);
              }}
              key={coin.id}
            >
              <th scope="row">{coin.rank}</th>
              <td>
                <span className="text-warning">{coin.symbol} </span>
                {coin.name}
              </td>
              <td>${millify(coin.priceUsd)}</td>
              <td>${millify(coin.marketCapUsd)}</td>
              <td>${millify(coin.volumeUsd24Hr)}</td>
              <td
                className={
                  coin.changePercent24Hr >= 0 ? "text-danger" : "text-success"
                }
              >
                %{Number(coin.changePercent24Hr).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/**Daha Fazla Buttunu */}
      <div className=" d-flex justify-content-center my-5">
        <button onClick={() => setPage((prev) => prev + 1)}>Daha Fazla</button>
      </div>
    </div>
  );
};

export default MainView;
