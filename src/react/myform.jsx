import "./myform.css";

const myform = () => {
    return <div>
        {/*Formulário */}
        <form>
            <div>
                <label htmlfor="name">Nome:</label>
                <input type="text"name="name" placeholder="Digite seu nome"/>
            
            
            </div>
            <input type="submit" value="Enviar"/>
        
        
        </form>
    
    </div>
    
};

export default myform;