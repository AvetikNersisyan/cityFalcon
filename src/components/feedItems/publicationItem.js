import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {THEME} from '../../themes/theme';
import {Dimensions} from 'react-native';

export const PublicationItem = ({item}) => {
  const {
    author_image_url,
    title,
    score,
    old_score,
    domain_name,
    description,
    publishTimeDiff,
    publishTime,
  } = item;

  const width = Dimensions.get('screen').width;

  return (
    <View style={[styles.itemContainer]}>
      <View style={[styles.itemHeader]}>
        <Image style={styles.authorImage} source={{uri: author_image_url}} />
        <View style={[styles.title, {width: width - 100}]}>
          <Text style={{textAlign: 'left'}}>{title}</Text>
        </View>

        <View
          style={[
            styles.score,
            {
              backgroundColor:
                old_score > score ? THEME.COLORS.red : THEME.COLORS.green,
            },
          ]}>
          <Text style={styles.scoreText}>{score}%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: THEME.COLORS.white,
    flex: 1,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    paddingHorizontal: THEME.SIZES.padding,
  },
  score: {
    padding: 6,
    backgroundColor: THEME.COLORS.green,
    borderRadius: THEME.SIZES.radius5,
    height: 35,
  },
  scoreText: {
    color: THEME.COLORS.white,
  },
  authorImage: {
    height: 18,
    width: 18,
    alignSelf: 'center',
    paddingLeft: THEME.SIZES.margin,
  },
});
