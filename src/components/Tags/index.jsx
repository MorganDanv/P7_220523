import React from "react";
import styled from "styled-components";
import data from "../../data.json";
import { useParams } from "react-router-dom";

const TagsContainer = styled.div`
  display: flex;
`;

const TagBox = styled.div`
  width: 140px;
  height: 40px;
  background-color: #ff6060;
  border-radius: 50px;
  color: #ffffff;
  font-weight: bold;
  gap: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-right: 15px;
`;

function Tags(tags) {
  const { logementId } = useParams();
  const logement = data.find((log) => log.id === logementId);
  return (
    <TagsContainer>
      {" "}
      {logement.tags.map((tags) => (
        <TagBox key={tags}>
          <span>{tags}</span>
        </TagBox>
      ))}
    </TagsContainer>
  );
}

export default Tags;
