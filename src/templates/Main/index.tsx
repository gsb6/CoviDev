import React from 'react'

import * as S from './styles'

type Props = {
  title: string
}

const Main: React.FC<Props> = ({ title, children }) => {
  return (
    <S.Container>
      <S.Header>{title}</S.Header>
      <S.Content>{children}</S.Content>
    </S.Container>
  )
}

export default Main
