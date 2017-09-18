import styled from 'styled-components';
import { LayoutContainer, LayoutContent, RESPONSIVE_WIDTH } from './Layout';
import GithubIcon from './GithubIcon';

export default props => {
  const { children, ...rest } = props;
  return (
    <LayoutContainer column {...rest}>
      <Content>
        Plain HN &middot; HackerNews without the negativity &middot; Build
        by&nbsp;
        <StyledLink href="https://twitter.com/jorilallo" target="_blank">
          @jorilallo
        </StyledLink>
        &nbsp;&middot;&nbsp;
        <StyledLink href="https://github.com/jorilallo/plainhn" target="_blank">
          <StyledGithubIcon />
        </StyledLink>
      </Content>
    </LayoutContainer>
  );
};

const Content = styled(LayoutContent)`
  padding: 20px 0;
  text-align: center;
  color: #9ea4b3;

  a {
    color: #9ea4b3;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: ${RESPONSIVE_WIDTH}) {
    font-size: 12px;
  }
`;

const StyledLink = styled.a`
  display: inline-flex;
  justify-content: center;
  color: #9ea4b3;
`;

const StyledGithubIcon = styled(GithubIcon)`
  width: 18px;
  height: 18px;
  path {
    stroke: #9ea4b3;
  }

  @media (max-width: ${RESPONSIVE_WIDTH}) {
    width: 12px;
    height: 12px;
  }
`;
