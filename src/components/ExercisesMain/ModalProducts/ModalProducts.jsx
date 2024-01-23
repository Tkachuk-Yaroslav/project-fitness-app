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

  const initialValues = {
    productId: id,
    date: format(new Date(), 'dd/MM/yyyy'),
    amount: '',
  };

  const handleAddToDiaryClick = values => {
    const { productId, amount } = values;
    const calculatedCalories = calculateCalories(amount);

    if (typeof onClick === 'function') {
      onClick({
        productId,
        amount,
        calories: calculatedCalories,
      });
    }
  };

  const schema = Yup.object().shape({
    amount: Yup.number()
      .max(700, 'Weight should not exceed 700 grams')
      .required('Weight is required')
      .positive('Weight must be above zero'),
  });

  const calculateCalories = amount => {
    const calculated = (calories * amount) / 100;
    return parseFloat(calculated);
  };

  const handleWeightChange = (event, setFieldValue) => {
    const amount = event.target.value;
    const calories = calculateCalories(amount);
    setCalculatedCalories(calories);
    setFieldValue('amount', Number(amount));
    setFieldValue('calories', calories);
  };

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    setIsModalOpen(false);
    handleAddToDiaryClick(values);
    console.log('string', values);
    addProduct(values)
      .then(response => {
        console.log('Product added successfully:', response);
      })
      .catch(error => {
        console.error('Error adding product:', error);
      });
  };

  const handleCloseClick = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = e => {
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
                      <WeightInputLabel htmlFor="amount">
                        <WeightInput
                          name="amount"
                          type="text"
                          onChange={e => handleWeightChange(e, setFieldValue)}
                          onKeyPress={e => {
                            const onlyDigits = /^[0-9\b]+$/;
                            if (!onlyDigits.test(e.key)) {
                              e.preventDefault();
                            }
                          }}
                          value={values.amount}
                          border={
                            errors.amount &&
                            touched.amount &&
                            '1px solid #D80027'
                          }
                        />
                        <FieldLabel>grams</FieldLabel>
                      </WeightInputLabel>
                      <ErrorMessageStyled name="amount" component="p" />
                    </div>
                  </InputsContainer>

                  <Calories>
                    Calories:
                    <CaloriesValue>{calculatedCalories}</CaloriesValue>
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
