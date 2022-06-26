import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {THEME} from '../../themes/theme';
import {Dimensions} from 'react-native';
import moment from 'moment';

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
          <Text style={styles.titleText}>{title}</Text>
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

      <View style={[styles.meta, {marginVertical: 1}]}>
        <Text
          style={{
            color: THEME.COLORS.warmGray,
            fontSize: 12,
          }}>
          {domain_name}
        </Text>

        <Text
          style={{
            color: THEME.COLORS.warmGray,
            fontSize: 12,
            paddingLeft: THEME.SIZES.padding * 2,
          }}>
          {moment(publishTime).fromNow()}
        </Text>
      </View>

      <View style={[styles.description, {width: width - 100}]}>
        <Text>{description}</Text>
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
    paddingHorizontal: THEME.SIZES.padding,
  },
  titleText: {
    textAlign: 'left',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
  },
  description: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: THEME.SIZES.margin,
    marginLeft: THEME.SIZES.margin + 20,
  },
  meta: {
    marginTop: THEME.SIZES.margin,
    marginLeft: THEME.SIZES.margin + 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
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
