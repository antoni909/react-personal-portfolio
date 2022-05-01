import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import pdfResume from '../Assets/LorenzoResume.pdf'

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

  return (
    <>
      <Document
        file={ pdfResume }
        onLoadSuccess={ onDocumentLoadSuccess }
        onLoadError={ onDocumentLoadError }
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        > Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        > Next
        </button>
      </div>
    </>
  );
}

export default MyDocument
