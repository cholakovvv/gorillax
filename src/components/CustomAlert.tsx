import { Alert, Collapse, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { AlertProps } from '@/types/types';
import '../styles/_custom-alert.scss';

const CustomAlert: React.FC<AlertProps> = (props) => {
  const [open, setOpen] = useState<boolean>(true);

  useEffect(() => {
    // after 5 seconds close alert
    const timer = setTimeout(() => {
      setOpen(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='alert'>
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
    </div>
  );
};
export default CustomAlert;
