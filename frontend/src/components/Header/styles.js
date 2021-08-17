import styled from 'styled-components';

export const Container = styled.div`
  background-color: #41414C;
  color:#BFBFCC;

  height: 25vh;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 10% 20px 10%;
`;

export const Statistics = styled.div`
  display: flex;
  align-items: center;
  
  gap: 40px;

  > div{
    > h2{
        color:#FCFDFF;
    }
  }
  
`;

export const AddProject = styled.label`
    display: flex;
    align-items: center;

    background-color: #F1972C;
    color: #fcfdff;
    
    padding: 12px 32px 12px 12px;
    border-radius: 5px;

    cursor: pointer;
`;

export const Button = styled.button`

  background-color: transparent;
  color: #fcfdff;
  text-transform: uppercase;
`;

export const Plus = styled.div`
  width: 32px;
  height: 32px;

  background-color: #F2A74E;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 30px;
  font-weight: 400;

  padding-bottom: 2px;
  margin-right: 32px;
`;

