import React from "react";
import styled from "styled-components";

const TagsContainer = styled.div`
  display: flex;
  gap: 15px;
  @media (min-width: 320px) and (max-width: 1200px) {
    padding-bottom: 1.5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
  }
`;

const TagBox = styled.div`
  background-color: #ff6060;
  border-radius: 20px;
  color: #ffffff;
  font-weight: bold;
  padding: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 140px;
  height: 20px;
  @media (min-width: 320px) and (max-width: 1200px) {
    border-radius: 12px;
    font-size: 12px;
  }
`;

function Tags(props) {
  return (
    <TagsContainer>
      {props.tags.map((tags) => (
        <TagBox key={tags}>
          <span>{tags}</span>
        </TagBox>
      ))}
    </TagsContainer>
  );
}

export default Tags;
