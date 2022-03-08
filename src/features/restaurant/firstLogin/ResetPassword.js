import React from 'react'
import { ErrorMessage, Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { changeRegistredEmail } from '../../../redux/auth/auth.action';


const loginSchema = Yup.object().shape({
    new_password: Yup.string()
        .required('Fill This Field.. '),
    c_password: Yup.string()
        .required('Fill This Field..'),
});



function ResetPassword() {
    const dispatch = useDispatch()

    const backState = ()=>{
    dispatch(changeRegistredEmail(true))

}

    const onSubmit = (values) => {
        if(values.new_password == values.c_password){
            alert("password matched..")
        }else{
            alert("Password Not matched..")

        }
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
                    <ul className="nav nav-pills nav-justified" id="ex1" role="tablist" style={{ margin: "2rem 0 2rem 0", fontSize: '30px' }} >
                        <li className="nav-item" role="presentation">
                            Reset Password
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
                                initialValues={{ new_password: '',c_password:'' }}

                                validationSchema={loginSchema}
                                onSubmit={onSubmit}
                                style={{ marginBottom: '5rem' }}
                            >
                                {({ errors, touched }) => (

                                    <Form>
                                        <label htmlFor="new_password">New Password</label>
                                        <Field
                                            id="new_password"
                                            name="new_password"
                                            placeholder="jane@acme.com"
                                            type="password"
                                            className={
                                                'form-control' +
                                                (errors.new_password && touched.new_password ? ' is-invalid' : '')
                                            }
                                        />
                                        <ErrorMessage
                                            name="new_password"
                                            component="div"
                                            className="invalid-feedback"
                                        />

                                        <label htmlFor="c_password" className=" mt-4">Confirm Password</label>
                                        <Field
                                            id="c_password"
                                            name="c_password"
                                            placeholder="jane@acme.com"
                                            type="password"
                                            className={
                                                'form-control' +
                                                (errors.c_password && touched.c_password ? ' is-invalid' : '')
                                            }
                                        />
                                        <ErrorMessage
                                            name="c_password"
                                            component="div"
                                            className="invalid-feedback"
                                        />
                                        <button type="submit" className="btn mb-4 mt-5" style={{ backgroundColor: '#E2611E', color: 'white', marginLeft: '8.5rem' }}>Confirm</button>

                                        <button type="button" className="btn mb-4 mt-5 ml-3" style={{ backgroundColor: 'black', color: 'white', marginLeft: '8.5rem' }} onClick={backState}>Back</button>


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

export default ResetPassword
