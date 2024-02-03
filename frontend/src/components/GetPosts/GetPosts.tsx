import {Box, Button, LinearProgress, Link, Typography} from '@mui/material';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import {useAppDispatch, useAppSelector} from '../../app/hooks.ts';
import {allNews, deleteNews} from '../../containers/newsSlice/newsSlice.ts';
import {useEffect} from 'react';
import {deleteOneNews, getAllNews} from '../../containers/newsSlice/newsThunks.ts';

const GetPosts = () => {
  const news = useAppSelector(allNews);
  const deleteFetchNews = useAppSelector(deleteNews);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch])

  const removeOneNews = (id: number) => {
    dispatch(deleteOneNews(id));
    dispatch(getAllNews());
  };

  return (
    <Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Typography variant="h4">Posts</Typography>
        <Button href="/post" variant="contained">Add new post </Button>
      </Box>
      {deleteFetchNews ? <LinearProgress /> : news.map((item) => (
        <Box key={item.id} display="flex" padding={'5px'} marginTop={7} border={2} borderRadius={2}>
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
              <Box>
                <Link marginLeft={2} display="flex" href="#">Read Full Post <ReadMoreIcon/></Link>
              </Box>
              <Box>
                <Link
                  marginLeft={2}
                  display="flex"
                  onClick={() => removeOneNews(parseInt(item.id))}>
                  Delete
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default GetPosts;