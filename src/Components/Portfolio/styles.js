import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";

import theme from "../../styles/theme";

const Card = styled.div`
  width: 100%;
  background-color: ${theme.palette.bg_secondary};
  border-radius: 15px;
  width: 20rem;
  max-width: 100%;
  min-height: 15rem;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;
const ProjectTitle = styled.h4`
  margin: 0;
  width: 100%;
`;
const ProjectThumbnail = styled.img`
  width: 100%;
  border-radius: 10px;
`;
const GithubIcon = styled(AiFillGithub)`
  font-size: 2rem;
  transition: transform 0.1s;
  color: ${theme.palette.text_gray};
  &:hover {
    color: #fff;
  }
  &:active {
    transform: scale(95%);
  }
`;
export { Card, ProjectThumbnail, ProjectTitle, GithubIcon };
