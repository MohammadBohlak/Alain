import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { PrimaryText } from "../../common/text/PrimaryText.styles";
import { SecondaryText } from "../../common/text/SecondaryText.styles";
import { TitleSection } from "../../common/text/TitleSection";
import styled from "styled-components";
import ModalStaff from "./ModalStaff";
import { PrimaryButton } from "../../common/PrimaryButton";



function CardStaff({ image, name, job }) {
   let data= {
        image, name, job
    }
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Col xs={12} sm={6} md={6} lg={3}>
        <Card style={{ borderColor: "var(--main-color)" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
              <PrimaryText>{data.name}</PrimaryText>
              <SecondaryText>{data.job}</SecondaryText>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default CardStaff;
