import styled from 'styled-components'

import { fadeIn } from '../../styles/animation';

export const ImgEffect = styled.img`
   ${fadeIn({ time: '1s' })}
`