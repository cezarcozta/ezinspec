import { darken, transparentize } from 'polished';
import Modal from "react-modal";
import styled from 'styled-components';

Modal.setAppElement("#root");

export const Container = styled(Modal)`
   h2 {
      color: #363f5f;
      font-size: 1.5rem;
      margin-bottom: 2rem;
   }

   form {
      input{
         width: 100%;
         padding: 0 1.5rem;
         height: 4rem;

         border-radius: 0.25rem;
         border: 1px solid #d7d7d7;
         background: #e7e9ee;

         font-weight: 400;
         font-size: 1rem;

         &::placeholder {
            color: var(--text-body)
         }

         & + input {
            margin-top: 1rem;
         }

         
      }

      button[type="submit"] {
         width: 100%;
         padding: 0 1.5rem;
         height: 4rem;
         background-color: var(--green);
         border: 0;
         font-size: 1rem;
         font-weight: 600;
         margin-top: 1.5rem;
         color: #fff;

         transition: filter 0.2s;

         &:hover {
            filter: brightness(0.9);
         }
      }
   }
`;

export const TypeContainer = styled.div`
   margin: 1rem 0;

   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 0.5rem;
`;

interface IButtonProp{
   isClicked: boolean;
   clickedColor: 'green' | 'red';
}

const colors = {
   green: '#33cc95',
   red: '#e53e4d'
}

export const Button = styled.button<IButtonProp>`
   height: 4rem;
   border: 1px solid #d7d7d7;
   border-radius: 0.25rem;

   background: ${({isClicked, clickedColor}: IButtonProp) => isClicked ?  transparentize(0.9,colors[clickedColor]) : 'transparent'};

   display: flex;
   align-items: center;
   justify-content: center;

   transition: border-color 0.2s;

   &:hover{
      border-color: ${darken(0.1, '#d7d7d7')};
   }

   img{
      width: 20px;
      height: 20px;
   }

   span{
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: #363f5f;
   }
`;