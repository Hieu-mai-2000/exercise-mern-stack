import React, { useCallback, useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import useStyles from './style'
import { Box, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FormDialog from '../../components/Dialog'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import { getPosts } from '../../redux/selectors'
import moment from 'moment'

export default function Album() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const posts = useSelector(getPosts)

  const openModal = useCallback(() => {
    dispatch(actions.showModal())
  }, [dispatch])

  useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest())
  }, [dispatch])

  return (
    <React.Fragment>
      <CssBaseline />
      <FormDialog />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth='sm'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom>
              Post
            </Typography>

            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Fab color='primary' aria-label='add'>
                    <AddIcon onClick={openModal} />
                  </Fab>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {posts.map((post) => (
              <Grid item key={post._id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={post.attachment}
                    title='Image title'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {post.title}
                      <h5>
                        {moment(post.updateAt).format(
                          'dddd, MMMM Do YYYY, h:mm:ss a'
                        )}
                      </h5>
                    </Typography>
                    <Typography>{post.content}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>
                      View
                    </Button>
                    <Button size='small' color='primary'>
                      Edit
                    </Button>
                    <Box>
                      <FavoriteBorderIcon />
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          Footer
        </Typography>
        <Typography
          variant='subtitle1'
          align='center'
          color='textSecondary'
          component='p'>
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  )
}
