import { useState } from "react"
import { Await, Navigate } from "react-router-dom"

import { useEffect } from "react"

import api from "../../services/api"

import Button from "../../components/Button"

import TopBackground from "../../components/TopBackgraund"

import Trash from "../../assets/trash.svg"



import {
    Container,
    Title,
    ContainerUsers,
    CardUser,
    TrashIcon,
    AvatarUser,
} from "./styles"
import { useNavigate } from "react-router-dom"

function ListUsers() {

    const [users, setUsers] = useState([])
    const navigate = useNavigate()
    useEffect(() => {

        async function getUsers() {

            const { data } = await api.get("/usuarios")

            setUsers(data.users)
        }

        getUsers()

    }, [])

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id} `)
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id))
    }

    return (

        <Container>

            <TopBackground />

            <div>

                <Title>Lista de Usuários</Title>

                <ContainerUsers>

                    {users.map((user) => (

                        <CardUser key={user.id}>

                            <AvatarUser
                                src={`https://api.dicebear.com/9.x/personas/svg?seed=${user.id}`}
                            />

                            <div>

                                <h3>{user.name}</h3>
                                <p>{user.age}</p>
                                <p>{user.email}</p>


                            </div>

                            <TrashIcon
                                src={Trash}
                                alt="icone-lixo"
                                onClick={() => deleteUsers(user.id)}
                            />

                        </CardUser>

                    ))}

                </ContainerUsers>


            </div>
            <Button type="button" onClick={() => navigate('/')}>voltar para home</Button>

        </Container>
    )
}

export default ListUsers