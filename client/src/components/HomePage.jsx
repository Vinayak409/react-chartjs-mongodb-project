import { Card, styled } from "@mui/material";

const StyledCard = styled(Card)`
  background: #ebd567;
  ${"" /* color: white */}
  font-size: 30px;
  width: 50%;
  height: 100%;
  margin: 150px auto;
  text-align: center;
`;

const HomePage = () => {
  return (
    <div>
      <StyledCard variant="outlined">
        <p>
          Please fill data in FillData tab & <br /> see the charts
        </p>
      </StyledCard>
    </div>
  );
};

export default HomePage;
