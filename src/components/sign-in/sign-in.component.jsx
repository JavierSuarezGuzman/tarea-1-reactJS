import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => { //aunque si fuera SOLO UNO no es necesario ponerlo dentro de los ()
    event.preventDefault(); //evita que recargue la página

    this.setState({ email: "", password: "" }); //limpia los campos
  };

  /*const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");*/

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
    //email o el password: asdasdas, dasdasdasd, dasdasdas, asdasdas
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Si ya tienes una cuenta</h2>
        <span>Ingresa con tu correo y contraseña</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            label="Correo"
            required
          />
          <FormInput
            name="password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
            label="Contraseña"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Ingresa correo</CustomButton>
            <CustomButton onCLick={signInWithGoogle} isGoogleSignIn>Ingresa Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}


export default SignIn;