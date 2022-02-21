import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import { Formik } from 'formik';
import * as Yup from 'yup';

import profile from '../../Assets/profile.jpeg';
import Tilt from 'react-parallax-tilt';
import { database } from '../../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required'),
});
function Home2() {
  const collectionRef = collection(database, 'portfolio-contact');
  const notify = () =>
    toast.success(`Thanks! I'll contact you soon!`, {
      icon: '🚀',
      theme: 'dark',
      hideProgressBar: true,
    });

  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className='purple'> INTRODUCE </span> MYSELF
            </h1>
            <p className='home-about-body'>
              I can be different person for different people. It depends on what
              you are seeking.
              <br /> <br />
              I believe that our work denotes who we are and I constantly strive
              in making my answer to who I am a better one.
              <br />
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className='purple'>Web Technologies and Products </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className='purple'>Node.js</b> and
              <i>
                <b className='purple'>
                  {' '}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className='purple'> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt
              className='tilt-img'
              tiltMaxAngleX={35}
              tiltMaxAngleY={35}
              perspective={900}
              scale={1.1}
              transitionSpeed={2000}
              gyroscope={true}
            >
              <img
                src={profile}
                className='rounded-circle shadow-4'
                style={{ width: '80%', border: '2px solid #c770f0' }}
                alt='avatar'
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>Get in Touch</h1>
            <Formik
              validationSchema={schema}
              onSubmit={async (values, actions) => {
                try {
                  await addDoc(collectionRef, values);
                  notify();
                  actions.resetForm();
                } catch (err) {
                  toast.error('Data not sent !!');
                }
              }}
              initialValues={{
                name: '',
                email: '',
                message: '',
              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
                status,
              }) => (
                <Form className='contact' onSubmit={handleSubmit}>
                  <Row className='mb-3'>
                    <Form.Group as={Col}>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type='text'
                        name='name'
                        placeholder='Enter Name'
                        value={values.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                      />
                      <Form.Control.Feedback type='invalid'>
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId='formGridPassword'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type='input'
                        name='email'
                        placeholder='Enter email'
                        value={values.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type='invalid'>
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                  <Form.Group className='mb-3' controlId='formGridAddress1'>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      placeholder='Write a message'
                      as='textarea'
                      style={{ height: '10rem' }}
                      value={values.message}
                      onChange={handleChange}
                      name='message'
                      isInvalid={!!errors.message}
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button variant='primary' type='submit'>
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </Container>
  );
}
export default Home2;
