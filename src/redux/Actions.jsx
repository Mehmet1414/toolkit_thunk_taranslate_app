import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "./Constants";

export const getAnswer = createAsyncThunk(
  "getAnswer",
  async ({ text, source, target }) => {
    const encodedParams = new URLSearchParams();
    encodedParams.set("source_language", source.value);
    encodedParams.set("target_language", target.value);
    encodedParams.set("text", text);

    const options = {
      method: "POST",
      url: "https://text-translator2.p.rapidapi.com/translate",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "37a08d34bbmsh438dbd4fc7131eap126738jsn021f42fce1a1",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      data: encodedParams,
    };

    const resData = await axios.request(options);
    const answer = resData.data.data.translatedText;
    console.log(resData);
    return answer;
  }
);

export const getLanguages = createAsyncThunk("getLangusges", async () => {
  const resData = await axios.request(options);
  const languages = resData.data.data.languages;

  const languagesArr = languages.map((item) => ({
    value: item.code,
    label: item.name,
  }));
  return languagesArr;
});
