import React from 'react';
import styled from 'styled-components';
import ArrowKeyNavigation from 'boundless-arrow-key-navigation/build';

import Flex from '../components/Flex';
import Layout, {
  LayoutContainer,
  LayoutContent,
  RESPONSIVE_WIDTH,
} from '../components/Layout';
import Link from '../components/Link';
import Footer from '../components/Footer';

import { topStories } from '../lib/hn';

export default class extends React.Component {
  references = [];

  static async getInitialProps({ req }) {
    const stories = await topStories();
    return { stories };
  }

  componentDidMount() {
    if (this.references[0]) this.references[0].focus();
  }

  setRef = (index, ref) => {
    this.references[index] = ref;
  };

  handleMouseOver = index => {
    this.references[index].focus();
  };

  render() {
    const { stories } = this.props;

    return (
      <Layout>
        <LayoutContainer column>
          <LayoutContent column>
            <List>
              <ArrowKeyNavigation
                defaultActiveChildIndex={0}
                mode={ArrowKeyNavigation.mode.VERTICAL}
              >
                {stories.map((story, index) => (
                  <Link
                    href={story.url}
                    index={index + 1}
                    key={story.id}
                    innerRef={ref => this.setRef(index, ref)}
                    onMouseOver={() => this.handleMouseOver(index)}
                  >
                    {story.title}
                  </Link>
                ))}
              </ArrowKeyNavigation>
            </List>
          </LayoutContent>
        </LayoutContainer>
        <Footer />
      </Layout>
    );
  }
}

const List = styled.ol`
  @media (max-width: ${RESPONSIVE_WIDTH}) {
    margin-right: 20px;
  }
`;
