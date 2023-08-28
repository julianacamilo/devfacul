import React, { useState, useContext, ChangeEvent, FormEvent } from 'react';
import { EditFormContainer, Input, Button, FormRow, Select,FormRowWithSelect, FormGroupOne, FormGroupTwo} from './style';
import axios from 'axios';
import { UserContext } from '../../context/user-context';
interface EditFormProps {
  initialData: {
    date: string;
    profession: string;
    country: string;
    city: string;
    relationship: string;
  };
  onSubmit: (formData: any) => void; 
}

const EditForm: React.FC<EditFormProps> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState(initialData);

  // This function is called whenever an input field (input or select) in the form is changed. It receives the event (e) which contains the information about the field that has changed. The function extracts the changed field name and value, updates the formData state using the setFormData function, leaving the other fields unchanged.

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //This function is called when the form is submitted. It prevents the default page reload behavior that would occur with form submission. It then calls the onSubmit function passing the updated form data as an argument.
  
  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    onSubmit(formData); 
  };


  return (

   
    <form onSubmit={handleFormSubmit}>
    <EditFormContainer>
   
    <h3>Editar Informações</h3>
     <FormRowWithSelect>
     <FormRow>
        <div className="group1-inputs">
          <Input
            type="text"
            name="email"
            placeholder="E-mail"
            
          />
          <Input
            type="password"
            name="password"
            placeholder="Senha"
          
          />
        </div>
      </FormRow>
      <Select
          name="relationship"
          value={formData.relationship}
          onChange={(e) => handleInputChange(e)}
        >
          <option value="">Relacionamento</option>
          <option value="Solteiro">Solteiro</option>
          <option value="Casado">Casado</option>
          <option value="Divorciado">Divorciado</option>
          <option value="Namorando">Namorando</option>
          <option value="Preocupado">Preocupado</option>
        </Select>
  </FormRowWithSelect>
  <FormGroupOne>
  <Input
  type="text"
  name="date"
  placeholder="Nascimento"
  value={formData.date}
  onChange={handleInputChange}
/>
      <Input
        type="text"
        name="country"
        placeholder="País"
        className="group2-input"
        value={formData.country}
        onChange={handleInputChange}
      />
    </FormGroupOne>

    <FormGroupTwo>
      <Input
        type="text"
        name="profession"
        placeholder="Profissão"
        value={formData.profession}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="city"
        placeholder="Cidade"
        value={formData.city}
        onChange={handleInputChange}
      />
    </FormGroupTwo>

    <Button type="submit"> Salvar </Button>
 

    
  </EditFormContainer>
</form>
 );
}

export default EditForm;
