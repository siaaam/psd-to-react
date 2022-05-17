import styled from 'styled-components';
const SectionWrapper = styled.section`
  h2 {
    color: #413d4b;
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
    span {
      text-transform: uppercase;
      color: red;
    }
    &&:hover {
      color: magenta;
    }
  }
  p {
    color: #716e78;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    margin-bottom: 0 !important;
    padding-bottom: 30px;
  }
`;

export default SectionWrapper;
