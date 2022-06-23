import { createSlice } from "@reduxjs/toolkit";
import { cinemaData } from "../data/FilmVerileri";

export const userSlice = createSlice({
  name: "cinema",
  initialState: { cinemaData: cinemaData, purchased: [] },
  reducers: {
    //SatinAl reducerimiz
    satinAl: (state, action) => {
      //Film idsini cekiyoruz
      let filmId = action.payload.filmId;
      //CinemaDatada çektiğimiz filmidsine göre film verilerini çekiyoruz
      let film = state.cinemaData.find((x) => x.id === filmId);
      //Satın alınan koltuklar çekilir.
      let satinAlinanKoltuklar = [...action.payload.koltuklar];
      //SAtın alınan koltuklar maplenerek dolulugu veya boşluğu guncellenir.
      let tmpKoltuklar = satinAlinanKoltuklar.map((element) => {
        let tmp = { ...element }; 
        tmp.dolu = 0; 
        tmp.bos = 0; 
        return tmp;
      });
      // Film verilerini güncelliyoruz
      const yeniBiletAl = {
        user: action.payload.kullaniciBilgileri,
        satinAlinanKoltuklar: satinAlinanKoltuklar,
        film: film,
      };

      // YeniBiletAlda attıgımız verileri purchased'e push ediyoruz
      // Purchased admin panelde satın alınan biletlerdir      
      state.purchased.push(yeniBiletAl);

      // Koltukları güncelliyoruz
      let newKoltuklar = film.koltuklar.map((item) => {
        let item2 = tmpKoltuklar.find((i2) => i2.id === item.id); 
        return item2 ? { ...item, ...item2 } : item; 
      });

      //Güncel halini koltuklara atıyoruz
      film.koltuklar = newKoltuklar; 

      let guncellenmisFilmler = state.cinemaData.map((x) => {
       
        if (x.id === film.id) {
          let tmp = { ...film };
          return tmp;
        }
        return x;
      });

      state.cinemaData = guncellenmisFilmler;
    },

    click: (state, action) => {
      
      let filmId = action.payload.filmId; 
      let film = state.cinemaData.find((x) => x.id === filmId); 
      let koltuk = { ...action.payload.koltuk }; 

      const koltukEskiHali = film.koltuklar.find((x) => x.id === koltuk.id);

      if (koltukEskiHali.bos === 1) {
        koltuk.dolu = koltukEskiHali.dolu === 0 ? 1 : 0;

        let newKoltukListesi = film.koltuklar.map((x) => {
          if (x.id === koltuk.id) {
            
            let tmp = { ...x, dolu: koltuk.dolu }; 
            return tmp; 
          }
          return x; 
        });

        film.koltuklar = newKoltukListesi;

        let guncellenmisFilmler = state.cinemaData.map((x) => {
          if (x.id === film.id) {
            let tmp = { ...film };
            return tmp;
          }
          return x; 
        });

        state.cinemaData = guncellenmisFilmler;
      }
    },
  },
});

export const { click, satinAl } = userSlice.actions; 
export default userSlice.reducer;


