import logoImg from '../../assets/logo.svg';
import classes from './Logo.module.css';

const logo = props => {
    return (
        <div className={classes.Logo}>
            <img className={classes.LogoImg} src={logoImg} alt="Logo"></img>
        </div>
    )
}

export default logo;
