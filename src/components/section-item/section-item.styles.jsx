import styled from "styled-components";
import { FaRupeeSign } from "react-icons/fa";

export const SectionItemsContainer = styled.div`
  width: 98vw;
  display: flex;
  flex-direction: row;
  background-color: #f8f9f9;
  position: relative;
  flex-wrap: wrap;
  align-items: center;
`;

export const ProductDetails = styled.div`
  width: 220px;
  height: 350px;
  margin: 10px 10px 10px 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;

  &:hover {
    button {
      opacity: 0.8;
      display: flex;
    }

    img {
      opacity: 0.8;
    }
  }
`;

export const ImageContainer = styled.img`
  width: 220px;
  height: 300px;
`;
export const ImageDetails = styled.div`
  width: 220px;
  height: 50px;

  display: flex;
  flex-direction: row;
`;

export const ProductName = styled.p`
  width: 75%;
  line-height: 45px;

  display: flex;
  flex-direction: row;

  font-family: "Cinzel", serif;
  font-size: 12px;
  letter-spacing: 1.5px;
  font-weight: bold;
  text-align: left;
`;

export const ProductPrice = styled.p`
  width: 5%;
  line-height: 45px;
  text-align: center;
`;

export const CurencySym = styled(FaRupeeSign)`
  width: 20px;
  margin-top: 15px;
`;

export const AddButton = styled.button`
  width: 130px;
  height: 50px;
  background-color: #707b7c;
  border-radius: 2%;
  border: none;
  color: white;
  font-size: 15px;
  letter-spacing: 1px;
  position: absolute;
  top: 230px;
  text-align: center;
  display: none;
  cursor: pointer;
  justify-content: center;
`;
