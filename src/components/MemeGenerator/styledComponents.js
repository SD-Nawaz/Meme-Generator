// Style your components here
import styled from 'styled-components'

export const Appcontainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh
`
export const MemeGeneratorContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 550px;
    padding: 32px 24px
`
export const Heading = styled.h1`
    color: #1e293b;
    font-family: 'Open Sans';
    fonst-size: 36px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 15px;
`
export const FormMemeGenerator = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
`
export const MemeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    width: 45%;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 20px;
    margin-top: 5px;
`
export const TextContent = styled.h1`
    color: #fff;
    font-weight: 500;
    font-family: 'Open Sans';
    font-size: ${props => props.fontSize};
`
export const MemeGeneratorForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40%
`
export const CustomLabel = styled.label`
    color:  #7e858e;
    font-weight: 500;
    font-family: 'Open Sans';
    font-size: 12px;
    line-height: 1.4;
    margin-bottom: 0px;
`
export const CustomInput = styled.input`
    color:  #7e858e;
    background-color: #fff;
    height: 40px;
    border: 1px solid #d7dfe9;
    border-radius: 5px ;
    padding: 12px 14px;
    font-weight: 500;
    font-family: 'Open Sans';
    font-size: 12px;
    outline: none
    margin-bottom: 20px;
    margin-top: 5px;

`
export const CustomSelect = styled.select`
    color:  #1e293b;
    background-color: #fff;
    height: 40px;
    border: 1px solid #d7dfe9;
    border-radius: 5px ;
    padding: 10px;
    padding-top: 10px;
    padding-bottom: 10px
    font-family: 'Open Sans';
    outline: none
    margin-bottom: 10px;
    margin-top: 10px;

`

export const GenerateButton = styled.button`
    background-color:  #0b69ff;
    color: #fff;
    height: 40px;
    border-radius: 5px ;
    padding: 12px 24px;
    font-family: 'Open Sans';
    outline: none
    margin-bottom: 10px;
    margin-top: 15px;
    font-size :14px;
    border: none;
    font-weight: 500;
    cursor: pointer:
    
`
