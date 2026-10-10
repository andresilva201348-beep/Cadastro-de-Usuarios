import styled from "styled-components"


export const Container = styled.div`

background-color: #181f36;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
gap: 24px;
padding: 20px;

`

export const Title = styled.h2`

  color: #ffffff;
  text-align: center;
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  margin: 0 0 20px 0;

`

export const ContainerUsers = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;

@media (max-width: 750px){
grid-template-columns: 1fr;
}
`

export const CardUser = styled.div`

background-color: #252d48;
padding: 16px;
border-radius: 32px;
display: flex;
justify-content: space-between;
align-items: center;
gap: 20px;
max-width: 350px;

h3 {
    color: #fff;
    font-size: 24px;
    margin-bottom: 3px;
    text-transform:capitalize;
}

p {
    color: #fff;
    font-size: 14px;
    font-weight: 200;
}

`

export const TrashIcon = styled.img`
    width: 25px;
    height: 25px;
    cursor: pointer;
    flex-shrink: 0;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.4;
    }
`

export const AvatarUser = styled.img`

height: 80px;

`