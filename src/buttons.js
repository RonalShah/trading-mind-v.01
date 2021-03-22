import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const  fontName = "Helvetica"

export const BlueButton = styled(Button)({
  // background: 'linear-gradient(180deg, #5D8AA8 20%, #0018A8 90%)',
  background: "green",
  border: 5,
  borderColor: '#15235a',
  borderRadius: 10,
//   boxShadow: '2px 2px #0076a3',
  color: '#bbf',
  fontWeight: 'bold',
  height: 48,
  padding: '0 30px',
  font: fontName,
  margin: 5,
  marginTop: 25
  
  
});



export const GreenButton = styled(Button)({
    background: 'linear-gradient(180deg, #00563F 20%, #003023 90%)',
    border: 5,
    borderColor: '#15235a',
    borderRadius: 5,
  //   boxShadow: '2px 2px #0076a3',
    color: 'lightgreen',
    fontWeight: 'bold',
    height: 48,
    padding: '0 30px',
    font: fontName,
    margin: 5,

  });

  

export const RedButton = styled(Button)({
    background: 'linear-gradient(180deg, #CC0000 20%, #850101 90%)',
    border: 5,
    borderRadius: 5,
  //   boxShadow: '2px 2px #0076a3',
    color: 'pink',
    fontWeight: 'bold',
    height: 48,
    padding: '0 30px',
    font: 'Helvetica',
    margin: 5,

  });

  
  export const ResetButton = styled(Button)({
    background: 'linear-gradient(180deg, #00308f 20%, #062a78 90%)',
    border: 5,
    borderColor: '#15235a',
    borderRadius: 5,
  //   boxShadow: '2px 2px #0076a3',
    color: '#bbf',
    fontWeight: 'bold',
    height: 48,
    padding: '0 30px',
    font: 'Helvetica',
    margin: 5,
  });
  export const AmberButton = styled(Button)({
    background: 'linear-gradient(180deg, #FFBF00 20%, #FF7E00 90%)',
    border: 5,
    borderColor: '#15235a',
    borderRadius: 5,
  color: 'darkred',
    fontWeight: 'bolder',
    height: 48,
    padding: '0 30px',
    font: 'Helvetica',
    margin: 5,
  });


