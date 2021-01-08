import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ThemeContext } from '../Layout';
import BackArrow from '../../public/assets/back_arrow';
import styles from './styles/backButton.module.css';

const BackButton = () => {
  const history = useHistory();
  const theme = useContext(ThemeContext);
  const { button, text } = styles;

  const goBack = () => history.goBack();
  const arrowColor = theme === 'light' ? '#000' : '#FFF';

  return (
    <button className={button} onClick={goBack} type="button">
      <BackArrow color={arrowColor} />
      <p className={text}>Back</p>
    </button>
  );
};

export default BackButton;
