import styled from 'styled-components';
import { LayoutContainer, LayoutContent, RESPONSIVE_WIDTH } from './Layout';
import Flex from './Flex';
import GithubIcon from './GithubIcon';

export default props => {
  const { children, ...rest } = props;
  return (
    <LayoutContainer column {...rest}>
      <Content>
        <Flex>
          Plain HN &middot; HackerNews without the negativity<Separator />
        </Flex>

        <Flex>
          Build by&nbsp;
          <StyledLink href="https://twitter.com/jorilallo" target="_blank">
            @jorilallo
          </StyledLink>
          <Separator />
          <StyledLink
            href="https://github.com/jorilallo/plainhn"
            target="_blank"
          >
            <StyledGithubIcon />
          </StyledLink>
        </Flex>
      </Content>
    </LayoutContainer>
  );
};

const Separator = () => <span>&nbsp;&middot;&nbsp;</span>;

const Content = styled(LayoutContent)`
  padding: 20px 0;
  text-align: center;
  color: #9ea4b3;

  a {
    color: #9ea4b3;
  }

  > div {
    margin-bottom: 12px;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: ${RESPONSIVE_WIDTH}) {
    flex-direction: column;
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
