import React, { useRef, useCallback, useState, useEffect } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Input from '../../components/Input';

import { Container } from './styles'

import api from '../../services/api';

interface EventosData {
  id: string;
  nomeevento: string;
  local: string;
  diasemana: string;
  horario: string;
  like: number;
  dislike: number;
}

const Dashboard: React.FC = () => {
  const [showDetails, setShowDetails] = useState<EventosData[]>([]);

  useEffect(() => {
    api.get('/events').then(m =>  {
    if(m.data != ''){
      setShowDetails(m.data )
    }
    })
  }, [])

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: EventosData) => {
    try {
      formRef.current?.setErrors({});

      formRef.current?.reset()
     await api.post('events', data)

  api.get('/events').then( m =>  {
    if(m.data != ''){
       setShowDetails(m.data)

    }
    })

    }  catch (error) {
      console.log(error)
    }
  }, []);

  return (
    <><Form ref={formRef} onSubmit={handleSubmit}>
      <Input name='nomeevento' placeholder='Nome do Evento' />
      <Input name='local' placeholder='Local do Evento' />
      <Input name='diasemana' placeholder='Dia da Semana' />
      <Input name="horario" placeholder="Horário" />
      <button type="submit">Cadastar</button>
    </Form>

{showDetails &&(
  <Container>
      <ul>
        {showDetails.map((info, index) => (

        <div>
          <>

            <li key={index.toString()}>
              <h1>Nome do evento:</h1>
              <span>{info.nomeevento}</span>
            </li>

            <li>
              <h1>Local do evento:</h1>
              <span> {info.local}</span>
            </li>

            <li>
              <h1>Data:</h1>
              <span>{info.diasemana}</span>
            </li>

            <li>
              <h1>Horário:</h1>
              <span> {info.horario}</span>
            </li>

            <li>
              <h1>Gostou?</h1>
                <button onClick={(async () => {
                  await api.post(`/events/like/${info.id}`)
                    api.get('/events').then( m =>  {
                      setShowDetails(m.data)
                    })
                })}>
                    💖
                </button>
              <span>{info.like}</span>

                <button onClick={(async () => {
                  await api.post(`/events/dislike/${info.id}`)
                    api.get('/events').then( m =>  {
                      setShowDetails(m.data)
                  })
                  })}>
                    💔
                </button>
              <span>{info.dislike}</span>
           </li>

                <button onClick={(async () => {
                  await api.delete(`/events/${info.id}`)
                    api.get('/events').then( m =>  {
                      setShowDetails(m.data)
                  })
                })}>
                  🗑️
                </button>
          </>
        </div>
      ))}
    </ul>
  </Container>
)
}
    </>
  )
}

export default Dashboard
