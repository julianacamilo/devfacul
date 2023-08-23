

import { EditFormContainer, FormGroupOne,FormGroupTwo, FormRow, Input, Select, Button  } from "./style";


function EditForm() {
  const handleContentChange = (
    event: React.FocusEvent<HTMLParagraphElement>,
    field: string
  ) => {
    const newValue = event.target.innerText;
    console.log(`Campo "${field}" atualizado para: ${newValue}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLParagraphElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.currentTarget.blur();
    }
  };

  return (
    <EditFormContainer>
    <h3>Editar Informações</h3>
    
    <FormRow>
        
        <div className="group1-inputs">
          <Input type="text" name="email" placeholder="E-mail" />
          <Input type="password" name="password" placeholder="Senha" />
        </div>
        <Select name="relationship">
        <option value="">Relacionamento</option>
      <option value="Solteiro">Solteiro</option>
      <option value="Viúvo">Viúvo</option>
      <option value="Casado">Casado</option>
        </Select>
      </FormRow>
    

    <FormGroupOne>

  <Input type="text" name="date" placeholder="Nascimento" />


      <Input
        type="text"
        name="country"
        placeholder="País"
        className="group2-input"
      />
    </FormGroupOne>

    <FormGroupTwo>
      <Input type="text" name="profession" placeholder="Profissão" />
      <Input type="text" name="city" placeholder="Cidade" />
    </FormGroupTwo>

    <Button type="submit">Salvar</Button>
  </EditFormContainer>
);
}

export default EditForm;
