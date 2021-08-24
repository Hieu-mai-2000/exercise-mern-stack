import React, { useCallback, useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Box } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { getModal$ } from '../../redux/selectors'
import { useDispatch } from 'react-redux'
import { hiddenModal, createPosts } from '../../redux/actions'
import FileBase64 from 'react-file-base64'

export default function FormDialog({ open }) {
  const dispatch = useDispatch()
  const [data, setData] = useState({
    author: '',
    title: '',
    content: '',
    attachment: '',
  })
  const { isShow } = useSelector(getModal$)
  const handleClose = () => dispatch(hiddenModal())
  const handleSubmit = useCallback(() => {
    dispatch(createPosts.createPostsRequest(data))
    dispatch(hiddenModal())
  }, [dispatch,data])

  const changeData = (event) =>
    // console.log(event.target.name, event.target.value)
    setData({ ...data, [event.target.name]: event.target.value })
  return (
    <div>
      <Dialog
        open={isShow}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <Box ml={1}>
            <TextField
              value={data.author}
              onChange={changeData}
              name='author'
              margin='dense'
              id='Author'
              label='Author'
              type='text'
            />
          </Box>
          <Box ml={1}>
            <TextField
              value={data.title}
              onChange={changeData}
              name='title'
              margin='dense'
              id='title'
              label='Title'
              type='text'
            />
          </Box>
          <Box ml={1}>
            <TextField
              value={data.content}
              onChange={changeData}
              name='content'
              margin='dense'
              id='content'
              label='Content'
              type='text'
            />
          </Box>
          <Box mt={1}>
            <FileBase64
              value={data.attachment}
              onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
              name='attachment'
              accept='image/'
              multiple={false}
              type='file'
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleSubmit} color='primary'>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
