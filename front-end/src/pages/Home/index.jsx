
import { useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import api from '../../services/api'

import {
  Title,
  Container,
  ContainerInput,
  Form,
  InputLabel,
  Input,

} from './styles'

import Background from '../../components/TopBackgraund'
import Button from '../../components/Button'

function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {
    try {
      const data = await api.post('/usuarios', {
        name: inputName.current.value,
        age: parseInt(inputAge.current.value),
        email: inputEmail.current.value
      })

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (

    <Container>


      <Background />

      <Form >
        <Title >Cadastro de Usuarios</Title>

        <ContainerInput>

          <div>
            <InputLabel>Nome <span>  *</span></InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>Idade<span>  *</span></InputLabel>
            <Input type="number" placeholder="Idade do usuário" ref={inputAge} />
          </div>

        </ContainerInput>
        <div style={{ width: '100%' }}>
          <InputLabel>Email<span>*</span></InputLabel>
          <Input type="email" placeholder="Email do usuário" ref={inputEmail} />
        </div>



        <Button type='button' onClick={registerNewUser} theme="primary"> Cadastrar usuário</Button>

      </Form>

      <Button type='button' onClick={() => navigate('/lista-de-usuarios')}>Lista de Usuários</Button>
    </Container>


  )
}

export default Home
