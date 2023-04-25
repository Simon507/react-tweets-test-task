import DocumentTitle from 'react-document-title';

import Box from '@mui/material/Box';

export default function Home() {
  return (
    <DocumentTitle title="Home Page">
      <Box sx={{ textAlign: 'center', color: '#EBD8FF', marginTop: '100px' }}>
        <h1>Welcome to the homepage of the twitter New Generation app</h1>
      </Box>
    </DocumentTitle>
  );
}
