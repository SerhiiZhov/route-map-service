'use client';
import styles from './LoginSection.module.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FC } from 'react';

import Section from '../section/Section';

interface FormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Неверный формат email')
    .required('Email обязателен'),
  password: Yup.string()
    .min(6, 'Пароль должен содержать хотя бы 6 символов')
    .required('Пароль обязателен'),
});

const LoginSection: FC = () => {
  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values: FormValues) => {
    console.log('Данные для отправки: ', values);
  };

  return (
    <Section>
      <div className={styles.authFormWrapper}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ touched, errors, handleBlur }) => (
            <Form className={styles.authForm}>
              <div className={styles.formField}>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={styles.inputField}
                  onBlur={handleBlur} // Валидация на blur
                />
                {touched.email && errors.email && (
                  <div className={styles.error}>{errors.email}</div>
                )}
              </div>
              <div className={styles.formField}>
                <Field
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  className={styles.inputField}
                  onBlur={handleBlur} // Валидация на blur
                />
                {touched.password && errors.password && (
                  <div className={styles.error}>{errors.password}</div>
                )}
              </div>
              <button type="submit" className={styles.submitButton}>
                Войти
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Section>
  );
};

export default LoginSection;
