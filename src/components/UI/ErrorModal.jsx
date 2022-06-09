import React from 'react'
import Button from './Button'
import Card from './Card'
import s from './ErrorModal.module.css';

export default function ErrorModal(props) {
  return (
    <div>
      <div className={s.backdrop} onClick={props.onConfirm}/>
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
    </div>
  );
}
