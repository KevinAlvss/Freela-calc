import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #FCFDFF;

  height: 100px;

  border: 1px solid #E1E3E6;
  border-radius: 5px;

  padding: 0 32px;

  > #left{
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 80%;
  }
`;

export const NameDiv = styled.div`

`;

export const StatisitcsDiv = styled.div`
    display: flex;
    align-items: center;
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
    
`;
