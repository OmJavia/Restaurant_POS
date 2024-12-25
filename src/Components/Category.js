import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import { CategorySchema} from '../Schemas/validationfile';
import './Category.css';
import axios from 'axios';

function Category() {
    const initialValues = {
        category_name: ""
    };

    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: CategorySchema,
        onSubmit: (values, actions) => {
            console.log("Category Added", values);
                actions.resetForm();
        }
    })
    const addCategory=()=>{
        
    };

    return (<>
        <Container className='py-2 px-3 my-3 maincontainer'>
            <h1 className='d-flex justify-content-center'>ADD TYPE OF PRODUCTS</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    {/* <Form.Label>Input Text</Form.Label> */}
                    <Form.Control
                        type="text"
                        name="category_name"
                        value={values.category_name}
                        onChange={handleChange}
                        placeholder="Enter some text"
                    />
                    {touched.category_name && errors.category_name ? (
                        <p className="form-error">{errors.category_name}</p>
                    ) : null}
                </Form.Group>
                <Row className="mb-3 d-flex justify-content-center">
                    <Col xs="auto">
                        <Button variant="outline-primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>

        </Container>
        </>
    );
}

export default Category;
