import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.corTexto};
  color: ${cores.branco};
  font-size: 12px;
  font-weight: bold;
  padding: 4px 8px;
`
