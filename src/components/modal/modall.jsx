import React from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import { useModal } from "../../hooks/useModal";
import { useAxios } from "../../hooks/use-axios";
const Modall = styled.div`
  position: absolute;
  z-index: 777;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.205);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  width: 40%;
  height: 95vh;
  background-color: #ffff;
  border-radius: 10px;
  padding: 20px 0px 10px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
`;
const Tittle = styled.h1`
  font-size: 24px;
  color: rgb(23, 23, 244);
`;
const Input = styled.div`
  width: 80%;
  height: 30px;
`;
const Formm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;
export const Turdavoy = styled(Input)`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;
export const CustomButton = styled(Button)`
  width: 30%;
`;
export const Buttons = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Option = styled.option`
  color: red;
`;
const Select = styled.select`
  width: 80%;
  height: 40px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;
export default function Modal22({ children, close, filial }) {
  const [text, setText] = React.useState([]);
  const [state, setState] = React.useState({});

  const [value, setValue] = React.useState({
    name: "",
    staj: "",
    lavozimi: "",
    pasport: "",
    manzil: "",
    tell: "",
    obyektivka: "",
    turdavoy: "",
  });

  const hanOnchange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const { data, error, loading } = useAxios(state);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://6402b542302b5d671c3ef9be.mockapi.io/hodimlar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...value }),
        }
      );
      const data = await res.json();

      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
    // setState({
    //   method: "POST",
    //   body: value,
    //   url: "/hodimlar",
    // });
    window.location.reload();
  };

  return (
    <>
      <Modall>
        <Content>
          <Tittle>ЯНГИ ХОДИМ ҚЎШИШ</Tittle>
          <Formm>
            <Input>
              <Form.Control
                type="text"
                required
                placeholder="Ф.И.О КИРИТИНГ!"
                aria-describedby="passwordHelpBlock"
                name="name"
                onChange={(e) => hanOnchange(e)}
                value={value.name}
              />
            </Input>
            <Input>
              <Form.Control
                type="number"
                required
                placeholder="СТАЖ КИРИТИНГ!"
                aria-describedby="passwordHelpBlock"
                name="staj"
                onChange={(e) => hanOnchange(e)}
                value={value.staj}
              />
            </Input>
            <Input>
              <Form.Control
                type="text"
                required
                placeholder="ЛАВОЗИМ КИРИТИНГ!"
                aria-describedby="passwordHelpBlock"
                name="lavozimi"
                onChange={(e) => hanOnchange(e)}
                value={value.lavozimi}
              />
            </Input>
            <Input>
              <Form.Control
                type="text"
                required
                placeholder={"ПАССПОРТ РАҚАМИНИ КИРИТИНГ!"}
                aria-describedby="passwordHelpBlock"
                name="pasport"
                onChange={(e) => hanOnchange(e)}
                value={value.pasport}
              />
            </Input>
            <Input>
              <Form.Control
                type="text"
                required
                placeholder={"МАНЗИЛ КИРИТИНГ!"}
                aria-describedby="passwordHelpBlock"
                name="manzil"
                onChange={(e) => hanOnchange(e)}
                value={value.manzil}
              />
            </Input>
            <Input>
              <Form.Control
                placeholder={"ТЕЛЕФОН РАҚАМ КИРИТИНГ!"}
                type="number"
                required={true}
                aria-describedby="passwordHelpBlock"
                name="tell"
                onChange={(e) => hanOnchange(e)}
                value={value.tell}
              />
            </Input>

            <Select name="ФИЛИАЛ" id="ФИЛИАЛ">
              {filial.map((el, indx) => (
                <Option value="volvo">
                  {indx + 1}. {el}
                </Option>
              ))}
            </Select>

            <Turdavoy>
              <Form.Label>
                <h5>Обективка:</h5>
              </Form.Label>
              <Form.Control
                type="file"
                required
                aria-describedby="turdavoy"
                name="obyektivka"
                onChange={(e) => hanOnchange(e)}
                value={value.obyektivka}
              />
            </Turdavoy>
            <Turdavoy>
              <Form.Label>
                <h5>Меҳнат дафтарча:</h5>
              </Form.Label>
              <Form.Control
                type="file"
                required
                aria-describedby="turdavoy"
                name="turdavoy"
                onChange={(e) => hanOnchange(e)}
                value={value.turdavoy}
              />
            </Turdavoy>
            <Buttons>
              <CustomButton onClick={submit} variant="primary">
                Submit
              </CustomButton>
              <CustomButton onClick={() => close()} variant="danger">
                Close
              </CustomButton>
            </Buttons>
          </Formm>
        </Content>
      </Modall>
    </>
  );
}
