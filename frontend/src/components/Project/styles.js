import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #FCFDFF;

  height: 100px;

  border: 1px solid #E1E3E6;
  border-left: 4px solid transparent;
  border-radius: 5px;

  padding: 0 32px;

  transition: all .2s ease-in-out;

  > #left{
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 80%;
  }

  &:hover{
    border-left: 4px solid #F1972C;
  }
`;

export const NameDiv = styled.div`
  display: flex;
  align-items: center;

  > p{
    margin-right: 32px;
  }
`;

export const StatisitcsDiv = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  gap: 20px;

  > .statisitcsChildren{
      > p{
          font-size: 12px;
      }

      > h2{
          font-size: 16px;
      }
  }

`;

export const ActionsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 30%;

  > .status{
    padding: 7px 24px;
    border-radius: 40px;
    font-size: 14px;
  }

  > .andamento{
    background-color: #E8F8E8;
    color: #36B236;
  }
  
  > .encerrado{
    background-color: #FAECEB;
    color: #EB3B35;
  }
`;
