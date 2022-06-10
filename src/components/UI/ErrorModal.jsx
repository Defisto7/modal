import React, {Fragment} from 'react';
import ReactDOM from 'react-dom'
import Button from './Button';
import Card from './Card';
import s from './ErrorModal.module.css';

const Backdrop = props => {
  return <div className={s.backdrop} onClick={props.onConfirm}/>
}

const ModalOverlay = (props) => {
  return (
    <Card className={s.modal}>
        <header className={s.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={s.content}>
          <p>{props.message}</p>
        </div>
        <footer className={s.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
  )
}

export default function ErrorModal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>, document.getElementById('overlay-root'))}
    </Fragment>
  );
}
