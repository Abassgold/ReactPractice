import React from 'react';
import styles from './Test.module.css';
import 'bootstrap/dist/css/bootstrap.css';



const isBlue = false;
let abass ={
    color: 'red',
    backgroundColor: 'yellow',
    padding: '50px 0', 
}
function Test() {
    return <>
        <div style={{ color: "red" }}>Test</div>
        <div style={{color: isBlue ? 'blue' : 'red'}}>Kola</div>
        <div style={abass}>Azeez</div>
        <div className={styles.footer}>Ganiu</div>
        <div className='text-center'>
        <button className='btn btn-success'>Check</button>
        </div>
    </>
}

export default Test