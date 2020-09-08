import React, { useState, useEffect, useContext, ReactNode } from 'react'
import moment from 'moment'
import { DayType } from '@root/types/day'
import { Reminder } from '@root/types/reminder'
import { getRemindersForDay } from '@root/helpers/reminder'
import MainContext from '@root/context'
import Modal from '@root/components/Modal'
import {
  ReminderItem,
  ReminderList,
  Description,
  HeadWrapper,
  WrapperForm,
  ContainerField,
  ButtonContainer,
} from './style'
import { BsFillCircleFill, BsPencilSquare } from 'react-icons/bs'
import { BiListMinus } from 'react-icons/bi'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { Formik } from 'formik'
import { Row, Col } from 'styled-bootstrap-grid'
import { Label, Dropdown, Input } from '@root/components/Form'
import { v4 as uuidv4 } from 'uuid'
import ColorPicker from 'coloreact'
type ModalDayProps = {
  day: DayType
  closeModal: (status: boolean) => void
  children?: ReactNode
}

const timeOptions = [
  { value: '', label: 'Seleccione' },
  { value: '08:00-09:00', label: '08:00-09:00' },
  { value: '09:00-10:00', label: '09:00-10:00' },
  { value: '10:00-11:00', label: '10:00-11:00' },
  { value: '11:00-12:00', label: '11:00-12:00' },
  { value: '12:00-13:00', label: '12:00-13:00' },
  { value: '13:00-14:00', label: '13:00-14:00' },
  { value: '14:00-15:00', label: '14:00-15:00' },
  { value: '15:00-16:00', label: '15:00-16:00' },
  { value: '16:00-17:00', label: '16:00-17:00' },
  { value: '17:00-18:00', label: '17:00-18:00' },
]

interface FormValues {
  id?: string
  color: string
  description: string
  city: string
  time: string
}

