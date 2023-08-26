

import { useState } from "react";
import { EditFormContainer, FormGroupOne,FormGroupTwo, FormRow, Input, Select, Button, FormRowWithSelect  } from "./style";



function EditForm() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    relationship: '',
    date: '',
    country: '',
    profession: '',
    city: '',
  });

  



  return (

   
    <EditFormContainer>

    <h3>Editar Informações</h3>
     <FormRowWithSelect>
   
    
  <FormRow>
    <div className="group1-inputs">
      <Input type="text" name="email" placeholder="E-mail" />
      <Input type="password" name="password" placeholder="Senha" />
    </div>
  </FormRow>
  <Select name="relationship">
      <option value="">Relacionamento</option>
      <option value="Solteiro">Solteiro</option>
      <option value="Casado">Casado</option>
      <option value="Divorciado">Divorciado</option>
      <option value="Namorando">Namorando</option>
      <option value="Preocupado">Preocupado</option>
    </Select>
  </FormRowWithSelect>
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
