import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const const FormikForm = () => (
    <Formik
        initialValues={{ name: '', email: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            console.log(values);
        }}
    >
        {() => (
            <Form>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" />
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                <button type="submit">Submit</button>
            </Form>
        )}
    </Formik>
);


export default FormikForm;
