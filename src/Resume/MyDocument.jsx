import { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import useStyles from '../Theme/themes'
import pdfResume from '../Assets/LorenzoResume.pdf'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

// TODO: refactor to use MUI Components

const MyDocument = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  }
  const onDocumentLoadError = ( error ) => {
    return console.log('Error while loading document! ' + error.message)
  }
  const changePage = (offset) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }
  const previousPage = () => {
    changePage(-1);
  }
  const nextPage = () => {
    changePage(1);
  }
  const classes = useStyles();
  return (
    <Box
      sx={{
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'center',
        gap:'20px',
        marginTop:'15px'
      }}
    >
      <Paper
        elevation={5}
      >
        <Document
          file={ pdfResume }
          onLoadSuccess={ onDocumentLoadSuccess }
          onLoadError={ onDocumentLoadError }
        >
          <Page pageNumber={pageNumber} />
        </Document>

        <Box
          sx={{ 
            display: 'flex', 
            // flexDirection: 'row',
            justifyContent: 'center',
            marginBottom:'10px' 
          }}
        > Page { pageNumber || (numPages ? 1 : '--') } / { numPages || '--' }
        </Box>
      </Paper>
      <Box
        sx={{ 
          display: 'flex', 
          flexDirection: 'row',
          alignItems:'center',
        }}
        > 
        <Button
          className={ classes.button }
          disabled={ pageNumber <= 1 }
          onClick={ previousPage }
        > Prev
        </Button>
        <Button
          className={classes.button}
          disabled={pageNumber >= numPages}
          onClick={ nextPage }
        > Next
        </Button>

      </Box>
    </Box>
  );
}

export default MyDocument
