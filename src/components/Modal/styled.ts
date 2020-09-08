import { media } from './../../theme/index'
import styled from 'styled-components'

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

type WrapperProps = {
  huge: boolean
}
export const Wrapper = styled.div<WrapperProps>`
  background: #f7f7f7;
  border-radius: 5px;
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow: auto;

  @media ${media.sm} {
    width: ${(props) => (props.huge ? '1000px' : '500px')};
    padding: 20px;
    min-height: 100px;
    height: auto;
  }

  h1,
  h2,
  h3,
  h4 {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: break-spaces;
  }
`

export const Close = styled.div`
  position: absolute;
  right: 0.8rem;
  top: 1rem;
  background: #eeeeee;
  border: solid 1px #eeeeee;
  border-radius: 50%;
  padding: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  &:hover {
    cursor: pointer;
    box-shadow: 0 2px 10px 0 #ccc;
  }
`
