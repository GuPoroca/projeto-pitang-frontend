import { useForm, FormProvider } from 'react-hook-form';
import FormInput from '../components/FormInput';

const MyFormPage = () => {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormInput name="firstName" label="First Name" />
      </form>
    </FormProvider>
  );
};

export default MyFormPage;
