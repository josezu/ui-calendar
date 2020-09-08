import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import { Overlay, Wrapper, Close } from './styled'
import { AiOutlineCloseCircle } from 'react-icons/ai'

type ModalProps = {
  children: React.ReactNode
  closeModal: (active: boolean) => void
  huge?: boolean
}
const Modal = ({ children, closeModal, huge = false }: ModalProps) => {
  const [elementDiv, setElementDiv] = useState<HTMLElement>()

  useEffect(() => {
    const tempDiv = document.getElementById('modal')
    tempDiv && setElementDiv(tempDiv)
  }, [])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return elementDiv ? (
    ReactDOM.createPortal(
      <Overlay>
        <Wrapper huge={huge} id="wrapper-modal">
          <Close onClick={() => closeModal(!true)}>
            <AiOutlineCloseCircle size="8px"></AiOutlineCloseCircle>
          </Close>
          {children}
        </Wrapper>
      </Overlay>,
      elementDiv
    )
  ) : (
    <></>
  )
}

export default Modal
