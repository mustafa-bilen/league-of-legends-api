import { useState, useEffect } from "react";
import axios from "axios";

import Iron from "../assets/Emblem_Iron.png";
import Bronze from "../assets/Emblem_Bronze.png";
import Silver from "../assets/Emblem_Silver.png";
import Gold from "../assets/Emblem_Gold.png";
import Plat from "../assets/Emblem_Platinum.png";
import Diamond from "../assets/Emblem_Diamond.png";
import Master from "../assets/Emblem_Master.png";
import Grandmaster from "../assets/Emblem_Grandmaster.png";
import Cha from "../assets/Emblem_Challenger.png";

const Form = () => {
  const [searchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState(null);
  const [playerDetail, setPlayerDetail] = useState(null);
  const [accId, setAccId] = useState(
    "XNDb6e0K7jMZF1_SrgKevQroPYlo5dR8aNhvVAaYq02QvOLakc5erWRPBg"
  );

  const MAIN_API = `https://tr1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${searchText}?api_key=RGAPI-c4f26d16-5ef9-4ab8-9511-a3cacdf84346`;
  const LEAGUE_API = `https://tr1.api.riotgames.com/lol/league/v4/entries/by-summoner/${accId}?api_key=RGAPI-c4f26d16-5ef9-4ab8-9511-a3cacdf84346`;

  const getApi = () => {
    axios
      .get(MAIN_API)
      .then((res) => {
        console.log(res.data);
        setPlayerData(res.data);
        setAccId(res.data.id);
      })
      .catch((err) => console.log(err));
  };

  const getLeague = () => {
    axios
      .get(LEAGUE_API)
      .then((res) => {
        console.log(res.data);
        setPlayerDetail(res.data[0]);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getLeague();
  }, [accId, playerData]);

  return (
    <div className="text-center">
      <p className="text-4xl font-semibold mt-10">Summoner Profile API</p>
      <div className=" gap-5 justify-center flex max-sm:flex-col  items-center mt-10">
        <select name="" id="" className="rounded-lg bg-black text-white  p-3">
          <option value="br">North America</option>
          <option value="eune">Europe West</option>
          <option value="euw">Europe Nordic & East</option>
          <option value="jp">Ocenia</option>
          <option value="kr">Korea</option>
          <option value="la1">Japan</option>
          <option value="la2">Brazil</option>
          <option value="na">LAS</option>
          <option value="oc">LAN</option>
          <option value="tr">Russia</option>
          <option value="ru">Türkiye</option>
        </select>
        <input
          type="text"
          className="rounded-lg bg-black text-white p-2 text-xl"
          placeholder="Toxic L9"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="rounded-lg bg-black text-white text-xl p-2"
          onClick={() => getApi()}
        >
          Search
        </button>
      </div>
      <div>
        {playerData && (
          <div className="flex flex-col justify-center items-center gap-5 mt-20">
            <p className="text-3xl">{playerData.name}</p>
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/12.21.1/img/profileicon/${playerData.profileIconId}.png`}
              className="rounded-lg"
              alt=""
              width="150px"
            />
            <p>Level: {playerData.summonerLevel}</p>
            <p>
              {playerDetail.tier} {playerDetail.rank}{" "}
              {playerDetail.leaguePoints} LP
            </p>
            <p>
              {playerDetail.wins}W {playerDetail.losses}L
            </p>
            <p>
              Win Rate{" "}
              {(
                (playerDetail.wins /
                  (playerDetail.wins + playerDetail.losses)) *
                100
              ).toFixed()}
              %
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;

// https://tr1.api.riotgames.com/lol/league/v4/entries/by-summoner/XNDb6e0K7jMZF1_SrgKevQroPYlo5dR8aNhvVAaYq02QvOLakc5erWRPBg

// https://tr1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}
