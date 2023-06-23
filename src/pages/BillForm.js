import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BillsContext } from '../App';

function BillForm({ billToEdit, finishEditing }) {
    const { bills, addBill, editBill } = useContext(BillsContext);
    const navigate = useNavigate();

    const handleSubmit = (values, { setSubmitting }, actions) => {
        let displayBill = {};
        if (billToEdit) {
            displayBill = editBill({ ...billToEdit, ...values });
        } else {
            displayBill = addBill(values);
        }
        console.log(values);

        setTimeout(() => {
            // actions.resetForm();
            finishEditing();
            navigate('/summary', { state: { bill: displayBill } });
            // alert(JSON.stringify(values, null, 2));
            // console.log(bills);
            // setSubmitting(false);
        }, 400);
    };

    return (
        <Formik
            initialValues={
                billToEdit ||
                {
                    name: '',
                    address: '',
                    hospital_name: '',
                    date_of_service: '',
                    bill_amount: '',
                    bill_pic: ''
                }
            }
            validate={values => {
                // const errors = {};
                // if (!values.email) {
                //     errors.email = 'Required';
                // } else if (
                //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                // ) {
                //     errors.email = 'Invalid email address';
                // }
                // return errors;
            }}
            onSubmit={handleSubmit}
        >
            {/* {({ isSubmitting }) => ( */}
            {() => (
                <Form>
                    {/* Email<Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                    Password<Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" /> */}
                    Name: <Field name="name" /><br />
                    Address: <Field name="address" /><br />
                    Hospital Name: <Field name="hospital_name" /><br />
                    Date of Service: <Field name="date_of_service" /><br />
                    Bill Amount: <Field name="bill_amount" /><br />
                    Bill Picture: <Field name="bill_pic" />
                    <br />

                    {/* <button type="submit" disabled={isSubmitting}> */}
                    <button type="submit">
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default BillForm;