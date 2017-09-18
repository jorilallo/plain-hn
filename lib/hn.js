import 'isomorphic-fetch';

const topNewsUrl = () =>
  'https://hacker-news.firebaseio.com/v0/topstories.json';
const itemUrl = itemId =>
  `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`;
const ITEM_COUNT = 25;

export const topStories = async () => {
  try {
    const res = await fetch(topNewsUrl());
    const data = await res.json();
    const topItems = data.splice(0, ITEM_COUNT);

    const itemResponses = await Promise.all(
      topItems.map(async itemId => await fetch(itemUrl(itemId)))
    );
    const items = await Promise.all(
      itemResponses.map(async itemData => await itemData.json())
    );
    return items;
  } catch (e) {
    throw new Error('Error while fetching from HN API');
  }
};
