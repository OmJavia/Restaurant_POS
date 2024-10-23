import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Row,Col} from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useFormik } from 'formik';

const foodCategories = [
    "Fruits",
    "Vegetables",
    "Dairy",
    "Meat",
    "Grains",
    "Snacks"
];

function CategoryForm() {
    const initialValues = {
        category: ""
    };

    const {values,handleChange,handleSubmit} = useFormik({
        initialValues: initialValues,
        onSubmit: (values, actions) => {
            console.log(values);
            actions.resetForm();
        }
    });

    return (
        <Container className='pb-3'>
            <h1 className='d-flex justify-content-center'>Select Food Category</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Select Food Category</Form.Label>
                    <Form.Select 
                        name="category" 
                        value={values.category} 
                        onChange={handleChange} 
                    >
                        <option value="">--Select a Category--</option>
                        {foodCategories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </Form.Select>
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
    );
}

export default CategoryForm;