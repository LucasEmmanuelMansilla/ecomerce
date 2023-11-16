import {FlatList} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import LandingBanner from './LandingBanner';

const mockData = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];
export default function LandingBannerContainer() {
  const flatListRef = useRef<any>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % mockData.length;
      setCurrentIndex(nextIndex);
      if (flatListRef.current)
        flatListRef.current.scrollToIndex({index: nextIndex});
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <FlatList
      horizontal
      ref={flatListRef}
      onScrollToIndexFailed={() => {}}
      data={mockData}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      initialScrollIndex={currentIndex}
      renderItem={({item}) => <LandingBanner id={item.id} />}
    />
  );
}
