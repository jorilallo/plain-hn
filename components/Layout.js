import Flex from './Flex';
import styled, { injectGlobal } from 'styled-components';
import ReactGA from 'react-ga';

export const RESPONSIVE_WIDTH = '1028px';

export default class extends React.Component {
  componentDidMount() {
    ReactGA.initialize('UA-106620279-1');
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <Flex flex="1" column>
        {this.props.children}
      </Flex>
    );
  }
}

export const LayoutContainer = styled(Flex)`
  align-items: center;

  @media (max-width: ${RESPONSIVE_WIDTH}) {
    align-items: initial;
  }
`;

export const LayoutContent = styled(Flex)`
  margin: 0 30px;
  width: ${RESPONSIVE_WIDTH};

  @media (max-width: ${RESPONSIVE_WIDTH}) {
    margin: 10px;
    width: 100%;
  }
`;

injectGlobal`
body, html, #__next {
  margin: 0;
  padding: 20px 0;

  @media (max-width: ${RESPONSIVE_WIDTH}) {
    padding: 0;
  }
}
#__next {
  font-family: 'Interface', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 400;
}
input, textarea, select, button {
  font-family: 'Interface', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
p {
  font-size: 14px;
}
`;
