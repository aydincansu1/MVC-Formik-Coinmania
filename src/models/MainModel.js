import axios from "axios";

// ansayfanin model katmani
export default class MainModel {
  // api'dan coin verilerini alir
  static async getCoins(page = 1) {
    try {
      const params = {
        offset: (page - 1) * 15, // kactane veri alinacak
        limit: 15, // kac veri alinacak
      };
      const res = await axios.get("https://api.coincap.io/v2/assets", {
        params,
      });

      return res.data;
    } catch (err) {
      console.error("Failed to fetch coins:", err);
    }
  }
}

MainModel.getCoins();
