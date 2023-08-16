import React, { useState } from "react";
import axios from 'axios';
import styles from './Login.module.css';
import icon from './icone.png';

const Login = (props) => {
  const [identificador, setIdentificador] = useState(""); // Mudança aqui
  const [senha, setSenha] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('https://fair-ruby-caterpillar-wig.cyclic.app/login', { identificador, senha }) // Mudança aqui
      .then(response => {
        console.log('Response from server:', response.data); // Log the response from the server

        if (response.data.success) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('username', identificador); // Mudança aqui
          localStorage.setItem('instituicaoNome', response.data.instituicaoNome);
          localStorage.setItem('role', response.data.role);

          console.log('Role after login:', localStorage.getItem('role')); // Log the role after login

          props.history.push('/admin/dashboard');
        } else {
          alert('Login falhou');
        }
      });
  };

  return (
    
    <div className={styles.container} style={{ backgroundImage: 'url(https://imgur.com/9fb4848.png)', backgroundSize: 'cover', Height: '100vh' }}>
      <div className={styles.content}>
        <div className={styles.title}>
          
          <div className={styles.text}>
            LifeMed | Painel Administrativo
          </div>
        </div>
        <form onSubmit={handleLogin} className={styles.form}>
          <input type="text" value={identificador} onChange={(e) => setIdentificador(e.target.value)} placeholder="E-Mail Identificador" className={styles.input}/> {/* Mudança aqui */}
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha" className={styles.input}/>
          <button type="submit" className={styles.button}>Login</button>
        </form>
      </div>
    </div>
    
  );
};

export default Login;