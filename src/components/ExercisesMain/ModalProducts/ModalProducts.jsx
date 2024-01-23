import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { format } from 'date-fns';
import {
  Container,
  InputsContainer,
  Calories,
  CaloriesValue,
  ButtonsContainer,
  PFPrimaryBtn,
  PFOutlinedBtn,
  ProductInput,
  WeightInput,
  FieldLabel,
  WeightInputLabel,
  ErrorMessageStyled,
} from './ModalProducts.styled';
import { addProduct } from 'api/addProductApi';

const ModalProducts = ({ id, title, calories, onClick }) => {
  const [calculatedCalories, setCalculatedCalories] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(true);

//   const currentDate = `${String(new Date().getDate()).padStart(2, '0')}/${String(
//   new Date().getMonth() + 1
// ).padStart(2, '0')}/${new Date().getFullYear()}`;
  const initialValues = {
    productId: id,
    title: title,
    date: format(new Date(), 'dd/MM/yyyy'),
    weight: '',
  };

  const handleAddToDiaryClick = (values) => {
    const { productId, weight,title } = values;
    const calculatedCalories = calculateCalories(weight);

    if (typeof onClick === 'function') {
      onClick({
        productId,
        title,
        weight,
        calories: calculatedCalories,
      });
    }
  };

  const schema = Yup.object().shape({
    weight: Yup.number()
      .max(700, 'Weight should not exceed 700 grams')
      .required('Weight is required')
      .positive('Weight must be above zero'),
  });

  const calculateCalories = (amount) => {
    const calculated = (calories * amount) / 100;
    return parseFloat(calculated);
  };

  const handleWeightChange = (event, setFieldValue) => {
    const amount = event.target.value;
    const calories = calculateCalories(amount);
    setCalculatedCalories(calories);
    setFieldValue('weight', Number(amount));
    setFieldValue('calories', calories);
  };

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    setIsModalOpen(false);
    handleAddToDiaryClick(values);
    console.log('string', values)
    addProduct(values)
    .then((response) => {
      console.log("Product added successfully:", response);
    })
    .catch((error) => {
      console.error("Error adding product:", error);
    });
  };

  const handleCloseClick = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('overlay')) {
      setIsModalOpen(false);
    }
  };

 
  useEffect(() => {
    const body = document.body;

    if (isModalOpen) {
      setTimeout(() => {
        body.style.overflow = 'hidden';
      }, 0);
    } else {
      body.style.overflow = '';
    }

    return () => {
      body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && (
        <div className="overlay" onClick={handleOverlayClick}>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, setFieldValue }) => (
              <Form autoComplete="off">
                <Container>
                  <InputsContainer>
                    <div>
                      <label htmlFor="product">
                        <ProductInput
                          name="product"
                          type="text"
                          value={title}
                          readOnly
                        />
                      </label>
                    </div>

                    <div>
                      <WeightInputLabel htmlFor="weight">
                        <WeightInput
                          name="weight"
                          type="text"
                          onChange={(e) => handleWeightChange(e, setFieldValue)}
                          onKeyPress={(e) => {
                            const onlyDigits = /^[0-9\b]+$/;
                            if (!onlyDigits.test(e.key)) {
                              e.preventDefault();
                            }
                          }}
                          value={values.weight}
                          border={
                            errors.weight && touched.weight && '1px solid #D80027'
                          }
                        />
                        <FieldLabel>grams</FieldLabel>
                      </WeightInputLabel>
                      <ErrorMessageStyled name="weight" component="p" />
                    </div>
                  </InputsContainer>

                  <Calories>
                    Calories: <CaloriesValue>{calculatedCalories}</CaloriesValue>
                  </Calories>

                  <ButtonsContainer>
                    <PFPrimaryBtn type="submit">Add to diary</PFPrimaryBtn>
                    <PFOutlinedBtn type="button" onClick={handleCloseClick}>
                      Cancel
                    </PFOutlinedBtn>
                  </ButtonsContainer>
                </Container>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </>
  );
};

export default ModalProducts;
