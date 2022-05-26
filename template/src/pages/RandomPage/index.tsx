import { useNavigation, useTheme } from '@react-navigation/native';
import React from 'react';

import DefaultPage from '../../templates/DefaultPage';

import * as S from './styles';

function RandomePage() {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <DefaultPage>
      <S.Wrapper>
        <S.Title>RandomePage</S.Title>
        <S.Button onPress={() => navigation.navigate('Home')}>
          <S.ButtonText bgColor={theme.colors.primary}>Go to Home</S.ButtonText>
        </S.Button>
      </S.Wrapper>
    </DefaultPage>
  );
}

export default RandomePage;
