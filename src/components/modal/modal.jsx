import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import styled from "styled-components";
import { useModal } from "../../hooks/useModal";
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
const Turdavoy = styled(Input)`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;
const CustomButton = styled(Button)`
  width: 30%;
`;
const Buttons = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export default function Modal({ children,close }) {
  return (
    <>
      <Modall>
        <Content>
          <Tittle>ТАҲРИРЛАШ</Tittle>
          <Formm>
            <Input>
              <Form.Control
                type="text"
                aria-describedby="passwordHelpBlock"
              />
            </Input>
            <Input>
              <Form.Control
                type="number"
                aria-describedby="passwordHelpBlock"
              />
            </Input>
            <Input>
              <Form.Control
                type="text"
                aria-describedby="passwordHelpBlock"
              />
            </Input>
            <Input>
              <Form.Control
                type="text"
                aria-describedby="passwordHelpBlock"
              />
            </Input>
            <Input>
              <Form.Control
                type="text"
                aria-describedby="passwordHelpBlock"
              />
            </Input>
            <Input>
              <Form.Control
                type="number"
                aria-describedby="passwordHelpBlock"
              />
            </Input>
            <Input>
              <Form.Control
                type="password"
                aria-describedby="passwordHelpBlock"
              />
            </Input>
            <Turdavoy>
              <Form.Label htmlFor="turdavoy">
                <h5>Objective</h5>
              </Form.Label>
              <Form.Control
                type="file"
                aria-describedby="turdavoy"
              />
            </Turdavoy>
            <Turdavoy>
              <Form.Label htmlFor="turdavoy">
                <h5>Turdavoy</h5>
              </Form.Label>
              <Form.Control
                type="file"
                aria-describedby="turdavoy"
              />
            </Turdavoy>
            <Buttons>
              <CustomButton variant="primary">Submit</CustomButton>
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
