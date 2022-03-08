import React from 'react'
import { ErrorMessage, Formik, Field, Form } from 'formik';
import { changeFirstLoginForm } from '../../../redux/auth/auth.action';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Data Must be a Email Type..!!')
        .required('Please Fill This Field!'),
});
const RegistredEmail = () => {
    const dispatch = useDispatch()

    const onSubmit = (values) => {
        console.log(values, "from registred page")
    }
    const backState = ()=>{
        dispatch(changeFirstLoginForm(true))

    }

    return (
        <>

            <div className="col-md-6" style={{ border: '2px solid black' }}>
                <div style={{ border: '2px solid black', margin: '2rem 3rem 0rem 3rem', borderRadius: '15px' }}>
                    <ul className="nav nav-pills nav-justified" id="ex1" role="tablist" style={{ margin: "2rem 0 2rem 0", fontSize: '30px' }} >
                        <li className="nav-item" role="presentation">
                            <b>SUSHIYA</b>
                        </li>

                    </ul>

                    <div className="tab-content" style={{ margin: '0rem 5rem 0rem 5rem' }}>
                        <div
                            className="tab-pane fade show active"
                            id="pills-login"
                            role="tabpanel"
                            aria-labelledby="tab-login"
                        >
                            <Formik
                                initialValues={{ email: '' }}

                                validationSchema={loginSchema}
                                onSubmit={onSubmit}
                                style={{ marginBottom: '5rem' }}
                            >
                                {({ errors, touched }) => (

                                    <Form>
                                        <label htmlFor="email">Email</label>
                                        <Field
                                            id="email"
                                            name="email"
                                            placeholder="jane@acme.com"
                                            type="email"
                                            className={
                                                'form-control' +
                                                (errors.email && touched.email ? ' is-invalid' : '')
                                            }
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="invalid-feedback"
                                        />
                                        <button type="submit" className="btn mb-4 mt-5 " style={{ backgroundColor: '#E2611E', color: 'white', marginLeft: '12.5rem' }}>Submit</button>

                                        <div className="row mb-4">


                                            <div className="col-md-12 d-flex  justify-content-center">

                                                <Link to="#" onClick={backState} style={{ textDecoration:'underline'}}>Back to Sign In?</Link>
                                            </div>
                                        </div>
                                    </Form>
                                )}

                            </Formik>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default RegistredEmail