const ModalDay = ({ day, closeModal, children }: ModalDayProps) => {
  const {
    state: { reminders },
    dispatch,
  } = useContext(MainContext)

  const [currentReminders, setCurrentReminders] = useState<Reminder[]>()
  const [step, setStep] = useState<number>(1)
  const [auxColor, setAuxColor] = useState<string>('')

  const [initialFormData] = useState<FormValues>({
    color: '',
    description: '',
    time: '',
    city: '',
  })

  const [initialFormDataEdit, setInitialFormDataEdit] = useState<FormValues>({
    id: '',
    color: '',
    description: '',
    time: '',
    city: '',
  })

  useEffect(() => {
    if (day.currentMonth) {
      setCurrentReminders(getRemindersForDay(day.date))
    }
  }, [reminders])

  const validate = (values: FormValues) => {
    let errors: any = {}

    if (!values.description || values.description == '') {
      errors['description'] = 'Description requiered'
    }

    if (!values.time || values.time == '') {
      errors['time'] = 'Time requiered'
    }

    if (!values.city || values.city == '') {
      errors['city'] = 'Time requiered'
    }

    return errors
  }

  const handleSubmitForm = (values: FormValues) => {
    dispatch({
      type: 'addNewReminder',
      item: {
        id: uuidv4(),
        description: values.description,
        color: auxColor,
        city: values.city,
        time: values.time,
        date: day.date,
      },
    })
    setStep(1)
  }

  const handleSubmitFormEdit = (values: FormValues) => {
    dispatch({
      type: 'editReminder',
      item: {
        id: values.id ?? '',
        description: values.description,
        color: auxColor,
        city: values.city,
        time: values.time,
        date: day.date,
      },
    })
    setStep(1)
  }

  return (
    <Modal huge={true} closeModal={closeModal}>
      {children}

      <HeadWrapper>
        <span>{moment(day.date).format('YYYY-MMMM-DD')}</span>
        {step == 1 && (
          <>
            <AiOutlinePlusCircle onClick={() => setStep(2)} />
            <BiListMinus
              onClick={() =>
                dispatch({
                  type: 'removeAllRemindersDay',
                  day: day.date,
                })
              }
            />
          </>
        )}
      </HeadWrapper>

      {step == 1 && (
        <>
          <h3>Reminders List</h3>
          <ReminderList>
            {currentReminders?.map((reminder: Reminder, index: number) => (
              <ReminderItem key={`reminder-item-modal-${reminder.id}-${index}`}>
                <div>
                  <Description>{`${reminder.time}-${reminder.description}`}</Description>
                  {reminder.color != '' && (
                    <BsFillCircleFill
                      size="8px"
                      color={reminder.color}
                      style={{ margin: '0 1rem' }}
                    ></BsFillCircleFill>
                  )}
                </div>
                <div>
                  <BsPencilSquare
                    onClick={() => {
                      setInitialFormDataEdit(reminder)
                      setAuxColor(reminder.color)
                      setStep(3)
                    }}
                  />
                  <AiOutlineMinusCircle
                    onClick={() =>
                      dispatch({
                        type: 'removeReminder',
                        item: reminder,
                      })
                    }
                  />
                </div>
              </ReminderItem>
            ))}
          </ReminderList>
        </>
      )}

      {step == 2 && (
        <Formik
          initialValues={initialFormData}
          validate={validate}
          enableReinitialize
          onSubmit={handleSubmitForm}
        >
          {({
            submitForm,
            isSubmitting,
            values,
            handleChange,
            getFieldMeta,
          }) => {
            return (
              <WrapperForm>
                <Row>
                  <Col lg={6}>
                    <ContainerField>
                      <Label title={'Description'} required={true} />
                      <Input
                        type="text"
                        name="description"
                        hasError={
                          getFieldMeta('description').error &&
                          getFieldMeta('description').touched
                            ? true
                            : false
                        }
                        disabled={isSubmitting}
                      />
                    </ContainerField>
                  </Col>
                  <Col lg={6}>
                    <ContainerField>
                      <Label title={'city'} required={true} />
                      <Input
                        type="text"
                        name="city"
                        hasError={
                          getFieldMeta('city').error &&
                          getFieldMeta('city').touched
                            ? true
                            : false
                        }
                        disabled={isSubmitting}
                      />
                    </ContainerField>
                  </Col>

                  <Col md={6}>
                    <ContainerField>
                      <Label title={'Time'} required={true}></Label>
                      <Dropdown
                        name="time"
                        value={values.time}
                        handleChange={handleChange}
                        hasError={
                          getFieldMeta('time').error &&
                          getFieldMeta('time').touched
                            ? true
                            : false
                        }
                        options={timeOptions}
                        disabled={isSubmitting}
                      />
                    </ContainerField>
                  </Col>
                  <Col md={6}>
                    <ContainerField>
                      <Label title={'Color'} required={true} />
                      <ColorPicker
                        color={auxColor}
                        onChange={(color: any) => setAuxColor(color.hex)}
                      />
                      );
                    </ContainerField>
                  </Col>
                </Row>
                <Row>
                  <ButtonContainer>
                    <button
                      onClick={() => {
                        setStep(1)
                      }}
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={() => {
                        submitForm()
                      }}
                    >
                      Continuar
                    </button>
                  </ButtonContainer>
                </Row>
              </WrapperForm>
            )
          }}
        </Formik>
      )}

      {step == 3 && (
        <Formik
          initialValues={initialFormDataEdit}
          validate={validate}
          onSubmit={handleSubmitFormEdit}
        >
          {({
            submitForm,
            isSubmitting,
            values,
            handleChange,
            getFieldMeta,
          }) => {
            return (
              <WrapperForm>
                <Row>
                  <Col lg={6}>
                    <ContainerField>
                      <Label title={'Description'} required={true} />
                      <Input
                        type="text"
                        name="description"
                        hasError={
                          getFieldMeta('description').error &&
                          getFieldMeta('description').touched
                            ? true
                            : false
                        }
                        disabled={isSubmitting}
                      />
                    </ContainerField>
                  </Col>
                  <Col lg={6}>
                    <ContainerField>
                      <Label title={'city'} required={true} />
                      <Input
                        type="text"
                        name="city"
                        hasError={
                          getFieldMeta('city').error &&
                          getFieldMeta('city').touched
                            ? true
                            : false
                        }
                        disabled={isSubmitting}
                      />
                    </ContainerField>
                  </Col>

                  <Col md={6}>
                    <ContainerField>
                      <Label title={'Time'} required={true}></Label>
                      <Dropdown
                        name="time"
                        value={values.time}
                        handleChange={handleChange}
                        hasError={
                          getFieldMeta('time').error &&
                          getFieldMeta('time').touched
                            ? true
                            : false
                        }
                        options={timeOptions}
                        disabled={isSubmitting}
                      />
                    </ContainerField>
                  </Col>
                  <Col md={6}>
                    <ContainerField>
                      <Label title={'Color'} required={true} />
                      <ColorPicker
                        color={auxColor}
                        onChange={(color: any) => setAuxColor(color.hex)}
                      />
                      );
                    </ContainerField>
                  </Col>
                </Row>
                <Row>
                  <ButtonContainer>
                    <button
                      onClick={() => {
                        setStep(1)
                      }}
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={() => {
                        submitForm()
                      }}
                    >
                      Continuar
                    </button>
                  </ButtonContainer>
                </Row>
              </WrapperForm>
            )
          }}
        </Formik>
      )}
    </Modal>
  )
}

export default ModalDay
