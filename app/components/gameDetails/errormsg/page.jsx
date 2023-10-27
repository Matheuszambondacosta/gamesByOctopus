import Styles from "./style.module.css";


const ErrorMsg = ({ msg, type }) => {
    if (type == "error") {
    return (
    <p className={Styles.error}>{msg}</p>
    );
    } else if (type == "success") {
    return (
    <p className={Styles.success}>{msg}</p>
    );
    }
    };
    
    export default ErrorMsg;
    
    
    
    
    