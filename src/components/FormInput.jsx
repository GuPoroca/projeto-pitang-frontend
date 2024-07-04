import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { formInputSchema } from './ComponentSchemas';

const FormInput = ({ name, label, type = 'text' }) => {
  const { register, formState: { errors } } = useFormContext();

  formInputSchema.parse({ name, label, type }); // Validação Zod

  return (
    <div>
      <label>{label}</label>
      <input type={type} {...register(name, { required: 'This field is required' })} />
      {errors[name] && <p>{errors[name].message}</p>}
    </div>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormInput;