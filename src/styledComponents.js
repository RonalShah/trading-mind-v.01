import { styled } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';

const  fontName = "Helvetica"

const themeDB = "dark"

export const BluePaper = styled(Paper)({
    //  background: 'linear-gradient( #5D8AA8 20%, #0018A8 90%)',
    background: themeDB=== 'dark' ? '#2e55c9' : '#26D02B' , 
    color:  themeDB=== 'dark' ? 'silver' : 'black' , 
    font: fontName,
    padding: "5px",
    
  });
  

  