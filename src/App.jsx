import React from "react";
import { Main } from "./components";
import { Asosiy, Elonlar, Filial,Hodimlar} from './components/pages'
import './app.css'
import { Route, Routes } from "react-router-dom";


function App() {
const filial = [
  "Бошқарма",
  "Йўловчи вагонларни техник ва технологик тайёрлаш, таъмирлаш филиали;",
  "Халқаро йўналишиларда йўловчиларга хизмат кўрсатиш филиали;",
  "Маҳаллий йўналишиларда йўловчиларга хизмат кўрсатиш филиали;",
  "Тезюрар йўналишиларда йўловчиларга хизмат кўрсатиш филиали;",
  "Тошкент-Марказий вокзал филиали;",
  "Тошкент йўловчиларни ташишни ташкил этиш филиали;",
  "Самарқанд филиали;",
  "Қашқадарё филиали;",
  "Термиз филиали;",
  "Бухоро филиали;",
  "Оролбўйи филиали;",
  "Хоразм филиали;",
  "Фарғона филиали;",
  "“Railway Media” МЧЖ;",
  "“Xiva Lokomotiv” МЧЖ.",
];

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Asosiy />} />
          <Route path="filial" element={<Filial  filial={filial}/>} />
          <Route  path="hodimlar" element={<Hodimlar />}/>
          <Route  path="elonlar" element={<Elonlar />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
