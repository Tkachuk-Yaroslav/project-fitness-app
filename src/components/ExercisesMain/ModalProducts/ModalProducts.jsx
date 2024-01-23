import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { format } from 'date-fns';
import {
  Container,
  ModalStyles,
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
import { ButtonCloseModal, Svg } from '../ModalWaist/ModalWaist.styled';
import Modal from 'react-modal';
import sprite from '../../../images/sprite.svg';
import 'overlayscrollbars/overlayscrollbars.css';
import { addProduct } from 'api/addProductApi';

const ModalProducts = ({ id, title, calories, onClick, isOpen, onClose }) => {
  const [calculatedCalories, setCalculatedCalories] = useState(0);

  const initialValues = {
    productId: id,
    date: format(new Date(), 'dd/mm/yyyy'),
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
      .max(999, 'Weight should not exceed 999 grams')
      .required('Weight is required'),
  });

  const calculateCalories = amount => {
    const calculated = (calories * amount) / 100;
    return parseFloat(calculated);
  };

  const handleWeightChange = (event, setFieldValue) => {
    const amount = event.target.value.slice(0, 3);
    const calories = calculateCalories(amount);
    setCalculatedCalories(calories);
    setFieldValue('amount', Number(amount));
    setFieldValue('calories', calories);
  };

  const handleSubmit = (values, actions) => {
    actions.resetForm();
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

  return (
    <Modal style={ModalStyles} isOpen={isOpen} onRequestClose={onClose}>
      <ButtonCloseModal onClick={onClose}>
        <Svg>
          <use href={`${sprite}#icon-x-modal`} />
        </Svg>
      </ButtonCloseModal>
      {isOpen && (
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
                          errors.amount && touched.amount && '1px solid #D80027'
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
                  <PFOutlinedBtn type="button" onClick={onClose}>
                    Cancel
                  </PFOutlinedBtn>
                </ButtonsContainer>
              </Container>
            </Form>
          )}
        </Formik>
      )}
    </Modal>
  );
};

export default ModalProducts;
