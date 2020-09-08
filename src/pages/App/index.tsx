import React, { useReducer, useEffect, useState } from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'

import Calendar from '@components/Calendar'
import { ReducerContext, InitialState } from '@root/context/reducer'
import MainContext from '@root/context'
import { retrieveReminders } from '@root/data/reminder'

function App() {
  const [state, dispatch] = useReducer(ReducerContext, InitialState)
  const [loadingData, setLoadingData] = useState<boolean>(false)

  useEffect(() => {
    dispatch({
      type: 'setReminders',
      items: retrieveReminders(),
    })
    setLoadingData(true)
  }, [])

  return loadingData ? (
    <Container className="App">
      <MainContext.Provider
        value={{
          state: state,
          dispatch: dispatch,
        }}
      >
        <Row>
          <Col>
            <Calendar />
          </Col>
        </Row>
      </MainContext.Provider>
    </Container>
  ) : (
    <></>
  )
}

export default App
