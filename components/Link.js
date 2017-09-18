import styled from 'styled-components';
import parse from 'url-parse';
import Flex from './Flex';
import ChevronIcon from './ChevronIcon';
import { RESPONSIVE_WIDTH } from './Layout';

const getHostname = href => {
  const parser = document.createElement('a');
  parser.href = href;
  return parser.hostname;
};

class StoryLink extends React.Component {
  state = {
    focus: false,
  };

  handleFocus = () => this.setState({ focus: true });
  handleBlur = () => this.setState({ focus: false });
  handleKeyDown = event => {
    event.preventDefault();
    if (event.keyCode === 13) window.location = this.props.href;
  };

  render() {
    const { href, children, index, ...rest } = this.props;
    const { host } = parse(href);

    return (
      <Container
        {...rest}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onKeyDown={this.handleKeyDown}
      >
        <Link href={href} target="_blank" visited={false}>
          {children} <Meta>· {host}</Meta>
        </Link>
        {this.state.focus && (
          <IconContainer index={index}>
            <ChevronIcon />
          </IconContainer>
        )}
      </Container>
    );
  }
}

const Container = styled.li`
  position: relative;
  margin-bottom: 32px;
  font-size: 24px;

  &:focus {
    outline: none;
  }

  @media (max-width: ${RESPONSIVE_WIDTH}) {
    padding: 0;

    margin-bottom: 16px;
    font-size: 14px;
  }
`;

const IconContainer = styled(Flex)`
  display: flex;
  position: absolute;
  left: ${({ index }) => (index >= 10 ? '-70' : '-60')}px;
  top: 2px;

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${RESPONSIVE_WIDTH}) {
    display: none;
  }
`;

const Index = styled.span`
  // Annoyed
  color: #9ea4b3;
`;

const Link = styled.a`
  line-height: 1;
  color: black;

  &:visited {
    color: #9ea4b3;
  }
`;

const Meta = styled.span`
  font-size: 80%;
  color: #9ea4b3;
`;

export default StoryLink;
