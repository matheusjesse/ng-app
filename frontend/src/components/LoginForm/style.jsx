import styled from 'styled-components';

const LoginFormContainer = styled.form`
  width: 400px;
  height: 388px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-bottom: 40px;

  .username-label {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .username-label span {
    width: 300px;    
  }

  .username-label input {
    width: 300px;
    height: 40px;
    border-radius: 6px ;
    border: 1px solid black;
    padding-left: 10px;
    font-size: 20px !important;
  }


  .password-label {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .password-label span {
    width: 300px;    
  }

  .password-label input {
    width: 300px;
    height: 40px;
    border-radius: 8px;
    padding-left: 10px;
    font-size: 20px !important;
  }
  
  button {
    width: 300px;
    height: 40px;
    background: white;
    border-radius: 8px;
    color: black;
    font-family: 'Kanit', sans-serif;
    font-size: 1.4em;
    margin-top: 18px;
  }

  button:enabled {
    cursor: pointer;
  }

  span {
    color: white;
    font-family: 'Kanit', sans-serif;
    font-size: 1.2em;
  }

  .create-account {
    text-decoration: underline;
    width: 300px;
    text-align: center;
    cursor: pointer;
  }

  .error-login {
    width: 300px;
    text-align: center;
    height: 70px;
  }

`;

export default LoginFormContainer;