import {Box, Button, Link, Typography} from '@mui/material';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import {useAppDispatch, useAppSelector} from '../../app/hooks.ts';
import {allNews} from '../../containers/newsSlice/newsSlice.ts';
import {useEffect} from 'react';
import {getAllNews} from '../../containers/newsSlice/newsThunks.ts';

const GetPosts= () => {
  const news = useAppSelector(allNews);
  const dispatch = useAppDispatch();

  useEffect(()=> {
    dispatch(getAllNews());
  }, [dispatch])



  return (
    <Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Typography variant="h4">Posts</Typography>
        <Button href="/post" variant="contained">Add new post </Button>
      </Box>
      {news.map((item) => (
        <Box key={item.id} display="flex" padding={'5px'} marginTop={5} border={2} borderRadius={2}>
          <Box
            component="img"
            sx={{maxWidth: '100px', maxHeight: '100px'}}
            src={item.image || undefined}
            onError={(e) => {
              console.error('Error loading image:', e)
            }}
          />
          <Box>
            <Box marginLeft={2} marginTop={1}>
              <Typography>{item.title}</Typography>
            </Box>
            <Box display="flex" marginLeft={2} marginTop={1}>
              <Typography>{item.datetime}</Typography>
              <Link marginLeft={2} display="flex" href="#">Read Full Post <ReadMoreIcon /></Link>
              <Link marginLeft={2} display="flex" href="#">Delete</Link>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default GetPosts;