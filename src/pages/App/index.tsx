import React, { useReducer, useEffect } from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'

import Calendar from '@components/Calendar'
import { ReducerContext, InitialState } from '@root/context/reducer'
import MainContext from '@root/context'
import { retrieveReminders } from '@root/data/reminder'

const App = () => {
  const [state, dispatch] = useReducer(ReducerContext, InitialState)

  useEffect(() => {
    dispatch({
      type: 'setReminders',
      items: retrieveReminders(),
    })
  }, [])

  return (
    <MainContext.Provider
      value={{
        state: state,
        dispatch: dispatch,
      }}
    >
      <Container className="App">
        <Row>
          <Col>
            <Calendar />
          </Col>
        </Row>
      </Container>
    </MainContext.Provider>
  )
}

export default App
