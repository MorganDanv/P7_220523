import React from "react";
import styled from "styled-components";

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 320px) and (max-width: 1200px) {
  }
`;

const TagBox = styled.div`
  margin: 10px 10px;
  flex-basis: 145px;
  flex-shrink: 0;
  flex-grow: 0;
  background-color: #ff6060;
  border-radius: 20px;
  color: #ffffff;
  font-weight: bold;
  padding: 10px 10px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (min-width: 320px) and (max-width: 1200px) {
    border-radius: 12px;
    font-size: 12px;
    flex-basis: 115px;
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
