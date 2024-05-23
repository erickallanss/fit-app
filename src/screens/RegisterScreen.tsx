import { useState } from "react";

export default function RegisterScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
  
    const handleRegister = () => {
        // Implementar lógica de registro
    };

    return (
        <div>
            Registro
        </div>
    )

}