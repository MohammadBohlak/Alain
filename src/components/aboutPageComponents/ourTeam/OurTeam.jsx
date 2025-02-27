import React, { useEffect, useState } from "react";
import { PrimaryText } from "../../common/text/PrimaryText.styles";
import { SecondaryText } from "../../common/text/SecondaryText.styles";
import { StyledOurTeam } from "./ourTeam.styles";
import { TitleSection } from "../../common/text/TitleSection";
import { Col, Row } from "react-bootstrap";
import staff from "../../../assets/images/staff.jpg";
import CardStaff from "../cardStaff/CardStaff";
import api from "../../../api/axios";
function OurTeam(props) {
  const [ourTeam, setOurTeam] = useState([])
  useEffect(()=>{
    api.get("/ar/members/")
    .then((res)=> setOurTeam(res.data))
  },[])
  return (
    <StyledOurTeam>
      <TitleSection>
        <PrimaryText>فريق عملنا</PrimaryText>
        <SecondaryText>
          في مؤسسة العين الحديثة للمقاولات، نؤمن بأن نجاحنا يعتمد بشكل كبير على
          تفاني وإخلاص فريق عملنا المتخصص. يضم فريقنا مجموعة من المحترفين ذوي
          الخبرة العالية في مجالات الهندسة، والإدارة، والتخطيط، والتنفيذ. يعملون
          جاهدين لتحقيق أعلى معايير الجودة والابتكار في كل مشروع نقوم به.
        </SecondaryText>
      </TitleSection>

      <Row style={{ rowGap: "15px" }}>
        {ourTeam.map((e, index) =>(
          <CardStaff
          key= {{index}}
          name= {` ${e.first_name} ${e.last_name}`}
          image={e.image}
          job= {e.position} 
        />
        ))}
        
      </Row>
    </StyledOurTeam>
  );
}

export default OurTeam;
