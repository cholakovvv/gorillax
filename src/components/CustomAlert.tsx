import { Alert, Collapse, IconButton } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { AlertProps } from '@/types/types';

const CustomAlert: React.FC<AlertProps> = (props) => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <Collapse in={open}>
      <Alert
        action={
          <IconButton
            aria-label='close'
            color='inherit'
            size='small'
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon fontSize='inherit' />
          </IconButton>
        }
        variant='filled'
        severity={props.severity}
      >
        {props.text}
      </Alert>
    </Collapse>
  );
};
export default CustomAlert;
