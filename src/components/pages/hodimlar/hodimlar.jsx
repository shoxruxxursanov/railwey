import { Button } from "@mui/material";
import React from "react";
import { useAxios } from "../../../hooks/use-axios";
import "./hodimlar.css";
import Table from "react-bootstrap/Table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Modal from "../../modal/modal";
import Modal22 from "../../modal/modall";
import { useModal } from "../../../hooks/useModal";

export const Hodimlar = () => {
  const filial = [
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

  const { modal, toggleModal, CloseModal } = useModal();
  const {
    modal: modalTwo,
    toggleModal: twotoggleModal,
    CloseModal: twoCloseModal,
  } = useModal();

  const { data, error, loading } = useAxios({
    method: "GET",
    url: "/hodimlar",
  });

  return (
    <div className="hodim-content">
      <div className="search-bar">
        <input type="search" className="search" placeholder="search...." />

        {modalTwo ? <Modal22 filial={filial} close={twoCloseModal} /> : null}
        <Button onClick={() => twotoggleModal()} variant="contained">
          добавит
        </Button>
      </div>
      <div className="table">
        <Table hover>
          <thead className="table-head">
            <tr>
              <th>№</th>
              <th>Ф.И.Ш</th>
              <th>ОБЪЕКТИВКА</th>
              <th>МЕҲНАТ ДАРТАРЧА</th>
              <th>СТАЖ</th>
              <th>ЛАВОЗИМ</th>
              <th>ПАССПОРТ РАҚАМИ</th>
              <th>МАНЗИЛ</th>
              <th>ТЕЛЕФОН</th>
              <th>ФИЛИАЛ</th>
              <th>ТАҲРИРЛАШ</th>
            </tr>
          </thead>
          <tbody>
            {data.map((el) => (
              <tr>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.obyektivka}</td>
                <td>{el.turdavoy}</td>
                <td>{el.staj}</td>
                <td>{el.lavozimi}</td>
                <td>{el.pasport}</td>
                <td>{el.manzil}</td>
                <td>{el.tell}</td>
                <td>{el.filial}</td>
                <td colspan="2" style={{ display: "flex" , justifyContent:'center', alignItems:'center' }}>
                  {modal ? <Modal close={CloseModal} /> : null}
                  <Button
                    onClick={() => {
                      toggleModal();
                    }}
                    variant="outlined"
                    style={{ marginRight: "3px" }}
                  >
                    <EditIcon />
                  </Button>

                  <Button variant="outlined" color="error">
                    <DeleteOutlineIcon />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
