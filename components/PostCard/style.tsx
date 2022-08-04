import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 0px 0px #3338;
  transition: transform 0.1s ease-out, box-shadow 0.1s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 15px -10px #3338;
  }
`

export const BackgroundImageWrapper = styled.div<{ image: string }>`
  background-image: url('${({ image }) => image}');
  width: 300px;
  height: 200px;
  background-position: center;
  background-size: cover;
`

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;

    & > h3 {
        margin: 5px 0;
    }

    & > p {
        margin: 5px 0 0;
    }
`
