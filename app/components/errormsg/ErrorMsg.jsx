import Styles from "./page.module.css";


const ErrorMsg = ({ msg, type }) => {

    return (
        <>
            <p className={Styles.error}>{msg}</p>
          
        </>
    )

};

export default ErrorMsg;




